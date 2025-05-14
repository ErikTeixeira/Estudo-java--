## Iniciar um proojeto

- ``ng new nome-projeto``
- escolher o SCSS como estilo
- escolheu que não quer o SSR e SSG

    #### Rodar projeto
    ``npm start``

notion - https://conteudos.kipperdev.com.br/aprenda-angular-do-zero

## Estrutura Componente
```
    import { Component } from '@angular/core';
    import { RouterOutlet } from '@angular/router';

    @Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    // template: `
    // <h1>Olá Mundo</h1>
    // `
    })
    export class AppComponent {
    title = 'inicio-angular';
    }
```

- O componente tem que ter component no nome

- Tem o @Component com as configurações
    - O **selector** é o nome como o componente é chamado em outro componente ou html
        ``<app-root></app-root>``
    - O **imports** está relacionado ao **standalone**, se colocar standalone false da erro no imports
    - Standalone é um comportamento dos módulos do angular
    - Da para passar o html inteiro dentro do @Componente invez de passar **templateUrl**
        - o templateUrl é obrigatório e o styleUrl não é


### NgModule vs Standalone
**O que é um NgModule?**

Um NgModule é uma classe fundamental no Angular, marcada com o decorador **`@NgModule`**. Esse decorador define um objeto de metadados que diz ao Angular como compilar os componentes e criar o injetor em tempo de execução.

**Standalone Components**

Por outro lado, componentes standalone, introduzidos em versões mais recentes do Angular, permitem que você crie componentes, diretivas e pipes que não dependem de um NgModule. Isso pode simplificar o desenvolvimento, especialmente em pequenas aplicações ou em componentes que são usados de forma isolada.

## Criar novos componentes

``ng generate component NOME_AQUI``  -->  ``ng g c NOME_AQUI`` 

Cada componente tem as seguintes propriedades principais:

- Um decorador**`@Component`** que contém a configuração principal do component
- Um modelo HTML que controla o que é renderizado no DOM
- Um seletor CSS que define como o componente é usado em HTML
- Uma classe TypeScript com comportamentos como gerenciamento de estado, manipulação de entrada do usuário ou busca de dados de um servidor.

## Templates e Data Binding

No Angular, a exibição de dados dinâmicos na view é feita através do Data Binding
Isso permite que você vincule dados entre a classe TypeScript (.ts) e o template HTML (.html). Quando os dados na classe TypeScript mudam, a view é automaticamente atualizada para refletir essas mudanças

> O data binding em si é o mecanismo que permite sincronizar dados entre o modelo e o template html

- **Interpolação ({{ }}):** Permite a exibição de dados de variáveis no template.
    ```<h1>{{ title }}</h1>```
​
- **Property Binding ([ ]):** Liga uma propriedade DOM a uma expressão.
    ```<img [src]="imageUrl">```
​
- **Event Binding (( )):** Liga um evento DOM a um método no componente.
    ```<button (click)="handleClick()">Click me</button>```