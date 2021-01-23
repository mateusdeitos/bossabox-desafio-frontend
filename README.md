# bossabox-desafio-frontend

# O que é esse repositório?
VUTTR -> Very Useful Tools To Remember é um desafio de frontend proposto pela bossabox. A aplicação consiste em um web app para armazenar ferramentas úteis como google keep, notion, etc.

# Features
- React
- Typescript
- Styled-components
- Darkmode com Themeprovider do styled-components
- Mobile first

# Link de acesso
https://bossabox-desafio-frontend.vercel.app/

# Como rodar
## Variáveis de ambiente

Ajuste a variável `REACT_APP_API_URL` para o endereço da API

## Comandos

**build:** `yarn buid`
**iniciar:** `yarn start`

# Estrutura do projeto

**src/assets:** Recursos estáticos como imagens, ícones
**src/components:** Componentes reaproveitáveis como inputs, buttons, paginação, etc.
**src/hooks:** Hooks customizados para auxiliar em algumas funcionalidades como: exibição de banners, dark mode, buscar dados na API, etc.
**src/pages:** Páginas da aplicação
**src/routes:** Arquivo de rotas da aplicação usando react-router-dom
**src/services:** Arquivo de configuração das chamadas à API
**src/styles:** Estilização global e funções úteis para utilizar com o styled-components
**src/utils:** Algumas funções úteis para utilizar na aplicação
