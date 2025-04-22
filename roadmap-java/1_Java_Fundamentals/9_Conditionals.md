# Estruturas Condicionais em Java

As estruturas condicionais são fundamentais na programação, pois permitem que o código tome decisões com base em diferentes condições. Em Java, existem várias formas de implementar essas estruturas.

## 1. if, else if, else

A estrutura `if-else` é a forma mais básica de controle de fluxo condicional.

### Sintaxe básica:

```java
if (condição) {
    // código executado se a condição for verdadeira
} else if (outra_condição) {
    // código executado se a primeira condição for falsa e esta for verdadeira
} else {
    // código executado se todas as condições anteriores forem falsas
}
```

### Exemplos:

```java
// Exemplo 1: Verificação simples
int idade = 18;

if (idade >= 18) {
    System.out.println("Você é maior de idade.");
} else {
    System.out.println("Você é menor de idade.");
}

// Exemplo 2: Múltiplas condições
int nota = 75;

if (nota >= 90) {
    System.out.println("Conceito A");
} else if (nota >= 80) {
    System.out.println("Conceito B");
} else if (nota >= 70) {
    System.out.println("Conceito C");
} else if (nota >= 60) {
    System.out.println("Conceito D");
} else {
    System.out.println("Conceito F");
}

// Exemplo 3: Condições aninhadas
boolean temCarteira = true;
int idadeMotorista = 17;

if (idadeMotorista >= 18) {
    if (temCarteira) {
        System.out.println("Pode dirigir.");
    } else {
        System.out.println("Não pode dirigir porque não tem carteira.");
    }
} else {
    System.out.println("Não pode dirigir porque é menor de idade.");
}
```

## 2. Switch

A estrutura `switch` é útil quando precisamos comparar uma variável com múltiplos valores possíveis.

### Sintaxe básica:

```java
switch (expressão) {
    case valor1:
        // código se expressão == valor1
        break;
    case valor2:
        // código se expressão == valor2
        break;
    default:
        // código se nenhum dos casos anteriores for verdadeiro
}
```

### Exemplos:

```java
// Exemplo 1: Switch com inteiros
int diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        System.out.println("Domingo");
        break;
    case 2:
        System.out.println("Segunda-feira");
        break;
    case 3:
        System.out.println("Terça-feira");
        break;
    case 4:
        System.out.println("Quarta-feira");
        break;
    case 5:
        System.out.println("Quinta-feira");
        break;
    case 6:
        System.out.println("Sexta-feira");
        break;
    case 7:
        System.out.println("Sábado");
        break;
    default:
        System.out.println("Dia inválido");
}

// Exemplo 2: Switch com caracteres
char opcao = 'B';

switch (opcao) {
    case 'A':
    case 'a':
        System.out.println("Opção A selecionada");
        break;
    case 'B':
    case 'b':
        System.out.println("Opção B selecionada");
        break;
    case 'C':
    case 'c':
        System.out.println("Opção C selecionada");
        break;
    default:
        System.out.println("Opção inválida");
}

// Exemplo 3: Switch com Strings (Java 7+)
String fruta = "maçã";

switch (fruta) {
    case "banana":
        System.out.println("Amarela");
        break;
    case "maçã":
        System.out.println("Vermelha ou verde");
        break;
    case "uva":
        System.out.println("Roxa ou verde");
        break;
    default:
        System.out.println("Cor desconhecida");
}
```

### Switch Expressions (Java 12+)

A partir do Java 12, temos uma forma mais moderna de usar o switch:

```java
// Switch Expression com Java 12+
String estacao = "VERÃO";
String clima = switch (estacao) {
    case "VERÃO" -> "Quente";
    case "INVERNO" -> "Frio";
    case "OUTONO", "PRIMAVERA" -> "Ameno";
    default -> "Indefinido";
};
System.out.println("O clima é: " + clima);
```

## 3. Operador Ternário

O operador ternário é uma forma concisa de escrever expressões condicionais simples.

### Sintaxe básica:

```java
variável = (condição) ? valor_se_verdadeiro : valor_se_falso;
```

### Exemplos:

```java
// Exemplo 1: Operador ternário simples
int idade = 20;
String status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
System.out.println(status); // Saída: Maior de idade

// Exemplo 2: Atribuição de valores com ternário
int a = 10;
int b = 20;
int maior = (a > b) ? a : b;
System.out.println("O maior valor é: " + maior); // Saída: O maior valor é: 20

// Exemplo 3: Ternários aninhados (use com moderação para manter legibilidade)
int numero = 15;
String resultado = (numero > 0) ? "Positivo" : (numero < 0) ? "Negativo" : "Zero";
System.out.println(resultado); // Saída: Positivo

// Exemplo 4: Uso em string format ou concatenação
int pontos = 75;
System.out.println("Você " + (pontos >= 60 ? "passou" : "falhou") + " no teste.");
```

## Comparação entre as abordagens

| Estrutura | Melhor uso | Vantagens | Desvantagens |
|-----------|------------|-----------|--------------|
| if-else | Condições complexas com expressões booleanas | Flexível e intuitiva | Pode ficar verbosa |
| switch | Comparação de uma variável com múltiplos valores | Mais limpo para múltiplas comparações | Limitado a tipos específicos |
| Operador ternário | Condições simples com duas alternativas | Código conciso | Difícil leitura se aninhado |

## Boas práticas

1. Use chaves `{}` mesmo para blocos de uma única linha para evitar bugs.
2. Não esqueça do `break` nos casos do `switch` (a menos que queira "fall-through").
3. Mantenha o operador ternário simples para preservar a legibilidade.
4. Considere extrair condições complexas para métodos ou variáveis booleanas nomeadas.