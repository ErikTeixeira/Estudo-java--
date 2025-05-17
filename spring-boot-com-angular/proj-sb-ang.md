## Projeto Spring Boot com Angular

- Uso do Spring boot, Spring Security, Spring Data JPA
- Uso do Angular
- Back-End é uma API Restful
- Stateless -> não manter sessão entre front e back


- ### Dependencias
    - Spring Web
    - Lombok
    - Data JPA
    - MySql


- ### Pastas projeto
    - entity        -> classes do banco de dados
    - repository    -> contém as interfaces que implementam o acesso a dados
    - service       -> classes que fazem a regra de negócio
    - controller    -> agrupa classes que se comunicam externamente, recebe requisição HTTP e faz response para quem chamou
    - dto           -> é utilizado para encapsular e transferir dados entre as diferentes camadas da aplicação

    Repository se comunica com o banco de dados, ela deveolve os dados para service e a service processa e devolve os dados para controller que vai devolver para quem fez a requisição externa


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


- ### Spring Data JPA
    - Para persistir os dados no banco de dados
    - Usado no repository, escrevendo menos código


- ### Lombok
    - Bom para diminuir o código como o uso em cima das entity:
        ```java
        @Data       // para get e set
        @NoArgsConstructor
        @AllArgsConstructor
        ```


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


- ### Entity
    - **Annotations ->**
        - Em cima da class ``@Entity``
            - ``@Entity`` -> é para falar que é uma tabela no banco de dados, representar uma entidade no banco
        - Para o id ``@Id`` e ``@GeneratedValue``
            - ``@GeneratedValue`` -> é para passar uma estratégia de como deve gerar o id


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


- ### Repository
    - É uma **interface** define a assinatura de métodos para interação com o banco de dados, e o **Spring Data JPA** (ou outras tecnologias de acesso a dados) se encarrega de fornecer a implementação dessas operações

    - Define os **métodos para operações CRUD** (Create, Read, Update, Delete) e outras operações específicas que você pode querer realizar no banco de dados
    

    Estende o JpaRepository e passa o que vai ser salvo, e o tipo de dado do ID

    ```java
    public interface CarroRepository extends JpaRepository< Carro, long > {

    }
    ```


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

    - **GET** de findById
        - Selecionar o tipo GET
        - Na **URL passar o ID** -> ``http://localhost:8080/carro/findById/3``
        - Não precisa selecionar nada, porque ele vai retornar um dado, e não enviar

