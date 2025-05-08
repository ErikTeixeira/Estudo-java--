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

- **array.push()**
  - Adiciona um ou mais elementos ao final de um array

- **array.forEach()**
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

---

- **Number vs. BigInt**
  - Number em JavaScript/TypeScript armazena valores em ponto-flutuante de 64 bits, com precisão segura até cerca de \(9 \times 10^{15}\)
  - Para inteiros maiores (ou que ultrapassem Number.MAX_SAFE_INTEGER), usar BigInt, que lida com precisão arbitrária em valores inteiros sem perder dígitos.
- **Uso de join() em arrays**
  - ``array.join(separador)`` concatena todos os elementos do array numa string, intercalando o ``separador`` entre eles
  ```
  [1,2,3].join(',')  // "1,2,3"
  [1,2,3].join('')   // "123"
  ```
- **Uso de split() -- só funciona em string**
  - ``string.split(separador)`` divide a string em um array de substrings, cortando sempre que encontra o separador
  ```
  "1234".split('')      // ['1','2','3','4']
  ```

```typescript
function plusOne(digits: number[]): number[] {

    // Use join('') para concatenar sem separador, 
    // senão ele coloca virgula e fica 1,2,3 tudo junto
    let nums = digits.join('');

    let num = Number(nums);

    num++;

    // To split a number into individual digits in TypeScript, it can be converted to a string,
    // then split into an array of string digits, and finally mapped back to an array of numbers
    const numberString = num.toString();
    
    return numberString.split('').map(Number);
};

console.log( plusOne( [9,9,9] ) );
```

---

- #### Tópicos sobre `find`, `indexOf` e `lastIndexOf`

  * **`Array.prototype.find(callback)`**

    * Percorre o array elemento a elemento.
    * Retorna o **primeiro** elemento para o qual `callback(elemento)` for `true`.
    * Se nenhum elemento satisfizer a condição, retorna `undefined`.
    * Útil quando você quer **apenas um** resultado e pode interromper a busca assim que o encontra.

  * **`Array.prototype.indexOf(value)`**

    * Retorna o índice da **primeira** ocorrência de `value` no array.
    * Se não encontrar, retorna `-1`.
    * Tem complexidade O(n) em arrays grandes.

  * **`Array.prototype.lastIndexOf(value)`**

    * Retorna o índice da **última** ocorrência de `value` no array.
    * Se não encontrar, retorna `-1`.
    * Também O(n), mas faz a busca de trás para frente.

  * **Uso combinado (`indexOf === lastIndexOf`)**

    * Quando `indexOf(item) === lastIndexOf(item)`, significa que só há **uma** ocorrência de `item` no array.
    * É uma forma simples de encontrar elementos “únicos” sem estruturas auxiliares, porém com custo quadrático O(n²) no pior caso.


```typescript
// Versão usando indexOf + lastIndexOf + find
function singleNumber(nums: number[]): number {
  
  // find percorre o array e retorna o primeiro elemento que satisfaz a condição
  return nums.find(item =>
    // indexOf(item) retorna o índice da primeira ocorrência de item em nums
    // lastIndexOf(item) retorna o índice da última ocorrência de item em nums
    // se forem iguais, significa que item só aparece uma vez
    nums.indexOf(item) === nums.lastIndexOf(item)
  )!; // o "!" informa ao TS que o resultado não será undefined
}

console.log(singleNumber([2, 1, 2])); // imprime 1
```
