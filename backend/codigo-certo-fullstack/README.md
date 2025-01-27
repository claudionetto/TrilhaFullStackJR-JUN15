# Gerenciador de Projetos | Back-end 💻

<p style="text-align: center;">
    <b>
        A aplicação web permitirá aos usuários listar,
        cadastrar, editar e excluir projetos, cada um contendo um título 
        e uma descrição.
    </b>
</p>

<p style="text-align: center;">
  <img src="https://img.shields.io/static/v1?label=spring&message=framework&color=green&style=for-the-badge&logo=SPRING"/>
  <img src="http://img.shields.io/static/v1?label=Java&message=17&color=red&style=for-the-badge&logo=JAVA"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>


## Tópicos

- [Tecnologias](#-tecnologias)
- [Iniciando o projeto](#-instalação)
- [Uso da API](#-uso-da-api)
  - [Documentação](#documentação)
  - [Endpoints](#endpoints)
- [Contribuição](#-contribuições)
- [Contato](#-contato)

## 📝 Funcionalidades

- **Registro de Usuário**: Permite que novos usuários se registrem na API fornecendo nome de usuário, email e senha.
- **Login**: Autentica usuários existentes e emite um JWT de acesso.
- **Acesso a Recursos Protegidos**: Os endpoints que exigem autenticação só podem ser acessados com um JWT válido.
- **Registro, edição e exclusão de Projetos**: Informando um JWT válido o usuário pode fazer as devidas modificações em seus projetos.

## 💻 Tecnologias

- **Linguagem:** Java 17
- **Gerenciador:** Maven
- **Framework:** Spring Boot 3.2.5
- **Conteinerização:** Docker
- **Segurança:** Spring Security
- **Autenticação:** JWT (JSON Web Token)
- **Banco de Dados:** PostgreSQL
- **Documentação:** Swagger UI

## 🚀 Instalação

Certifique-se de ter o JAVA 17 e o Maven instalados
O Banco de dados utilizado é o Postgres, você pode utilizar ele localmente ou utilizar o Docker.

### Clonando o Repositório

1. **Clone o repositório:**
```bash
git clone https://github.com/claudionetto/TrilhaFullStackJR-JUN15.git
```

2. **Acesse o diretório do projeto:**
```bash
cd backend/codigo-certo-fullstack
```

### Configurando o banco via docker

1. **Suba o Postgres através do arquivo docker-compose:**
```bash
docker compose up -d
```

### Configure o application.properties

Atual:

```properties
  spring.application.name=codigo-certo-fullstack
  server.servlet.context-path=/api
  spring.profiles.active=${SPRING_PROFILES_ACTIVE}
```

Você precisa configurar uma variavel de ambiente chamada:
SPRING_PROFILES_ACTIVE <br>
que deve conter algum profile (dev ou prod), que chama o seu application.properties específico,
se deseja continuar sem configurar outras variaveis aconselho trocar esse campo para dev:

```properties
    spring.profiles.active=dev
```

### Construindo e iniciando o projeto

1. **Construa o projeto com o Maven:**
```bash
mvn clean install
```

2. **Execute a aplicação:**
```bash
mvn spring-boot:run
```

## 📍 Uso da API

### Documentação

Após iniciar a aplicação, acesse a documentação da API através do Swagger UI:

http://localhost:8080/swagger-ui/index.html

### Endpoints

A documentação do Swagger fornece detalhes sobre os endpoints da API, incluindo:

#### Auth

- **POST** ``/api/auth/register``: Registra um novo usuário.
- **POST** ``/api/auth/login``: Realiza o login do usuário e retorna o tokens JWT.
- **GET** ``/api/auth/me``: Endpoint protegido que retorna informações do usuário (requer autenticação).

#### User

- **GET** ``/api/users``: Lista todos os usuários
- **GET** ``/api/users/{user-uuid}``: Busca um usuário pelo uuid
- **PUT** ``/api/users/{user-uuid}``: Atualiza as informações básicas
- **PATCH** ``/api/users/{user-uuid}/email``: Altera o email
- **PATCH** ``/api/users/{user-uuid}/username``: Altera o username
- **PATCH** ``/api/users/{user-uuid}/password``: Altera o password
- **DELETE** ``/api/users/{user-uuid}``: Deleta o usuário

#### Alguns outros endpoints

- **GET** ``/api/users/{user-uuid}/projects``: Busca os projetos de um usuário
- **DELETE** ``/api/users/{user-uuid}/projects/{project-id}``: Deleta um projeto do usuário 


### Exemplos de uso 

**POST ``/api/auth/register``**

**REQUEST**
```json
{
  "name": "Claudio",
  "surname": "Netto",
  "username": "claudinho",
  "email": "her-email@gmail.com",
  "password": "123123123"
}
```

**POST ``/api/auth/login``**

**REQUEST**
```json
{
  "username": "claudinho",
  "password": "123123123"
}
```

**RESPONSE**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGF1ZGluaG8iLCJpYXQiOjE1MTYyMzkwMjJ9.xFK9eC7sEkxAU9XcO7iSsJU1N4wijcT2PGx1YTZkgNE"
}
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

[📝 Como criar um pull request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Padrão de commit](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## 📫 Contato

Claudio Netto Junior - cnetto147@gmail.com
