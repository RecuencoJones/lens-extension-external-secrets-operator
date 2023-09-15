import { Renderer } from "@k8slens/extensions";

export class SecretStore extends Renderer.K8sApi.KubeObject {
  static kind = "SecretStore"
  static namespaced = true
  static apiBase = "/apis/external-secrets.io/v1beta1/secretstores"

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
    uid: string;
    resourceVersion: string;
    creationTimestamp: string;
    labels: {
      [key: string]: string;
    };
    annotations: {
      [key: string]: string;
    };
    generation: number;
  }
  spec: {
    provider: {
      aws?: {
        auth: {
          secretRef: {
            accessKeyIDSecretRef: {
              key: string;
              name: string;
            };
            secretAccessKeySecretRef: {
              key: string;
              name: string;
            };
          }
        }
        region: string
        service: string
      }
    }
  }
  status: {
    conditions: {
      lastTransitionTime: string
      message: string;
      reason: string;
      status: string;
      type?: string;
    }[]
    capabilities: string;
  }
}
