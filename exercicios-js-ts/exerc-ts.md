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
