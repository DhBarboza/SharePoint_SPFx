import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { escape } from "@microsoft/sp-lodash-subset";

import styles from "./BirthdaysRegistrationWebPart.module.scss";
import * as strings from "BirthdaysRegistrationWebPartStrings";

import { sp, ItemAddResult } from "@pnp/sp";
import * as $ from "jquery";
import "bootstrap";

require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css");

// Import CSS default
require("../../stylelibrary/css/padrao.css");

// Import Toast
require("../../stylelibrary/css/toastr.min.css");
import toastr from "../../stylelibrary/js/toast/toastr.min.js";

export interface IBirthdaysRegistrationWebPartProps {
  description: string;
}

export default class BirthdaysRegistrationWebPart extends BaseClientSideWebPart<IBirthdaysRegistrationWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.birthdaysRegistration}">
    <div class="${styles.container}">
      <div class="${styles.row}">
        <div class="${styles.column}">
          <span class="${styles.title}">Welcome to SharePoint!</span>
  <p class="${
    styles.subTitle
  }">Customize SharePoint experiences using Web Parts.</p>
    <p class="${styles.description}">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${styles.button}">
        <span class="${styles.label}">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
