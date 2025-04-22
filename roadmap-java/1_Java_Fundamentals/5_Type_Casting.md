# Conversão de Tipos em Java (Type Casting)

## Introdução

A conversão de tipos, ou _type casting_, é o processo de transformar uma variável de um tipo de dado para outro. Em Java, essa operação é comum e necessária em várias situações de programação, especialmente quando trabalhamos com diferentes tipos de dados que precisam interagir entre si.

Java oferece dois tipos principais de conversão:
1. Conversão implícita (widening casting)
2. Conversão explícita (narrowing casting)

Além disso, existem mecanismos para converter entre tipos primitivos e objetos, como autoboxing/unboxing e métodos utilitários.

## Conversão Implícita (Widening Casting)

A conversão implícita ocorre automaticamente quando convertemos um tipo de menor tamanho para um tipo de maior tamanho, sem risco de perda de dados.

### Ordem da conversão implícita:
```
byte → short → char → int → long → float → double
```

### Características da conversão implícita:
- É realizada automaticamente pelo compilador
- Não requer sintaxe especial
- Não há perda de dados
- Também chamada de _widening casting_, _upcasting_ ou _promoção_

### Exemplos:

```java
public class ConversaoImplicita {
    public static void main(String[] args) {
        // byte para int
        byte valorByte = 100;
        int valorInt = valorByte;  // Conversão implícita
        System.out.println("byte para int: " + valorInt);

        // int para long
        long valorLong = valorInt;  // Conversão implícita
        System.out.println("int para long: " + valorLong);

        // int para float
        float valorFloat = valorInt;  // Conversão implícita
        System.out.println("int para float: " + valorFloat);

        // long para double
        double valorDouble = valorLong;  // Conversão implícita
        System.out.println("long para double: " + valorDouble);

        // char para int
        char caractere = 'A';
        int valorAscii = caractere;  // Conversão implícita (char para int)
        System.out.println("char 'A' para int (valor ASCII): " + valorAscii);
    }
}
```

### Saída esperada:
```
byte para int: 100
int para long: 100
int para float: 100.0
long para double: 100.0
char 'A' para int (valor ASCII): 65
```

## Conversão Explícita (Narrowing Casting)

A conversão explícita é necessária quando queremos converter um tipo de maior tamanho para um tipo de menor tamanho, onde pode ocorrer perda de dados.

### Características da conversão explícita:
- Requer sintaxe específica: `(tipo_destino) expressao`
- Pode causar perda de precisão ou dados
- Também chamada de _narrowing casting_ ou _downcasting_
- É responsabilidade do programador verificar possíveis perdas de dados

### Exemplos:

```java
public class ConversaoExplicita {
    public static void main(String[] args) {
        // double para int (perda da parte decimal)
        double valorDouble = 9.78;
        int valorInt = (int) valorDouble;  // Conversão explícita - perda da parte decimal
        System.out.println("double para int: " + valorInt);

        // float para short
        float valorFloat = 1000.5f;
        short valorShort = (short) valorFloat;  // Conversão explícita
        System.out.println("float para short: " + valorShort);

        // int para byte (possível perda se valor exceder limites)
        int numGrande = 130;
        byte valorByte = (byte) numGrande;  // Conversão explícita - overflow
        System.out.println("int 130 para byte: " + valorByte);  // Resulta em -126 devido ao overflow

        // long para int
        long valorLong = 2147483648L;  // Maior que o máximo para int
        int valorInt2 = (int) valorLong;  // Conversão explícita - overflow
        System.out.println("long 2147483648L para int: " + valorInt2);
    }
}
```

### Saída esperada:
```
double para int: 9
float para short: 1000
int 130 para byte: -126
long 2147483648L para int: -2147483648
```

## Casting entre Tipos Primitivos e Classes Wrapper

Java fornece classes _wrapper_ para cada tipo primitivo, permitindo que sejam tratados como objetos:


### Classes Wrapper em Java

Classes **wrapper** (ou "classes invólucro") são classes fornecidas pela linguagem Java que permitem tratar **tipos primitivos como objetos**. Em Java, os tipos primitivos (como `int`, `double`, `char`, etc.) não são objetos por padrão, então não possuem métodos ou podem ser usados diretamente com coleções genéricas, como `List` ou `Map`.

### Classes Wrapper para Tipos Primitivos

| Tipo Primitivo | Classe Wrapper |
|----------------|----------------|
| `byte`         | `Byte`         |
| `short`        | `Short`        |
| `int`          | `Integer`      |
| `long`         | `Long`         |
| `float`        | `Float`        |
| `double`       | `Double`       |
| `char`         | `Character`    |
| `boolean`      | `Boolean`      |

## Por que usar classes wrapper?

1. **Coleções genéricas**  
   As coleções como `ArrayList` só funcionam com objetos. Então, se você quiser armazenar inteiros em uma `ArrayList`, você usa `Integer`, não `int`.

   ```java
   List<Integer> numeros = new ArrayList<>();
   numeros.add(10); // autoboxing
   ```

2. **Métodos utilitários**  
   As classes wrapper fornecem métodos úteis. Por exemplo:

   ```java
   int numero = Integer.parseInt("123"); // converte String para int
   ```

3. **Autoboxing e unboxing**  
   Java automaticamente converte entre primitivos e wrappers:

   ```java
   Integer x = 5;      // autoboxing: int -> Integer
   int y = x;          // unboxing: Integer -> int
   ```

### Autoboxing e Unboxing

A partir do Java 5, a conversão entre tipos primitivos e suas classes wrapper correspondentes tornou-se automática:

- **Autoboxing**: Conversão automática de tipo primitivo para objeto wrapper
- **Unboxing**: Conversão automática de objeto wrapper para tipo primitivo

```java
public class AutoboxingUnboxing {
    public static void main(String[] args) {
        // Autoboxing (int → Integer)
        int valorPrimitivo = 42;
        Integer objetoInteger = valorPrimitivo;  // Autoboxing automático
        System.out.println("Autoboxing: " + objetoInteger);

        // Unboxing (Integer → int)
        Integer objetoInteger2 = 100;
        int valorPrimitivo2 = objetoInteger2;  // Unboxing automático
        System.out.println("Unboxing: " + valorPrimitivo2);

        // Exemplo com outros tipos
        char c = 'Z';
        Character charObj = c;  // Autoboxing
        
        Double dObj = 3.14159;
        double d = dObj;  // Unboxing
    }
}
```

## Métodos de Conversão em Java

Além do cast básico, Java oferece métodos específicos para converter entre diferentes tipos:

### Conversão de String para Tipos Primitivos

Cada classe wrapper fornece métodos `parseX()` para converter String para o tipo primitivo correspondente:

```java
public class StringParaPrimitivo {
    public static void main(String[] args) {
        // String para int
        String numeroStr = "123";
        int numero = Integer.parseInt(numeroStr);
        System.out.println("String para int: " + numero);

        // String para double
        String piStr = "3.14159";
        double pi = Double.parseDouble(piStr);
        System.out.println("String para double: " + pi);

        // String para boolean
        String verdadeiroStr = "true";
        boolean verdadeiro = Boolean.parseBoolean(verdadeiroStr);
        System.out.println("String para boolean: " + verdadeiro);

        // String para long
        String longStr = "9223372036854775807";
        long longNum = Long.parseLong(longStr);
        System.out.println("String para long: " + longNum);

        // String para byte
        String byteStr = "127";
        byte byteNum = Byte.parseByte(byteStr);
        System.out.println("String para byte: " + byteNum);
    }
}
```

### Conversão de Tipos Primitivos para String

Existem várias maneiras de converter tipos primitivos para String:

```java
public class PrimitivoParaString {
    public static void main(String[] args) {
        // Usando o método toString() das classes wrapper
        int numero = 123;
        String strInt = Integer.toString(numero);
        System.out.println("int para String com toString(): " + strInt);

        // Usando String.valueOf() (recomendado)
        double valor = 3.14159;
        String strDouble = String.valueOf(valor);
        System.out.println("double para String com valueOf(): " + strDouble);

        // Usando concatenação com string vazia (menos eficiente)
        long longNum = 9876543210L;
        String strLong = "" + longNum;
        System.out.println("long para String com concatenação: " + strLong);

        // boolean para String
        boolean flag = true;
        String strBoolean = String.valueOf(flag);
        System.out.println("boolean para String: " + strBoolean);
    }
}
```

## Conversão entre Classes Wrapper

Também é possível converter entre diferentes classes wrapper:

```java
public class ConversaoEntreWrappers {
    public static void main(String[] args) {
        // Integer para Double
        Integer intObj = 100;
        Double doubleObj = intObj.doubleValue();
        System.out.println("Integer para Double: " + doubleObj);

        // Double para Integer (com perda de precisão)
        Double piObj = 3.14159;
        Integer intPi = piObj.intValue();
        System.out.println("Double para Integer: " + intPi);

        // Conversão via tipos primitivos
        Long longObj = 1000L;
        Float floatObj = (float) longObj.longValue();
        System.out.println("Long para Float: " + floatObj);
    }
}
```

## Exemplos Avançados de Conversão

### Conversão com Operações Aritméticas

Quando realizamos operações entre diferentes tipos, o Java realiza promoção automática:

```java
public class PromocaoAritmetica {
    public static void main(String[] args) {
        int intValue = 10;
        double doubleValue = 3.5;
        
        // O resultado é promovido para double
        double resultado = intValue + doubleValue;
        System.out.println("int + double = " + resultado);
        
        // Para obter um resultado inteiro, é necessária conversão explícita
        int resultadoInt = intValue + (int) doubleValue;
        System.out.println("int + (int)double = " + resultadoInt);
        
        // Promoção de byte em operações
        byte b1 = 10;
        byte b2 = 20;
        // byte soma = b1 + b2; // Erro de compilação - o resultado é promovido para int
        int soma = b1 + b2; // Correto
        byte somaByte = (byte) (b1 + b2); // Conversão explícita necessária
        System.out.println("byte + byte como int = " + soma);
        System.out.println("byte + byte como byte = " + somaByte);
    }
}
```

### Usando Métodos para Conversão Segura

```java
public class ConversaoSegura {
    public static void main(String[] args) {
        // Verificação antes da conversão
        String possiveisNumeros[] = {"123", "123.456", "abc", "2147483648"};
        
        for (String valor : possiveisNumeros) {
            try {
                int numero = Integer.parseInt(valor);
                System.out.println("String \"" + valor + "\" convertida para int: " + numero);
            } catch (NumberFormatException e) {
                System.out.println("Não foi possível converter \"" + valor + "\" para int");
            }
        }
        
        // Verificando limites antes da conversão
        long numeroGrande = 9223372036854775807L;
        if (numeroGrande <= Integer.MAX_VALUE && numeroGrande >= Integer.MIN_VALUE) {
            int numeroInt = (int) numeroGrande;
            System.out.println("Conversão segura: " + numeroInt);
        } else {
            System.out.println("Valor " + numeroGrande + " está fora dos limites de int");
        }
    }
}
```

## Resumo de Conversões Comuns

| De          | Para         | Tipo de Conversão | Exemplo                           |
|-------------|--------------|-------------------|-----------------------------------|
| byte, short | int          | Implícita         | `int i = byteVar;`                |
| int         | long         | Implícita         | `long l = intVar;`                |
| int         | double       | Implícita         | `double d = intVar;`              |
| long        | float        | Implícita         | `float f = longVar;`              |
| double      | int          | Explícita         | `int i = (int) doubleVar;`        |
| float       | short        | Explícita         | `short s = (short) floatVar;`     |
| int         | byte         | Explícita         | `byte b = (byte) intVar;`         |
| String      | int          | Método            | `int i = Integer.parseInt(str);`  |
| String      | double       | Método            | `double d = Double.parseDouble(str);` |
| int         | String       | Método            | `String s = String.valueOf(intVar);` |
| double      | String       | Método            | `String s = Double.toString(doubleVar);` |
| int         | Integer      | Autoboxing        | `Integer i = intVar;`            |
| Double      | double       | Unboxing          | `double d = doubleVar;`          |

## Melhores Práticas

1. **Seja cuidadoso com conversões explícitas** - Verifique se o valor está dentro dos limites do tipo de destino para evitar overflow.

2. **Prefira métodos utilitários para conversões String** - Use `Integer.parseInt()` e `String.valueOf()` ao invés de conversões manuais.

3. **Trate exceções em conversões de String** - Utilize `try-catch` para tratar `NumberFormatException` ao converter strings.

4. **Evite conversões desnecessárias** - Cada conversão tem um custo de processamento; use o tipo adequado desde o início quando possível.

5. **Entenda a promoção automática em expressões** - Em expressões com tipos mistos, o resultado segue o tipo de maior "peso".

6. **Use conversões explícitas de forma consciente** - Documente quando houver risco de perda de dados.

## Conclusão

A conversão de tipos é uma parte essencial da programação em Java. Com o entendimento adequado dos diferentes tipos de conversões e seus comportamentos, você poderá utilizá-los de forma eficiente e segura em seus programas.

Embora conversões implícitas sejam seguras, conversões explícitas devem ser utilizadas com cuidado devido ao potencial de perda de dados. Os métodos de conversão fornecidos pelas classes wrapper oferecem funcionalidades adicionais para lidar com diferentes cenários de conversão.