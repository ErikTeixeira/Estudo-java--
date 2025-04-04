# Tipos de Dados e Variáveis em Java

## Introdução

Em Java, os tipos de dados são classificados em duas categorias principais: **tipos primitivos** e **tipos não primitivos** (também chamados de tipos de referência ou objetos). Entender essa distinção é fundamental para programar eficientemente em Java.

## Tipos Primitivos

Os tipos primitivos são tipos de dados básicos fornecidos pela linguagem Java. Eles representam valores simples e são armazenados diretamente na memória stack.

| Tipo    | Tamanho    | Valor Mínimo                  | Valor Máximo                 | Valor Padrão | Exemplo                 |
|---------|------------|------------------------------|------------------------------|--------------|-------------------------|
| `byte`  | 8 bits     | -128                         | 127                          | 0            | `byte b = 10;`          |
| `short` | 16 bits    | -32.768                      | 32.767                       | 0            | `short s = 1000;`       |
| `int`   | 32 bits    | -2.147.483.648               | 2.147.483.647                | 0            | `int i = 100000;`       |
| `long`  | 64 bits    | -9.223.372.036.854.775.808   | 9.223.372.036.854.775.807   | 0L           | `long l = 100000L;`     |
| `float` | 32 bits    | ≈ -3,4 × 10^38               | ≈ 3,4 × 10^38                | 0.0f         | `float f = 3.14f;`      |
| `double`| 64 bits    | ≈ -1,7 × 10^308              | ≈ 1,7 × 10^308               | 0.0d         | `double d = 3.14159;`   |
| `char`  | 16 bits    | 0 ('\u0000')                 | 65.535 ('\uffff')            | '\u0000'     | `char c = 'A';`         |
| `boolean`| 1 bit*    | -                            | -                            | false        | `boolean flag = true;`  |

**Nota:* O tamanho exato do boolean pode variar dependendo da JVM, mas conceitualmente representa apenas verdadeiro ou falso.

## Tipos Não Primitivos (Referência)

Os tipos não primitivos são objetos que contêm métodos para realizar operações com os dados. Eles são armazenados no heap e as variáveis armazenam referências a esses objetos.

| Tipo       | Descrição                                        | Valor Padrão | Exemplo                                   |
|------------|--------------------------------------------------|--------------|-------------------------------------------|
| `String`   | Sequência de caracteres                          | null         | `String nome = "Java";`                   |
| `Arrays`   | Coleção de elementos do mesmo tipo               | null         | `int[] numeros = {1, 2, 3};`              |
| `Classes`  | Modelo para criação de objetos                   | null         | `Pessoa pessoa = new Pessoa();`           |
| `Interfaces`| Contrato que classes podem implementar          | null         | `List<String> lista = new ArrayList<>();` |
| `Enums`    | Tipo que consiste em constantes predefinidas     | null         | `enum Dia {SEGUNDA, TERCA};`              |
| `Records`  | Classe imutável para transporte de dados (Java 16+) | null      | `record Ponto(int x, int y) {}`           |

## Diferenças entre Tipos Primitivos e Não Primitivos

| Característica | Tipos Primitivos | Tipos Não Primitivos |
|----------------|------------------|----------------------|
| Armazenamento  | Stack             | Heap                 |
| Valor padrão   | Específico para cada tipo (0, false, etc.) | null |
| Métodos        | Não possuem      | Possuem métodos       |
| Tamanho        | Fixo, dependendo do tipo | Variável       |
| Performance    | Geralmente mais rápidos | Maior overhead  |
| Passagem       | Por valor        | Por referência        |
| Classes Wrapper | byte → Byte, int → Integer, etc. | Já são objetos |

## Conversão de Tipos (Type Casting)

### Conversão Implícita (Widening Casting)
Ocorre automaticamente quando convertemos um tipo menor para um tipo maior:

```java
// Conversão implícita
byte valorByte = 10;
int valorInt = valorByte;  // byte para int
long valorLong = valorInt; // int para long
float valorFloat = valorLong; // long para float
double valorDouble = valorFloat; // float para double
```

### Conversão Explícita (Narrowing Casting)
Requer indicação explícita quando convertemos um tipo maior para um tipo menor:

```java
// Conversão explícita
double valorDouble = 9.78;
float valorFloat = (float) valorDouble; // double para float
long valorLong = (long) valorFloat;     // float para long
int valorInt = (int) valorLong;         // long para int
byte valorByte = (byte) valorInt;       // int para byte
```

### Conversão entre Tipos Primitivos e Não Primitivos (Autoboxing e Unboxing)

#### Autoboxing (Primitivo → Objeto)
```java
// Autoboxing
int primitivo = 42;
Integer objeto = primitivo; // Autoboxing

char c = 'A';
Character charObj = c;
```

#### Unboxing (Objeto → Primitivo)
```java
// Unboxing
Integer objeto = 100;
int primitivo = objeto; // Unboxing

Boolean bObj = true;
boolean b = bObj;
```

## Exemplos Práticos

### Trabalhando com Tipos Primitivos
```java
public class ExemploTiposPrimitivos {
    public static void main(String[] args) {
        // Declaração e inicialização
        byte idade = 30;
        short ano = 2023;
        int populacao = 9000000;
        long distanciaEstrela = 1500000000000L;
        float altura = 1.75f;
        double pi = 3.14159265359;
        char genero = 'M';
        boolean ativo = true;
        
        // Operações com tipos primitivos
        int soma = idade + ano; // 30 + 2023 = 2053
        double multiplicacao = altura * 2; // 1.75 * 2 = 3.5
        
        System.out.println("Soma: " + soma);
        System.out.println("Multiplicação: " + multiplicacao);
    }
}
```

### Trabalhando com Tipos Não Primitivos
```java
public class ExemploTiposNaoPrimitivos {
    public static void main(String[] args) {
        // String
        String nome = "Maria Silva";
        System.out.println("Comprimento do nome: " + nome.length());
        
        // Array
        int[] numeros = {10, 20, 30, 40, 50};
        System.out.println("Primeiro número: " + numeros[0]);
        
        // Classe
        java.util.Date dataAtual = new java.util.Date();
        System.out.println("Data atual: " + dataAtual);
        
        // Enum
        enum DiaSemana { SEGUNDA, TERCA, QUARTA, QUINTA, SEXTA, SABADO, DOMINGO }
        DiaSemana hoje = DiaSemana.QUARTA;
        System.out.println("Hoje é: " + hoje);
        
        // Record (Java 16+)
        // Records são imutáveis
        // O compilador Java gera automaticamente os métodos construtor, getters, equals(), hashCode() e toString() com base nos campos declarados no record
        record Pessoa(String nome, int idade) {}
        
        Pessoa pessoa = new Pessoa("João", 25);
        System.out.println("Pessoa: " + pessoa.nome() + ", " + pessoa.idade() + " anos");
    }
}
```

### Conversão entre Tipos
```java
public class ExemploConversao {
    public static void main(String[] args) {
        // Conversão implícita
        int numero = 100;
        long numeroLongo = numero; // int para long
        System.out.println("Long: " + numeroLongo);
        
        // Conversão explícita
        double valor = 9.99;
        int valorInteiro = (int) valor; // double para int (perde a parte decimal)
        System.out.println("Valor como inteiro: " + valorInteiro);
        
        // Conversão String para número
        String strNumero = "123";
        int numeroConvertido = Integer.parseInt(strNumero);
        System.out.println("String convertida para int: " + numeroConvertido);
        
        // Conversão número para String
        int codigo = 789;
        String strCodigo = String.valueOf(codigo);
        System.out.println("Int convertido para String: " + strCodigo);
        
        // Autoboxing
        int i = 10;
        Integer iObj = i;
        System.out.println("Integer objeto: " + iObj);
        
        // Unboxing
        Double dObj = 3.14;
        double d = dObj;
        System.out.println("Double primitivo: " + d);
    }
}
```