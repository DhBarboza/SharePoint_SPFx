# Como se conectar ao seu site SharePoint Online

Deve se executar como administrador o 'SharePoint Online Management Shell'

1- Conecetar-se ao Tenant: `Connect-SPOService`

2- Fornecer Url de admin do seu site. Exemplo: [https://6bdykp-admin.sharepoint.com]

3 - Verificar status do tenant: `Get-SPOTenantCdnEnabled -CdnType Public`

4 - Listar as Origens disponíveis do CDN: `Get-SPOTenantCdnOrigins -CdnType Public`

5 - Verificar quais arquivos e extenções estão liberadas: `Get-SPOTenantCdnPolicies -CdnType Public`

6 -  Habilitando o CDN do Office 365: (15 minutos): `Set-SPOTenantCdnEnabled -CdnType Public`
