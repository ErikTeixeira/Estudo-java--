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
        - Facilitar a construção de interfaces de usuário em aplicações Angular, proporcionando componentes pré-construídos que seguem as diretrizes do Material Design do Google

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
        - e arruamr a renderização do html no list.component.html
