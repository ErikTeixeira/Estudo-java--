"use strict";
// Tipagem Dinâmica e estática
// Dinâmica -> javascript
/**
 * Tipo de variável não é explicitamente declarado
 * Tipo de variável pode ser alterado livremente
 *
 * let age;   -> não colocou o tipo
 */
// Estátiva -> java, typescript
/**
 * Tipo de variável é explicitamente declarado
 * Tipo de variável não pode ser alterado livremente
 * Os valores da variável precisam respeitar o seu tipo
 *
 * String nome;     -> colocou o tipo
 */
// Estátiva  -> compilador verifica erros nos tipos
/**
 *  Todo código typescript é convertido para o seu equivalente em JS pelo typescript compiler
 *      - Acontece a conversão porque os navegadores não entendem o typescript
 *      - Pode usar o typescript no back-end(com node.js) e no front-end(com react, angular)
 */
// typescript pode utilizar funcionalidades modernas do JS(import/export) e o compilador consegue compilar isso para funcionar em navegadores mais antigos
/**
 *      Vantagens typescript                                    Desvantagens
 *  Recursos avançados JS                           Escrevemos mais código
 *  Previne erros de tipagem                        Há uma curva de aprendizado
 *  Mais fácil de identificar bugs                  Requer compilação para JS
 *  Código mais legível
 *  Extremamente popular
 */
// ----- Para Compilar, entrar na pasta onde está o arquivo TS e -> tsc typescript-basic.ts   -----
// ----- Para iniciar um arquivo de configuração typescript -> tsc --init   -----
//      --- Quando mudar algo nele rodar no terminal -> tsc  ---
//      --- "outDir"  -> é para colocar o caminho de onde vai ser gerado os arquivos compilados
//          --- "rootDir"  -> usada junto com o outDir, que é a localização dos arquivos TS
//      para compilar tudo  ->  tsc
// Typescript infere um tipo se vc não falar para ele, dependendo do valor que vc deu para váriavel e ele não deixa depois colocar outro tipo de valor na váriavel
// Tipos
var age0 = 5;
const firstName = "Daniel";
const isValid = false;
// Pode qualquer tipo, não é bom usar
let varGeneric = 5;
// Lista de qualquer tipo
let ids = [1, 2, 3, 4];
// Tupla - não é uma lista, primeiro coloca a ordem de tipos
// Estrutura de dados que armazena um conjunto de valores, ordenados e imutáveis
const person = [1, "Pedro"];
// Lista de tuplas
const people = [
    [1, "Naruto"],
    [2, "Goku"]
];
// Intersections  - usado quando vc quer que uma váriavel possua um tipo ou outro
// usa a |  -> or
const productId = 1;
// Enum  -> para declarar algo que sempre vai ter o mesmo valor
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction["Down"] = "Dois";
})(Direction || (Direction = {}));
const direction = Direction.Up; // vai ter o valor 1
// Rodar o arquivo JS  ->  node typescript-basic.js    ----------
// console.log(direction);
// Type Assertions  -> quando quer tratar uma váriavel que é de um tipo como um tipo diferente
const productName = "Boné";
// com o 'as'  -> o itemId vai ser uma string
let itemId = productName;
// com o '<>'  -> o itemId vai ser uma string
let itemId2 = productName;
