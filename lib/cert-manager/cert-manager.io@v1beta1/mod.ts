export * from "./structs.ts";

// Autogenerated API file for CertManagerIoV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as MetaV1 from "../../builtin/meta@v1/structs.ts";
import * as CertManagerIoV1beta1 from "./structs.ts";

export class CertManagerIoV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/cert-manager.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  namespace(name: string) {
    return new CertManagerIoV1beta1NamespacedApi(this.#client, name);
  }
  myNamespace() {
    if (!this.#client.defaultNamespace) throw new Error("No current namespace is set");
    return new CertManagerIoV1beta1NamespacedApi(this.#client, this.#client.defaultNamespace);
  }

  async getCertificateRequestListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificaterequests`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequestList(resp);
  }

  async watchCertificateRequestListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificaterequests`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toCertificateRequest, MetaV1.toStatus));
  }

  async getCertificateListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificates`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateList(resp);
  }

  async watchCertificateListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificates`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toCertificate, MetaV1.toStatus));
  }

  async getClusterIssuerList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}clusterissuers`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuerList(resp);
  }

  async watchClusterIssuerList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}clusterissuers`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toClusterIssuer, MetaV1.toStatus));
  }

  async createClusterIssuer(body: CertManagerIoV1beta1.ClusterIssuer, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}clusterissuers`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromClusterIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async deleteClusterIssuerList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}clusterissuers`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuerList(resp);
  }

  async getClusterIssuer(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}clusterissuers/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async deleteClusterIssuer(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}clusterissuers/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceClusterIssuer(name: string, body: CertManagerIoV1beta1.ClusterIssuer, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}clusterissuers/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromClusterIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async patchClusterIssuer(name: string, type: c.PatchType, body: CertManagerIoV1beta1.ClusterIssuer | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}clusterissuers/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromClusterIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async getClusterIssuerStatus(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}clusterissuers/${name}/status`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async replaceClusterIssuerStatus(name: string, body: CertManagerIoV1beta1.ClusterIssuer, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}clusterissuers/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromClusterIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async patchClusterIssuerStatus(name: string, type: c.PatchType, body: CertManagerIoV1beta1.ClusterIssuer | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}clusterissuers/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromClusterIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toClusterIssuer(resp);
  }

  async getIssuerListForAllNamespaces(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}issuers`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuerList(resp);
  }

  async watchIssuerListForAllNamespaces(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}issuers`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toIssuer, MetaV1.toStatus));
  }

}

export class CertManagerIoV1beta1NamespacedApi {
  #client: c.RestClient
  #root: string
  constructor(client: c.RestClient, namespace: string) {
    this.#client = client;
    this.#root = `/apis/cert-manager.io/v1beta1/namespaces/${namespace}/`;
  }

  async getCertificateRequestList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificaterequests`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequestList(resp);
  }

  async watchCertificateRequestList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificaterequests`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toCertificateRequest, MetaV1.toStatus));
  }

  async createCertificateRequest(body: CertManagerIoV1beta1.CertificateRequest, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}certificaterequests`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromCertificateRequest(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async deleteCertificateRequestList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}certificaterequests`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequestList(resp);
  }

  async getCertificateRequest(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificaterequests/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async deleteCertificateRequest(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}certificaterequests/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceCertificateRequest(name: string, body: CertManagerIoV1beta1.CertificateRequest, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}certificaterequests/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromCertificateRequest(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async patchCertificateRequest(name: string, type: c.PatchType, body: CertManagerIoV1beta1.CertificateRequest | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}certificaterequests/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromCertificateRequest(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async getCertificateRequestStatus(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificaterequests/${name}/status`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async replaceCertificateRequestStatus(name: string, body: CertManagerIoV1beta1.CertificateRequest, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}certificaterequests/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromCertificateRequest(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async patchCertificateRequestStatus(name: string, type: c.PatchType, body: CertManagerIoV1beta1.CertificateRequest | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}certificaterequests/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromCertificateRequest(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateRequest(resp);
  }

  async getCertificateList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificates`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateList(resp);
  }

  async watchCertificateList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificates`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toCertificate, MetaV1.toStatus));
  }

  async createCertificate(body: CertManagerIoV1beta1.Certificate, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}certificates`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromCertificate(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async deleteCertificateList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}certificates`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificateList(resp);
  }

  async getCertificate(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificates/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async deleteCertificate(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}certificates/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceCertificate(name: string, body: CertManagerIoV1beta1.Certificate, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}certificates/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromCertificate(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async patchCertificate(name: string, type: c.PatchType, body: CertManagerIoV1beta1.Certificate | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}certificates/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromCertificate(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async getCertificateStatus(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}certificates/${name}/status`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async replaceCertificateStatus(name: string, body: CertManagerIoV1beta1.Certificate, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}certificates/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromCertificate(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async patchCertificateStatus(name: string, type: c.PatchType, body: CertManagerIoV1beta1.Certificate | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}certificates/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromCertificate(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toCertificate(resp);
  }

  async getIssuerList(opts: operations.GetListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}issuers`,
      expectJson: true,
      querystring: operations.formatGetListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuerList(resp);
  }

  async watchIssuerList(opts: operations.WatchListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}issuers`,
      expectJson: true,
      expectStream: true,
      querystring: operations.formatWatchListOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return resp.pipeThrough(new c.WatchEventTransformer(CertManagerIoV1beta1.toIssuer, MetaV1.toStatus));
  }

  async createIssuer(body: CertManagerIoV1beta1.Issuer, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}issuers`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

  async deleteIssuerList(body: MetaV1.DeleteOptions, opts: operations.DeleteListOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}issuers`,
      expectJson: true,
      querystring: operations.formatDeleteListOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuerList(resp);
  }

  async getIssuer(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}issuers/${name}`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

  async deleteIssuer(name: string, body: MetaV1.DeleteOptions, opts: operations.DeleteOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "DELETE",
      path: `${this.#root}issuers/${name}`,
      expectJson: true,
      querystring: operations.formatDeleteOpts(opts),
      bodyJson: MetaV1.fromDeleteOptions(body),
      abortSignal: opts.abortSignal,
    });
    return MetaV1.toStatus(resp);
  }

  async replaceIssuer(name: string, body: CertManagerIoV1beta1.Issuer, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}issuers/${name}`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

  async patchIssuer(name: string, type: c.PatchType, body: CertManagerIoV1beta1.Issuer | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}issuers/${name}`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

  async getIssuerStatus(name: string, opts: operations.GetOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "GET",
      path: `${this.#root}issuers/${name}/status`,
      expectJson: true,
      querystring: operations.formatGetOpts(opts),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

  async replaceIssuerStatus(name: string, body: CertManagerIoV1beta1.Issuer, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PUT",
      path: `${this.#root}issuers/${name}/status`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: CertManagerIoV1beta1.fromIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

  async patchIssuerStatus(name: string, type: c.PatchType, body: CertManagerIoV1beta1.Issuer | c.JsonPatch, opts: operations.PatchOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "PATCH",
      path: `${this.#root}issuers/${name}/status`,
      expectJson: true,
      querystring: operations.formatPatchOpts(opts),
      contentType: c.getPatchContentType(type),
      bodyJson: Array.isArray(body) ? body : CertManagerIoV1beta1.fromIssuer(body),
      abortSignal: opts.abortSignal,
    });
    return CertManagerIoV1beta1.toIssuer(resp);
  }

}
