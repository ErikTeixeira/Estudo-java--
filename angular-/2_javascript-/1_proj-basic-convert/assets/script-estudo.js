/* Variáveis  - let, const, var
    - var: Antiga forma de declarar variáveis, tem comportamento de escopo global ou de função. 
    - let: Declara variáveis com escopo de bloco, o que significa que são visíveis apenas dentro da função ou bloco de código onde são declaradas. 
    - const: Declara constantes, que não podem ser reatribuídas após a inicialização
*/
let idade = 90;
let nome = "Bonieky";
let logado = true;

// console.log()  - mostrar no console informações  - console.log(idade) -> mostra 90


// Array e objetos

// pode colocar qualquer tipo de dado junto, pode ter boolean, int, string na mesma lista
let ingradientes = ["farinha", "leite", "ovo", "açucar"];
console.log( ingradientes[0] );

let personagem = {
    // propriedades minusculo, e sem caracter especial
    nome: "Fulano",
    nivel: 10,
    forca: 200,
    magia: 120,
    vida: 1000,
    mana: 300
}
// acessar a propriedade
console.log( personagem.mana );


// Função
// Input
// Processa
// Output
function somar( a, b) {
    let resultado = a + b;

    return resultado;
}

let x = somar(2, 4);

// Arrow Function - faz a mesma coisa do outro
let somar2 = ( a, b ) => {
    let resultado = a + b;
    return resultado;
}

let y = somar2(2, 8);

console.log( x +" e "+ y );


// if  - condicional  -  <, >, ==, !=, <=, >=
if ( idade >= 18 ) {
    console.log("Você é maior de idade");
} else if ( nome == "Bonieky" ) {
    console.log("Você é o Bonieky");
} else {
    console.log("Nenhuma condição aceita");
}


// for | while  - loop
/**
 * for (initialization; condition; afterthought) {
        statement
    }

    do {
        statement
    }
    while (condition);

    while (condition) {
        statement
    }
 */
let lista = [10, 20, 30 , 40];

    // forEach
for( let i of lista ) {
    console.log( i );
}


for (let i = 0; i < lista.length; i++) {
    if (  lista[i] === 30) {
        console.log("Break");
        break;
    }
}


// alert
alert( "ia" );


// Interagir com a tela

/**
 *  onCLick
 *  no html - <button onClick="avisar()" > CLique aqui </button>
 * 
 *  id
 *  no html - <button id="botao" > CLique aqui </button>
 *
 */
// Um evento, é algo disparado no sistema, ex: um evento de click

function avisar() {
    alert("Opa, disparei");
}


// chamar um id do html -> #, chamar uma class -> .
let botao = document.querySelector("#botao");

// recebe 2 parêmetros  - (tipoDeEvento, oQueFaz)
// oQueFaz  - pode chamar uma função ou colocar um arrow function
botao.addEventListener( "click", () => { avisar() } );

// existe outros eventos tipo o mouseover  - que é um evento que acontece quando passa o mouse em cima 

// É possível fazer um sistema em JS que pega as informações dos usuários, de onde mais eles passam o mouse na página   --  heat map


let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

// Evento paara monitorar o teclado - keyup - evento que monitora quando solta qualquer tecla
usdInput.addEventListener("keyup", () => {

    // mostra o valor que ele digitou no input
    console.log( usdInput.value );
});

brlInput.addEventListener("keyup", () => {
    console.log("apertou brl");
});


// destructuring
// é uma forma prática e rápida de extrair valores de objetos ou arrays e atribuí-los a variáveis de forma mais limpa e legível.

    // È uma forma prática e rápida de extrair valores de objetos ou arrays e atribuí-los a variáveis de forma mais limpa e legível.
    const pessoaP = { nome: "Erik", idade: 19 };
    const nomeP = pessoaP.nome;
    const idadeP = pessoaP.idade;

    // Com destructuring
    const { nomep, idadep } = pessoa;

    

const pessoa = {
    nome: "Erik",
    idade: 19
  };
  
  // Destructuring
const { nomeP2, idadeP2 } = pessoaP2;
  
console.log(nomeP);  // "Erik"
console.log(idadeP); // 19



const numeros = [10, 20, 30];

// Destructuring
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30



