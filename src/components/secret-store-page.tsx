import React from "react";
import { Renderer } from "@k8slens/extensions";
import { formatDuration } from "@k8slens/utilities";
import { SecretStore } from "../resources/secret-store";
import { secretStoresStore } from "../stores/secret-store-store";

formatDuration

enum sortBy {
  name = "name",
  namespace = "namespace",
  age = "age"
}

export class SecretStorePage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.KubeObjectListLayout
        className="SecretStores"
        store={ secretStoresStore }
        sortingCallbacks={{
          [sortBy.name]: (secretStore: SecretStore) => secretStore.getName(),
          [sortBy.namespace]: (secretStore: SecretStore) => secretStore.metadata.namespace,
          [sortBy.age]: (secretStore: SecretStore) => -secretStore.getCreationTimestamp()
        }}
        searchFilters={[
          (secretStore: SecretStore) => secretStore.getSearchFields()
        ]}
        renderHeaderTitle="Secret Stores"
        renderTableHeader={[
          { title: "Name", className: "name", sortBy: sortBy.name, id: sortBy.name },
          { title: "Namespace", className: "namespace", sortBy: sortBy.namespace, id: sortBy.namespace },
          { title: "Age", className: "age", sortBy: sortBy.age, id: sortBy.age }
        ]}
        renderTableContents={(secretStore: SecretStore) => [
          secretStore.getName(),
          secretStore.metadata.namespace,
          formatDuration(new Date(secretStore.metadata.creationTimestamp).getTime())
        ]}
      />
    );
  }
}
