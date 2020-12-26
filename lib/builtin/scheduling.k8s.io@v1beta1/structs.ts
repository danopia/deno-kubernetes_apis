// Autogenerated Schema file for SchedulingV1beta1
import * as c from "../../common.ts";

import * as MetaV1 from "../meta@v1/structs.ts";
type Kind<T extends string> = {
  apiVersion: "scheduling.k8s.io/v1beta1";
  kind: T;
};
type ListOf<T> = {
  metadata: MetaV1.ListMeta;
  items: Array<T>;
};

/** DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export interface PriorityClass {
  apiVersion?: "scheduling.k8s.io/v1beta1";
  kind?: "PriorityClass";
  description?: string | null;
  globalDefault?: boolean | null;
  metadata?: MetaV1.ObjectMeta | null;
  preemptionPolicy?: string | null;
  value: number;
}
export function toPriorityClass(input: c.JSONValue): PriorityClass & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "scheduling.k8s.io/v1beta1", "PriorityClass"),
    description: c.readOpt(obj["description"], c.checkStr),
    globalDefault: c.readOpt(obj["globalDefault"], c.checkBool),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    preemptionPolicy: c.readOpt(obj["preemptionPolicy"], c.checkStr),
    value: c.checkNum(obj["value"]),
  }}
export function fromPriorityClass(input: PriorityClass): c.JSONValue {
  return {
    ...c.assertOrAddApiVersionAndKind(input, "scheduling.k8s.io/v1beta1", "PriorityClass"),
    ...input,
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
  }}

/** PriorityClassList is a collection of priority classes. */
export interface PriorityClassList extends ListOf<PriorityClass> {
  apiVersion?: "scheduling.k8s.io/v1beta1";
  kind?: "PriorityClassList";
};
export function toPriorityClassList(input: c.JSONValue): PriorityClassList & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "scheduling.k8s.io/v1beta1", "PriorityClassList"),
    metadata: MetaV1.toListMeta(obj.metadata),
    items: c.readList(obj.items, toPriorityClass),
  }}
