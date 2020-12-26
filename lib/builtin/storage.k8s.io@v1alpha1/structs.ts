// Autogenerated Schema file for StorageV1alpha1
import * as c from "../../common.ts";

import * as CoreV1 from "../core@v1/structs.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
type Kind<T extends string> = {
  apiVersion: "storage.k8s.io/v1alpha1";
  kind: T;
};
type ListOf<T> = {
  metadata: MetaV1.ListMeta;
  items: Array<T>;
};

/** VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced. */
export interface VolumeAttachment {
  apiVersion?: "storage.k8s.io/v1alpha1";
  kind?: "VolumeAttachment";
  metadata?: MetaV1.ObjectMeta | null;
  spec: VolumeAttachmentSpec;
  status?: VolumeAttachmentStatus | null;
}
export function toVolumeAttachment(input: c.JSONValue): VolumeAttachment & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "storage.k8s.io/v1alpha1", "VolumeAttachment"),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    spec: toVolumeAttachmentSpec(obj["spec"]),
    status: c.readOpt(obj["status"], toVolumeAttachmentStatus),
  }}
export function fromVolumeAttachment(input: VolumeAttachment): c.JSONValue {
  return {
    ...c.assertOrAddApiVersionAndKind(input, "storage.k8s.io/v1alpha1", "VolumeAttachment"),
    ...input,
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
    spec: input.spec != null ? fromVolumeAttachmentSpec(input.spec) : undefined,
    status: input.status != null ? fromVolumeAttachmentStatus(input.status) : undefined,
  }}

/** VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export interface VolumeAttachmentSpec {
  attacher: string;
  nodeName: string;
  source: VolumeAttachmentSource;
}
export function toVolumeAttachmentSpec(input: c.JSONValue): VolumeAttachmentSpec {
  const obj = c.checkObj(input);
  return {
    attacher: c.checkStr(obj["attacher"]),
    nodeName: c.checkStr(obj["nodeName"]),
    source: toVolumeAttachmentSource(obj["source"]),
  }}
export function fromVolumeAttachmentSpec(input: VolumeAttachmentSpec): c.JSONValue {
  return {
    ...input,
    source: input.source != null ? fromVolumeAttachmentSource(input.source) : undefined,
  }}

/** VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export interface VolumeAttachmentSource {
  inlineVolumeSpec?: CoreV1.PersistentVolumeSpec | null;
  persistentVolumeName?: string | null;
}
export function toVolumeAttachmentSource(input: c.JSONValue): VolumeAttachmentSource {
  const obj = c.checkObj(input);
  return {
    inlineVolumeSpec: c.readOpt(obj["inlineVolumeSpec"], CoreV1.toPersistentVolumeSpec),
    persistentVolumeName: c.readOpt(obj["persistentVolumeName"], c.checkStr),
  }}
export function fromVolumeAttachmentSource(input: VolumeAttachmentSource): c.JSONValue {
  return {
    ...input,
    inlineVolumeSpec: input.inlineVolumeSpec != null ? CoreV1.fromPersistentVolumeSpec(input.inlineVolumeSpec) : undefined,
  }}

/** VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export interface VolumeAttachmentStatus {
  attachError?: VolumeError | null;
  attached: boolean;
  attachmentMetadata?: Record<string,string> | null;
  detachError?: VolumeError | null;
}
export function toVolumeAttachmentStatus(input: c.JSONValue): VolumeAttachmentStatus {
  const obj = c.checkObj(input);
  return {
    attachError: c.readOpt(obj["attachError"], toVolumeError),
    attached: c.checkBool(obj["attached"]),
    attachmentMetadata: c.readOpt(obj["attachmentMetadata"], x => c.readMap(x, c.checkStr)),
    detachError: c.readOpt(obj["detachError"], toVolumeError),
  }}
export function fromVolumeAttachmentStatus(input: VolumeAttachmentStatus): c.JSONValue {
  return {
    ...input,
    attachError: input.attachError != null ? fromVolumeError(input.attachError) : undefined,
    detachError: input.detachError != null ? fromVolumeError(input.detachError) : undefined,
  }}

/** VolumeError captures an error encountered during a volume operation. */
export interface VolumeError {
  message?: string | null;
  time?: c.Time | null;
}
export function toVolumeError(input: c.JSONValue): VolumeError {
  const obj = c.checkObj(input);
  return {
    message: c.readOpt(obj["message"], c.checkStr),
    time: c.readOpt(obj["time"], c.toTime),
  }}
export function fromVolumeError(input: VolumeError): c.JSONValue {
  return {
    ...input,
    time: input.time != null ? c.fromTime(input.time) : undefined,
  }}

/** VolumeAttachmentList is a collection of VolumeAttachment objects. */
export interface VolumeAttachmentList extends ListOf<VolumeAttachment> {
  apiVersion?: "storage.k8s.io/v1alpha1";
  kind?: "VolumeAttachmentList";
};
export function toVolumeAttachmentList(input: c.JSONValue): VolumeAttachmentList & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "storage.k8s.io/v1alpha1", "VolumeAttachmentList"),
    metadata: MetaV1.toListMeta(obj.metadata),
    items: c.readList(obj.items, toVolumeAttachment),
  }}
