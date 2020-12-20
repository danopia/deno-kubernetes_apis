export * from "./structs.ts";

// Autogenerated API file for AuthenticationV1beta1
import * as c from "../../common.ts";
import * as operations from "../../operations.ts";
import * as AuthenticationV1beta1 from "./structs.ts";

export class AuthenticationV1beta1Api {
  #client: c.RestClient;
  #root = "/apis/authentication.k8s.io/v1beta1/";
  constructor(client: c.RestClient) {
    this.#client = client;
  }

  async createTokenReview(body: AuthenticationV1beta1.TokenReview, opts: operations.PutOpts = {}) {
    const resp = await this.#client.performRequest({
      method: "POST",
      path: `${this.#root}tokenreviews`,
      expectJson: true,
      querystring: operations.formatPutOpts(opts),
      bodyJson: AuthenticationV1beta1.fromTokenReview(body),
      abortSignal: opts.abortSignal,
    });
    return AuthenticationV1beta1.toTokenReview(resp);
  }

}