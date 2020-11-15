import { ApiShape, ForeignShape, SpecialShape, StructureShape } from "./describe-shapes.ts";
import { SurfaceMap, SurfaceApi } from "./describe-surface.ts";

type ExtraStructsList = Array<{name: string, struct: StructureShape}>;

function nameForeignWriteFunc(shape: ForeignShape | SpecialShape): string {
  if (shape.type === 'special' && shape.name === 'IntOrString') return '';
  const module = shape.type === 'special' ? 'c' : shape.api.friendlyName;
  return `${module}.from${shape.name}`;
}

function pushAll<T>(array: T[], items: T[]) {
  for (const item of items) {
    array.push(item);
  }
}

export function generateFromStruct(topShape: ApiShape, inputRef: string): string[] {
  const chunks = new Array<string>();
  chunks.push(`...${inputRef},`);

  if (topShape.type !== 'structure') throw new Error(`TODO`);
  for (const [name, shape] of topShape.fields) {
    const fieldRef = `${inputRef}.${name}`;
    switch (shape.type) {
      case 'structure': {
        if (shape.reference) {
          chunks.push(`${name}: ${fieldRef} != null ? from${shape.reference}(${fieldRef}) : undefined,`);
        } else {
          const innerLines = generateFromStruct(shape, fieldRef);
          if (innerLines.length > 1) {
            chunks.push(`${name}: ${fieldRef} != null ? {`);
            pushAll(chunks, innerLines.map(x => `  ${x}`));
            chunks.push(`} : undefined,`);
          }
        }
        break;
      }
      case 'foreign':
      case 'special': {
        const readFunc = nameForeignWriteFunc(shape);
        if (readFunc) {
          chunks.push(`${name}: ${fieldRef} != null ? ${readFunc}(${fieldRef}) : undefined,`);
        }
        break;
      }
      case 'list': {
        switch (shape.inner.type) {
          case 'structure': {
            if (shape.inner.reference) {
              chunks.push(`${name}: ${fieldRef}?.map(from${shape.inner.reference}),`);
            } else {
              const innerLines = generateFromStruct(shape.inner, 'x');
              if (innerLines.length > 1) {
                chunks.push(`${name}: ${fieldRef}?.map(x => ({`);
                pushAll(chunks, innerLines.map(x => `  ${x}`));
                chunks.push(`})),`);
              }
            }
            break;
          }
          case 'foreign':
          case 'special': {
            const readFunc = nameForeignWriteFunc(shape.inner);
            if (readFunc) {
              chunks.push(`${name}: ${fieldRef}?.map(${readFunc}),`);
            }
            break;
          }
          default:
            // chunks.push(`// TODO: ${name} list of ${shape.inner.type}`);
        }
        break;
      }
      case 'map': {
        switch (shape.inner.type) {
          // case 'structure': {
          //   chunks.push(`${name}: ${fieldRef}?.map(from${shape.inner.reference}),`);
          //   break;
          // }
          case 'foreign':
          case 'special': {
            const readFunc = nameForeignWriteFunc(shape.inner);
            if (readFunc) {
              chunks.push(`${name}: c.writeMap(${fieldRef}, ${readFunc}),`);
            }
            break;
          }
          case 'any': {
            switch (shape.inner.reference) {
              default:
                // chunks.push(`// TODO: ${name} map of ${shape.inner.type} ${shape.inner.reference}`);
            }
            break;
          }
          default:
            // chunks.push(`// TODO: ${name} map of ${shape.inner.type}`);
        }
        break;
      }
      case 'any': {
        switch (shape.reference) {
          case 'unknown': {
            // chunks.push(`${name}: ${fieldRef} as c.JSONValue,`);
            break;
          }
          default:
            // chunks.push(`// TODO: ${name} ${shape.type} ${shape.reference}`);
        }
        break;
      }
      default:
        // chunks.push(`// TODO: ${name} ${shape.type}`);
    }
  }

  // chunks.push('// TODO!');
  return chunks;
}

export function generateStructsTypescript(surface: SurfaceMap, apiS: SurfaceApi): string {
  const chunks = new Array<string>();
  chunks.push(`// Autogenerated Schema file for ${apiS.friendlyName}`);
  chunks.push(`import * as c from "../../common.ts";`);

  const foreignApis = new Set<SurfaceApi>();

  if (apiS.apiGroup !== 'meta') {
    // chunks.push(`import * as MetaV1 from "../meta@v1/structs.ts";`);
    foreignApis.add(surface.allApis.find(x => x.friendlyName === 'MetaV1')!);
    chunks.push(``);
    chunks.push(`type Kind<T extends string> = {`);
    chunks.push(`  apiVersion: "${apiS.apiGroupVersion}";`);
    chunks.push(`  kind: T;`);
    chunks.push(`};`);
    chunks.push(`type ListOf<T> = {`);
    chunks.push(`  metadata: MetaV1.ListMeta;`);
    chunks.push(`  items: Array<T>;`);
    chunks.push(`};`);
  }
  chunks.push('');

  for (const [name, shape] of apiS.shapes.shapes) {
    // const name = id.split('.').slice(-1)[0];
    if (shape.description) {
      chunks.push(`/** ${shape.description} */`);
    }
    switch (shape.type) {

      case 'structure':

        const isKind = shape.kind
          && apiS.kinds.has(shape.kind.kind);
        const isKindList = shape.kind
          && shape.kind.kind.endsWith('List')
          && apiS.kinds.has(shape.kind.kind.slice(0, -4));
        // console.log(shape.kind?.kind, apiS.kinds.has(shape.kind?.kind ?? ''), apiS.kinds.has(shape.kind?.kind.slice(0, -4) ?? ''))

        const extraStructs = new Array<{name: string, struct: StructureShape}>();

        if (isKind) {
          chunks.push(`export type ${name} = Kind<${JSON.stringify(shape.kind?.kind)}> & ${name}Fields;`);
          chunks.push(`export interface ${name}Fields {`);
          for (const [field, inner] of shape.fields) {
            if (['apiVersion', 'kind'].includes(field)) continue;
            const isReq = shape.required.includes(field);
            chunks.push(`  ${field}${isReq ? '' : '?'}: ${generateType(inner)}${isReq ? '' : ' | null'};`);
          }
          chunks.push(`}`);

          chunks.push(`export function to${name}Fields(input: c.JSONValue): ${name}Fields {`);
          chunks.push(`  const obj = c.checkObj(input);`);
          chunks.push(`  return {`);
          for (const [field, inner] of shape.fields) {
            if (['apiVersion', 'kind'].includes(field)) continue;
            const stack = generateReadStack(inner, `${name}Fields_${field}`, extraStructs);
            if (!shape.required.includes(field)) {
              stack.unshift('c.readOpt');
            }
            chunks.push(`    ${field}: ${printReadStack(stack, `obj[${JSON.stringify(field)}]`)},`);
          }
          chunks.push(`  }}`);

          chunks.push(`export function to${name}(input: c.JSONValue): ${name} {`);
          // chunks.push(`  const obj = c.checkObj(input);`);
          chunks.push(`  const {apiVersion, kind, ...fields} = c.checkObj(input);`);
          // chunks.push(`  if (typeof apiVersion !== 'string') throw new Error("Type apiv mis 1");`);
          chunks.push(`  if (apiVersion !== ${JSON.stringify(apiS.apiGroupVersion)}) throw new Error("Type apiv mis 2");`);
          // chunks.push(`  if (typeof kind !== 'string') throw new Error("Type kind mis 1");`);
          chunks.push(`  if (kind !== ${JSON.stringify(shape.kind?.kind)}) throw new Error("Type kind mis 2");`);
          chunks.push(`  return {`);
          chunks.push(`    apiVersion, kind,`);
          chunks.push(`    ...to${name}Fields(fields),`);
          chunks.push(`  }}`);


          chunks.push(`export function from${name}(input: ${name}): c.JSONValue {`);
          chunks.push(`  return {`);
          chunks.push(...generateFromStruct(shape, 'input').map(x => `    ${x}`));
          chunks.push(`  }}`);


        } else if (isKindList) {
          chunks.push(`export type ${name} = Kind<${JSON.stringify(shape.kind?.kind)}> & ListOf<${name.slice(0, -4)}Fields>;`);
          // for (const [field, inner] of shape.fields) {
          //   if (['apiVersion', 'kind', 'items', 'metadata'].includes(field)) continue;
          //   chunks.push(`  ${field}${shape.required.includes(field) ? '' : '?'}: ${generateType(inner)};`);
          // }
          // chunks.push(`};`);

          chunks.push(`export function to${name}(input: c.JSONValue): ${name} {`);
          chunks.push(`  const {apiVersion, kind, metadata, items} = c.checkObj(input);`);
          chunks.push(`  if (apiVersion !== ${JSON.stringify(apiS.apiGroupVersion)}) throw new Error("Type apiv mis 2");`);
          chunks.push(`  if (kind !== "${name}") throw new Error("Type kind mis 2");`);
          chunks.push(`  return {`);
          chunks.push(`    apiVersion, kind,`);
          chunks.push(`    metadata: MetaV1.toListMeta(metadata),`);
          chunks.push(`    items: c.readList(items, to${name.slice(0, -4)}Fields),`);
          chunks.push(`  }}`);


        } else {
          chunks.push(`export interface ${name} {`);
          for (const [field, inner] of shape.fields) {
            const isReq = shape.required.includes(field);
            chunks.push(`  ${field}${isReq ? '' : '?'}: ${generateType(inner)}${isReq ? '' : ' | null'};`);
          }
          chunks.push(`}`);

          chunks.push(`export function to${name}(input: c.JSONValue): ${name} {`);
          chunks.push(`  const obj = c.checkObj(input);`);
          chunks.push(`  return {`);
          for (const [field, inner] of shape.fields) {
            const stack = generateReadStack(inner, `${name}_${field}`, extraStructs);
            if (!shape.required.includes(field)) {
              stack.unshift('c.readOpt');
            }
            chunks.push(`    ${field}: ${printReadStack(stack, `obj[${JSON.stringify(field)}]`)},`);
          }
          chunks.push(`  }}`);

          chunks.push(`export function from${name}(input: ${name}): c.JSONValue {`);
          chunks.push(`  return {`);
          chunks.push(...generateFromStruct(shape, 'input').map(x => `    ${x}`));
          chunks.push(`  }}`);
        }

        while (true) {
          const extraStruct = extraStructs.shift();
          if (!extraStruct) break;

          chunks.push(`export function to${extraStruct.name}(input: c.JSONValue) {`);
          chunks.push(`  const obj = c.checkObj(input);`);
          chunks.push(`  return {`);
          for (const [field, inner] of extraStruct.struct.fields) {
            const stack = generateReadStack(inner, `${extraStruct.name}_${field}`, extraStructs);
            if (!extraStruct.struct.required.includes(field)) {
              stack.unshift('c.readOpt');
            }
            chunks.push(`    ${field}: ${printReadStack(stack, `obj[${JSON.stringify(field)}]`)},`);
          }
          chunks.push(`  }}`);
        }

        break;

      case 'string':
        chunks.push(`export type ${name} = ${generateType(shape)};`);
        break;

      default:
        throw new Error(`TODO: generate struct type ${shape.type}`)

    }
    chunks.push(``);
  }

  for (const foreignApi of foreignApis) {
    chunks.splice(3, 0, `import * as ${foreignApi.friendlyName} from "../${foreignApi.moduleName}/structs.ts";`);
  }

  return chunks.join('\n');

  function generateType(shape: ApiShape): string {
    if (shape.reference && shape.type === 'structure') {
      return shape.reference;
    }

    switch (shape.type) {
      case 'structure': {
        const chunks = new Array<string>();
        chunks.push('{');
        for (const [field, inner] of shape.fields) {
          const isReq = shape.required.includes(field);
          chunks.push(`  ${field}${isReq ? '' : '?'}: ${generateType(inner)}${isReq ? '' : ' | null'};`);
        }
        chunks.push('}');
        return chunks.join('\n').replace(/\n/g, '\n  ');
      }

      case 'list': {
        return `Array<${generateType(shape.inner)}>`;
      }

      case 'map': {
        return `Record<string,${generateType(shape.inner)}>`;
      }

      case 'foreign': {
        foreignApis.add(shape.api);
        return `${shape.api.friendlyName}.${shape.name}`;
      }

      case 'string': {
        if (shape.enum) {
          return shape.enum.map(x => JSON.stringify(x)).concat('c.UnexpectedEnumValue').join(' | ');
        } else {
          return 'string';
        }
      }

      case 'number':
        return 'number';
      case 'boolean':
        return `boolean`;

      case 'special':
        return `c.${shape.name}`;

      case 'any': {
        if (shape.reference === 'unknown') {
          return 'c.JSONValue';
        }
        break;
      }

    }
    return `unknown /* ${shape.type} ${shape.reference} */`;
  }

  function generateReadStack(shape: ApiShape, curName: string, extraStructs: ExtraStructsList): string[] {
    if (shape.reference && shape.type === 'structure') {
      return ['to'+shape.reference];
    }

    switch (shape.type) {
      case 'structure': {
        extraStructs.push({name: curName, struct: shape});
        return [`to${curName}`];
      }

      case 'list': {
        return ['c.readList', ...generateReadStack(shape.inner, curName, extraStructs)];
      }

      case 'map': {
        return ['c.readMap', ...generateReadStack(shape.inner, curName, extraStructs)];
      }

      case 'foreign': {
        return [`${shape.api.friendlyName}.to${shape.name}`];
      }

      case 'special': {
        return [`c.to${shape.name}`];
      }

      case 'string': {
        if (shape.enum) {
          return ['(x => c.readEnum<'+shape.enum.map(x => JSON.stringify(x)).concat('c.UnexpectedEnumValue').join(' | ')+'>(x))'];
        } else {
          return ['c.checkStr'];
        }
      }

      case 'number':
        return ['c.checkNum'];
      case 'boolean':
        return ['c.checkBool'];

      case 'any': {

        switch (shape.reference) {
          case 'unknown':
            return ['c.identity'];
        }
        break;
      }

      case 'any':
    }
    return [`unknown /* ${shape.type} ${shape.reference} */`];
  }

}

const letters = 'xyzabc';
function printReadStack(stack: string[], rootExpr: string): string {
  const top = stack.shift();
  if (!top) return rootExpr;
  let inner = stack.pop();
  if (!inner) return `${top}(${rootExpr})`;

  let idx = 0;
  while (true) {
    const mid = stack.pop();
    if (!mid) break;
    const x = letters[idx++];
    inner = `${x} => ${mid}(${x}, ${inner})`;
  }
  return `${top}(${rootExpr}, ${inner})`;
}
