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

## Playlist  --  https://www.youtube.com/playlist?list=PLXEUJjGpEX7zwdFSAzIPiSf9p0tOeI1Yu
## Github projeto da Code Dimension  --  https://github.com/code-dimension/mini-curso-angular-17

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
        - **rodar o json server local -> ```npx json-server db.json```**

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
        - **card component -> é um dumb component**
            - É um componente apresentacional, focado somente em exibir dados e disparar eventos. Ele não contém lógica de negócio nem sabe de onde os dados vêm — ele apenas recebe inputs e emite outputs
                - ✅ Recebe dados via @Input()
                - ✅ Emite eventos via @Output()
                - ❌ Não faz requisições HTTP ou manipula serviços diretamente
                - ❌ Não tem lógica de negócio complexa
            
            - Vantagens dos Dumb Components:
                - Fáceis de testar
                - Reutilizáveis
                - Mais simples de manter
                - Seguem o princípio da separação de responsabilidades

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

        - **Formulário para cadastrar produto com Reactive Forms**
            - no create.component.ts 
                ```typescript
                // retorna null
                form = new FormGroup({
                    title: new FormControl<string>( '', { 
                    nonNullable: true,
                    validators: Validators.required,
                    }),
                });
                ```

            - importar o ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule no create.component.ts
            
            - no create.component.html, criar um form, estilos no create.component.scss, usando a class form-controller

                ```html
                <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form-container" >
                    <!-- formControlName -> vincular um campo no formulario, consegue capturar o form control do form group -->

                        <!-- é certo colocar a ação no form e não no botão do form -->
                    <mat-form-field (ngSubmit)="">
                        <mat-label>Input</mat-label>
                        <input matInput type="text" formControlName="title" placeholder="Título" >
                    </mat-form-field>

                    <button type="submit" mat-raised-button >Salvar</button>
                </form>
                ```

                - método de salvar no create.component.ts, bom começar com 'on' quando é usado em aventos assim, que chama um método
                    - onSubmit() {}

                - ir no products.service.ts
                    - criar o post
                    - não precisa enviar o id
                    - usar o **Omit do typescript** na interface de Product para não ter o id
                        - cria uma interface, **usou type**, que é mais flexível porem não tem algumas funcionalidades de interface -> 
                        ```typescript
                        import { Product } from "./product.interface";
                            // da para omitir mais de um  -> 'id' | 'title'
                        export type ProductPayload = Omit<Product, 'id'>;
                        ```
                    ```typescript
                    post( payload: ProductPayload) {
                        return this.httpClient.post('/api/products', payload);
                    }
                    ```
                
                - antes de arrumar o onSubmit, precisa injetar o service no create.component.ts
                    - productService = inject(ProductService);
                    ```typescript
                        // quando apertar em salvar, vai chamar o post do service,
                        // e ele vai receber um objeto de tipo payload
                    onSubmit() {
                        this.productService.post({
                        title: this.form.controls.title.value
                        })
                        .subscribe((response) => {
                        console.log(response);
                        });
                    }
                    ```
                - ##### Mostrando feedback ao usuário  -> usa o snackbar do angular material
                    - ir no create.component.ts , e injetar esse service
                        ``matSnackBar = inject(MatSnackBar);``
                        ```typescript
                        onSubmit() {
                            this.productService.post({
                            title: this.form.controls.title.value
                            })
                            .subscribe((response) => {
                            this.matSnackBar.open('Produto criado com sucesso!', 'Ok', {
                                duration: 3000,
                                horizontalPosition: 'right',
                                verticalPosition: 'top',
                            });
                            });
                        }
                        ```
                - Rotiar de volta para a página inicial
                    - injetar o router no create.component.ts
                        ``router = inject(router);``
                    - this.router.navigate ou this.router.navigateByUrl
                        ```typescript
                        onSubmit() {
                            this.productService.post({
                            title: this.form.controls.title.value
                            })
                            .subscribe((response) => {
                            this.matSnackBar.open('Produto criado com sucesso!', 'Ok', {
                                duration: 3000,
                                horizontalPosition: 'right',
                                verticalPosition: 'top',
                            });
                                    // o path ''  -> é similar a /
                            this.router.navigateByUrl('/');
                            });
                        }
                        ```
                
                - Padronizar as configurações do Mat Snackbar
                    - no app.config.ts no providers ->
                        ```typescript
                        {
                            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
                            useValue: {
                                duration: 3000,
                                horizontalPosition: 'right',
                                verticalPosition: 'top',
                            }as MatSnackBarConfig, // coloca isso para tipar como MatSnackBarCOnfig
                        }
                        ```
                        - Ou cria uma const de SNACK_BAR_CONFIG no app.config.ts e coloca ela no providers

                    - no onSubmit() {} fica assim
                        ```typescript
                        onSubmit() {
                            this.productService.post({
                            title: this.form.controls.title.value
                            })
                            .subscribe((response) => {
                            this.matSnackBar.open('Produto criado com sucesso!', 'Ok');

                            this.router.navigateByUrl('/');
                            });
                        }
                        ```

    - #### Aplicação é iniciada no main.ts, e o ``bootstrapApplication(AppComponent, appConfig)``, passa o AppComponent e o appConfig
        - o **appConfig** é um **arquivo que permite configurar a aplicação**, especialmente para as **versões mais recentes do Angular**, como a partir da versão 17
        - app.config.ts substitui o tradicional app.module.ts e a app.component.ts para configurações de nível global

    - #### Componente para editar produto
        - criar component ``npx ng g c features/edit``
            - nos components do edit, primeiro foi copiado quase tudo do create e colado no edit, tanto coisas do arquivo de ts e html
            - fica mais simples fazer isso, do que um arquivo com uma lógica if para quando ser create, ou edit ...
        - adicionar o rotiamento no app.routes.ts -> está incompleto por enquanto
            ```typescript
            {
            path: 'edit-product',
            loadComponent: () =>
                import('./features/edit/edit.component')
                .then(m => m.EditComponent),
            },
            ```
        - no card.component.ts, acrescentar o @Output() edit
            ``@Output() edit = new EventEmitter();``
        - no card.component.html, colocar no button a chamada dele
            ``<button mat-button (click)="edit.emit()" >Editar</button>``
        - no list.component.ts
            - injetar o router -> ``router = inject(Router);``
            - criar o método onEdit
                ```typescript
                onEdit(product: Product) {
                    this.router.navigateByUrl('/edit-product');
                }
                ```
            - no list.component.html, colocar o edit no ``<app-cards>``
                ``<app-cards [product]="product" (edit)="onEdit()" ></app-cards>``
        
        - no product.service.ts, criar o getId e o put
            ```typescript
            getId(id: string) {
                return this.httpClient.get<Product>(`/api/products/${id}`);
            }
            ```
            ```typescript
            put( id: string, payload: ProductPayload) {
                return this.httpClient.put(`/api/products/${id}`, payload);
            }
            ```
            - no app.routes.ts, colocar para receber o id no path
                ``path: 'edit-product/:id'``
                - resolve -> já pega os dados antes mesmo do component edit ser inicializado
                    ```typescript
                    {
                        path: 'edit-product/:id',
                        resolve: {
                            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                                const productService = inject(ProductsService);

                                return productService.get(route.paramMap.get('id') as string);
                            }
                        },
                        loadComponent: () =>
                            import('./features/edit/edit.component').then(m => m.EditComponent),
                    },
                    ```
            
            - pegar o produto no edit.component.ts
                ``product: Product = inject(ActivatedRoute).snapshot.data['product'];``
                - arrumar o form e o onSubmit
                    - colocando no parâmetro o ``this.product.title`` e o ``this.product.id``
                
                - mudar o o list.component.html para passar um produto no onEdit
                    ``<app-cards [product]="product" (edit)="onEdit(product)" ></app-cards>``
                - mudar o list.component.ts, o onEdit
                    ```typescript
                    onEdit( product: Product ) {
                        this.router.navigate(['/edit-product', product.id]);
                    }
                    ```

    - Componente para reutilizar o fomulário de produto
        - ``npx ng g c shared/components/form``
            - no form.component.ts, colocar o form que tava no edit ts, e modificar
                ```typescript
                product = input<Product | null>(null);

                form!: FormGroup;

                ngOnInit(): void {
                    this.form = new FormGroup({
                        title: new FormControl<string>( this.product()?.title ?? '' , { 
                        nonNullable: true,
                        validators: Validators.required,
                        }),
                    });
                }
                ```
            - criar um métdoo no form.component.ts de onSubmit e colocar um @Output que envia um produto, com nome done porque submit é uma palavra reservada
                ``@Output() done = new EventEmitter<Product>();``
                ```typescript
                onSubmit() {
                    const product = this.form.value as Product;

                    this.done.emit(product);
                }
                ```
            - colocar os imports do edit ts do do form e o que tem no html do edit no do form
    - Reutilizar formulário de produto
        - tirar os imports e o form do edit.component.ts, e limpar o html do edit e colocar o app-form passando o produto
            ``<app-form [product]="product" (done)="onSubmit($event)" ></app-form>``
        - mudar o onSubmit, passando um product
            ```typescript
            onSubmit( product: Product ) {
                this.productService.put( this.product.id, product )
                .subscribe...
            ```
        - Fazer isso no component de create também

    - #### Componente para deletar produto
        - colocar no card html, o chamado do onDelete
            ``<button mat-button (click)="onDelete()">Deletar</button>``
        - colocar um output para o delete no card ts
            ``@Output() delete = new EventEmitter();``
        - colocar o onDelete()
            ```typescript
            onDelete() {
                this.delete.emit();
            }
            ```
        - fazer o app-card do component de list html escutar o delete
            ``(delete)="onDelete(product)"``
        - fazer um onDelete no list ts, que chama uma modal para perguntar se tem certeza
        - fazer um service ``ConfirmationDialogComponent`` **para o modal/dialog**, o html dele é com o materail do angular


---
    
- Assisti até o vídeo 25
            
