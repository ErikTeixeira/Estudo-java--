# Operações Matemáticas em Java

## Operadores Matemáticos Básicos

Java fornece cinco operadores matemáticos básicos para realizar cálculos:

| Operador | Descrição | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `+` | Adição | `5 + 3` | `8` |
| `-` | Subtração | `5 - 3` | `2` |
| `*` | Multiplicação | `5 * 3` | `15` |
| `/` | Divisão | `5 / 2` | `2` (inteiro) ou `2.5` (decimal) |
| `%` | Módulo (resto da divisão) | `5 % 2` | `1` |

### Exemplos:

```java
int a = 10;
int b = 3;

int soma = a + b;        // 13
int subtracao = a - b;   // 7
int multiplicacao = a * b; // 30
int divisao = a / b;     // 3 (divisão de inteiros)
int resto = a % b;       // 1

// Divisão com valores decimais
double c = 10.0;
double d = 3.0;
double divisaoDecimal = c / d;  // 3.3333333333333335
```

**Observação sobre divisão:**
- Quando você divide dois inteiros, o resultado será um inteiro (parte decimal é truncada)
- Para obter resultado decimal, pelo menos um dos operandos deve ser do tipo decimal (float ou double)

## Métodos da Classe Math

A classe `Math` em Java fornece várias funções matemáticas úteis:

### Math.pow() - Potenciação

Calcula um número elevado a uma potência.

```java
double resultado = Math.pow(base, expoente);
```

Exemplo:
```java
double quadrado = Math.pow(5, 2);  // 5² = 25.0
double cubo = Math.pow(2, 3);      // 2³ = 8.0
```

### Math.sqrt() - Raiz Quadrada

Calcula a raiz quadrada de um número.

```java
double raizQuadrada = Math.sqrt(25);  // 5.0
double raizDe2 = Math.sqrt(2);        // 1.4142135623730951
```

### Math.random() - Números Aleatórios

Gera um número decimal aleatório entre 0.0 (inclusive) e 1.0 (exclusive).

```java
double aleatorio = Math.random();  // Valor entre 0.0 e 1.0
```

Para gerar números aleatórios em outros intervalos:

```java
// Gerar inteiro aleatório entre 1 e 10 (inclusive)
int aleatorioEntre1e10 = (int)(Math.random() * 10) + 1;

// Gerar inteiro aleatório entre min e max (inclusive)
int min = 5;
int max = 15;
int aleatorioEntreMineMax = (int)(Math.random() * (max - min + 1)) + min;
```

### Math.abs() - Valor Absoluto

Retorna o valor absoluto (positivo) de um número.

```java
int absoluto1 = Math.abs(-5);    // 5
double absoluto2 = Math.abs(-3.14);  // 3.14
```

## Outros Métodos Úteis da Classe Math

| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `Math.max(a, b)` | Maior valor entre dois números | `Math.max(5, 10)` → `10` |
| `Math.min(a, b)` | Menor valor entre dois números | `Math.min(5, 10)` → `5` |
| `Math.round(a)` | Arredonda para o inteiro mais próximo | `Math.round(3.7)` → `4` |
| `Math.floor(a)` | Arredonda para baixo | `Math.floor(3.7)` → `3.0` |
| `Math.ceil(a)` | Arredonda para cima | `Math.ceil(3.2)` → `4.0` |
| `Math.sin(a)` | Seno de um ângulo (em radianos) | `Math.sin(Math.PI/2)` → `1.0` |
| `Math.cos(a)` | Cosseno de um ângulo (em radianos) | `Math.cos(0)` → `1.0` |
| `Math.tan(a)` | Tangente de um ângulo (em radianos) | `Math.tan(Math.PI/4)` → `1.0` |

## Exemplo Completo

```java
public class ExemploOperacoesMatematicas {
    public static void main(String[] args) {
        // Operadores básicos
        System.out.println("===== Operadores Básicos =====");
        System.out.println("Adição: 5 + 3 = " + (5 + 3));
        System.out.println("Subtração: 5 - 3 = " + (5 - 3));
        System.out.println("Multiplicação: 5 * 3 = " + (5 * 3));
        System.out.println("Divisão (int): 5 / 2 = " + (5 / 2));
        System.out.println("Divisão (double): 5.0 / 2.0 = " + (5.0 / 2.0));
        System.out.println("Módulo: 5 % 2 = " + (5 % 2));
        
        // Métodos da classe Math
        System.out.println("\n===== Métodos da Classe Math =====");
        System.out.println("Potência: 2³ = " + Math.pow(2, 3));
        System.out.println("Raiz quadrada de 16 = " + Math.sqrt(16));
        System.out.println("Número aleatório: " + Math.random());
        System.out.println("Valor absoluto de -10 = " + Math.abs(-10));
        
        // Métodos adicionais
        System.out.println("\n===== Outros Métodos Úteis =====");
        System.out.println("Máximo entre 8 e 12: " + Math.max(8, 12));
        System.out.println("Mínimo entre 8 e 12: " + Math.min(8, 12));
        System.out.println("Arredondamento de 3.7: " + Math.round(3.7));
        System.out.println("Arredondamento para baixo de 3.7: " + Math.floor(3.7));
        System.out.println("Arredondamento para cima de 3.2: " + Math.ceil(3.2));
    }
}
```

Saída:
```
===== Operadores Básicos =====
Adição: 5 + 3 = 8
Subtração: 5 - 3 = 2
Multiplicação: 5 * 3 = 15
Divisão (int): 5 / 2 = 2
Divisão (double): 5.0 / 2.0 = 2.5
Módulo: 5 % 2 = 1

===== Métodos da Classe Math =====
Potência: 2³ = 8.0
Raiz quadrada de 16 = 4.0
Número aleatório: 0.123456789 (valor varia a cada execução)
Valor absoluto de -10 = 10

===== Outros Métodos Úteis =====
Máximo entre 8 e 12: 12
Mínimo entre 8 e 12: 8
Arredondamento de 3.7: 4
Arredondamento para baixo de 3.7: 3.0
Arredondamento para cima de 3.2: 4.0
```