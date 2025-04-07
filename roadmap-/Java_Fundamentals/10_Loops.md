# Loops em Java

Os loops (estruturas de repetição) são essenciais para executar blocos de código repetidamente com base em determinadas condições. Java oferece diferentes tipos de loops para atender a necessidades específicas de programação.

## 1. Loop for

O loop `for` é uma estrutura de repetição compacta que combina inicialização, condição de teste e incremento em uma única linha.

### Sintaxe básica:

```java
for (inicialização; condição; incremento/decremento) {
    // código a ser repetido
}
```

### Exemplos:

```java
// Exemplo 1: Loop for básico
for (int i = 0; i < 5; i++) {
    System.out.println("Iteração " + i);
}

// Exemplo 2: Contagem regressiva
for (int i = 10; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("Lançamento!");

// Exemplo 3: Loop for com múltiplas variáveis
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println("i = " + i + ", j = " + j);
}

// Exemplo 4: Loop for sem corpo (calculando soma)
int soma = 0;
for (int i = 1; i <= 100; i++) soma += i;
System.out.println("Soma dos números de 1 a 100: " + soma);

// Exemplo 5: For infinito (use com cuidado!)
// for (;;) {
//     System.out.println("Loop infinito");
//     // Precisa de uma condição de saída, como break
// }
```

## 2. Loop while

O loop `while` executa um bloco de código enquanto uma condição especificada for verdadeira. A verificação da condição ocorre antes da execução do bloco.

### Sintaxe básica:

```java
while (condição) {
    // código a ser repetido
}
```

### Exemplos:

```java
// Exemplo 1: While básico
int contador = 0;
while (contador < 5) {
    System.out.println("Contador: " + contador);
    contador++;
}

// Exemplo 2: Leitura de dados até uma condição
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int numero = 0;
while (numero != -1) {
    System.out.print("Digite um número (-1 para sair): ");
    numero = scanner.nextInt();
    if (numero != -1) {
        System.out.println("Você digitou: " + numero);
    }
}
scanner.close();

// Exemplo 3: Uso com boolean flag
boolean continuar = true;
int contador2 = 0;
while (continuar) {
    System.out.println("Executando... " + contador2);
    contador2++;
    if (contador2 >= 5) {
        continuar = false; // condição de saída
    }
}
```

## 3. Loop do...while

O loop `do...while` é similar ao `while`, mas a verificação da condição ocorre após a execução do bloco, garantindo que o bloco seja executado pelo menos uma vez.

### Sintaxe básica:

```java
do {
    // código a ser repetido
} while (condição);
```

### Exemplos:

```java
// Exemplo 1: Do-while básico
int i = 0;
do {
    System.out.println("Valor de i: " + i);
    i++;
} while (i < 5);

// Exemplo 2: Menu de opções
import java.util.Scanner;

Scanner input = new Scanner(System.in);
int opcao;
do {
    System.out.println("\n=== MENU ===");
    System.out.println("1. Opção 1");
    System.out.println("2. Opção 2");
    System.out.println("3. Opção 3");
    System.out.println("0. Sair");
    System.out.print("Escolha uma opção: ");
    opcao = input.nextInt();
    
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
input.close();

// Exemplo 3: Validação de entrada
int numero;
do {
    System.out.print("Digite um número positivo: ");
    numero = scanner.nextInt();
    if (numero <= 0) {
        System.out.println("Erro! O número deve ser positivo.");
    }
} while (numero <= 0);
System.out.println("Número válido: " + numero);
```

## 4. forEach (Enhanced for loop)

O loop `forEach` (ou for-each) foi introduzido no Java 5 e é usado para percorrer arrays e coleções de forma mais simples e legível.

### Sintaxe básica:

```java
for (tipo elemento : coleção) {
    // código usando o elemento atual
}
```

### Exemplos:

```java
// Exemplo 1: Percorrendo um array com forEach
int[] numeros = {1, 2, 3, 4, 5};
for (int num : numeros) {
    System.out.println("Número: " + num);
}

// Exemplo 2: Percorrendo uma coleção (ArrayList)
import java.util.ArrayList;
import java.util.List;

List<String> frutas = new ArrayList<>();
frutas.add("Maçã");
frutas.add("Banana");
frutas.add("Laranja");
frutas.add("Uva");

for (String fruta : frutas) {
    System.out.println("Fruta: " + fruta);
}

// Exemplo 3: Array bidimensional com forEach
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int[] linha : matriz) {
    for (int valor : linha) {
        System.out.print(valor + " ");
    }
    System.out.println(); // nova linha após cada linha da matriz
}
```

## 5. Controle de loops

Java oferece comandos para controlar o fluxo dentro dos loops:

### break e continue:

```java
// Exemplo 1: Usando break para sair do loop
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        System.out.println("Encontrado o valor 5, saindo do loop!");
        break; // sai do loop
    }
    System.out.println("Valor: " + i);
}

// Exemplo 2: Usando continue para pular iterações
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // pula para a próxima iteração
    }
    System.out.println("Número ímpar: " + i);
}

// Exemplo 3: Break com label (para loops aninhados)
outerLoop:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            System.out.println("Saindo dos dois loops!");
            break outerLoop; // sai do loop externo
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
```

## Comparação entre os tipos de loops

| Loop | Melhor uso | Vantagens | Desvantagens |
|------|------------|-----------|--------------|
| for | Quando o número de iterações é conhecido | Inicialização, condição e incremento em uma linha | Pode ser complexo para lógica simples |
| while | Quando o número de iterações é desconhecido | Simples e flexível | Necessita inicialização externa |
| do-while | Quando o bloco deve ser executado pelo menos uma vez | Garante pelo menos uma execução | Pode levar a execuções indesejadas |
| forEach | Para percorrer coleções e arrays | Limpo e legível | Não permite modificar o índice ou a coleção facilmente |

## Boas práticas

1. Evite loops infinitos garantindo que a condição eventualmente se torne falsa.
2. Use variáveis descritivas para contadores e iteradores.
3. Mantenha o corpo do loop simples; considere extrair código complexo para métodos separados.
4. Prefira o forEach quando estiver apenas iterando sem necessidade de manipular índices.
5. Use break e continue com moderação para manter o código legível.
6. Evite modificar a variável de controle dentro do corpo do loop for.