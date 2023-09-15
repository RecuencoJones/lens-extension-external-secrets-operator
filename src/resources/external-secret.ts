import { Renderer } from "@k8slens/extensions";

export class ExternalSecret extends Renderer.K8sApi.KubeObject {
  static kind = "ExternalSecret"
  static namespaced = true
  static apiBase = "/apis/external-secrets.io/v1beta1/externalsecrets"

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
    data: {
      remoteRef: {
        conversionStrategy: string;
        decodingStrategy: string;
        key: string;
        property: string;
      };
      secretKey: string;
    }[];
    refreshInterval: string;
    secretStoreRef: {
      kind: string;
      name: string;
    };
    target: {
      creationPolicy: string;
      deletionPolicy: string;
      name: string;
    };
  }
  status: {
    conditions: {
      lastTransitionTime: string
      message: string;
      reason: string;
      status: string;
      type?: string;
    }[]
    refreshTime: string
    syncedResourceVersion: string
  }
}
