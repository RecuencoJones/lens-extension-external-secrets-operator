import React from "react";
import { Renderer } from "@k8slens/extensions";
import { ExternalSecretPage } from "./src/components/external-secret-page";
import { SecretStorePage } from "./src/components/secret-store-page";
import { esoIconSvg } from "./src/eso-icon.svg";

export function ExternalSecretIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} tooltip="External Secrets" svg={ esoIconSvg } />
}

export default class ESOExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "externalsecrets",
      components: {
        Page: () => <ExternalSecretPage extension={ this } />,
        MenuIcon: ExternalSecretIcon
      }
    },
    {
      id: "secretstores",
      components: {
        Page: () => <SecretStorePage extension={ this } />,
        MenuIcon: ExternalSecretIcon
      }
    }
  ]

  clusterPageMenus = [
    {
      id: "externalsecretoperator",
      title: "External Secret Operator",
      components: {
        Icon: ExternalSecretIcon
      }
    },
    {
      parentId: "externalsecretoperator",
      target: { pageId: "externalsecrets" },
      title: "External Secrets",
      components: {
        Icon: undefined as never
      }
    },
    {
      parentId: "externalsecretoperator",
      target: { pageId: "secretstores" },
      title: "Secret Stores",
      components: {
        Icon: undefined as never
      }
    }
  ];
}
