## Lambda Expressions em Java

As *Lambda Expressions* foram introduzidas no Java 8 e servem para tornar o código mais conciso e legível, especialmente ao lidar com interfaces funcionais.

### O que são?
- Uma **forma simplificada de representar funções anônimas** (sem nome).
- Utilizadas principalmente com **interfaces funcionais** (interfaces com apenas um método abstrato).

### Sintaxe básica
```java
(parâmetros) -> { corpo }
```

### Exemplo simples
```java
List<String> nomes = Arrays.asList("Ana", "João", "Carlos");
nomes.forEach(nome -> System.out.println(nome));
```

### Vantagens
- Reduz a **verbosidade** do código.
- Facilita o uso de **APIs funcionais**, como a `Stream API`.
- Torna o código mais **moderno e legível**.

### Quando usar?
- Ao implementar interfaces funcionais como `Runnable`, `Comparator`, `Consumer`, etc.
- Em operações com coleções, como `filter`, `map`, `forEach`, entre outras.

> 💡 Dica: Lambda Expressions funcionam melhor quando usadas com a *Stream API* para processamento funcional de dados.


- Vídeo do assunto = https://www.youtube.com/watch?v=eyCO9qGk0vc&t=56s

```java

// isso significa que está usando a e
// ( parâmetros ) -> expressão lambda
// ( parâmetros ) -> {bloco de código}

import java.util.ArrayList;
import java.util.function.Consumer;

public static void main(String[] args) {

    ArrayList<Integer> valores = new ArrayList<Integer>();
    ArrayList<Integer> dobro = new ArrayList<Integer>();
    ArrayList<Integer> par = new ArrayList<Integer>();
    ArrayList<Integer> impar = new ArrayList<Integer>();

    valores.add(1);
    valores.add(2);
    valores.add(3);
    valores.add(4);
    valores.add(5);
    valores.add(6);

    /*
        valores.forEach( (valor) -> { 
            dobro.add( valor * 2 ); 
        } );
    */

    // Funciona assim tmb com o consumer
    /*
        Consumer<Integer> dobrar = (valor) -> { 
            dobro.add( valor * 2 ); 
        };
            
        valores.forEach( dobrar );
    */

    // Com todos no mesmo
    valores.forEach( (valor) -> { 
        dobro.add( valor * 2 ); 

        if ( valor % 2 == 0) {
            par.add(valor);
        } else {
            impar.add(valor);
        }
    } );
    
    System.out.println( valores );
    System.out.println( dobro );
    System.out.println( par );
    System.out.println( impar );

}

```

---

