export * from "./structs.ts";

// Autogenerated API file for ApiextensionsV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
import * as ApiextensionsV1beta1 from "./structs.ts";

export class ApiextensionsV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/apiextensions.k8s.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  async getCustomResourceDefinitionList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}customresourcedefinitions`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinitionList(resp);
  }

  async watchCustomResourceDefinitionList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}customresourcedefinitions`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(ApiextensionsV1beta1.toCustomResourceDefinition, MetaV1.toStatus));
  }

  async createCustomResourceDefinition(body: ApiextensionsV1beta1.CustomResourceDefinition, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}customresourcedefinitions`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: ApiextensionsV1beta1.fromCustomResourceDefinition(body),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

  async deleteCustomResourceDefinitionList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}customresourcedefinitions`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinitionList(resp);
  }

  async getCustomResourceDefinition(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}customresourcedefinitions/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

  async deleteCustomResourceDefinition(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}customresourcedefinitions/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceCustomResourceDefinition(name: string, body: ApiextensionsV1beta1.CustomResourceDefinition, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}customresourcedefinitions/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: ApiextensionsV1beta1.fromCustomResourceDefinition(body),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

  async patchCustomResourceDefinition(name: string, type: c.PatchType, body: ApiextensionsV1beta1.CustomResourceDefinition | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}customresourcedefinitions/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : ApiextensionsV1beta1.fromCustomResourceDefinition(body),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

  async getCustomResourceDefinitionStatus(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}customresourcedefinitions/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

  async replaceCustomResourceDefinitionStatus(name: string, body: ApiextensionsV1beta1.CustomResourceDefinition, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}customresourcedefinitions/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: ApiextensionsV1beta1.fromCustomResourceDefinition(body),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

  async patchCustomResourceDefinitionStatus(name: string, type: c.PatchType, body: ApiextensionsV1beta1.CustomResourceDefinition | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}customresourcedefinitions/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : ApiextensionsV1beta1.fromCustomResourceDefinition(body),
      abortSignal: opts.abortSignal,
    });
    return ApiextensionsV1beta1.toCustomResourceDefinition(resp);
  }

}
