import React from "react";
import { Renderer } from "@k8slens/extensions";
import { formatDuration } from "@k8slens/utilities";
import { ExternalSecret } from "../resources/external-secret";
import { externalSecretsStore } from "../stores/external-secret-store";

enum sortBy {
  name = "name",
  namespace = "namespace",
  store = "store",
  age = "age"
}

export class ExternalSecretPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="ExternalSecrets"
        store={ externalSecretsStore }
        sortingCallbacks={{
          [sortBy.name]: (externalSecret: ExternalSecret) => externalSecret.getName(),
          [sortBy.namespace]: (externalSecret: ExternalSecret) => externalSecret.metadata.namespace,
          [sortBy.store]: (externalSecret: ExternalSecret) => externalSecret.spec.secretStoreRef.name,
          [sortBy.age]: (externalSecret: ExternalSecret) => -externalSecret.getCreationTimestamp()
        }}
        searchFilters={[
          (externalSecret: ExternalSecret) => externalSecret.getSearchFields()
        ]}
        renderHeaderTitle="External Secrets"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: sortBy.name, id: sortBy.name },
          { title: "Namespace", className: "namespace", sortBy: sortBy.namespace, id: sortBy.namespace },
          { title: "Store", className: "store", sortBy: sortBy.store, id: sortBy.store },
          { title: "Age", className: "age", sortBy: sortBy.age, id: sortBy.age }
        ]}
        renderTableContents={(externalSecret: ExternalSecret) => [
          externalSecret.getName(),
          externalSecret.metadata.namespace,
          externalSecret.spec.secretStoreRef.name,
          formatDuration(new Date(externalSecret.metadata.creationTimestamp).getTime())
        ]}
      />
    );
  }
}
