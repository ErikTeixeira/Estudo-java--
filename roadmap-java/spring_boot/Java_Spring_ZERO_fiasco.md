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
     - é um grupo de issue, um grupo de problemas que se resolver atinge um objetivo
     - cria uma milestone e atribui issues a ela

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

## Criar uma class Controller de teste

- colocar a annotation de ``@RestController`` -> para dizer que isso é um controller e trazer várias coisas junto
- colocar a annotation de ``@RequestMapping`` -> para colocar a rota

- Uma rota teste
    - coloca o ``@GetMapping("/boasVindas")`` para pegar informações
        ```
        public String boasVindas() {
            return "Essa é minha primeira mensagem nessa rota";
        }
        ```

## class Model

- UsuarioModel na pasta model
    - colocar a annotation @Entity da **dependência do spring JPA (Java Persistence API)**, para conseguir trabalhar com persistencia de dados no banco de dados
        - transforma uma classe em uma entidade no banco de dados
    - colocar a annotation @Table( name = "tb_nome_tabela" )
    - colocar os atributos: id, nome, idade, email...
    - deixar o id funcional com jpa e incremental
        - colocar a annotation @Id
        - colocar a annotation @GeneratedValue e passar a estrategia que vai usar para gerar o id
            ``@GeneratedValue( strategy = GenerationType.IDENTITY)`` -> simples
        

### Sobrescrever o commit -- amend
- Fez o commit e deu push, mas quer enviar agora algo que faltou no nesse commit
    - **Commits são imutáveis**, não adianta tentar excluir ou modificar, com o ammend ele troca o commit(muda o hash do commit)
    - o commit que foi sobrescrito ainda existe, mas não é acessível e depois de um tempo o git exclui ele por causa do git garbage collection
    ``git commit --amend``
    ``git push --force``

### Relacionamento de tabela

- como atribui uma única tarefa a um usuário e como atribui vários usuários a uma tarefa
    - @OneToMany
        ```java
        // uma tarefa vai ter varios usuarios, uma lista de usuarios
        @OneToMany
        private List<UsuarioModel> usuario;
        ```
    - @ManyToOne
        ```java
        // um usuário tem uma unica tarefa
        @ManyToOne      // Muitos usuarios vão ter uma tarefa
        private TarefasModel tarefas;
        ```

    - Colocar uma **chave estrangeira** que serve para relacionar 2 ou mais tabelas que se unem
        - Mapear as tabelas, colocando a coluna da outra classe que está conectando
            ```java
            @OneToMany( mappedBy = "tarefas" )
            private List<UsuarioModel> usuario;
            ```
        
        - **@JoinColumn** juntar as duas colunas(usuarios com tarefas) e criar outra coluna
            - tarefas_id -> é a chave estrangeira
            ```java
            @ManyToOne
            @JoinColumn( name = "tarefas_id" )
            private TarefasModel tarefas;
            ```


