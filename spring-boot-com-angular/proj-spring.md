- Projeto exemplo CRUD base spring boot, sem DTO -- https://www.youtube.com/watch?v=vWw7GVbicTc&list=PLtII2Mw41oA0LLJgLVeyRWO5IPUtdfRth&index=6

- Playlist do curso -- https://www.youtube.com/playlist?list=PLtII2Mw41oA0LLJgLVeyRWO5IPUtdfRth

## Projeto Spring Boot com Angular

- Uso do Spring boot, Spring Security, Spring Data JPA
- Uso do Angular
- Back-End é uma API Restful
- Stateless -> não manter sessão entre front e back


- ### Dependências
    - Spring Web
    - Lombok
    - Data JPA
    - MySql
    - Spring Security -- colocou depois -- está em baixo dos testes a explicação

- ### Pastas projeto
    - entity        -> classes do banco de dados
    - repository    -> contém as interfaces que implementam o acesso a dados
    - service       -> classes que fazem a regra de negócio
    - controller    -> agrupa classes que se comunicam externamente, recebe requisição HTTP e faz response para quem chamou
    - dto           -> é utilizado para encapsular e transferir dados entre as diferentes camadas da aplicação

    Repository se comunica com o banco de dados, ela deveolve os dados para service e a service processa e devolve os dados para controller que vai devolver para quem fez a requisição externa

---

- ### Estrutura Básica de uma requisição HTTP
    - **Request HTTP** -- Requisição do front ou do postman
        - URL: Endpoint da API a ser consumida
        - VERBO: GET, PUT, DELETE ou POST
            - GET, PUT e DELETE tem a requisição por id também
        - HEADER: Outros pârametros eventuais
        - BODY: JSON do dado a ser enviado

    - **Response HTTP** -- Resposta do servidor para requisição
        - STATUS: 200 = OK / 400 = BAD REQUEST
        - BODY: JSON do dado recebido

---

- ### Spring Data JPA
    - Para persistir os dados no banco de dados
    - Usado no repository, escrevendo menos código

---


- ### Relacionamentos e Cardinalidades com JPA
    - Os relacionamentos definem como as entidades estão conectadas, enquanto a cardinalidade determina quantas instâncias de uma entidade podem estar relacionadas a instâncias de outra entidade
    - **Relacionamentos:**
        - OneToOne
        - OneToMany
        - ManyToOne
        - ManyToMany
    - **Cardinalidades:**
        - 1:1 (Um para Um)
        - 1:1 (Um para Um)
        - M:1 (Muitos para Um)
        - M:N (Muitos para Muitos)

---

- ### Lombok
    - Bom para diminuir o código como o uso em cima das entity:
        ```java
        @Data       // para get e set
        @NoArgsConstructor
        @AllArgsConstructor
        ```

---

- ### application.properties
    - É um arquivo de configuração usado em aplicações Java, especialmente no Spring Boot, para definir parâmetros essenciais da aplicação, como portas, conexões com bancos de dados, variáveis de ambiente e outros ajustes
    - **Config MySq**l no application.properties
        - Para funcionar só precisa criar o banco carros no cmd do mysql
            - **Entrar** no **mysql command line client**, colocar a senha e digitar ->
            ``create database carros;``
        
        ```java
        spring.jpa.hibernate.ddl-auto=update
        spring.datasource.url=jdbc:mysql://localhost:3306/carros
        spring.datasource.username=root
        spring.datasource.password=root
        spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
        ```

---

- ### Entity
    - **Annotations ->**
        - Em cima da class ``@Entity``
            - ``@Entity`` -> é para falar que é uma tabela no banco de dados, representar uma entidade no banco
            - ``@Table( name = "nome_tabela" )`` -> opcional para colocar o nome da tabela do banco de dados

        - Para o id ``@Id`` e ``@GeneratedValue``
            - ``@GeneratedValue`` -> define a estratégia de geração de valor (p. ex. AUTO, IDENTITY, SEQUENCE, TABLE). Se não especificar, usa AUTO

    - #### **Com mapeamento objeto-relacional**

        **Relação Carro → Marca (Many-to-One)**

        No lado *Carro*, que possui a chave estrangeira para Marca:
        > Da para fazer assim ``@ManyToOne( cascade = CascadeType.ALL )``, que quando for mandar no JSON já manda tudo junto

        ```java
        @ManyToOne
        @JoinColumn(name = "marca_id")
        private Marca marca;
        ```
        ---

        **Relação Marca → Carro (One-to-Many)**

        No lado *Marca*, que mapeia a lista de carros:
        > Atenção: `@JoinColumn` só é usada no lado que possui a chave estrangeira.

        ```java
        @OneToMany(mappedBy = "marca")  // nome do atributo em Carro
        private List<Carro> carros;
        ```
        ---

        **Relação Carro ↔ Proprietário (Many-to-Many)**

        No lado *Carro* (dono da tabela de junção):
        > Boa prática: declarar `joinColumns` e `inverseJoinColumns` para controlar a criação da tabela intermediária.

        ```java
        @ManyToMany
        @JoinTable(
            name = "carro_proprietario",                                    // nome da tabela intermediária
            joinColumns = @JoinColumn(name = "carro_id"),                   // FK para Carro
            inverseJoinColumns = @JoinColumn(name = "proprietario_id")      // FK para Proprietário
        )
        private List<Proprietario> proprietarios;
        ```

        No lado *Proprietário*:
        > Observe que `@JoinTable` não é reaplicada aqui, pois já foi definida em Carro.

        ```java
        @ManyToMany(mappedBy = "proprietarios")
        private List<Carro> carros = new ArrayList<>();
        ```
        ---

        - ## Pense em quem, no seu caso de uso, é o ponto de partida para associar a outra entidade: esse é o lado dono da tabela de junção

---

- ### Controller
    - **Annotations ->**
        - Em cima da class ``@RestController`` e ``@RequestMapping( "/calculos" )``
        - Instanciar com ``@Autowired`` para que o spring boot reconheça que só é necessário instanciar um único objeto dessa classe para ser usado no controller, e não ficar criando vários
        - ``@GetMapping``, ``@PostMapping``, ``@PutMapping``, ``@DeleteMapping`` -> colocar em cima do método para especificar qual o verbo HTTP que será utilizado
        - ``@ResponseBody`` -> para pegar o valor da requisição pelo body dela em formato JSON
        - ``@PathVariable`` -> para pegar o valor(id) do caminho do endpoint = localhost:8080/carro/findById/1

    - **Instanciar o service**
        ```java
        @Autowired
        private CarroService carroService;
        ```

    - **Tipo de retorno** dos métodos **da controller** é ``ResponseEntity`` e o tipo de dado, que retorna o que precisa junto com o status(OK, BAD REQUEST...) 

    - **Inserir Valor - POST**
        ```java
        @PostMapping("/save")
        public ResponseEntity<String> save( @ResponseBody Carro carro ) {
            try {

                String mensagem = this.carroService.save( carro );
                return new ResponseEntity<Strign>( mensage, HttpStatus.OK );

            } catch ( Exception e ) {
                return new ResponseEntity<String>( "Erro ao salvar", HttpStatus.BAD_REQUEST )
            }
        }
        ```

    - **Atualizar o valor - PUT**
        ```java
        @PutMapping("/update/{id}")
        public ResponseEntity<String> update( @ResponseBody Carro carro, @PathVariable long id  ) {
            try {

                String mensagem = this.carroService.update( carro, id );
                return new ResponseEntity<Strign>( mensage, HttpStatus.OK );

            } catch ( Exception e ) {
                return new ResponseEntity<String>( "Erro na atualização", HttpStatus.BAD_REQUEST )
            }
        }
        ```

    - **Pegar todos os Valores - findAll**
        ```java
        @GetMapping("/findAll")
        public ResponseEntity< <List<Carro>> > findAll( ) {
            try {
                
                List<Carro> lista = this.carroService.findAll();
                return new ResponseEntity<>( lista, HttpStatus.OK );

            } catch ( Exception e ) {
                return new ResponseEntity<String>( "Erro ao buscar os dados", HttpStatus.BAD_REQUEST )
            }
        }
        ```

    - **Achar Valor por Id - findById**
        ```java
        @GetMapping("/findById/{id}")
        public ResponseEntity<String> findById( @PathVariable long id ) {
            try {

                Carro carro = this.carroService.findById( id );
                return new ResponseEntity<>( carro, HttpStatus.OK );

            } catch ( Exception e ) {
                return new ResponseEntity<String>( "Erro na busca por Id", HttpStatus.BAD_REQUEST )
            }
        }
        ```

    - **Deletar Valor - DELETE**
        ```java
        @DeleteMapping("/delete/{id}")
        public ResponseEntity<String> delete( @PathVariable long id ) {
            try {

                String mensagem = this.carroService.delete( id );
                return new ResponseEntity<Strign>( mensage, HttpStatus.OK );

            } catch ( Exception e ) {
                return new ResponseEntity<String>( "Erro ao deletar", HttpStatus.BAD_REQUEST )
            }
        }
        ```

---

- ### Repository
    - É uma **interface** define a assinatura de métodos para interação com o banco de dados, e o **Spring Data JPA** (ou outras tecnologias de acesso a dados) se encarrega de fornecer a implementação dessas operações

    - Define os **métodos para operações CRUD** (Create, Read, Update, Delete) e outras operações específicas que você pode querer realizar no banco de dados
    

    Estende o JpaRepository e passa o que vai ser salvo, e o tipo de dado do ID

    ```java
    public interface CarroRepository extends JpaRepository< Carro, long > {

    }
    ```

---

- ### Duas formas principais de customizar consultas no Spring Data JPA

    1.  **Métodos Automáticos (Query Derivation):** O Spring Data JPA gera consultas SQL automaticamente com base na nomenclatura dos métodos que você declara na interface do seu repositório.
    2.  **JPQL (Java Persistence Query Language):** Você escreve consultas explicitamente usando JPQL, uma linguagem orientada a objetos (entidades e atributos JPA), dentro da anotação `@Query` no seu repositório.

    - #### **Consultas Customizadas SEM JPQL (Métodos Automáticos)**
        - Você declara um método na sua interface de repositório seguindo convenções de nomenclatura. - **O Spring Data JPA interpreta o nome do método e gera a consulta correspondente.**
            > o jpa com o spring entende o que o método faz apartir do nome do método, segue regras estritas baseadas nas convenções de nomenclatura que você utiliza

        ```java
        public interface CarroRepository extends JpaRepository<Carro, Long> {

            // Exemplo 1: Filtrar pelo nome do carro
            // SELECT c FROM Carro c WHERE c.nome = ?1
            List<Carro> findByNome(String nome);
            /*
            * - "findBy": Indica uma operação de busca.
            * - "Nome": O Spring Data JPA procura um atributo chamado "nome" (case-insensitive
            *           para a primeira letra, mas geralmente se usa CamelCase como na entidade)
            *           na entidade `Carro`.
            * - "(String nome)": O valor passado para este parâmetro será usado na
            *                    cláusula WHERE para comparar com o atributo `c.nome`.
            */

            // no service coloca que recebe o id da marca, instancia uma marca vazia e seta o id dele como o id que vem da controller e coloca essa marca instanciada passando de parâmetro no findByMarca -> findByMarca( marca )
            List<Carro> findByMarca(Marca marca);
            
            List<Carro> findByMarcaNome(String nomeDaMarca);

            List<Carro> findByAnoGreaterThan(int ano);
        }
        ```
    ---

    - #### **Consultas UTILIZANDO JPQL**
        - **JPQL**: SQL orientado a objetos, baseado em entidades JPA.
        - **Conversão**: JPA/Hibernate traduz JPQL para SQL nativo.
        - **`@Query`**: Use quando a consulta for complexa (`>`, `<`, `LIKE`, `JOIN`, etc).

        ```java
        public interface CarroRepository extends JpaRepository<Carro, Long> {

            // Consulta JPQL explícita para buscar carros de um ano específico
            // Note: "Carro" é o nome da Entidade, "c" é um alias.
            // "c.ano" refere-se ao atributo "ano" da entidade Carro.
            // ":anoParam" é um placeholder para o valor que será passado pelo método.
            @Query("FROM Carro c WHERE c.ano = :anoParam")
            List<Carro> encontrarCarrosPorAnoEspecifico(int anoParam);

            // Consulta JPQL para buscar carros cujo nome da marca contenha uma string (LIKE)
            @Query("SELECT c FROM Carro c WHERE c.marca.nome LIKE %:nomeMarcaTrecho%")
            List<Carro> encontrarPorTrechoNomeMarca(String nomeMarcaTrecho);

            // Você também pode usar a anotação @Param para nomear os parâmetros
            // se os nomes na query e no método forem diferentes ou para clareza.
            @Query("FROM Carro c WHERE c.modelo = :modeloCarro AND c.ano > :anoFabricacao")
            List<Carro> encontrarPorModeloEAnoAcimaDe(@Param("modeloCarro") String modelo, @Param("anoFabricacao") int ano);
        }
        ```
    ---

    > Independentemente de como a consulta é definida no Repository (automática ou JPQL), a forma de chamá-la a partir da camada de Service e expô-la na camada de Controller é a mesma

    - Exemplo service parcial
    ```java
    public List<Carro> buscarCarrosPorNome( String nome ) {
        return carroRepository.findByNome(nome);                    // Chama o método do repositório
    }

    public List<Carro> buscarCarrosPorAno( int ano ) {
        return carroRepository.encontrarCarrosPorAnoEspecifico(ano);    // Chama o método com JPQL
    }
    ```

    - Exemplo controller parcial
    ```java
    @GetMapping("/por-nome")
    public ResponseEntity<List<Carro>> getCarrosPorNome( @RequestParam String nome ) {
        List<Carro> carros = carroService.buscarCarrosPorNome(nome);
        return ResponseEntity.ok(carros);
    }

    @GetMapping("/por-ano")
    public ResponseEntity<List<Carro>> getCarrosPorAno( @RequestParam int ano ) {
        List<Carro> carros = carroService.buscarCarrosPorAno(ano);
        return ResponseEntity.ok(carros);
    }
    ```

    - #### ``@RequestParam:`` Usado para extrair parâmetros da query string da URL. Ex: /api/carros/por-nome?nome=Fiesta
        - **No postman** -> /api/carro/finidByNome?nome=abc -> **vai no Params** -> key: nome | value: abc
            - Filtra os carros com nome abc

---

- ### Service
    - **Annotations ->**
        - Em cima da classe ``@Service``

    - **Instanciar o service**
        ```java
        @Autowired
        private CarroRepository carroRepository;
        ```

    - **Método de save**
        ```java
        public String save(Carro carro) {

            // carroRepository -> possui automaticamente o save, delete, findAll ...
            this.carroRepository.save( carro );
            return "Carro salvo com sucesso";
        }
        ```

    - **Método de update** ⭐
        ```java
        public String update(Carro carro, long id) {
            // Recebe o objeto Carro com os novos dados e o id do registro a ser alterado
            // Não existe um método específico de update no repositório; usamos save()
            // Para atualizar, atribuímos o mesmo id ao objeto e chamamos save()
            // quando faz isso ele entende que já existe o objeto e o banco de dados da um update

            carro.setId(id);
            this.carroRepository.save(carro);
            return "Carro atualizado";
        }
        ```

    - - **Método de findAll**
        ```java
        public List<Carro> findById() {

            // retorna uma lista de carros, e não recebe nada

            Carro carro = this.carroRepository.findById( id );
            return carro;
        }
        ```

    - **Método de findById**
        ```java
        public Carro findById(long id) {

            Carro carro = this.carroRepository.findById( id );
            return carro;
        }
        ```

    - **Método de delete** - deleteById
        ```java
        public String delete(long id) {

            // Só precisa do id para deletar
            this.carroRepository.deleteById( id );
            return "Deletado com sucesso";
        }
        ```
    
---

- ### Postman - Requisições
    - **Post**
        - Selecionar o tipo POST
        - Na URL -> ``http://localhost:8080/carro/save``
        - Selecior em baixo -> Body -> raw -> JSON
        - Escrever um JSON com os mesmos atributos da class
            ```json
            {
                "anoFabricacao": 1999,
                "marca": "Marca do carro",
            }
            ```

        - Com o ``@ManyToOne( cascade = CascadeType.ALL )``
            ```json
            {
                "nome": "carro1",
                "modelo": "modelo1",
                "marca": {
                    "nome": "marquita",
                    "descricao": "aaaaaaa"
                }
            }
            ```

    - **GET** de findById
        - Selecionar o tipo GET
        - Na **URL passar o ID** -> ``http://localhost:8080/carro/findById/3``
        - Não precisa selecionar nada, porque ele vai retornar um dado, e não enviar

---

- ### Testes Automatizados 
    - Uma **etapa do build**(compilação da aplicação gerando arquivos que podem ser enviados para produção)
    - A aplicação precisa passar nos testes para que o build seja concluído
    - Conseguir identificar falhas no back-end
    - Diferentes de teste de observação, pré-programa o sistema para identificar falhas, bugs e erros automaticamente
    - Sempre testar todos os casos de usos ou as funcionalidades mais críticas - definir um nível de % de cobertura de teste (50% a 70% da área da aplicação)

    - **Testes unítarios / teste de unidade:** Testar a menor parte de um código = um método
    - **Teste de integração:** são realizados para verificar se diferentes partes de um software (módulos ou componentes) interagem corretamente entre si, garantindo que o software funcione como esperado quando todas as partes são combinadas
        - interação entre componentes
        - comunicação entre microserviços
        - interação com o banco de dados

    - **Cultura/Metodologia de desenvolvimento TDD** -> Começa a desenvolver uma aplicação apartir dos testes 

    - **Asserts Principais do JUNIT:**
        > Quase todos pussuem a versão deles com **Not**, como o ``assertNotNull()``
        - **assertEquals():** Verifica se dois valores são iguais.
        - assertNotEquals(): Verifica se dois valores são diferentes.
        - assertNull(): Verifica se um objeto é nulo.
        - assertSame(): Verifica se dois objetos são os mesmos.
        - assertTrue(): Verifica se uma condição booleana é verdadeira.
        - fail(): Indica que um teste falhou.
        - **assertThrows():** Verifica se um determinado tipo de exceção é lançada durante a execução de um bloco de código
        - assertTimeout(): Verifica se um bloco de código é executado dentro de um determinado tempo limite 

    - #### **Ferramentas e locais de teste**
        - **JUNIT + MOCKITO** -> JUNIT é um framework de testes automatizados para java(consegue executar testes também) e MOCKITO é uma biblioteca para simular/mocar dados
        - **JACOCO** -> verificação de cobertura de teste (%)
        - Dependência pow -> spring-boot-starter-test
            - Vem junto com o spring web
            - Já tem o JUNIT e o MOCKITO

    - #### Testes
        - ⭐ **Testes de regra de négocio testa na service**

        - ##### **Testes Unitários**
            - Não coloca visibilidade -> private, public ...
            - Não retorna nada, sempre é void
            - Em um a classe de teste com a **annotation ``@SpringBootTest``**

            ```java
            @Test
            void cenario01() {
                // lógica do que quer testar, podendo testar como em uma soma e um valor vem nulo, vai continuar com os que não são nulos ou não? 
                // Era pra dar erro ou não? Se era pra dar erro está retornando uma exception? ....

                    // PRIMEIRO PARAMENTRO -> valor que espera  |  SEGUNDO PARAMENTRO -> valor que deu
                assertEquals( 10, retorno );
            }
            ```

            ```java
            @Test
            void cenario02() {
                // Ou se vc espera que esse teste de um problema

                    // espera que de um erro(exception) quando tentar somar com elementos que tenha nulo no meio
                assertThrows( Exception.class, () -> {
                    int retorno = this.calculoService.somar(lista);
                } );
            }
            ```

        - ##### **Testes de Integração e uso do Mockito**
            - Não coloca visibilidade -> private, public ...
            - Não retorna nada, sempre é void
            - Em um a classe de teste com a **annotation ``@SpringBootTest``**
            - Nem todo teste de integração precisa de Mock
            - ``@MockBean`` -> para fazer o mock, e precisa configurar ainda
            - Da para fazer em quanquer classe, como service e controller

            ```java
                // colocar isso para não acessar o banco de dados
            @SpringBootTest(properties = {
                    "spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration,org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration"
            })
            public class CalculoControllerTest {

                @AutoWired
                CalculoController calculoController;

                // Mock do repository, para ele não acessar o banco de dados
                    // melhor usar o  @MockitoBean  -> porque o MockBean não vai mais existir
                @MockBean
                CalculoRepository calculoRepository;

                    // findAll -> chama o service que chama o repository que chama o service e volta para a controller
                @Test
                void canerio01() {
                    // retornar uma lista fixa para o repository quando o findAll for chamado
                    List<Saida> lista = new ArrayList<>();
                    lista.add( new Saida(1, 5, 3) );
                    lista.add( new Saida(2, 6, 7) );

                    when( calculoRepository.findAll() ).thenReturn( lista );


                    ReponseEntity<List<Saida>> retorno = this.calculoController.findAll();

                    // verificar se deu certo
                    assertEquals( HttpStatus.OK , retorno.getStatusCode());
                    // verificar o tamanho da lista
                    assertEquals( 2, retorno.getBody().size() );
                }
            }
            ```

            - Da para criar um método que vai ter o mock para vc conseguir reutilizar sem reescrever tudo de novo
            ```java
                // Vai ser executado antes de cada teste
            @BeforeEach
            void setup() {
                List<Saida> lista = new ArrayList<>();
                lista.add( new Saida(1, 5, 3) );
                lista.add( new Saida(2, 6, 7) );

                    // obj da classe saida
                Saida saida = new Saida(1, 50, 100);

                    // mock do findAll
                when( calculoRepository.findAll() ).thenReturn( lista );
                    // findById -> vai pegar o que tem id 1 Long e retornar o obj saida
                when( calculoRepository.findByID( 1L ) ).thenReturn( Optional.of( saida ) );
            }

                // E NÃO PRECISA COLOCAR MAIS NADA DENTRO DOS MÉTODO DE TESTE QUE PRECISAM DESSE MOCK
            ```

        - ##### **Code Coverage com Jacoco**
            - Não é uma Dependência, coloca no lugar de plugins dentro do build
                ```
                <build>
                    <pluginManagement>
                        <plugins>
                            <plugin>
                                <groupId>org.jacoco</groupId>
                                <artifactId>jacoco-maven-plugin</artifactId>
                                <version>0.8.10</version>
                            </plugin>
                        </plugins>
                    </pluginManagement>
                    <plugins>
                        <plugin>
                            <groupId>org.jacoco</groupId>
                            <artifactId>jacoco-maven-plugin</artifactId>
                            <executions>
                                <execution>
                                    <goals>
                                        <goal>prepare-agent</goal>
                                    </goals>
                                </execution>
                                <execution>
                                    <id>report</id>
                                    <phase>test</phase>
                                    <goals>
                                        <goal>report</goal>
                                    </goals>
                                </execution>
                            </executions>
                        </plugin>
                    </plugins>
                </build>
                ```

            - Ajuda para que não aconteça o build se algum teste der errro  
            - ### Gerar o jacoco no projeto -> ``mvn clean test``
                - Vai **aparecer na pasta tarjet** uma **pasta site** e entrando nas pastas e só rodar o **index**
                - PAra atualizar o jacoco, tem que fazer o ``mvn clean test`` de novo

---

- ### DTOs (Data Transfer Objects)

    - DTOs isolam sua API das entidades JPA.
    - Mapper centraliza regras de conversão.
    - Service recebe/retorna DTOs.
    - Controller expõe somente DTOs.


---

- ### Validação de Entrada (Bean Validation)
    - Um mecanismo padronizado de validação de beans (objetos), baseado em anotações

    - Coloca anotações de restrição nos campos da sua classe (por exemplo, ``@NotNull, @Size, @Email``) e, ao receber o objeto (via @RequestBody, por exemplo), adiciona @Valid no parâmetro do método do controller. O Spring invoca automaticamente o validator e, se houver violações, lança uma MethodArgumentNotValidException, que normalmente resulta em um HTTP 400 (Bad Request)

    - Bean Validation (JSR 380) com Hibernate Validator: anotações (@NotNull, @Size, @Email, etc.) + @Valid para ativar validação automática no Spring MVC.
        - @**NotNUll, @Size -> usar no entity ou DTOs**

    - @Valid: aciona a validação de um bean; pode ser complementado por BindingResult ou @Validated.

    - @Transactional: gerencia transações de banco – início, commit e rollback automático.

---

- ### Documentação de API com Swagger/OpenAPI

    - **Documentação automatizada:** Gera uma documentação legível da API com base no código.
    - **Interface interativa (Swagger UI):** Permite testar os endpoints diretamente no navegador.
    - **Facilita a comunicação:** Ajuda desenvolvedores front-end, back-end e QA a entenderem a API.
    - **Padrão aberto (OpenAPI):** Facilita integração com outras ferramentas (Postman, serviços externos, geração de SDKs etc).
    - **Atualização automática:** Sempre que os controladores mudam, a documentação reflete essas mudanças.

    - Dependência: 
        ```
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.1.0</version>
        </dependency>
        ```

    - Acessar a interface Swagger
        Após iniciar a aplicação, acesse:
            ``http://localhost:8080/swagger-ui.html``
    

---

- ### Containerização com Docker

    - Criar um arquivo na raiz do projeto com nome ``Dockerfile``
    - **Dockerfile**
        ```
        FROM eclipse-temurin:21-jdk
        WORKDIR /app
        COPY target/*.jar app.jar
        EXPOSE 8080
        ENTRYPOINT ["java", "-jar", "app.jar"]
        ```

    - ``mvn clean package``
    - ``docker-compose up --build``

    - Ou se não tiver um docker que roda tudo ->
        - rodar no terminal -> ``docker build -t proj-back-javasb .`` (proj-back-javasb -> vc escolhe quer dar)
        - rodar o container -> ``docker run -p 8080:8080 proj-back-javasb``

    - **Acessar a aplicação:**
        - Pode acessar o swagger -> http://localhost:8080/swagger-ui.html
        - E pode acesssar os endpoints

---

- ### Spring Security
    - Framework de segurança para nossa api contido no ecossistema spring
    - **Não adiante criar regras de login somente no front se o back ficar desprotegido**
    
    - **Dependência**
        - Só de incluir no pow, todos os endpoints ficam bloqueados automaticamente
        ```
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        ```
    - Implementa classes de configuração
    - ##### Erros
        - **ERRO HTTP 401** -- exception unauthorized -- não está autenticado
        - **ERRO HTTP 403** -- exception forbiden -- está autenticado mas não autorizado

- ### JWT
    - **JSON WEB TOKEN (JWT)** é um método para autenticação entre sistemas
        - **TOKEN -> um hash, uma string que é um resultado de criptografia**, só da para decodificar por completo se vc tiver a chave secreta que foi ussada para assinar o TOKEN
        - Usuário faz login com usuário e senha no front
        - O spring security intercepta, verifica se este usuário existe e, se sim, cria e retorna um token de liberação de acesso
        - O token fica guardado  no LOCALSTORAGE do cliente(navegador)
            - Ele é mandado no HEADER de toda requisição(exceto logar)

    - **Dependência** -> jjwt-api, jjwt-impl e jjwt-jackson são as dependências necessárias para criar, assinar e validar JWTs
        ```
           <dependency>
                <groupId>io.jsonwebtoken</groupId>
                <artifactId>jjwt-api</artifactId>
                <version>0.11.5</version>
            </dependency>
            <dependency>
                <groupId>io.jsonwebtoken</groupId>
                <artifactId>jjwt-impl</artifactId>
                <version>0.11.5</version>
                <scope>runtime</scope>
            </dependency>
            <dependency>
                <groupId>io.jsonwebtoken</groupId>
                <artifactId>jjwt-jackson</artifactId>
                <version>0.11.5</version>
                <scope>runtime</scope>
            </dependency>
        ```

    - **A partir da autenticação**, **toda** e **qualquer requisição HTTP** precisa **conter o TOKEN JWT  NO HEADER** da requisição HTTP
        - Para cada endpoint que o front tentar requisitar, o token deverá ser enviado na requisição (HEADER AUTHORIZATION)
        - O spring security irá interceptar a requisição, verificar se tem token válido e se este token foi gerado por este back-end

    - **Request HTTP** -> requisição do front ou do postman
        - **URL:** endpoint da api
        - **Verbo:** GET, PUT, DELETE, POST
        - **Header:** *TOKEN JWT*
        - **Body:** JSON do dado a ser enviado
    
    - Possuem:
        - **Header ->** tem a informação que não usa, o tipo do primeiro algoritmo usado para embaralhar e o tipo de token
        - **Payload ->** configura no back-end no arquivo que gera tokens, que informações quer junto com o token( nome, email... ), que pode decodificar e utilizar em algo no projeto 
        - **Verify signature ->** verificar a chave secreta

    - Implementa classes de configuração no back-end e no front-end


