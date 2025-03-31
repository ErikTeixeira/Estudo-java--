# Operadores e Expressões em Java

## Introdução

Em Java, operadores são símbolos especiais que realizam operações específicas em um, dois ou três operandos e retornam um resultado. As expressões são combinações de variáveis, literais, métodos que retornam valores e operadores.

## 1. Operadores Aritméticos

Os operadores aritméticos são usados para realizar operações matemáticas básicas.

| Operador | Descrição | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `+` | Adição | `5 + 3` | `8` |
| `-` | Subtração | `5 - 3` | `2` |
| `*` | Multiplicação | `5 * 3` | `15` |
| `/` | Divisão | `5 / 2` | `2` (inteiro) |
| `/` | Divisão | `5.0 / 2` | `2.5` (ponto flutuante) |
| `%` | Módulo (resto) | `5 % 2` | `1` |
| `++` | Incremento | `i++` ou `++i` | Aumenta i em 1 |
| `--` | Decremento | `i--` ou `--i` | Diminui i em 1 |

### Exemplo:

```java
public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println("a + b = " + (a + b));  // 13
        System.out.println("a - b = " + (a - b));  // 7
        System.out.println("a * b = " + (a * b));  // 30
        System.out.println("a / b = " + (a / b));  // 3 (divisão inteira)
        System.out.println("a % b = " + (a % b));  // 1 (resto)
        
        int c = a++;  // c = 10, a = 11 (pós-incremento)
        int d = ++b;  // d = 4, b = 4 (pré-incremento)
        System.out.println("c = " + c + ", a = " + a);
        System.out.println("d = " + d + ", b = " + b);
    }
}
```

## 2. Operadores Relacionais

Os operadores relacionais são usados para comparar valores.

| Operador | Descrição | Exemplo | 
|----------|-----------|---------|
| `==` | Igual a | `a == b` |
| `!=` | Diferente de | `a != b` |
| `>` | Maior que | `a > b` |
| `<` | Menor que | `a < b` |
| `>=` | Maior ou igual a | `a >= b` |
| `<=` | Menor ou igual a | `a <= b` |

### Exemplo:

```java
public class OperadoresRelacionais {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        System.out.println("a == b: " + (a == b));  // false
        System.out.println("a != b: " + (a != b));  // true
        System.out.println("a > b: " + (a > b));    // false
        System.out.println("a < b: " + (a < b));    // true
        System.out.println("a >= b: " + (a >= b));  // false
        System.out.println("a <= b: " + (a <= b));  // true
    }
}
```

## 3. Operadores Lógicos

Os operadores lógicos são usados para determinar a lógica entre variáveis ou valores.

| Operador | Nome | Descrição | Exemplo |
|----------|------|-----------|---------|
| `&&` | AND lógico | Retorna true se ambos operandos forem true | `a && b` |
| `\|\|` | OR lógico | Retorna true se algum dos operandos for true | `a \|\| b` |
| `!` | NOT lógico | Inverte o valor do operando | `!a` |

### Exemplo:

```java
public class OperadoresLogicos {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;
        
        System.out.println("a && b: " + (a && b));  // false
        System.out.println("a || b: " + (a || b));  // true
        System.out.println("!a: " + (!a));          // false
        
        // Operadores lógicos de curto-circuito
        int x = 10;
        int y = 20;
        
        // O segundo operando não é avaliado se o primeiro for false
        if (x > 15 && ++y > 20) {
            System.out.println("Condição verdadeira");
        }
        System.out.println("y = " + y);  // y ainda é 20 devido ao curto-circuito
    }
}
```

## 4. Operadores Bit a Bit (Bitwise)

Os operadores bit a bit trabalham com valores binários de números inteiros.

| Operador | Nome | Descrição | Exemplo |
|----------|------|-----------|---------|
| `&` | AND bit a bit | Realiza AND bit a bit | `5 & 3` resulta em `1` |
| `\|` | OR bit a bit | Realiza OR bit a bit | `5 \| 3` resulta em `7` |
| `^` | XOR bit a bit | Realiza XOR bit a bit | `5 ^ 3` resulta em `6` |
| `~` | NOT bit a bit | Inverte todos os bits | `~5` resulta em `-6` |
| `<<` | Deslocamento à esquerda | Desloca bits para a esquerda | `5 << 1` resulta em `10` |
| `>>` | Deslocamento à direita com sinal | Desloca bits para a direita, preservando o sinal | `-5 >> 1` resulta em `-3` |
| `>>>` | Deslocamento à direita sem sinal | Desloca bits para a direita, preenchendo com zeros à esquerda | `-5 >>> 1` resulta em um grande número positivo |

### Exemplo:

```java
public class OperadoresBitwise {
    public static void main(String[] args) {
        int a = 5;  // 101 em binário
        int b = 3;  // 011 em binário
        
        System.out.println("a & b = " + (a & b));    // 001 = 1
        System.out.println("a | b = " + (a | b));    // 111 = 7
        System.out.println("a ^ b = " + (a ^ b));    // 110 = 6
        System.out.println("~a = " + (~a));          // -6 (complemento de 2)
        
        System.out.println("a << 1 = " + (a << 1));  // 1010 = 10
        System.out.println("a >> 1 = " + (a >> 1));  // 010 = 2
        
        int c = -5;  // representação binária com complemento de 2
        System.out.println("c >> 1 = " + (c >> 1));   // -3 (preserva o sinal)
        System.out.println("c >>> 1 = " + (c >>> 1)); // número positivo grande
    }
}
```

## 5. Operadores de Atribuição

Os operadores de atribuição são usados para atribuir valores às variáveis.

| Operador | Exemplo | Equivalente a |
|----------|---------|---------------|
| `=` | `a = b` | `a = b` |
| `+=` | `a += b` | `a = a + b` |
| `-=` | `a -= b` | `a = a - b` |
| `*=` | `a *= b` | `a = a * b` |
| `/=` | `a /= b` | `a = a / b` |
| `%=` | `a %= b` | `a = a % b` |
| `&=` | `a &= b` | `a = a & b` |
| `\|=` | `a \|= b` | `a = a \| b` |
| `^=` | `a ^= b` | `a = a ^ b` |
| `<<=` | `a <<= b` | `a = a << b` |
| `>>=` | `a >>= b` | `a = a >> b` |
| `>>>=` | `a >>>= b` | `a = a >>> b` |

### Exemplo:

```java
public class OperadoresAtribuicao {
    public static void main(String[] args) {
        int a = 10;
        
        a += 5;  // a = a + 5
        System.out.println("a += 5: " + a);  // 15
        
        a -= 3;  // a = a - 3
        System.out.println("a -= 3: " + a);  // 12
        
        a *= 2;  // a = a * 2
        System.out.println("a *= 2: " + a);  // 24
        
        a /= 4;  // a = a / 4
        System.out.println("a /= 4: " + a);  // 6
        
        a %= 4;  // a = a % 4
        System.out.println("a %= 4: " + a);  // 2
        
        a <<= 1;  // a = a << 1
        System.out.println("a <<= 1: " + a);  // 4
    }
}
```

## 6. Operador Ternário

O operador ternário `? :` é um operador condicional que avalia uma expressão booleana e retorna um valor com base no resultado.

### Sintaxe:
```
variável = (condição) ? expressão1 : expressão2
```

- Se a condição for verdadeira, expressão1 é avaliada e atribuída à variável.
- Se a condição for falsa, expressão2 é avaliada e atribuída à variável.

### Exemplo:

```java
public class OperadorTernario {
    public static void main(String[] args) {
        int idade = 18;
        String status = (idade >= 18) ? "Adulto" : "Menor";
        
        System.out.println("Status: " + status);  // "Adulto"
        
        // Equivalente ao if-else
        if (idade >= 18) {
            status = "Adulto";
        } else {
            status = "Menor";
        }
    }
}
```

## 7. Precedência de Operadores

A precedência determina a ordem em que os operadores são avaliados em uma expressão. Operadores com maior precedência são avaliados antes de operadores com menor precedência.

| Categoria | Operadores | Associatividade |
|-----------|------------|-----------------|
| Postfix | `expr++` `expr--` | Da esquerda para a direita |
| Unário | `++expr` `--expr` `+expr` `-expr` `~` `!` | Da direita para a esquerda |
| Multiplicativo | `*` `/` `%` | Da esquerda para a direita |
| Aditivo | `+` `-` | Da esquerda para a direita |
| Shift | `<<` `>>` `>>>` | Da esquerda para a direita |
| Relacional | `<` `>` `<=` `>=` `instanceof` | Da esquerda para a direita |
| Igualdade | `==` `!=` | Da esquerda para a direita |
| AND bit a bit | `&` | Da esquerda para a direita |
| XOR bit a bit | `^` | Da esquerda para a direita |
| OR bit a bit | `\|` | Da esquerda para a direita |
| AND lógico | `&&` | Da esquerda para a direita |
| OR lógico | `\|\|` | Da esquerda para a direita |
| Ternário | `? :` | Da direita para a esquerda |
| Atribuição | `=` `+=` `-=` `*=` `/=` `%=` `&=` `^=` `\|=` `<<=` `>>=` `>>>=` | Da direita para a esquerda |

### Exemplo:

```java
public class PrecedenciaOperadores {
    public static void main(String[] args) {
        int resultado = 10 + 5 * 2;
        System.out.println("10 + 5 * 2 = " + resultado);  // 20, não 30
        
        // Usando parênteses para alterar a precedência
        resultado = (10 + 5) * 2;
        System.out.println("(10 + 5) * 2 = " + resultado);  // 30
        
        boolean test = true && false || true;
        System.out.println("true && false || true = " + test);  // true
        
        // Usando parênteses para maior clareza
        test = true && (false || true);
        System.out.println("true && (false || true) = " + test);  // true
    }
}
```