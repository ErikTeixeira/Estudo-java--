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
- **Property Binding ([ ]):** Liga uma propriedade DOM(HTML) a uma expressão.
    ```<img [src]="imageUrl">```
​
- **Event Binding (( )):** Liga um evento DOM(HTML) a um método no componente. 
        - É o onClick do html, todos os do html funcionam só tirar o on
    ```<button (click)="handleClick()">Click me</button>```


## Principais diretivas

As diretivas são uma das funcionalidades mais poderosas e essenciais do Angular. 
Elas permitem que você adicione comportamento a elementos HTML e manipule o DOM de maneira declarativa. No Angular, as diretivas são classificadas em três tipos principais: **diretivas de componentes**, **diretivas estruturais** e **diretivas de atributos**.
- No Angular17 funciona esse e o debaixo -> @if | @for
- Antes do Angular17 só tinha o -> *ngif | *ngfor

Condicional if
```
    @if (a > b) {
        {{a}} is greater than {{b}}
    } @else if (b > a) {
        {{a}} is less than {{b}}
    } @else {
        {{a}} is equal to {{b}}
    }
```
​
Iteração for
```
    @for (item of items; track item.name) {
        <li>{{ item.name }}</li>
    } @empty {
        <li>There are no items.</li>
    }
```

## Por que usar Signals ( Angular17 ) ou RxJS ( Antes do Angular17 )?

**Signals** e **RxJS** são ferramentas poderosas no Angular que ajudam a lidar com a reatividade e o gerenciamento de estado de maneira mais eficiente.

### **RxJS (Reactive Extensions for JavaScript):**

RxJS é uma biblioteca para compor programas assíncronos e baseados em eventos usando observáveis. No contexto do Angular, RxJS é amplamente utilizado para:

•	**Gerenciamento de Fluxos de Dados Assíncronos:** RxJS permite lidar com dados assíncronos, como chamadas HTTP, WebSockets ou eventos do DOM.

•	**Reatividade:** RxJS promove a programação reativa, permitindo que você componha fluxos de dados de forma declarativa e reaja a mudanças de estado em tempo real.

•	**Manipulação de Fluxos Complexos:** Com operadores como map, filter, switchMap, você pode transformar, combinar e manipular fluxos de dados de maneira expressiva.


## Signals - Introduzido no Angular17

Um signal é um wrapper em torno de um valor que notifica os consumidores interessados quando esse valor muda. Sinais podem conter qualquer valor, de primitivos a estruturas de dados complexas.

```
const count = signal(0);

count.set(3);

count.update(value => value + 1);
```

- Usando o valor de um signal

```
<h3>Counter value {{counter()}}</h3>
```


## Effects

Os `signals` são úteis porque notificam os consumidores interessados quando eles mudam. Um efeito é uma operação que é executada sempre que um ou mais valores de sinal mudam.

```
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

# HTTP Fetch

Para realizar chamadas HTTP ao backend, vamos precisar usar um módulo especifico do Angular, o **`HttpClient`.**

- O HttpClient é fornecido usando a função auxiliar `provideHttpClient`, que a maioria dos aplicativos inclui nos provedores de aplicativos em`app.config.ts`.
    - CONFIGURAR DE FORMA GLOBAL NA APLICAÇÃO - NO `app.config.ts`

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

- Agora, para usar o HttpClient basta usarmos uma instância para realizar uma requisição.
    - Este é um service, **importante uso do Observable**

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  private apiUrl = 'https://cat-fact.herokuapp.com/facts';

  constructor(private http: HttpClient) { }

    // Observable -> valor assync, quando mudar ele notifica
  getCatFacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
```

- Agora podemos consumir o valor dentro do componente, usando o subscribe para esperar o retorno da chamada e então consumi-lo

```typescript
import { Component, OnInit } from '@angular/core';
import { CatFactsService } from './cat-facts.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css']
})
export class CatFactsComponent implements OnInit {

  catFacts: any[] = [];

    //pegando o service
  constructor(private catFactsService: CatFactsService) { }

    // usa o subscribe por causa do observable, que ele notifica quem fez o subscribe quando ele altera
    // com subscribe consegue pegar o valor e o erro
  ngOnInit(): void {
    this.catFactsService.getCatFacts().subscribe(
      (data) => {
        this.catFacts = data;
      },
      (error) => {
        console.error('Erro ao obter fatos sobre gatos:', error);
      }
    );
  }
}
```
