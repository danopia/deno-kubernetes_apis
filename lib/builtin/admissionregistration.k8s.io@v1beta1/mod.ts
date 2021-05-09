export * from "./structs.ts";

// Autogenerated API file for AdmissionregistrationV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as MetaV1 from "../meta@v1/structs.ts";
import * as AdmissionregistrationV1beta1 from "./structs.ts";

export class AdmissionregistrationV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/admissionregistration.k8s.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  async getMutatingWebhookConfigurationList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}mutatingwebhookconfigurations`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toMutatingWebhookConfigurationList(resp);
  }

  async watchMutatingWebhookConfigurationList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}mutatingwebhookconfigurations`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AdmissionregistrationV1beta1.toMutatingWebhookConfiguration, MetaV1.toStatus));
  }

  async createMutatingWebhookConfiguration(body: AdmissionregistrationV1beta1.MutatingWebhookConfiguration, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}mutatingwebhookconfigurations`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AdmissionregistrationV1beta1.fromMutatingWebhookConfiguration(body),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toMutatingWebhookConfiguration(resp);
  }

  async deleteMutatingWebhookConfigurationList(opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}mutatingwebhookconfigurations`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toMutatingWebhookConfigurationList(resp);
  }

  async getMutatingWebhookConfiguration(name: string, opts: operations.NoOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}mutatingwebhookconfigurations/${name}`,
      expectJson: true,
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toMutatingWebhookConfiguration(resp);
  }

  async deleteMutatingWebhookConfiguration(name: string, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}mutatingwebhookconfigurations/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceMutatingWebhookConfiguration(name: string, body: AdmissionregistrationV1beta1.MutatingWebhookConfiguration, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}mutatingwebhookconfigurations/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AdmissionregistrationV1beta1.fromMutatingWebhookConfiguration(body),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toMutatingWebhookConfiguration(resp);
  }

  async patchMutatingWebhookConfiguration(name: string, type: c.PatchType, body: AdmissionregistrationV1beta1.MutatingWebhookConfiguration | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}mutatingwebhookconfigurations/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AdmissionregistrationV1beta1.fromMutatingWebhookConfiguration(body),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toMutatingWebhookConfiguration(resp);
  }

  async getValidatingWebhookConfigurationList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}validatingwebhookconfigurations`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toValidatingWebhookConfigurationList(resp);
  }

  async watchValidatingWebhookConfigurationList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}validatingwebhookconfigurations`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(AdmissionregistrationV1beta1.toValidatingWebhookConfiguration, MetaV1.toStatus));
  }

  async createValidatingWebhookConfiguration(body: AdmissionregistrationV1beta1.ValidatingWebhookConfiguration, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}validatingwebhookconfigurations`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AdmissionregistrationV1beta1.fromValidatingWebhookConfiguration(body),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toValidatingWebhookConfiguration(resp);
  }

  async deleteValidatingWebhookConfigurationList(opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}validatingwebhookconfigurations`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toValidatingWebhookConfigurationList(resp);
  }

  async getValidatingWebhookConfiguration(name: string, opts: operations.NoOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}validatingwebhookconfigurations/${name}`,
      expectJson: true,
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toValidatingWebhookConfiguration(resp);
  }

  async deleteValidatingWebhookConfiguration(name: string, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}validatingwebhookconfigurations/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceValidatingWebhookConfiguration(name: string, body: AdmissionregistrationV1beta1.ValidatingWebhookConfiguration, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}validatingwebhookconfigurations/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AdmissionregistrationV1beta1.fromValidatingWebhookConfiguration(body),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toValidatingWebhookConfiguration(resp);
  }

  async patchValidatingWebhookConfiguration(name: string, type: c.PatchType, body: AdmissionregistrationV1beta1.ValidatingWebhookConfiguration | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}validatingwebhookconfigurations/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : AdmissionregistrationV1beta1.fromValidatingWebhookConfiguration(body),
      abortSignal: opts.abortSignal,
    });
    return AdmissionregistrationV1beta1.toValidatingWebhookConfiguration(resp);
  }

}
