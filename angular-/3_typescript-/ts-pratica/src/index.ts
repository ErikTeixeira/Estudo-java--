// iniciar o arquivo de configuração  ->  tsc --init
// compilar os arquivos TS  ->  tsc
// compilação automática  ->  tsc -w   qualquer alteração salva já compila


// string, boolean, number, listas ...
let x: number = 10;     // annotation
x =12;

// inferencia( mais preferido - menos códgio ) e annotation

let y = 12;             // o TS tipa automaticamente  - inferencia
// y = "teste";         ele não deixa colocar outro tipo de dado na variável


// objects
const myNumbers: number[] = [1, 2, 3];

console.log( myNumbers.length );


// tuplas   - determina como o array vai ser, diferente do em python
        // tem que colocar na ordem que está aqui
let myTuple: [ number, string, string[] ];

myTuple = [ 5, "oi", ["a", "b"] ];


// objects literals -> { prop: value }
        // tem o objeto para tipar e o que vai ficar as propriedades
        // não da para acrescentar nenhum dado por fora
const user: { name: string, age: number } = {
    name: "Opala",
    age: 1970
}

console.log( user.name );


// any  - não deve ser utilizado
let a: any = 0;

a = "zero";
a = [];
a = true;


// union type  - para quando o dado tem mais de um tipo
let id: string | number = "10";

id = 200;


// type alias  - criar um tipo
type myIdType = number | string | boolean;

const userId: myIdType = 10;
const userId2: myIdType = true;


// enum  - enumera uma coleção e da para usar dados mais complexos de forma mais simples
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa de gola V",
    size: Size.M
}

console.log( camisa );


// Literal type  - determinar um valor literal como um tipo
        // utilizado com null
let teste: "autenticado" | null

        // está variável só consegue ter estes valores
teste = "autenticado";
teste = null


// Funçoes
        // tem que colocar os tipos nos parêmetros, se não fica any
function sum( a: number, b: number ) {
    return a + b;
}

console.log( sum(2, 3) );

    // tipar o tipo de retorno
function sayHello( name: string ): string {
    return `Hello ${name}`;
}

console.log( sayHello( "Pikachu" ) );

    // função que não retorna nada  - void  - não precisa colocar o tipo void, mas é melhor colocar
function logger( msg: string ): void {
    console.log( msg );
}

logger( "Logado" );

    // parâmetro opcional  - ?
function greeting( name: string, greet?: string ): void {

    // tratar a variável opcicinal
    if ( greet ) {
        console.log( `Olá ${greet} ${name}` );
        return;
    } else {
        console.log( `Olá ${name}` );
    }
}

greeting( "Tofu" );


// interface
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers( nums: MathFunctionParams ) {
    return nums.n1 + nums.n2;
}

console.log( sumNumbers( {n1:2 , n2:6 } ) );

function multiplyNumbers( nums: MathFunctionParams ) {
    return nums.n1 * nums.n2;
}


// narrowing    - checagem de tipos - tratar os dados
function doSomething( info: number | boolean ) {

    if ( typeof info === "number" ) {
        console.log(`O número é ${info}`);
        return;
    }
    console.log( "Não foi passado um número" );
}


// Generics   - mais específico que any
function showArraysItems<T>( arr: T[] ) {
    arr.forEach( (element) => {
        console.log( `Elemento: ${element}` );
    });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];


// classes
class User {
    // não é comum declarar o tipo aqui em cima  -> name: string
    name
    role
    isApproved

    constructor( name: string, role: string, isApproved: boolean ) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    // métodos
    showUserName() {
        console.log( `O nome do usuário é ${this.name}` );
    }
}

const zeca = new User("Zeca", "Admin", true);
console.log(zeca);

zeca.showUserName();


// 58:44