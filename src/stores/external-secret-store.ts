import { Renderer } from "@k8slens/extensions";
import { ExternalSecret } from "../resources/external-secret";

export class ExternalSecretsApi extends Renderer.K8sApi.KubeApi<ExternalSecret> {
}

export const externalSecretsApi = new ExternalSecretsApi({
  objectConstructor: ExternalSecret
});

export class ExternalSecretsStore extends Renderer.K8sApi.KubeObjectStore<ExternalSecret> {
  api = externalSecretsApi
}

export const externalSecretsStore = new ExternalSecretsStore();
Renderer.K8sApi.apiManager.registerStore(externalSecretsStore);
