## Felipe Dantas - Teste Node JS Junior

#### Prepare seu ambiente com a instalação dos seguintes programas:
##### Docker Desktop
##### Docker Compose
##### Node.Js

#### Atenção, mantenha o padrão de Portas e Credênciais para que não ocorra problemas de conexão, por padrão, mantive as seguintes portas para os containers:
##### client: `3000`
##### server: `5000`
##### db: `3306`
##### adminer: `8080`

#### Caso seja necessário modificações, altere nos arquivos: 
``docker-compose.yml``
`` server.js``
`` database.js ``

##### Após a instalação dos programas, extraia o repositório em alguma pasta e acesse a mesma pelo cmd, por lá insira o seguinte comando:

 ```docker-compose up```
 
#### Em seguida, acesse o container **adminer** para importamos o banco de dados: `db_cntl` 

#### Suas configurações estarão de acordo com as pré-definidas no arquivo ``docker-compose.yml``
##### Servidor: `db`
##### Usuário: `root`
##### Senha: `root`

#### Após logar no adminer, acesse a base de dados `db_cntl` e importe o arquivo que está na raíz do repositório `db_cntl`. Ao importar iremos ter a tabela `tb_cadastros`, agora a API do Node com o MySQL irá funcionar corretamente. Basta atualizar o container **server**.

#### Feito isso, basta acessar o container **client** e realizar um cadastro.

##### Para acessar os usuários cadastrados acesse:
> localhost:5000/routes/select



