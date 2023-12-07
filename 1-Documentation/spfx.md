# Instalar uma versão específica do SPFx

> Node.js:

**1. Instalar uma nova versão:**

```bash
nvm install [version]
```

**2. Listar as versões existentes:**

```bash
nvm ls
```

**3. Colocar em utilização a versão desejada:**

```bash
nvm use [version]
```

> Yeoman:

```bash
npm install -g yo@3.1.1
```

> Gulp:

```bash
npm install -g gulp@3.9.1
```

> SPFx:

```bash
npm install -g @microsoft/generator-sharepoint@1.10.0
```

> Gerar certificado:

```bash
gulp trust-dev-cert
```

## Criar um novo projeto

```bash
yo @microsoft/sharepoint
```

## Executar o Projeto

```bash
gulp serve
```

**Executar a aplicação sem abrir o Browse:**
Para quando se utiliza o Workbench do seu site SharePoint

Ex: <https://6bdykp.sharepoint.com/sites/Study/_layouts/15/workbench.aspx>

```bash
gulp serve --nobrowse
```

## Deploy

**Limpar ou apagar arquivos e diretórios gerados durante o processo de construção:**
É definida para remover o diretório chamado "dist" e "lib".
é útil para garantir que você tenha uma base limpa antes de iniciar o processo de construção novamente. Isso pode ser útil para evitar conflitos ou problemas que podem surgir se artefatos de construção antigos estiverem presentes.

```bash
gulp clean
```

**Compilar a solução e transformar em um pacote executavel:**
Compila, otimiza e prepara o projeto para distribuição, gerando os arquivos finais e estruturas necessários para a implantação do aplicativo ou site.

```bash
gulp build
```

**Deploy da solução, enquanto está em desenvolvimento:**

```bash
gulp bundle
gulp package-solution
```

**Gerar o pacote completo para homologação/produção:**

```bash
gulp bundle --ship
gulp package-solution --ship
```

**Verificar pacotes desatualizados do projeto:**

```bash
npm outdated
```

**Atualizar um pacote desatualizado (versão é opcional, caso não específique vai instalar a última):**

```bash
npm install <NomeDoPacote>@<versão> --save
```
