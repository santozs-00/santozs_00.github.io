# Backend do Portfólio — Passo 3

API inicial em Node.js + Express, organizada em camadas conforme o roteiro do projeto.

## Estrutura

```text
backend/
├── src/
│   ├── controllers/
│   │   └── atividadeController.js
│   ├── models/
│   │   └── Atividade.js
│   ├── repositories/
│   │   └── atividadeRepository.js
│   ├── routes/
│   │   └── atividadeRoutes.js
│   └── server.js
├── .env.example
├── .gitignore
└── package.json
```

## Executar

Requer Node.js instalado.

```bash
cd backend
npm install
npm run dev
```

API: `http://localhost:3000`

## Endpoints do MVP

### Verificar se a API está funcionando

`GET http://localhost:3000/api/health`

Resposta `200 OK`:

```json
{
  "status": "ok",
  "mensagem": "API do Portfólio funcionando."
}
```

### Listar atividades

`GET http://localhost:3000/api/atividades`

Resposta `200 OK`:

```json
{
  "total": 0,
  "dados": []
}
```

### Cadastrar atividade

`POST http://localhost:3000/api/atividades`

No Thunder Client/Postman, selecione `Body > JSON`:

```json
{
  "titulo": "Pesquisa de Ciências",
  "descricao": "Pesquisa sobre magnetosfera e vida na Terra.",
  "materia": "Ciências da Natureza",
  "tipo": "atividade"
}
```

Resposta esperada `201 Created`, com a atividade criada dentro de `dados`.

Tipos aceitos: `atividade`, `projeto` e `reflexao`. O título precisa ter pelo menos 3 caracteres.

## Por que o model não importa controller/router?

O model representa a entidade e protege as regras do domínio. Ele não deve conhecer HTTP, rotas ou controllers. Assim, as regras podem ser reutilizadas e testadas sem depender do Express, e a arquitetura evita dependências circulares.

## Limitação desta primeira versão

O repositório guarda os dados apenas em memória. Ao reiniciar o servidor, as atividades cadastradas são apagadas. Persistência em arquivo ou banco de dados pode ser adicionada em uma próxima etapa.
