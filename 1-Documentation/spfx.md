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

**3. Colocar em utilização a versão desejada**

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

## Criar um novo projeto:

```bash
yo @microsoft/sharepoint
```
