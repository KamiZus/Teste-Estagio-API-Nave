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
```
<br><br>
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
- Navers<br>
    /Store <br>
    Esta rota permite a utilização do POST para realizar cadastros dos Navers em sua tabela, permitindo tambem a linkagem do mesmo com seus projetos.

    /Index <br>
    Nesta rota, atraves de um GET, receberá uma listagem de todos os Navers cadastrados na tabela com suas informações proprias da empresa.

    /Show/`id` <br>
    Através desta rota, utilizando o Id do Naver cadastrado, poderá receber informações especificas deste Naver junto com as informações dos projetos o qual ele participa.

- Projetos <br>
    /Store <br> 
    Esta rota permite a utilização do POST para realizar cadastros dos Projetos em sua tabela, permitindo tambem a linkagem do mesmo com seus Navers participantes.

    /Index <br>
    Nesta rota, atraves de um GET, receberá uma listagem de todos os Projetos cadastrados na tabela com suas informações.

    /Show/`id` <br>
    Através desta rota, utilizando o Id do Projeto cadastrado, poderá receber informações especificas deste projeto junto com as informações dos Navers participantes do mesmo.

## Dificuldades e minhas Experiencias de realizar este Teste

Devo dizer que nem tudo ficou 100% nesta API, mas mesmo assim dei do meu maximo para realiza-la.
Em questão de dificuldades e problemas ao cria-la, houveram muitas, ja que nunca havia tido um devido contato real com Node.js e nem mesmo com uma API, sendo assim com a oportunidade, fui atras de tudo possivel para rapidamente aprender sobre e ser capaz de cria-lo. Sei que não está ao maximo que pode chegar, mas ainda assim estou Feliz com o que fui capaz de fazer sem nenhuma experiencia.

Mas dentro de todas essas funções, minhas principais dificuldades, uma delas foi na de organizar corretamente uma arquitetura visual correta, onde dados serem definidos em seus devidos lugares para melhor apresentação.
Algumas tags de funções do JavaScript que nunca havia tido contato ainda, foram um pouco complicadas de entender sua funcionalidade e como utiliza-la da maneira correta (sendo algumas: `Promises` e `Async/Await`)

Existem algumas pontas soltas neste projeto a quais até o prazo não fui capaz de solucionar, que seriam:

- Há um erro ocorrendo no POST no qual o console do VS Code define um erro em uma Promise, porem mesmo com essa apresentação de erro a requisição funciona normalmente.

- Através do POST é possivel criar duplicações de informações na tabela, ja que não consegui definir corretamente para realizar um teste para verificar se as informações ja existem na tabela antes de inseri-la.

- Ao realizar um cadastro de um Naver com uma id de projeto inexistente, o cadastro ainda sera realizado, porem não adicionando o link deste projeto inexistente, mas no caso de haver mais projetos e serem existentes eles iram ser linkados. Isto tambem acontece no caso contrario, no cadastro de um Projeto com a Id de Navers o qual participam.

Dentre pontas soltas, todas estas seriam as que se destacam, mas sendo possivel existir mais devido minha inexperiencia.

Finalizando este projeto, ainda continuo em meus estudos para resolver tudo e aprimorar a forma de realizar esse tipo de projeto.
