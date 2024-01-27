# Como realizar Deploy do projeto

1 - Limpar os arquivos: `gulp clean`

2 - Compilar a solução para ser executada: `gulp build`

**Em desenvolvimento:**

3 - Minificação de arquivos: `gulp bundle`

4 - Empacotar a solução: `gulp package-solution`

**Em Homologação/Produção:**

3 - Minificação de arquivos: `gulp bundle --ship`

4 - Empacotar a solução: `gulp package-solution --ship`
