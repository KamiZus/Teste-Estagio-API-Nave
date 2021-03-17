# Teste de Estágio Nave RS

## Descrição do Projeto
<p>API para controle de Funcionários e Projetos através de banco de dados</p>

### Escolhas de desenvolvimento:

- Node.js
- Express
- MySQL

### Features previstas:

- Registrar funcionários e projetos para controle de funções
- Permitir que o cliente seja capaz de ver todos os Funcionários e Projetos cadastrados, junto com suas informações da empresa

#### Importante

- Verificar o arquivo `conexao.js` ao configurar o banco de dados
- Confirmar o formato `json` ao realizar requisições de POST para a API
- No desenvolvimento foi utilizado o programa POSTMAN para realizar os testes de requisições.
- Segue abaixo o modelo designado para as requisições:

NAVERS:
<br>
```json
{
    "name": "Ciclano",
    "birthdate": "1995-05-28",
    "admission_date": "2020-06-17",
    "job_role": "Desenvolvedor",
    "projects": [5, 10]
}
```<br><br>
PROJETOS:
```json
{
    "name": "Projeto Legal",
    "navers": [3, 5, 7, 9]
}
```
<br>


# Teste de Estagio de Back-End para Nave-RS

Este projeto tem o objetivo de organizar e controlar atraves de um banco de dados N:N os desenvolvedores e projetos que estão ativos na empresa, permitindo sempre que necessário, ser capaz de conferir quais os desenvolvedores estão participando de cada projeto existente.

# Instalação

O banco de dados escolhido para ser utilizado nesta API foi o MySQL, sendo assim, para configuração verificar corretamente o arquivo `conexao.js` contido neste repertório para um link certeiro com o banco de dados a ser utilizado.

Ao realizar a inicialização da API, ela automaticamente criara a base de todas as tabelas necessarias, sendo preciso apenas o preenchimento delas atraves de suas funções de requisição.

### Inicialização:
- Run `npm start` para dar inicio à API 


## Guia rápido de Utilização e Testes
`INFO: lembrar de seguir o modelo de requisições definidos na tag "Importante" descrito neste README`

Rotas definidas para a API:
- Navers
    /Store
    Esta rota permite a utilização do POST para realizar cadastros dos Navers em sua tabela, permitindo tambem a linkagem do mesmo com seus projetos.

    /Index
    Nesta rota, atraves de um GET, receberá uma listagem de todos os Navers cadastrados na tabela com suas informações proprias da empresa.

    /Show/`id`
    Através desta rota, utilizando o Id do Naver cadastrado, poderá receber informações especificas deste Naver junto com as informações dos projetos o qual ele participa.

- Projetos
    /Store
    Esta rota permite a utilização do POST para realizar cadastros dos Projetos em sua tabela, permitindo tambem a linkagem do mesmo com seus Navers participantes.

    /Index
    Nesta rota, atraves de um GET, receberá uma listagem de todos os Projetos cadastrados na tabela com suas informações.

    /Show/`id`
    Através desta rota, utilizando o Id do Projeto cadastrado, poderá receber informações especificas deste projeto junto com as informações dos Navers participantes do mesmo.

