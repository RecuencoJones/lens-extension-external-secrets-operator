import { Renderer } from "@k8slens/extensions";
import { SecretStore } from "../resources/secret-store";

export class SecretStoresApi extends Renderer.K8sApi.KubeApi<SecretStore> {
}

export const secretStoresApi = new SecretStoresApi({
  objectConstructor: SecretStore
});

export class SecretStoresStore extends Renderer.K8sApi.KubeObjectStore<SecretStore> {
  api = secretStoresApi
}

export const secretStoresStore = new SecretStoresStore();
Renderer.K8sApi.apiManager.registerStore(secretStoresStore);
