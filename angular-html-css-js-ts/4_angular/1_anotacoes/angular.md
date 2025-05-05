- Configs do projeto passado
    - Comando para criar o projeto, ng é como o npm mas para angular ``` no cmd = ng new meu-primeiro-projeto ```
    - Foi escolhido CSS
    - Sem SSR e SSg
        - Como não escolheu nenhum desses, é um projeto SPA(Single Page Application), aplicações web em que o usuário interage com uma única página html, e o JS/TS manipula a página tirando e colocando componentes
        - Se tirar o funcionamento do JS da página, não aparece nada
    - Rodar o projeto ``` npm run start ```  -> que vai rodar o comando no "start" no "script do arquivo package.json

- Criar um novo componente pela CLI do angular
    - no cmd -> ``` ng generate component components/home ```, cria um novo componente na pasta component dentro da pasta app com nome de home

- Criar um service
    - Utilizado para conseguir utilizar um método de um componente no outro
    - no cmd ``` ng generate service services/enviaForm ```, pode ser assim tmb ``` ng g s services/enviaForm ```

---

- tsconfig.app.json
    - Configurações para o projeto

- tsconfig.spec.json
    - Configurações para rodar os testes


---

- ### Projeto - Angular17  - sem testes unitários
    - ```npx -p @angular/cli@17 ng new product-store --skip-tests```
    - Escolheu Sass = SCSS  - para estilizar
    - Escolheu não = SSR e SSg

    - espera criar o projeto e roda ele  ```npm start```

    - Usa a biblioteca **Angular Material**  ```ng add @angular/material```
        - ### Sempre Lembrar que está com essa biblioteca, pois entrando no site tem vários códigos base para coisas diferentes já prontos
        - Facilitar a construção de interfaces de usuário em aplicações Angular, proporcionando componentes pré-construídos que seguem as diretrizes do Material Design do Google

    - Uso do for no html  -> *ngFor e @for  -> @for é do angular 17 e o track é obrigatório
        - *ngFor é a diretiva tradicional, útil para iterações simples, enquanto @for é a nova sintaxe para fluxo de controle, que oferece vantagens em termos de desempenho, simplicidade e legibilidade

    - Gerar o componente Header - ```npx ng g c shared/components/header``` , g = generate c = componente

    - #### header
        - Importar o componente Header no app.componente.ts  -- imports: [RouterOutlet, HeaderComponent],
        - No app.componente.html  -- apagar o que tinha e colocar ```<app-header></app-header>```
        - header.component.ts  -- importar MatToolbarModule (é um módulo do Angular Material que fornece um componente de barra de ferramentas (toolbar) para a construção de interfaces de usuário)
        - no header.component.html colocar o conteúdo dele dentro do ``` <mat-toolbar> <p> OI </p> </mat-toolbar> ```
        - criou a estilização no -- styles.scss e no header.component.scss

    - #### lista de produtos
        - criou o component -- npx ng g c features/list
        - vincular esse component em um roteamento -- no app.routes.ts colocar -> ``{ path: '', component: ListComponent }``
        - no app.component.html  adicionar -> ``<router-outlet> </router-outlet>``  -> para renderizar o component

    - #### Configurando JSON Server
        - **JSON Server** 
            - é uma ferramenta Node.js que **permite criar uma API RESTful simulada** a partir de um arquivo JSON. É uma maneira rápida e fácil de testar o frontend de uma aplicação sem a necessidade de um backend real. Funciona como um servidor local que responde a requisições HTTP (GET, POST, PUT, DELETE) e retorna dados em formato JSON

        - na raiz do projeto, criar o arquivo -> db.json
        - instalar o json server no projeto -> npm i -D json-server
        - rodar o json server local -> npx json-server db.json

        - colocar no app.config.ts -> provideHttpClient() no providers: []
            - para conseguir usar requisição http pelo angular
        - criar um proxy para mapear diferentes hosts por diferentes barramentos como o '/products' levar para o json server
            - na raiz do projeto criar um arquivo -> proxy.config.json
            - configurar com o target = url do server, e pathRewrite = remover o /api da requisição
            - ir no angular.json -> serve -> embaixo de configurations -> criar option
                ```
                "options": {
                    "proxyConfig": "proxy.config.json"
                },
                ```
            - reiniciar o projeto angular


        - fazer um código simples no ListComponent no list.component.ts para carregar o json, use -> httpClient = inject( HttpClient );
        - e arrumar a renderização do html no list.component.html

    - #### Refatorar = colocando a requisição em um service para que não chame o httpclient em vários componentes, para o component só ter a responsabilidade de renderizar
        - ``npx ng g s shared/services/products``
        - colocar o httpCLient = inject(HttpClient); nele
        - colocar o ngOnInit() nele com nome de getAll, remover o subscribe e dar return, e criar uma interface para colocar um tipo no get
        - vai mudar o ListComponent colocando no lugar de httpClient = inject( HttpClient );  -> productsService = inject( ProductsService );  e mudar o ngOnInit()

    - #### Pasta interfaces na pasta shared
        - Para criar as tipagens
            - product.interface.ts  ->  tipar os dados do json product, para colocar no getAll

    - #### Estilizar os produtos
        - Usa o angular Material -> procurar por card -> colocar no list.component.html -> para funcionar tem que importar no list.component.ts o MatCardModule e o MatButtonModule

    - #### Component para reutilizar o card do produto
        - Ao inves de colocar o card do material dentro do @for, cria um component de card para ser listado
        - ``npx ng g c features/list/components/cards``  -> não fica no shared porque só vai ser usado em um lugar
        - coloca no html o código do card, e no arquivo .ts coloca os import do Material que estavam no list.component.ts nele
        - para receber o produto, coloque no cards.component.ts  -> ``product = input<Product>()``  -> ter o input para ter a reatividade o signal
        - vai dar erro no html no {{ product.title }}, porque é um signal, e para acessar um objeto dentro de um signal, precisa rodar a função signal -> {{ product()?.title }}
            - **O input é algo opcional, como tmb tem o '?' no product()?**
            - para forçar ser obrigatorio -> ``product = input.required<Product>();`` -> **usa required** e tira o '?' do product().title
        - da para fazer desse jeito tmb -> no card.component.ts colocar ``productTitle = computed(() => this.product().title);`` e no html colocar ``{{ productTitle() }}``
            - computed -> é uma função que escuta outros signals e sempre que o signal mudar ele recomputa (roda novamente dentro dele e rotorna o signal atualizado)
            - **e vai precisar ter ainda o ``product = input.required<Product>();`` junto com o productTitle**
    
        - Para usar esse component no list.component.ts, tem que importar nele o component do card
        - E colocar no html assim
           ```
            @for (product of products; track product.id) {
                <app-cards [product]="product" ></app-cards>
            }
            ```
    - #### Navegação para criar um produto
        - colocar no list.component.html  -> <a [routerLink]="['/create-product']" > Criar Produto </a>
        - importar o RouterLink no list.component.ts

    - #### Componente para cadastrar produto - é um roteamento
        - ``npx ng g c features/create``
        - colocar no app.routes outro objeto para a rota do CreateComponent para o botão de link funcionar
        - usar o **Lazy Loading** -- é usado para **otimizar o carregamento da aplicação**, melhorando o desempenho
            ```
                {
                    path: 'create-product',
                    loadComponent: () =>
                        import('./features/create/create.component').then(m => m.CreateComponent),
                }
            ```

