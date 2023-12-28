import { Version } from "@microsoft/sp-core-library";
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { escape } from "@microsoft/sp-lodash-subset";

//import styles from './RegisterBirthdaysWebPart.module.scss';
import * as strings from "RegisterBirthdaysWebPartStrings";

import { sp, ItemAddResult } from "@pnp/sp";
import * as $ from "jquery";
import "bootstrap";

require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css");

//css padrao
require("../../stylelibrary/css/padrao.css");

//importa toast
require("../../stylelibrary/css/toastr.min.css");
// @ts-ignore
import toastr from "../../stylelibrary/js/toast/toastr.min.js";

export interface IRegisterBirthdaysWebPartProps {
    description: string;
}

export default class RegisterBirthdaysWebPart extends BaseClientSideWebPart<IRegisterBirthdaysWebPartProps> {
    public onInit(): Promise<void> {
        return super.onInit().then((_) => {
            sp.setup({
                spfxContext: this.context,
            });
        });
    }

    public render(): void {
        //carrego o template de layout
        this.domElement.innerHTML = require("./template.html");

        document
            .getElementById("btnSalvar")
            .addEventListener("click", () => this.SaveBirthday());

        this.GetAllAreas();
    }

    public async GetAllAreas() {
        let montahtmlAreas: string;

        await sp.web.lists
            .getByTitle("Area")
            .items.top(5000)
            .select("ID, Title")
            .orderBy("Title", true)
            .get()
            .then((items) => {
                montahtmlAreas = `<option value="">Selecione</option>`;
                items.forEach((element) => {
                    montahtmlAreas += `<option value="${element.Title}">${element.Title}</option>`;
                });

                $("#ddlArea").html(montahtmlAreas);
            })
            .catch((e) => {
                console.log("erro", e);
            });
    }

    protected SaveBirthday(): void {
        toastr.options = {
            closeButton: false,
            debug: false,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-top-center",
            preventDuplicates: false,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "4000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
        };

        let Nome = $("#txtNome").val();
        let DataAniversario = new Date(
            `${$("#txtDataAniversario").val()}T12:00:00`
        ).toISOString();
        let Area = $("#ddlArea option:selected").text();
        let UrlFoto = $("#txtURLFoto").val();
        let Observacao = $("#txtObservacao").val();

        sp.web.lists
            .getByTitle("Aniversariantes2")
            .items.add({
                Title: Nome,
                BirthdayDate: DataAniversario,
                Area: Area,
                UrlPhoto: UrlFoto,
                Observation: Observacao,
            })
            .then(
                (iar: ItemAddResult) => {
                    toastr["success"](
                        "Cadastro realizado com sucesso!",
                        "Sucesso"
                    );
                },
                (err) => {
                    console.log(err);
                    toastr["error"](
                        "Ocorreu um erro ao realizar o cadastro.",
                        "Erro"
                    );
                }
            );
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