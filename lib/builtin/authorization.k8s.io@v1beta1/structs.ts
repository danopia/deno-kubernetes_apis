// Autogenerated Schema file for AuthorizationV1beta1
import * as c from "../../common.ts";

import * as MetaV1 from "../meta@v1/structs.ts";
type Kind<T extends string> = {
  apiVersion: "authorization.k8s.io/v1beta1";
  kind: T;
};
type ListOf<T> = {
  metadata: MetaV1.ListMeta;
  items: Array<T>;
};

/** LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export interface LocalSubjectAccessReview {
  apiVersion?: "authorization.k8s.io/v1beta1";
  kind?: "LocalSubjectAccessReview";
  metadata?: MetaV1.ObjectMeta | null;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus | null;
}
export function toLocalSubjectAccessReview(input: c.JSONValue): LocalSubjectAccessReview & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "authorization.k8s.io/v1beta1", "LocalSubjectAccessReview"),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    spec: toSubjectAccessReviewSpec(obj["spec"]),
    status: c.readOpt(obj["status"], toSubjectAccessReviewStatus),
  }}
export function fromLocalSubjectAccessReview(input: LocalSubjectAccessReview): c.JSONValue {
  return {
    ...c.assertOrAddApiVersionAndKind(input, "authorization.k8s.io/v1beta1", "LocalSubjectAccessReview"),
    ...input,
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
    spec: input.spec != null ? fromSubjectAccessReviewSpec(input.spec) : undefined,
    status: input.status != null ? fromSubjectAccessReviewStatus(input.status) : undefined,
  }}

/** SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export interface SubjectAccessReviewSpec {
  extra?: Record<string,Array<string>> | null;
  group?: Array<string> | null;
  nonResourceAttributes?: NonResourceAttributes | null;
  resourceAttributes?: ResourceAttributes | null;
  uid?: string | null;
  user?: string | null;
}
export function toSubjectAccessReviewSpec(input: c.JSONValue): SubjectAccessReviewSpec {
  const obj = c.checkObj(input);
  return {
    extra: c.readOpt(obj["extra"], y => c.readMap(y, x => c.readList(x, c.checkStr))),
    group: c.readOpt(obj["group"], x => c.readList(x, c.checkStr)),
    nonResourceAttributes: c.readOpt(obj["nonResourceAttributes"], toNonResourceAttributes),
    resourceAttributes: c.readOpt(obj["resourceAttributes"], toResourceAttributes),
    uid: c.readOpt(obj["uid"], c.checkStr),
    user: c.readOpt(obj["user"], c.checkStr),
  }}
export function fromSubjectAccessReviewSpec(input: SubjectAccessReviewSpec): c.JSONValue {
  return {
    ...input,
    nonResourceAttributes: input.nonResourceAttributes != null ? fromNonResourceAttributes(input.nonResourceAttributes) : undefined,
    resourceAttributes: input.resourceAttributes != null ? fromResourceAttributes(input.resourceAttributes) : undefined,
  }}

/** NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export interface NonResourceAttributes {
  path?: string | null;
  verb?: string | null;
}
export function toNonResourceAttributes(input: c.JSONValue): NonResourceAttributes {
  const obj = c.checkObj(input);
  return {
    path: c.readOpt(obj["path"], c.checkStr),
    verb: c.readOpt(obj["verb"], c.checkStr),
  }}
export function fromNonResourceAttributes(input: NonResourceAttributes): c.JSONValue {
  return {
    ...input,
  }}

/** ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export interface ResourceAttributes {
  group?: string | null;
  name?: string | null;
  namespace?: string | null;
  resource?: string | null;
  subresource?: string | null;
  verb?: string | null;
  version?: string | null;
}
export function toResourceAttributes(input: c.JSONValue): ResourceAttributes {
  const obj = c.checkObj(input);
  return {
    group: c.readOpt(obj["group"], c.checkStr),
    name: c.readOpt(obj["name"], c.checkStr),
    namespace: c.readOpt(obj["namespace"], c.checkStr),
    resource: c.readOpt(obj["resource"], c.checkStr),
    subresource: c.readOpt(obj["subresource"], c.checkStr),
    verb: c.readOpt(obj["verb"], c.checkStr),
    version: c.readOpt(obj["version"], c.checkStr),
  }}
export function fromResourceAttributes(input: ResourceAttributes): c.JSONValue {
  return {
    ...input,
  }}

/** SubjectAccessReviewStatus */
export interface SubjectAccessReviewStatus {
  allowed: boolean;
  denied?: boolean | null;
  evaluationError?: string | null;
  reason?: string | null;
}
export function toSubjectAccessReviewStatus(input: c.JSONValue): SubjectAccessReviewStatus {
  const obj = c.checkObj(input);
  return {
    allowed: c.checkBool(obj["allowed"]),
    denied: c.readOpt(obj["denied"], c.checkBool),
    evaluationError: c.readOpt(obj["evaluationError"], c.checkStr),
    reason: c.readOpt(obj["reason"], c.checkStr),
  }}
export function fromSubjectAccessReviewStatus(input: SubjectAccessReviewStatus): c.JSONValue {
  return {
    ...input,
  }}

/** NonResourceRule holds information that describes a rule for the non-resource */
export interface NonResourceRule {
  nonResourceURLs?: Array<string> | null;
  verbs: Array<string>;
}
export function toNonResourceRule(input: c.JSONValue): NonResourceRule {
  const obj = c.checkObj(input);
  return {
    nonResourceURLs: c.readOpt(obj["nonResourceURLs"], x => c.readList(x, c.checkStr)),
    verbs: c.readList(obj["verbs"], c.checkStr),
  }}
export function fromNonResourceRule(input: NonResourceRule): c.JSONValue {
  return {
    ...input,
  }}

/** ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export interface ResourceRule {
  apiGroups?: Array<string> | null;
  resourceNames?: Array<string> | null;
  resources?: Array<string> | null;
  verbs: Array<string>;
}
export function toResourceRule(input: c.JSONValue): ResourceRule {
  const obj = c.checkObj(input);
  return {
    apiGroups: c.readOpt(obj["apiGroups"], x => c.readList(x, c.checkStr)),
    resourceNames: c.readOpt(obj["resourceNames"], x => c.readList(x, c.checkStr)),
    resources: c.readOpt(obj["resources"], x => c.readList(x, c.checkStr)),
    verbs: c.readList(obj["verbs"], c.checkStr),
  }}
export function fromResourceRule(input: ResourceRule): c.JSONValue {
  return {
    ...input,
  }}

/** SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export interface SelfSubjectAccessReview {
  apiVersion?: "authorization.k8s.io/v1beta1";
  kind?: "SelfSubjectAccessReview";
  metadata?: MetaV1.ObjectMeta | null;
  spec: SelfSubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus | null;
}
export function toSelfSubjectAccessReview(input: c.JSONValue): SelfSubjectAccessReview & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "authorization.k8s.io/v1beta1", "SelfSubjectAccessReview"),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    spec: toSelfSubjectAccessReviewSpec(obj["spec"]),
    status: c.readOpt(obj["status"], toSubjectAccessReviewStatus),
  }}
export function fromSelfSubjectAccessReview(input: SelfSubjectAccessReview): c.JSONValue {
  return {
    ...c.assertOrAddApiVersionAndKind(input, "authorization.k8s.io/v1beta1", "SelfSubjectAccessReview"),
    ...input,
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
    spec: input.spec != null ? fromSelfSubjectAccessReviewSpec(input.spec) : undefined,
    status: input.status != null ? fromSubjectAccessReviewStatus(input.status) : undefined,
  }}

/** SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export interface SelfSubjectAccessReviewSpec {
  nonResourceAttributes?: NonResourceAttributes | null;
  resourceAttributes?: ResourceAttributes | null;
}
export function toSelfSubjectAccessReviewSpec(input: c.JSONValue): SelfSubjectAccessReviewSpec {
  const obj = c.checkObj(input);
  return {
    nonResourceAttributes: c.readOpt(obj["nonResourceAttributes"], toNonResourceAttributes),
    resourceAttributes: c.readOpt(obj["resourceAttributes"], toResourceAttributes),
  }}
export function fromSelfSubjectAccessReviewSpec(input: SelfSubjectAccessReviewSpec): c.JSONValue {
  return {
    ...input,
    nonResourceAttributes: input.nonResourceAttributes != null ? fromNonResourceAttributes(input.nonResourceAttributes) : undefined,
    resourceAttributes: input.resourceAttributes != null ? fromResourceAttributes(input.resourceAttributes) : undefined,
  }}

/** SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export interface SelfSubjectRulesReview {
  apiVersion?: "authorization.k8s.io/v1beta1";
  kind?: "SelfSubjectRulesReview";
  metadata?: MetaV1.ObjectMeta | null;
  spec: SelfSubjectRulesReviewSpec;
  status?: SubjectRulesReviewStatus | null;
}
export function toSelfSubjectRulesReview(input: c.JSONValue): SelfSubjectRulesReview & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "authorization.k8s.io/v1beta1", "SelfSubjectRulesReview"),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    spec: toSelfSubjectRulesReviewSpec(obj["spec"]),
    status: c.readOpt(obj["status"], toSubjectRulesReviewStatus),
  }}
export function fromSelfSubjectRulesReview(input: SelfSubjectRulesReview): c.JSONValue {
  return {
    ...c.assertOrAddApiVersionAndKind(input, "authorization.k8s.io/v1beta1", "SelfSubjectRulesReview"),
    ...input,
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
    spec: input.spec != null ? fromSelfSubjectRulesReviewSpec(input.spec) : undefined,
    status: input.status != null ? fromSubjectRulesReviewStatus(input.status) : undefined,
  }}

export interface SelfSubjectRulesReviewSpec {
  namespace?: string | null;
}
export function toSelfSubjectRulesReviewSpec(input: c.JSONValue): SelfSubjectRulesReviewSpec {
  const obj = c.checkObj(input);
  return {
    namespace: c.readOpt(obj["namespace"], c.checkStr),
  }}
export function fromSelfSubjectRulesReviewSpec(input: SelfSubjectRulesReviewSpec): c.JSONValue {
  return {
    ...input,
  }}

/** SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export interface SubjectRulesReviewStatus {
  evaluationError?: string | null;
  incomplete: boolean;
  nonResourceRules: Array<NonResourceRule>;
  resourceRules: Array<ResourceRule>;
}
export function toSubjectRulesReviewStatus(input: c.JSONValue): SubjectRulesReviewStatus {
  const obj = c.checkObj(input);
  return {
    evaluationError: c.readOpt(obj["evaluationError"], c.checkStr),
    incomplete: c.checkBool(obj["incomplete"]),
    nonResourceRules: c.readList(obj["nonResourceRules"], toNonResourceRule),
    resourceRules: c.readList(obj["resourceRules"], toResourceRule),
  }}
export function fromSubjectRulesReviewStatus(input: SubjectRulesReviewStatus): c.JSONValue {
  return {
    ...input,
    nonResourceRules: input.nonResourceRules?.map(fromNonResourceRule),
    resourceRules: input.resourceRules?.map(fromResourceRule),
  }}

/** SubjectAccessReview checks whether or not a user or group can perform an action. */
export interface SubjectAccessReview {
  apiVersion?: "authorization.k8s.io/v1beta1";
  kind?: "SubjectAccessReview";
  metadata?: MetaV1.ObjectMeta | null;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus | null;
}
export function toSubjectAccessReview(input: c.JSONValue): SubjectAccessReview & c.ApiKind {
  const obj = c.checkObj(input);
  return {
    ...c.assertOrAddApiVersionAndKind(obj, "authorization.k8s.io/v1beta1", "SubjectAccessReview"),
    metadata: c.readOpt(obj["metadata"], MetaV1.toObjectMeta),
    spec: toSubjectAccessReviewSpec(obj["spec"]),
    status: c.readOpt(obj["status"], toSubjectAccessReviewStatus),
  }}
export function fromSubjectAccessReview(input: SubjectAccessReview): c.JSONValue {
  return {
    ...c.assertOrAddApiVersionAndKind(input, "authorization.k8s.io/v1beta1", "SubjectAccessReview"),
    ...input,
    metadata: input.metadata != null ? MetaV1.fromObjectMeta(input.metadata) : undefined,
    spec: input.spec != null ? fromSubjectAccessReviewSpec(input.spec) : undefined,
    status: input.status != null ? fromSubjectAccessReviewStatus(input.status) : undefined,
  }}
