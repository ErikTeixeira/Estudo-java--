```typescript
// Trocar ovalor entre 2 variáveis
let val1: number = 10;
let val2: number = 20;

  // precisa de uma terceira variável para isso
let val3: number;


val3 = val1;

val1 = val2;

val2 = val3;

console.log('---');
console.log(val1);
console.log(val2);
```

---

```typescript
// Tabuada de 1 a 10, uso do for, while, do

const tabuada: number = 2;

console.log("---for---")
for (let i: number = 0; i <= 10; i++) {
  console.log( i ," * ", tabuada, " = ", i*tabuada );
}

// funciona desse jeito tmb, ou o for executa um bloco ou uma única instrução
for (let i: number = 0; i <= 10; i++) console.log( i ," * ", tabuada, " = ", i*tabuada );


console.log("---while---")
let i: number = 0;
while ( i <= 10 ) {
  console.log( i ," * ", tabuada, " = ", i*tabuada );
  i++;
}

    // funciona assim tmb, ele incrementa e testa
while ( ++i <= 10 )

    // funciona assim tmb, ele testa e incrementa, vai até o 11
while ( i++ <= 10 )


console.log("---do---")
let ind: number = 0;
do {
  console.log( ind ," * ", tabuada, " = ", ind*tabuada );
  ind++;
} while ( ind <= 10 );

```

---

```typescript
// Identificar se é par ou ímpar

const num: number = 3;

    // não precisa do == , if ( num % 2 != 0 ), porque qualquer número diferente de 0 é true e aí vai para o ímpar

if (num % 2) {
  console.log('Ímpar');
} else {
  console.log('Par');
}

    // Com operador ternário
num % 2 ? console.log("Ímpar") : console.log("Par");

```

---

#### Palindrome Number
- Given an integer x, return true if x is a palindrome, and false otherwise

```
Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right to left.
```

- ##### Da minha forma

```typescript
function isPalindrome(x: number): boolean {

    let numStri: string = x.toString();

    let list: string[] = numStri.split("");

    let newList: string[] = [];

    for (let i2: number = list.length - 1; i2 >= 0; i2--) {

        newList.push( list[i2]);
    }

    let isTrue: boolean = false;
    
    for ( let i: number = 0; i < list.length; i++ ) {

        if ( list[i] == newList[i] ) {
            isTrue = true;
        } else {
            return isTrue = false
        }
    }

    return isTrue;
};

let resp: boolean = isPalindrome(321);
console.log( resp );
```

- ##### Da forma melhorada
  - const em vez de let
    - Deixa claro que variáveis não serão reatribuídas, evitando bugs de mutação acidental.
  - Arrow function
    - Código mais conciso e moderno; não cria contexto próprio de this.
  - Métodos nativos de array
    - Uso de split, reverse e join elimina loops manuais e melhora a legibilidade.
  - Comparação estrita (===)
    - Garante semântica de igualdade exata, sem coerção de tipos.
  - Retorno direto
    - Fluxo de controle simples: retorna true ou false imediatamente, sem variáveis de estado intermediárias.
  - Inferência de tipos
    - TypeScript deduz o tipo de variáveis locais, reduzindo verbosidade de anotações desnecessárias.

```typescript
// --> Transformada em arrow function
const isPalindrome = (x: number): boolean => {

  // Converte o número para string
  const str = x.toString();

  // Inverte a string usando métodos nativos -- o split faz ser um array, ai tem o join para juntar tudo e virar uma string
  const reversed = str.split('').reverse().join('');

  // Compara a string original com a invertida
  return str === reversed;
};

// Exemplo de uso
const resp = isPalindrome(321);
console.log(resp); // false
```

---

```typescript
function romanToInt(s: string) {

    const newS: string[] = s.split("");

    let nums: number[] = [];

    for ( let i: number = 0; i < newS.length; i++ ) {

        switch ( newS[i] ) {
            case "I":
                nums.push(1);
                break;
            case "V":
                nums.push(5);
                break;
            case "X":
                nums.push(10);
                break;
            case "L":
                nums.push(50);
                break;
            case "C":
                nums.push(100);
                break;
            case "D":
                nums.push(500);
                break;
            case "M":
                nums.push(1000);
                break;     
        }
    }

    let total: number = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        if (i + 1 < nums.length && nums[i] < nums[i + 1]) {
            
          total -= nums[i];   // ex: IV -> total = -1, depois soma 5 = 4
        } else {
          total += nums[i];   // soma normal
        }
    }

    return total;
};

console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MMMCMXCIX")); // 3999
```

- ##### Dava para fazer assim a parte de transformar os valores
  - s.split('')
    - Converte a string de entrada (por ex. "MCMXCIV") em um array de caracteres
  - .map(ch => { … })
    - Para cada caractere ch desse array, executa a função dentro das chaves { … } e retorna um número. O resultado final é um novo array de números, na mesma ordem

```typescript
const nums = s.split('').map(ch => {
    switch (ch) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default:  return 0;
    }
  });
```

---

- array.push()
  - Adiciona um ou mais elementos ao final de um array

- array.forEach()
  - Itera sobre cada elemento de um array, executando uma função callback
  - Não é obrigatório declarar e usar todos os parâmetros
  ```typescript
  const nums = [10, 20, 30];
  nums.forEach((value, idx, arr) => {
    console.log(`Índice ${idx}:`, value);
  });
  ```
  - value
    - é o valor do elemento atual que está sendo processado no laço.
  - idx (ou index)
    - é o índice (posição) do elemento atual dentro do array, começando em 0.
  - arr (ou array)
    - é uma referência ao próprio array sobre o qual o forEach está sendo executado.

- array.sort()
  - Ordena os elementos de um array in-place. Recebe uma função de comparação para definir a ordem numérica crescente


```typescript
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let resp: number[] = [];
    
    for ( let i = 0; i < m; i++ ) {

        resp.push( nums1[i] );
    }

    nums2.forEach( (num: number) => { resp.push( num ); } );

    resp.sort((a: number, b: number) => a - b);

    for ( let i = 0; i < nums1.length; i++ ) {

        nums1[i] = resp[i];
    }
};
```