export * from "./structs.ts";

// Autogenerated API file for ApiregistrationV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
import * as ApiregistrationV1beta1 from "./structs.ts";

export class ApiregistrationV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/apiregistration.k8s.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  async getAPIServiceList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}apiservices`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIServiceList(resp);
  }

  async watchAPIServiceList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}apiservices`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(ApiregistrationV1beta1.toAPIService, MetaV1.toStatus));
  }

  async createAPIService(body: ApiregistrationV1beta1.APIService, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}apiservices`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: ApiregistrationV1beta1.fromAPIService(body),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

  async deleteAPIServiceList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}apiservices`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIServiceList(resp);
  }

  async getAPIService(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}apiservices/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

  async deleteAPIService(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}apiservices/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceAPIService(name: string, body: ApiregistrationV1beta1.APIService, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}apiservices/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: ApiregistrationV1beta1.fromAPIService(body),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

  async patchAPIService(name: string, type: c.PatchType, body: ApiregistrationV1beta1.APIService | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}apiservices/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : ApiregistrationV1beta1.fromAPIService(body),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

  async getAPIServiceStatus(name: string, opts: {
    abortSignal?: AbortSignal;
  } = {}) {
    const query = new URLSearchParams;
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}apiservices/${name}/status`,
      expectJson: true,
      querystring: query,
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

  async replaceAPIServiceStatus(name: string, body: ApiregistrationV1beta1.APIService, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}apiservices/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: ApiregistrationV1beta1.fromAPIService(body),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

  async patchAPIServiceStatus(name: string, type: c.PatchType, body: ApiregistrationV1beta1.APIService | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}apiservices/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : ApiregistrationV1beta1.fromAPIService(body),
      abortSignal: opts.abortSignal,
    });
    return ApiregistrationV1beta1.toAPIService(resp);
  }

}
