# Tipos Primitivos e Variáveis em Java

## Introdução

Em Java, os tipos primitivos são os blocos de construção fundamentais para armazenar os dados mais básicos. Diferentemente de objetos, os tipos primitivos são predefinidos pela linguagem e são nomeados por uma palavra-chave reservada.

## Tipos Primitivos em Java

Java possui oito tipos primitivos:

### 1. Tipos Inteiros

| Tipo    | Tamanho | Valor Mínimo         | Valor Máximo        | Exemplo                |
|---------|---------|----------------------|---------------------|------------------------|
| `byte`  | 8 bits  | -128                 | 127                 | `byte idade = 25;`     |
| `short` | 16 bits | -32.768              | 32.767              | `short ano = 2025;`    |
| `int`   | 32 bits | -2.147.483.648       | 2.147.483.647       | `int populacao = 1000;`|
| `long`  | 64 bits | -9.223.372.036.854.775.808 | 9.223.372.036.854.775.807 | `long distancia = 10000000L;` |

### 2. Tipos de Ponto Flutuante

| Tipo      | Tamanho  | Precisão            | Exemplo              |
|-----------|----------|---------------------|----------------------|
| `float`   | 32 bits  | 6-7 dígitos decimais| `float altura = 1.75f;` |
| `double`  | 64 bits  | 15 dígitos decimais | `double pi = 3.14159265359;` |

### 3. Outros Tipos

| Tipo      | Tamanho  | Descrição           | Exemplo              |
|-----------|----------|---------------------|----------------------|
| `char`    | 16 bits  | Um único caractere Unicode | `char letra = 'A';` |
| `boolean` | 1 bit    | Valor verdadeiro ou falso | `boolean ativo = true;` |

## Declaração de Variáveis

Em Java, todas as variáveis devem ser declaradas antes de serem usadas. A sintaxe básica para declaração de variáveis é:

```java
tipo nomeVariavel = valor;
```

### Exemplos:

```java
int idade = 25;
double salario = 5000.50;
char sexo = 'M';
boolean ativo = true;
```

## Exemplo Completo

```java
public class ExemploTiposPrimitivos {
    public static void main(String[] args) {
        // Tipos inteiros
        byte numeroPequeno = 127;
        short numeroMedio = 32000;
        int numeroComum = 50000;
        long numeroGrande = 1000000000L; // Note o 'L' no final
        
        // Tipos de ponto flutuante
        float alturaAproximada = 1.75f; // Note o 'f' no final
        double alturaExata = 1.7523456789;
        
        // Outros tipos primitivos
        char letraInicial = 'J';
        boolean estudando = true;
        
        // Exibindo os valores
        System.out.println("Byte: " + numeroPequeno);
        System.out.println("Short: " + numeroMedio);
        System.out.println("Int: " + numeroComum);
        System.out.println("Long: " + numeroGrande);
        System.out.println("Float: " + alturaAproximada);
        System.out.println("Double: " + alturaExata);
        System.out.println("Char: " + letraInicial);
        System.out.println("Boolean: " + estudando);
    }
}
```

## Observações Importantes

1. **Literais de long e float**: Para números long, adicione 'L' ou 'l' no final. Para float, adicione 'F' ou 'f'.
2. **Valores padrão**: As variáveis locais não têm valores padrão e devem ser inicializadas antes do uso.
3. **Conversão de tipos**: Java permite conversão entre tipos primitivos, seja implicitamente (para tipos maiores) ou explicitamente usando casting.

### Exemplo de Conversão de Tipos:

```java
// Conversão implícita (widening)
int numeroInt = 100;
long numeroLong = numeroInt; // OK

// Conversão explícita (narrowing)
double numeroDbl = 100.05;
int numeroInteiro = (int) numeroDbl; // perde a parte decimal
```

## Constantes

Para declarar valores que não devem mudar, use a palavra-chave `final`:

```java
final double PI = 3.14159;
final int IDADE_MINIMA = 18;
```