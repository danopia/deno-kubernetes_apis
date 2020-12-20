export * from "./structs.ts";

// Autogenerated API file for AcmeCertManagerIoV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as MetaV1 from "../../builtin/meta@v1/structs.ts";
import * as AcmeCertManagerIoV1beta1 from "./structs.ts";

export class AcmeCertManagerIoV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/acme.cert-manager.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  namespace(name: string) {
    return new AcmeCertManagerIoV1beta1NamespacedApi(this.#client, name);
  }
  myNamespace() {
    if (!this.#client.defaultNamespace) throw new Error("No current namespace is set");
    return new AcmeCertManagerIoV1beta1NamespacedApi(this.#client, this.#client.defaultNamespace);
  }

  async getChallengeListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}challenges`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallengeList(resp);
  }

  async watchChallengeListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}challenges`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AcmeCertManagerIoV1beta1.toChallenge, MetaV1.toStatus));
  }

  async getOrderListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}orders`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrderList(resp);
  }

  async watchOrderListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}orders`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AcmeCertManagerIoV1beta1.toOrder, MetaV1.toStatus));
  }

}

export class AcmeCertManagerIoV1beta1NamespacedApi {
  #client: c.RestClient
  #root: string
  constructor(client: c.RestClient, namespace: string) {
    this.#client = client;
    this.#root = `/apis/acme.cert-manager.io/v1beta1/namespaces/${namespace}/`;
  }

  async getChallengeStatus(name: string, opts: {
    resourceVersion?: string;
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    if (opts["resourceVersion"] != null) query.append("resourceVersion", opts["resourceVersion"]);
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}challenges/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async replaceChallengeStatus(name: string, body: AcmeCertManagerIoV1beta1.Challenge, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}challenges/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AcmeCertManagerIoV1beta1.fromChallenge(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async patchChallengeStatus(name: string, body: MetaV1.Patch, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}challenges/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: MetaV1.fromPatch(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async getChallenge(name: string, opts: {
    resourceVersion?: string;
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    if (opts["resourceVersion"] != null) query.append("resourceVersion", opts["resourceVersion"]);
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}challenges/${name}`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async deleteChallenge(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}challenges/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async replaceChallenge(name: string, body: AcmeCertManagerIoV1beta1.Challenge, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}challenges/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AcmeCertManagerIoV1beta1.fromChallenge(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async patchChallenge(name: string, body: MetaV1.Patch, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}challenges/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: MetaV1.fromPatch(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async getOrder(name: string, opts: {
    resourceVersion?: string;
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    if (opts["resourceVersion"] != null) query.append("resourceVersion", opts["resourceVersion"]);
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}orders/${name}`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async deleteOrder(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}orders/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async replaceOrder(name: string, body: AcmeCertManagerIoV1beta1.Order, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}orders/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AcmeCertManagerIoV1beta1.fromOrder(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async patchOrder(name: string, body: MetaV1.Patch, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}orders/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: MetaV1.fromPatch(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async getChallengeList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}challenges`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallengeList(resp);
  }

  async watchChallengeList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}challenges`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AcmeCertManagerIoV1beta1.toChallenge, MetaV1.toStatus));
  }

  async createChallenge(body: AcmeCertManagerIoV1beta1.Challenge, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}challenges`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AcmeCertManagerIoV1beta1.fromChallenge(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallenge(resp);
  }

  async deleteChallengeList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}challenges`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toChallengeList(resp);
  }

  async getOrderList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}orders`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrderList(resp);
  }

  async watchOrderList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}orders`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AcmeCertManagerIoV1beta1.toOrder, MetaV1.toStatus));
  }

  async createOrder(body: AcmeCertManagerIoV1beta1.Order, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}orders`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AcmeCertManagerIoV1beta1.fromOrder(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async deleteOrderList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}orders`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrderList(resp);
  }

  async getOrderStatus(name: string, opts: {
    resourceVersion?: string;
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    if (opts["resourceVersion"] != null) query.append("resourceVersion", opts["resourceVersion"]);
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}orders/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async replaceOrderStatus(name: string, body: AcmeCertManagerIoV1beta1.Order, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}orders/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AcmeCertManagerIoV1beta1.fromOrder(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

  async patchOrderStatus(name: string, body: MetaV1.Patch, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}orders/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: MetaV1.fromPatch(body),
      abortSignal: opts.abortSignal,
    });
    return AcmeCertManagerIoV1beta1.toOrder(resp);
  }

}