## SharePoint Online Management Shell
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