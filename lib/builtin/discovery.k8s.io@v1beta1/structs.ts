// Autogenerated Schema file for DiscoveryV1beta1
import * as c from "../../common.ts";

import * as CoreV1 from "../core@v1/structs.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
type Kind<T extends string> = {
  apiVersion: "discovery.k8s.io/v1beta1";
  kind: T;
};
type ListOf<T> = {
  metadata: MetaV1.ListMeta;
  items: Array<T>;
};

/** Endpoint represents a single logical "backend" implementing a service. */
export interface Endpoint {
  addresses: Array<string>;
  conditions?: EndpointConditions | null;
  hostname?: string | null;
  targetRef?: CoreV1.ObjectReference | null;
  topology?: Record<string,string> | null;
}
export function toEndpoint(input: c.JSONValue): Endpoint {
  const obj = c.checkObj(input);
  return {
    addresses: c.readList(obj["addresses"], c.checkStr),
    conditions: c.readOpt(obj["conditions"], toEndpointConditions),
    hostname: c.readOpt(obj["hostname"], c.checkStr),
    targetRef: c.readOpt(obj["targetRef"], CoreV1.toObjectReference),
    topology: c.readOpt(obj["topology"], x => c.readMap(x, c.checkStr)),
  }}
export function fromEndpoint(input: Endpoint): c.JSONValue {
  return {
    ...input,
    conditions: input.conditions != null ? fromEndpointConditions(input.conditions) : undefined,
    targetRef: input.targetRef != null ? CoreV1.fromObjectReference(input.targetRef) : undefined,
  }}

/** EndpointConditions represents the current condition of an endpoint. */
export interface EndpointConditions {
  ready?: boolean | null;
}
export function toEndpointConditions(input: c.JSONValue): EndpointConditions {
  const obj = c.checkObj(input);
  return {
    ready: c.readOpt(obj["ready"], c.checkBool),
  }}
export function fromEndpointConditions(input: EndpointConditions): c.JSONValue {
  return {
    ...input,
  }}

/** EndpointPort represents a Port used by an EndpointSlice */
export interface EndpointPort {
  appProtocol?: string | null;
  name?: string | null;
  port?: number | null;
  protocol?: string | null;
}
export function toEndpointPort(input: c.JSONValue): EndpointPort {
  const obj = c.checkObj(input);
  return {
    appProtocol: c.readOpt(obj["appProtocol"], c.checkStr),
    name: c.readOpt(obj["name"], c.checkStr),
    port: c.readOpt(obj["port"], c.checkNum),
    protocol: c.readOpt(obj["protocol"], c.checkStr),
  }}
export function fromEndpointPort(input: EndpointPort): c.JSONValue {
  return {
    ...input,
  }}

/** EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export type EndpointSlice = Kind<"EndpointSlice"> & EndpointSliceFields;
export interface EndpointSliceFields {
  addressType: string;
  endpoints: Array<Endpoint>;
  metadata?: MetaV1.ObjectMeta | null;
  ports?: Array<EndpointPort> | null;
}
export function toEndpointSliceFields(input: c.JSONValue): EndpointSliceFields {
  const obj = c.checkObj(input);
  return {
    addressType: c.checkStr(obj["addressType"]),
    endpoints: c.readList(obj["endpoints"], toEndpoint),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    ports: c.readOpt(obj["ports"], x => c.readList(x, toEndpointPort)),
  }}
export function toEndpointSlice(input: c.JSONValue): EndpointSlice {
  const {apiVersion, kind, ...fields} = c.checkObj(input);
  if (apiVersion !== "discovery.k8s.io/v1beta1") throw new Error("Type apiv mis 2");
  if (kind !== "EndpointSlice") throw new Error("Type kind mis 2");
  return {
    apiVersion, kind,
    ...toEndpointSliceFields(fields),
  }}
export function fromEndpointSlice(input: EndpointSlice): c.JSONValue {
  return {
    ...input,
    endpoints: input.endpoints?.map(fromEndpoint),
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
    ports: input.ports?.map(fromEndpointPort),
  }}

/** EndpointSliceList represents a list of endpoint slices */
export type EndpointSliceList = Kind<"EndpointSliceList"> & ListOf<EndpointSliceFields>;
export function toEndpointSliceList(input: c.JSONValue): EndpointSliceList {
  const {apiVersion, kind, metadata, items} = c.checkObj(input);
  if (apiVersion !== "discovery.k8s.io/v1beta1") throw new Error("Type apiv mis 2");
  if (kind !== "EndpointSliceList") throw new Error("Type kind mis 2");
  return {
    apiVersion, kind,
    metadata: MetaV1.toListMeta(metadata),
    items: c.readList(items, toEndpointSliceFields),
  }}