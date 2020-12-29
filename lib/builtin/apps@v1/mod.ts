export * from "./structs.ts";

// Autogenerated API file for AppsV1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as AutoscalingV1 from "../autoscaling@v1/structs.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
import * as AppsV1 from "./structs.ts";

export class AppsV1Api {
  #client: c.RestClient;
  #root = "/apis/apps/v1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  namespace(name: string) {
    return new AppsV1NamespacedApi(this.#client, name);
  }
  myNamespace() {
    if (!this.#client.defaultNamespace) throw new Error("No current namespace is set");
    return new AppsV1NamespacedApi(this.#client, this.#client.defaultNamespace);
  }

  async getControllerRevisionListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}controllerrevisions`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevisionList(resp);
  }

  async watchControllerRevisionListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}controllerrevisions`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toControllerRevision, MetaV1.toStatus));
  }

  async getDaemonSetListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}daemonsets`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSetList(resp);
  }

  async watchDaemonSetListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}daemonsets`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toDaemonSet, MetaV1.toStatus));
  }

  async getDeploymentListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeploymentList(resp);
  }

  async watchDeploymentListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toDeployment, MetaV1.toStatus));
  }

  async getReplicaSetListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSetList(resp);
  }

  async watchReplicaSetListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toReplicaSet, MetaV1.toStatus));
  }

  async getStatefulSetListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSetList(resp);
  }

  async watchStatefulSetListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toStatefulSet, MetaV1.toStatus));
  }

}

export class AppsV1NamespacedApi {
  #client: c.RestClient
  #root: string
  constructor(client: c.RestClient, namespace: string) {
    this.#client = client;
    this.#root = `/apis/apps/v1/namespaces/${namespace}/`;
  }

  async getControllerRevisionList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}controllerrevisions`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevisionList(resp);
  }

  async watchControllerRevisionList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}controllerrevisions`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toControllerRevision, MetaV1.toStatus));
  }

  async createControllerRevision(body: AppsV1.ControllerRevision, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}controllerrevisions`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromControllerRevision(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevision(resp);
  }

  async deleteControllerRevisionList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}controllerrevisions`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevisionList(resp);
  }

  async getControllerRevision(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}controllerrevisions/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevision(resp);
  }

  async deleteControllerRevision(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}controllerrevisions/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceControllerRevision(name: string, body: AppsV1.ControllerRevision, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}controllerrevisions/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromControllerRevision(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevision(resp);
  }

  async patchControllerRevision(name: string, type: c.PatchType, body: AppsV1.ControllerRevision | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}controllerrevisions/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromControllerRevision(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toControllerRevision(resp);
  }

  async getDaemonSetList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}daemonsets`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSetList(resp);
  }

  async watchDaemonSetList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}daemonsets`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toDaemonSet, MetaV1.toStatus));
  }

  async createDaemonSet(body: AppsV1.DaemonSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}daemonsets`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromDaemonSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async deleteDaemonSetList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}daemonsets`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSetList(resp);
  }

  async getDaemonSet(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}daemonsets/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async deleteDaemonSet(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}daemonsets/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceDaemonSet(name: string, body: AppsV1.DaemonSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}daemonsets/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromDaemonSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async patchDaemonSet(name: string, type: c.PatchType, body: AppsV1.DaemonSet | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}daemonsets/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromDaemonSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async getDaemonSetStatus(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}daemonsets/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async replaceDaemonSetStatus(name: string, body: AppsV1.DaemonSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}daemonsets/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromDaemonSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async patchDaemonSetStatus(name: string, type: c.PatchType, body: AppsV1.DaemonSet | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}daemonsets/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromDaemonSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDaemonSet(resp);
  }

  async getDeploymentList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeploymentList(resp);
  }

  async watchDeploymentList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toDeployment, MetaV1.toStatus));
  }

  async createDeployment(body: AppsV1.Deployment, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}deployments`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromDeployment(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async deleteDeploymentList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}deployments`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeploymentList(resp);
  }

  async getDeployment(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async deleteDeployment(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}deployments/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceDeployment(name: string, body: AppsV1.Deployment, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}deployments/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromDeployment(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async patchDeployment(name: string, type: c.PatchType, body: AppsV1.Deployment | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}deployments/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromDeployment(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async getDeploymentScale(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments/${name}/scale`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async replaceDeploymentScale(name: string, body: AutoscalingV1.Scale, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}deployments/${name}/scale`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AutoscalingV1.fromScale(body),
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async patchDeploymentScale(name: string, type: c.PatchType, body: AutoscalingV1.Scale | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}deployments/${name}/scale`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AutoscalingV1.fromScale(body),
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async getDeploymentStatus(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}deployments/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async replaceDeploymentStatus(name: string, body: AppsV1.Deployment, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}deployments/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromDeployment(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async patchDeploymentStatus(name: string, type: c.PatchType, body: AppsV1.Deployment | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}deployments/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromDeployment(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toDeployment(resp);
  }

  async getReplicaSetList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSetList(resp);
  }

  async watchReplicaSetList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toReplicaSet, MetaV1.toStatus));
  }

  async createReplicaSet(body: AppsV1.ReplicaSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}replicasets`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromReplicaSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async deleteReplicaSetList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}replicasets`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSetList(resp);
  }

  async getReplicaSet(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async deleteReplicaSet(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}replicasets/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceReplicaSet(name: string, body: AppsV1.ReplicaSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}replicasets/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromReplicaSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async patchReplicaSet(name: string, type: c.PatchType, body: AppsV1.ReplicaSet | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}replicasets/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromReplicaSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async getReplicaSetScale(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets/${name}/scale`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async replaceReplicaSetScale(name: string, body: AutoscalingV1.Scale, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}replicasets/${name}/scale`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AutoscalingV1.fromScale(body),
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async patchReplicaSetScale(name: string, type: c.PatchType, body: AutoscalingV1.Scale | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}replicasets/${name}/scale`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AutoscalingV1.fromScale(body),
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async getReplicaSetStatus(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}replicasets/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async replaceReplicaSetStatus(name: string, body: AppsV1.ReplicaSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}replicasets/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromReplicaSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async patchReplicaSetStatus(name: string, type: c.PatchType, body: AppsV1.ReplicaSet | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}replicasets/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromReplicaSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toReplicaSet(resp);
  }

  async getStatefulSetList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSetList(resp);
  }

  async watchStatefulSetList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AppsV1.toStatefulSet, MetaV1.toStatus));
  }

  async createStatefulSet(body: AppsV1.StatefulSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}statefulsets`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromStatefulSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

  async deleteStatefulSetList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}statefulsets`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSetList(resp);
  }

  async getStatefulSet(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

  async deleteStatefulSet(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}statefulsets/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceStatefulSet(name: string, body: AppsV1.StatefulSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}statefulsets/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromStatefulSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

  async patchStatefulSet(name: string, type: c.PatchType, body: AppsV1.StatefulSet | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}statefulsets/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromStatefulSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

  async getStatefulSetScale(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets/${name}/scale`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async replaceStatefulSetScale(name: string, body: AutoscalingV1.Scale, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}statefulsets/${name}/scale`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AutoscalingV1.fromScale(body),
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async patchStatefulSetScale(name: string, type: c.PatchType, body: AutoscalingV1.Scale | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}statefulsets/${name}/scale`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AutoscalingV1.fromScale(body),
      abortSignal: opts.abortSignal,
    });
    return AutoscalingV1.toScale(resp);
  }

  async getStatefulSetStatus(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}statefulsets/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

  async replaceStatefulSetStatus(name: string, body: AppsV1.StatefulSet, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}statefulsets/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AppsV1.fromStatefulSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

  async patchStatefulSetStatus(name: string, type: c.PatchType, body: AppsV1.StatefulSet | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}statefulsets/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AppsV1.fromStatefulSet(body),
      abortSignal: opts.abortSignal,
    });
    return AppsV1.toStatefulSet(resp);
  }

}
