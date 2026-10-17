# Portal Escolar — React + JSX

Projeto convertido para uma estrutura React usando Vite.

## Como executar

1. Instale o [Node.js](https://nodejs.org/).
2. Abra esta pasta no VS Code.
3. No terminal, execute:

```bash
npm install
npm run dev
```

4. Abra o endereço local mostrado pelo Vite.

## Estrutura

- `src/main.jsx`: inicializa o React.
- `src/App.jsx`: controla a navegação entre as telas.
- `src/pages/Login.jsx`: formulário de login com estado React.
- `src/pages/Selecao.jsx`: seleção SESI/SENAI.
- `src/pages/Portfolio.jsx`: estrutura inicial dos portfólios.
- `src/css/`: estilos CSS.

## Observação importante

O ZIP recebido continha os arquivos CSS e `src/js/login.js`, mas não continha páginas HTML nem imagens. Por isso, as telas React foram reconstruídas com base nos estilos e no comportamento identificados nos arquivos disponíveis. A tela de portfólio é uma estrutura inicial; para converter fielmente o conteúdo de SESI/SENAI, envie também os HTML e as imagens originais.

## Backend (Passo 3)

O backend Express fica na pasta `backend/`. Em um terminal:

```bash
cd backend
npm install
npm run dev
```

Em outro terminal, na raiz do projeto, rode `npm install` e `npm run dev` para iniciar o frontend React. O frontend consulta `http://localhost:3000/api/atividades`.
