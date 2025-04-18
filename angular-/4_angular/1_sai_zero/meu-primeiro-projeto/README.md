# MeuPrimeiroProjeto


- Para esse projeto
    - Comando para criar o projeto, ng é como o npm mas para angular ``` no cmd = ng new meu-primeiro-projeto ```
    - Foi escolhido CSS
    - Sem SSR e SSg
        - Como não escolheu nenhum desses, é um projeto SPA(Single Page Application), aplicações web em que o usuário interage com uma única página html, e o JS/TS manipula a página tirando e colocando componentes
        - Se tirar o funcionamento do JS da página, não aparece nada
    - Rodar o projeto ``` npm run start ```  -> que vai rodar o comando no "start" no "script do arquivo package.json

- Criar um novo componente pela CLI do angular
    - no cmd -> ``` ng generate component components/home ```, cria um novo componente na pasta component dentro da pasta app com nome de home

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
