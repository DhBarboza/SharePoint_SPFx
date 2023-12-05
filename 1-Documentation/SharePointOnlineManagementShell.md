# SharePoint Online Management Shell

> Executar como administrador
Comandos do Terminal


**Conectar ao Tenant:**

```bash
Connect-SPOService
```

**Url:**
Ex: https://6bdykp-admin.sharepoint.com/

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
