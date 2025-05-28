- Playlist do curso -- https://www.youtube.com/playlist?list=PLtII2Mw41oA0LLJgLVeyRWO5IPUtdfRth

## Projeto Spring Boot com Angular

- É em typescript, mas ele não roda no navegador, ele é transpilado(compilação) para javascript

- **Gerar o projeto**
    - Instalar a versão 17 no pc
        ``npm install -g @angular/cli@17``
    - Gerar o projeto
        ``ng new aula``

- **Rodar o projeto**
    - ``ng server`` **->** ``ng s``

- **Gerar component**
    - ``ng generate component compoenents/carroslist`` **->** ``gn g c compoenents/carroslist``


- ### Arquiteturas Suportadas
    - Single-Page Application (SPA)
        - **Descrição**: Aplicação web de página única. Todo o carregamento inicial traz o *bundle* da aplicação, e a navegação interna não recarrega a página, apenas atualiza componentes.
        - **Vantagens**:
        - Experiência de usuário fluida.
        - Menos requisições completas ao servidor.
        - **Desvantagens**:
        - SEO(Search Engine Optimization) e tempo de carregamento inicial podem ser desafiadores.

    - Server-Side Rendering (SSR) / Angular Universal
        - **Descrição**: Renderização do HTML no servidor antes de enviar ao cliente.
        - **Vantagens**:
        - Melhor SEO.
        - Tempo até conteúdo interativo reduzido.
        - **Como usar**: `ng add @nguniversal/express-engine`

---

- ### Componentização

    - **Conceito**: Componentes são blocos reutilizáveis de UI + lógica.
    - **Estrutura**:
        - Classe TypeScript (`.ts`)
        - Template HTML (`.html`)
        - Estilos CSS/SCSS (`.css`/`.scss`)
    - **Decoração**:
        ```ts
        @Component({
        selector: 'app-exemplo',
        templateUrl: './exemplo.component.html',
        styleUrls: ['./exemplo.component.css']
        })
        export class ExemploComponent {}
        ```

---

- ### 1º Passo

    - Limpar o app.component.html -> só deixar o ``<router-outlet />``
    - Colocar a rota
        ```typescript
        export const routes: Routes = [
                // colocar isso para se não tiver uma rota no início leva para carros
            {path: "", redirectTo: "carros", pathMatch: "full"},
            {path: "carros", component: CarrosListComponent},
        ];
        ```

    - Criar pastas dentro da ``app``
        - components
        - models
        - services

    - Criar o component
        ng generate component compoenents/carroslist

    - Criar a model
        - ng g class models/carro
        - Colocar atributos que tem no back-end
            - não tem necessidade de encapsulamento no front
            ```typescript
            export class Carro {
                // para não precisar inicializar -> !
                id!: number;
                nome!: string;
                marca!: string;
            }
            ```

- https://www.youtube.com/watch?v=bZzy57Jo3mk&list=PLtII2Mw41oA0LLJgLVeyRWO5IPUtdfRth&index=17&t=867s