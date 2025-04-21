- Para o projeto
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
- Projeto - Angular17  - sem testes unitários
    - ```npx -p @angular/cli@17 ng new product-store --skip-tests```
    - Escolheu Sass = SCSS  - para estilizar
    - Escolheu não = SSR e SSg

    - espera criar o projeto e roda ele  ```npm start```

