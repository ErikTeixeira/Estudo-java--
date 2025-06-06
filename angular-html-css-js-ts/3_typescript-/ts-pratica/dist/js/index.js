"use strict";
// iniciar o arquivo de configuração  ->  tsc --init
// compilar os arquivos TS  ->  tsc
// compilação automática  ->  tsc -w   qualquer alteração salva já compila
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number, listas ...
let x = 10; // annotation
x = 12;
// inferencia( mais preferido - menos códgio ) e annotation
let y = 12; // o TS tipa automaticamente  - inferencia
// y = "teste";         ele não deixa colocar outro tipo de dado na variável
// objects
const myNumbers = [1, 2, 3];
console.log(myNumbers.length);
// tuplas   - determina como o array vai ser, diferente do em python
// tem que colocar na ordem que está aqui
let myTuple;
myTuple = [5, "oi", ["a", "b"]];
// objects literals -> { prop: value }
// tem o objeto para tipar e o que vai ficar as propriedades
// não da para acrescentar nenhum dado por fora
const user = {
    name: "Opala",
    age: 1970
};
console.log(user.name);
// any  - não deve ser utilizado
let a = 0;
a = "zero";
a = [];
a = true;
// union type  - para quando o dado tem mais de um tipo
let id = "10";
id = 200;
const userId = 10;
const userId2 = true;
// enum  - enumera uma coleção e da para usar dados mais complexos de forma mais simples
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa de gola V",
    size: Size.M
};
console.log(camisa);
// Literal type  - determinar um valor literal como um tipo
// utilizado com null
let teste;
// está variável só consegue ter estes valores
teste = "autenticado";
teste = null;
// Funçoes
// tem que colocar os tipos nos parêmetros, se não fica any
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
// tipar o tipo de retorno
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Pikachu"));
// função que não retorna nada  - void  - não precisa colocar o tipo void, mas é melhor colocar
function logger(msg) {
    console.log(msg);
}
logger("Logado");
// parâmetro opcional  - ?
function greeting(name, greet) {
    // tratar a variável opcicinal
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Tofu");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 2, n2: 6 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
// narrowing    - checagem de tipos - tratar os dados
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
// Generics   - mais específico que any
function showArraysItems(arr) {
    arr.forEach((element) => {
        console.log(`Elemento: ${element}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    // métodos
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(this.brand);
    }
}
// herança
// interface funciona, porque já está na classe pai
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
// Decorators  -> são funções que você usa para adicionar comportamento ou metainformação a outras entidades no seu código 
// São aplicados usando a sintaxe @ seguida de uma função, que é chamada em tempo de execução com informações sobre a entidade decorada
// descomentar o tsconfig  -> experimentalDecorators
function BaseParam() {
    // o generic vai receber todos os argumentos da classe e diz que e um array de tipo any, e tipa eles como objeto
    // traz todos os argumentos e insere novos
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                // quando o user é criado ganha um id, e a data atual de quando foi criado
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
// usar o decorator - @
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParam()
], Person);
const sam = new Person("Sam");
console.log(sam);
