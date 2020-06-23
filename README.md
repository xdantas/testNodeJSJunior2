## Felipe Dantas - Teste Node JS Junior

#### 1. Prepare seu ambiente com a instalação dos seguintes programas:
###### Docker Desktop
###### Docker Compose
###### Node.Js

#### Atenção, mantenha o padrão de Portas e Credênciais para que não ocorra problemas de conexão, por padrão, mantive as seguintes portas para os containers:
###### client: `3000`
###### server: `5000`
###### db: `3306`
###### adminer: `8080`

###### Caso seja necessário modificações, altere nos arquivos: 
``docker-compose.yml``
`` server.js``
`` database.js ``

#### 2.2 Após a instalação dos programas, extraia o repositório e acesse ele pelo terminal, entre na pasta *client* e execute o seguinte comando: ```npm install```

#### 2.3 Após a instalação, acesse a pasta *server* e execute o comando: ```npm install``` novamente.

#### 2.4 Feito isso, retorne a raíz do projeto e execute o seguinte comando para criar os containers no docker:
 ```docker-compose up```
 
#### 3. Em seguida, acesse o container **adminer** para importamos o banco de dados: `db_cntl` 

##### Suas configurações estarão de acordo com as pré-definidas no arquivo ``docker-compose.yml``
###### Servidor: `db`
###### Usuário: `root`
###### Senha: `root`

#### 4. Após logar no adminer, acesse a base de dados `db_cntl` e importe o arquivo que está na raíz do repositório `db_cntl`. Ao importar iremos ter a tabela `tb_cadastros`, agora a API do Node com o MySQL irá funcionar corretamente. Basta atualizar o container **server**.

#### Feito isso, basta acessar o container **client** e realizar um cadastro.

##### Para acessar os usuários cadastrados acesse:
> localhost:5000/routes/select



