# Estruturas de Controle em Java

## Introdução

As estruturas de controle permitem alterar o fluxo de execução de um programa. Em Java, existem dois tipos principais de estruturas de controle:
- **Estruturas Condicionais**: Permitem executar código com base em condições (`if`, `switch`)
- **Estruturas de Repetição**: Permitem executar código repetidamente (`for`, `while`, `do-while`)

## 1. Estruturas Condicionais

### 1.1. A Instrução `if`

A instrução `if` permite executar um bloco de código apenas se uma condição for verdadeira.

#### Sintaxe Básica:
```java
if (condição) {
    // código a ser executado se a condição for verdadeira
}
```

#### Exemplo:
```java
int idade = 18;

if (idade >= 18) {
    System.out.println("Você é maior de idade.");
}
```

### 1.2. A Instrução `if-else`

A instrução `if-else` permite executar um bloco de código se a condição for verdadeira e outro bloco se for falsa.

#### Sintaxe:
```java
if (condição) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa
}
```

#### Exemplo:
```java
int idade = 15;

if (idade >= 18) {
    System.out.println("Você é maior de idade.");
} else {
    System.out.println("Você é menor de idade.");
}
```

### 1.3. A Instrução `if-else-if`

A instrução `if-else-if` permite testar múltiplas condições em sequência.

#### Sintaxe:
```java
if (condição1) {
    // código a ser executado se condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se condição2 for verdadeira
} else {
    // código a ser executado se todas as condições forem falsas
}
```

#### Exemplo:
```java
int nota = 75;

if (nota >= 90) {
    System.out.println("Excelente!");
} else if (nota >= 70) {
    System.out.println("Bom trabalho!");
} else if (nota >= 50) {
    System.out.println("Você passou.");
} else {
    System.out.println("Você precisa estudar mais.");
}
```

### 1.4. A Instrução `switch`

A instrução `switch` permite executar diferentes blocos de código com base no valor de uma variável ou expressão.

#### Sintaxe (versão tradicional):
```java
switch (expressão) {
    case valor1:
        // código a ser executado se expressão == valor1
        break;
    case valor2:
        // código a ser executado se expressão == valor2
        break;
    // mais casos...
    default:
        // código a ser executado se nenhum caso corresponder
}
```

#### Exemplo:
```java
int dia = 3;
String nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

System.out.println("Hoje é " + nomeDia);
```

#### Switch Melhorado (Java 12+):
```java
// Java 12+
int dia = 3;
String nomeDia = switch (dia) {
    case 1 -> "Domingo";
    case 2 -> "Segunda-feira";
    case 3 -> "Terça-feira";
    case 4 -> "Quarta-feira";
    case 5 -> "Quinta-feira";
    case 6 -> "Sexta-feira";
    case 7 -> "Sábado";
    default -> "Dia inválido";
};

System.out.println("Hoje é " + nomeDia);
```

#### Switch com múltiplos casos:
```java
String estacao;
int mes = 5;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacao = "Verão";
        break;
    case 3:
    case 4:
    case 5:
        estacao = "Outono";
        break;
    case 6:
    case 7:
    case 8:
        estacao = "Inverno";
        break;
    case 9:
    case 10:
    case 11:
        estacao = "Primavera";
        break;
    default:
        estacao = "Mês inválido";
}

System.out.println("Estamos no " + estacao);
```

## 2. Estruturas de Repetição

### 2.1. O Laço `for`

O laço `for` é usado quando sabemos quantas vezes queremos executar um bloco de código.

#### Sintaxe:
```java
for (inicialização; condição; incremento) {
    // código a ser repetido
}
```

#### Exemplo:
```java
// Imprime os números de 1 a 5
for (int i = 1; i <= 5; i++) {
    System.out.println("Número: " + i);
}
```

#### For-each (Enhanced for loop):

Java também oferece uma sintaxe simplificada chamada "for-each" para iterar sobre arrays e coleções.

#### Sintaxe:
```java
for (tipo elemento : coleção) {
    // código a ser repetido para cada elemento
}
```

#### Exemplo:
```java
int[] numeros = {1, 2, 3, 4, 5};

// Imprime cada número do array
for (int numero : numeros) {
    System.out.println("Número: " + numero);
}
```

### 2.2. O Laço `while`

O laço `while` executa um bloco de código enquanto uma condição for verdadeira. A condição é verificada antes da execução do bloco.

#### Sintaxe:
```java
while (condição) {
    // código a ser repetido
}
```

#### Exemplo:
```java
int contador = 1;

while (contador <= 5) {
    System.out.println("Contador: " + contador);
    contador++;
}
```

### 2.3. O Laço `do-while`

O laço `do-while` é semelhante ao `while`, mas garante que o bloco de código será executado pelo menos uma vez. A condição é verificada após a execução do bloco.

#### Sintaxe:
```java
do {
    // código a ser repetido
} while (condição);
```

#### Exemplo:
```java
int contador = 1;

do {
    System.out.println("Contador: " + contador);
    contador++;
} while (contador <= 5);
```

#### Diferença entre `while` e `do-while`:

A principal diferença é que o `do-while` sempre executa o bloco pelo menos uma vez, mesmo se a condição for falsa inicialmente.

```java
// Este bloco não será executado
int x = 10;
while (x < 5) {
    System.out.println("Isto não será impresso");
    x++;
}

// Este bloco será executado uma vez
int y = 10;
do {
    System.out.println("Isto será impresso uma vez");
    y++;
} while (y < 5);
```

## 3. Controle de Fluxo Adicional

### 3.1. A Instrução `break`

A instrução `break` é usada para sair de um laço de repetição ou de um bloco `switch` prematuramente.

#### Exemplo com laço:
```java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Sai do laço quando i é 5
    }
    System.out.println("Número: " + i);
}
// Imprime apenas de 1 a 4
```

### 3.2. A Instrução `continue`

A instrução `continue` pula a iteração atual e passa para a próxima.

#### Exemplo:
```java
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue; // Pula os números pares
    }
    System.out.println("Número ímpar: " + i);
}
// Imprime apenas números ímpares: 1, 3, 5, 7, 9
```

### 3.3. Laços Rotulados (Labeled Loops)

Java permite rotular laços e usar `break` ou `continue` com esses rótulos para maior controle em laços aninhados.

#### Exemplo:
```java
externo: for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i * j > 4) {
            break externo; // Sai do laço externo
        }
        System.out.println(i + " * " + j + " = " + (i * j));
    }
}
```

## 4. Exemplos Práticos

### 4.1. Verificação de Número Primo

```java
public class VerificacaoPrimo {
    public static void main(String[] args) {
        int numero = 17;
        boolean ehPrimo = true;
        
        if (numero <= 1) {
            ehPrimo = false;
        } else {
            for (int i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i == 0) {
                    ehPrimo = false;
                    break;
                }
            }
        }
        
        if (ehPrimo) {
            System.out.println(numero + " é um número primo");
        } else {
            System.out.println(numero + " não é um número primo");
        }
    }
}
```

### 4.2. Cálculo de Fatorial com While

```java
public class CalculoFatorial {
    public static void main(String[] args) {
        int numero = 5;
        int fatorial = 1;
        int contador = numero;
        
        while (contador > 0) {
            fatorial *= contador;
            contador--;
        }
        
        System.out.println("O fatorial de " + numero + " é " + fatorial);
    }
}
```

### 4.3. Padrão de Triângulo com For Aninhado

```java
public class PadraoTriangulo {
    public static void main(String[] args) {
        int linhas = 5;
        
        for (int i = 1; i <= linhas; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
```

Saída:
```
* 
* * 
* * * 
* * * * 
* * * * * 
```

### 4.4. Menu Simples com Do-While

```java
import java.util.Scanner;

public class MenuSimples {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao;
        
        do {
            System.out.println("\nMenu de Opções:");
            System.out.println("1. Opção 1");
            System.out.println("2. Opção 2");
            System.out.println("3. Opção 3");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            
            opcao = scanner.nextInt();
            
            switch (opcao) {
                case 1:
                    System.out.println("Você escolheu a Opção 1");
                    break;
                case 2:
                    System.out.println("Você escolheu a Opção 2");
                    break;
                case 3:
                    System.out.println("Você escolheu a Opção 3");
                    break;
                case 0:
                    System.out.println("Saindo do programa...");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }
            
        } while (opcao != 0);
        
        scanner.close();
    }
}
```

## 5. Boas Práticas

1. **Use chaves `{}` mesmo para blocos de uma única linha** - Aumenta a legibilidade e previne erros
   ```java
   if (condicao)
       // Não faça isso
       instrucao;
   
   // Faça isso
   if (condicao) {
       instrucao;
   }
   ```

2. **Evite aninhamento excessivo** - Tente limitar a 3 níveis para manter o código legível

3. **Use `switch` em vez de vários `if-else` quando possível** - Especialmente para verificações de valor único

4. **Prefira `for-each` para iterar coleções** - É mais conciso e menos propenso a erros

5. **Cuidado com condições em loops infinitos** - Sempre verifique se suas condições eventualmente se tornarão falsas:
   ```java
   int x = 10;
   while (x > 0) {
       System.out.println(x);
       // Se esquecer x--, o loop será infinito
       x--;
   }
   ```

6. **Coloque a condição mais comum primeiro em blocos `if-else-if`** - Isso otimiza a execução em muitos casos