# Detalhamento de uma estrutura de um Projeto SPFx

Análise aprofundada dos componentes fundamentais, como web parts, extensões e bibliotecas utilizadas.

## Folder - Config

**config.json:**

- Lista e Mapeia todas as 'Web Parts' criadas.
- Também serve para a configuração de referências de Bibliotecas externas.

**copy-asset.json:**

- Serve para configurar o deploy da aplicação
- Importar a solução utilizando CDN

**deploy-azure-storage.json:**

- Arquivo destindo a configuração do Deploy no Azure

**package-solution.json:**

- Serve para alteração e atualização de versão da solução
- Exnxergar o 'path' do ambiente de homologação ou Produção

**serve.json:**

- Configurações para subir a aplicação, como porta, protoclo e etc

**write-manifest.json:**

- Para configuração do Path do CND

## Folder - Src

- Estrutura de pasta que agrupa as Web Parts criadas

**webparts > [webpart-name] > Ioc:**

- Pasta que contém as propriedades da 'Web Part'

**webparts > [webpart-name] > [webpart-name.ts]:**

- Arquivo que contém a estrutura da nossa 'Web Part'

**webparts > [webpart-name] > [webpart-name.module.scss]:**

- Arquivo que contém a estilização da nossa 'Web Part'

**webparts > [webpart-name] > [webpart-name.manifest.json]:**

- Expõe e configura todas as propriedades da 'Web Part'
