# klickpages

<img alt="Klickpages" src="https://static-public.klickpages.com.br/uploads/media/file/1632609/klickpages.png" />

## Configuração do banco de dados postgres. 
Crie o banco de dados com o nome "klick_pages".
Acesse o arquivo `ormconfig.json` na raiz do projeto, altere as credencias para acesso ao banco de dados.
```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "docker",
  "database": "klick_pages",
````

### Instalção de dependencias 
Clone o projeto para o seu workspace, em seguida, navegue até o diretório raiz do projeto e, execute o seguinte comando `yarn` no seu terminal para instalar todas as dependências.

### Inicializando a aplicação
Execute no terminal o seguinte comando `yarn dev:server`

### Rotas da aplicação
- **`POST /clients`**: 
Cadastro de clientes rota publica
  ○ Recebe o nome, email e identificador do formulário
  ○ O nome é obrigatório
  ○ O email é obrigatório
  ○ O email deve seguir um padrão de email válido
  ○ Não pode existir mais de um cliente com o mesmo email
  ○ Retorna o identificador, nome, email, data do cadastro e o identificador do formulário

- **`POST /sessions`**:
Login rota publica
  ○ O email é obrigatório 
  ○ O password é obrigatório
  ○ Retorna token para ser utilizado no header `authorization bearer` para conseguir consumir as próximas rotas que são privadas.

- **`GET /clients`**: 
Listagem de clientes rota privada
  ○ Retorna uma lista contendo o identificador, nome, email, data do primeiro cadastro e o nome da(s) tag(s) associada(s) de cada cliente
  ○ A listagem de clientes é paginada de modo que quem esteja consumindo a API saiba se existem ou não mais páginas

- **`POST /forms`**: 
Cadastro de formulários rota privada
  ○ Recebe o nome do formulário e o identificador da tag
  ○ O nome é obrigatório
  ○ O identificador da tag é ser um identificador válido
  ○ Não pode existir mais de um formulário com o mesmo nome
  ○ Retorna o identificador, nome, data de cadastro e o identificador e o nome da tag associada

- **`POST /tags/`**: 
Cadastro de tags rota privada
  ○ Recebe o nome da tag
  ○ O nome é obrigatório
  ○ Não pode existir mais de uma tag com o mesmo nome
  ○ Retorna o identificador, nome e data de cadastro

### Específicação dos testes

<h4 align="center">
  ⚠️ Antes de rodar os testes, crie um banco de dados com o nome "klick_pages_test" para que todos os testes possam executar corretamente ⚠️
</h4>_tes
