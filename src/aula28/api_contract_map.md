Mapeamento de Contrato de Integração - Reqres API

Objetivo: Analisar a documentação da API pública Reqres, compreendendo na prática como os sistemas se comunicam e mapeando o contrato de integração para requisições GET e POST antes do início da fase de automação de testes.

1. Mapeamento do Endpoint de Leitura (GET)

1. Identificação e Finalidade

Endpoint/Rota: /api/users/2

Objetivo de Negócio: Recuperar os dados detalhados de um usuário específico do sistema (ID, e-mail, nome, sobrenome e avatar) para exibição do perfil ou consulta cadastral.

2. Estrutura do Request (O que o cliente envia)

Método HTTP: GET

URL Completa: https://reqres.in/api/users/2

Headers (Cabeçalhos):

Accept: application/json

Body (Corpo): N/A (Não se aplica)

3. Estrutura do Response (O que o servidor devolve)

Status Code Esperado: 200 OK

Payload de Retorno (Exemplo Real):

{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  "support": {
    "url": "https://contentcaffeine.com?utm_source=reqres&utm_medium=json&utm_campaign=referral",
    "text": "To keep ReqRes free, contributions are appreciated!"
  }
}


2. Mapeamento do Endpoint de Criação (POST)

1. Identificação e Finalidade

Endpoint/Rota: /api/users

Objetivo de Negócio: Realizar o cadastro de um novo usuário na plataforma, enviando dados cadastrais básicos (como nome e função/cargo) para registro no sistema.

2. Estrutura do Request (O que o cliente envia)

Método HTTP: POST

URL Completa: https://reqres.in/api/users

Headers (Cabeçalhos):

Content-Type: application/json

Accept: application/json

Body (Corpo):

{
  "name": "Kalleby Esdras",
  "job": "QA Engineer"
}


3. Estrutura do Response (O que o servidor devolve)

Status Code Esperado: 201 Created

Payload de Retorno (Exemplo Real):

{
  "name": "Kalleby Esdras",
  "job": "QA Engineer",
  "id": "123",
  "createdAt": "2026-6-19T18:00:00.000Z"
}
