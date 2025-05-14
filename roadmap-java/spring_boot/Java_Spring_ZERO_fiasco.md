https://www.youtube.com/watch?v=n8_qrrc8WN4&list=PLhjsIhZXHpWYb0DbaS_FjGc5S-xnyMJtM&index=7

## Gerar Projeto - Spring Initializr

-- **Projeto de API** --

- Project = controla dependências = Maven(padrão)
- Language Java
- Spring Boot -> deixa o que já está selecionado
- Project Metadata
    - Group = Empresa controladora do projeto = ``` com.nomeDaEmpresa  ou  br.com.nomeDaEmpresa ```
    - Artifact = Nome da pasta do projeto
    - Name = Nome do projeto
    - Description = Descrição do projeto
    - Package name = Nome do pacote base do seu projeto Java, será o pacote principal onde sua aplicação vai começar
    - Packaging = Define o formato final do artefato que será gerado quando você compilar o projeto = ``` jar(padrão) ou war ```

- Dependencies = pode ser = ``` Spring Web Web, Spring Data JPA, Spring Boot DevTools, PostgreSQL Driver SQL, Validation I/O, Spring Security Security ```

## Issues
No github se cria Issues para dividir as responsabilidades, e dizer o que cada um está fazendo

- labels
     - used to categorize issues, pull requests, and discussions
- projects
     - é para ter a divisão de projetos, e colocar para qua é a issue
- milestone
     - é um grupo de issue

## Spring é um mapa de rotas

- Mapeia as rotas
    ``localhost:8080/minha-rota``
    ``localhost:8080/minha-rota2``
    ``localhost:8080/deletar``
    ``localhost:8080/adicionar``

## Configurar o postgreSQL
```
    spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
    spring.datasource.username=postgres
    spring.datasource.password=admin
    spring.datasource.driver-class-name=org.postgresql.Driver
```

## Criar uma class Controller

- colocar a annotation de ``@RestController`` -> para dizer que isso é um controller e trazer várias coisas junto
- colocar a annotation de ``@RequestMapping`` -> para colocar a rota

- Uma rota teste
    - coloca o ``@GetMapping("/boasVindas")`` para pegar informações
        ```
        public String boasVindas() {
            return "Essa é minha primeira mensagem nessa rota";
        }
        ```

tempo que parou -- 54:40


