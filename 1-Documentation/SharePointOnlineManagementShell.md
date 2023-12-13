# SharePoint Online Management Shell

> Executar como administrador
Comandos do Terminal

**Conectar ao Tenant:**

```bash
Connect-SPOService
```

**Url:**
Ex: <https://6bdykp-admin.sharepoint.com/>

**Verificar Status do tenant:**

```bash
Get-SPOTenantCdnEnabled -CdnType Public
```

**Listar as Origens dísponiveis do CDN:**

```bash
Get-SPOTenantCdnOrigins -CdnType Public
```

**Verificar quais arquivos e extenções estão liberadas:**

```bash
Get-SPOTenantCdnPolicies -CdnType Public
```

**Habilitando o CDN do Office 365: (15 minutos):**

```bash
Set-SPOTenantCdnEnabled -CdnType Public
```

**Criar um  App Catalog em nosso site collection:**

```powershell
$site = Get-SPOSite 'https://6bdykp.sharepoint.com/sites/<SiteName>'
$site = Get-SPOSite 'https://6bdykp.sharepoint.com/sites/Study'
```

```powershell
Add-SPOSiteCollectionAppCatalog -Site $site
```

> Segunda Opção:

```bash
Connect-SPOService -Url https://6bdykp-admin.sharepoint.com -Credential $credential
$siteUrl = "https://6bdykp.sharepoint.com/sites/Study"
Add-SPOSiteCollectionAppCatalog -Site $siteUrl
```
