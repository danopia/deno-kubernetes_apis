export * from "./structs.ts";

// Autogenerated API file for DiscoveryV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
import * as DiscoveryV1beta1 from "./structs.ts";

export class DiscoveryV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/discovery.k8s.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  namespace(name: string) {
    return new DiscoveryV1beta1NamespacedApi(this.#client, name);
  }
  myNamespace() {
    if (!this.#client.defaultNamespace) throw new Error("No current namespace is set");
    return new DiscoveryV1beta1NamespacedApi(this.#client, this.#client.defaultNamespace);
  }

  async getEndpointSliceListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}endpointslices`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSliceList(resp);
  }

  async watchEndpointSliceListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}endpointslices`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(DiscoveryV1beta1.toEndpointSlice, MetaV1.toStatus));
  }

}

export class DiscoveryV1beta1NamespacedApi {
  #client: c.RestClient
  #root: string
  constructor(client: c.RestClient, namespace: string) {
    this.#client = client;
    this.#root = `/apis/discovery.k8s.io/v1beta1/namespaces/${namespace}/`;
  }

  async getEndpointSliceList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}endpointslices`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSliceList(resp);
  }

  async watchEndpointSliceList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}endpointslices`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(DiscoveryV1beta1.toEndpointSlice, MetaV1.toStatus));
  }

  async createEndpointSlice(body: DiscoveryV1beta1.EndpointSlice, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}endpointslices`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: DiscoveryV1beta1.fromEndpointSlice(body),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSlice(resp);
  }

  async deleteEndpointSliceList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}endpointslices`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSliceList(resp);
  }

  async getEndpointSlice(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}endpointslices/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSlice(resp);
  }

  async deleteEndpointSlice(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}endpointslices/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSlice(resp);
  }

  async replaceEndpointSlice(name: string, body: DiscoveryV1beta1.EndpointSlice, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}endpointslices/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: DiscoveryV1beta1.fromEndpointSlice(body),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSlice(resp);
  }

  async patchEndpointSlice(name: string, body: MetaV1.Patch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}endpointslices/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      bodyJson: MetaV1.fromPatch(body),
      abortSignal: opts.abortSignal,
    });
    return DiscoveryV1beta1.toEndpointSlice(resp);
  }

}