
# Desafio Notion API - Full Stack Developer

Este projeto é uma API REST desenvolvida em Node.js com `express`, com o objetivo de realizar operações CRUD em um banco de dados do Notion. A API segue uma arquitetura organizada usando os padrões **Controller-Service-Repository** para promover modularidade, fácil manutenção e boas práticas de desenvolvimento.

## Sumário

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)
- [Execução](#execução)
- [Boas Práticas e Padrões Adotados](#boas-práticas-e-padrões-adotados)

## Visão Geral

A API permite criar, ler, atualizar e deletar registros em um banco de dados do Notion. Ela utiliza o `express` como framework de servidor, com camadas separadas para organizar as responsabilidades de cada parte da aplicação:

- **Controller**: Manipula as requisições e respostas HTTP.
- **Service**: Contém a lógica de negócios, validações e regras.
- **Repository**: Responsável pela comunicação direta com a API do Notion.

## Pré-requisitos

- **Node.js** (versão 12 ou superior)
- **npm** (geralmente já incluído com o Node.js)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-notion-api.git
   cd desafio-notion-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Configuração

O projeto requer uma chave de API do Notion e o ID do banco de dados para funcionar. Eles já estão configurados no repositório para este desafio, mas em um projeto real, seriam armazenados em variáveis de ambiente.

```javascript
const notion = new Client({ auth: 'ntn_O35402416574dg7rojwpyRwVPcKnWaiyIfqPeySBshC7pS' });
const databaseId = '1290d303ccf9808d8697f7a3dc42ef3f';
```

## Estrutura do Projeto

O projeto é organizado em pastas seguindo o padrão **Controller-Service-Repository**:

```
desafio-notion-api/
├── src/
│   ├── controllers/
│   │   └── NotionController.js         # Controla as requisições e respostas
│   ├── services/
│   │   └── NotionService.js            # Lógica de negócios e validações
│   ├── repositories/
│   │   └── NotionRepository.js         # Interage com a API do Notion
│   ├── utils/
│   │   └── ApiResponse.js              # Padronização das respostas
│   └── app.js                          # Configuração do express e rotas
└── server.js                           # Inicializa o servidor
```

### Explicação das Camadas

- **Controller**: Lida com as requisições HTTP e chama o **Service** para processar a lógica. Retorna uma resposta padronizada usando `ApiResponse`.
- **Service**: Contém a lógica de negócios e validações. Ele chama o **Repository** para realizar operações específicas.
- **Repository**: Interage diretamente com a API do Notion, encapsulando os detalhes de implementação.

## Endpoints

### 1. Criar um novo registro
- **Rota**: `POST /create`
- **Descrição**: Cria um novo registro no banco de dados do Notion.
- **Parâmetros**: Corpo da requisição deve conter `properties` (objeto com os dados do registro).
- **Exemplo de Requisição**:
  ```json
  POST /create
  {
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": "Novo Registro"
            }
          }
        ]
      }
    }
  }
  ```

### 2. Buscar um registro pelo ID
- **Rota**: `GET /retrieve/:id`
- **Descrição**: Busca um registro específico pelo ID.
- **Parâmetros**: `id` (ID do registro no Notion).
- **Exemplo de Requisição**:
  ```json
  GET /retrieve/{id}
  ```

### 3. Atualizar um registro pelo ID
- **Rota**: `PATCH /update/:id`
- **Descrição**: Atualiza um registro específico pelo ID.
- **Parâmetros**: `id` (ID do registro), `properties` (dados atualizados).
- **Exemplo de Requisição**:
  ```json
  PATCH /update/{id}
  {
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": "Registro Atualizado"
            }
          }
        ]
      }
    }
  }
  ```

### 4. Excluir um registro pelo ID
- **Rota**: `DELETE /delete/:id`
- **Descrição**: Exclui um registro específico pelo ID.
- **Parâmetros**: `id` (ID do registro).
- **Exemplo de Requisição**:
  ```json
  DELETE /delete/{id}
  ```

## Execução

Para rodar a API localmente, utilize o seguinte comando:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

## Boas Práticas e Padrões Adotados

- **Clean Code**: Código limpo, com funções e métodos bem nomeados, que facilitam o entendimento e a manutenção.
- **Controller-Service-Repository Pattern**: Este padrão promove a separação de responsabilidades, tornando o código modular e escalável.
- **Padronização das Respostas**: Todas as respostas seguem um padrão (`ApiResponse`), facilitando o consumo e a depuração da API.
- **Organização em Camadas**: Cada camada possui uma responsabilidade única (Controller para rotas, Service para lógica de negócios, Repository para comunicação com o Notion).
- **Consistência nas Rotas e Verbos HTTP**: Utilização de rotas e métodos HTTP consistentes para indicar as operações (CRUD) que estão sendo realizadas.

## Contato

Para dúvidas ou sugestões, entre em contato com [seu-email@exemplo.com](mailto:seu-email@exemplo.com).

---

Esse projeto foi desenvolvido como parte de um desafio para uma vaga de Desenvolvedor(a) Full-Stack.
