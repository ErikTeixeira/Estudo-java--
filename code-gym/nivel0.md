1. O primeiro princípio 

Na linguagem de programação Java, cada comando é escrito em sua própria linha. Um ponto e vírgula deve ser colocado no final de cada comando

```java
System.out.println("Humans and robots are friends forever");
System.out.println("Humans and robots are friends forever");
```

2. O segundo princípio 

Um programa só pode consistir em comandos e nada além

Na linguagem de programação Java, um comando não pode existir sozinho. Ele é parte de uma função (em Java, as funções também são chamadas de métodos). Um método é parte de uma classe. Em outras palavras, uma classe é dividida em métodos e métodos são divididos em comandos


- ## Classe
    - Geralmente, o código de uma classe consiste no 'nome da classe' e no 'corpo da classe'
    - Será salva no arquivo **Home.java**
    - O corpo da classe é escrito entre chaves

    ```java
    public class Home
    {
        Class body 
    }
    ```

    - O corpo da classe pode conter variáveis (também conhecidas como dados) e métodos (funções)

    ```java
    public class Home
    {
        int a;
        int b;

        public static void main(String[] args)
        {
            System.out.print("1");
        }

        public static double pi()
        {
            return 3.14;
        }
    }
    
    ```

    - Um programa mínimo deve conter pelo menos uma classe que deve incluir pelo menos um método ou função para começar a execução do programa. Este método deve se chamar **'main'**

    ```java
    public class Home
    {
        public static void main (String[] args)
        {
        }
    }
    ```

### Exibir valor

- System.out.println("Amigo");
- System.out.print(1);

### Variáveis e tipos de dados

Variáveis são entidades especiais usadas para armazenar dados


| Tipo de Dado | Descrição                                                       | Exemplo de Declaração         |
|--------------|-----------------------------------------------------------------|-------------------------------|
| **byte**   | Número inteiro de 8 bits, usado para economizar memória.         | `byte idade = 25;`            |
| **short**  | Número inteiro de 16 bits.                                        | `short saldo = 1500;`         |
| **int**    | Número inteiro de 32 bits, mais utilizado para operações inteiras. | `int numero = 1000;`          |
| **long**   | Número inteiro de 64 bits, para valores maiores.                  | `long distancia = 100000L;`   |
| **float**  | Número de ponto flutuante de 32 bits.                             | `float altura = 1.75f;`        |
| **double** | Número de ponto flutuante de 64 bits, mais utilizado para cálculos. | `double preco = 19.99;`       |
| **char**   | Representa um único caractere Unicode de 16 bits.                 | `char inicial = 'A';`         |
| **boolean**| Representa um valor lógico: `true` ou `false`.                    | `boolean ativo = true;`       |
| **String** | Cadeia de caracteres (classe, não tipo primitivo).                | `String nome = "João";`       |

> *Observação:* A classe `String` é usada para representar sequências de caracteres, embora não seja um tipo primitivo em Java.

> O f no final do número (1.75f) indica que o valor é do tipo float em Java.  -  `float altura = 1.75f;` 
Em Java, **os valores decimais** (como 1.75) **são tratados por padrão como double**, que tem 64 bits de precisão. No entanto, como float tem apenas 32 bits, o compilador precisa que você especifique explicitamente que o número deve ser tratado como um float.

- ### Atribuição
    - i = 3;   ->  Atribui o valor 3 à variável i.	
        a = 1;   ->   Atribui o valor 1 à variável a.
        b = a + 1;   ->   Atribui o valor 2 à variável b.

    - String s = "Amigo" + " is the best";   ->   s contém "Amigo is the best"
    - String s = "";   ->   s contém uma string vazia
    - int x = 333;
        String s = "Amigo" + x;   ->   s contém "Amigo333"

**Se você juntar strings e números, o resultado será sempre uma string**
</br>

- **Não é possível criar duas variáveis com nomes iguais no mesmo método, em métodos diferentes dá**
- **Nomes de variáveis não podem ter espaços, +, -, etc. É melhor usar apenas letras e números no nome de uma variável**
- **Java diferencia maiúsculas de minúsculas. int a não é o mesmo que Int a**


### O que são compiladores?

- Um compilador é um programa especial que converte um programa escrito em linguagem de programação em uma série de códigos de máquina
- Um programa compilado para Windows não vai funcionar em um smartphone Android
- Um compilador Java não compila todas as classes em um programa de código de máquina. Em vez disso, ele compila cada classe de forma independente e, além disso, não converte em código de máquina, mas em um código intermediário especial (bytecode). O bytecode é compilado em código de máquina quando o programa é iniciado.
- A JVM vai compilar o bytecode em código de máquina antes de executar o programa
- Permite que os programas escritos em Java sejam executados em praticamente qualquer dispositivo: computador, smartphone, caixa eletrônico, torradeira

**Em Java, você pode escrever comandos, mas também pode incluir comentários aos comandos no próprio código. O compilador ignora todos os comentários. Quando o programa é executado, todos os comentários são omitidos, coloque no código para explicar o que ele está fazendo**

```java
    /*
        Tem dois tipo de comentários. Esse
    */

   // E esse
```

# Aprendeu
- ### Variáveis
- ### Exibição de texto na tela
- ### Tipos int e String
- ### A diferença entre compilar em Java e em outras linguagens
- ### Inclusão de comentários no código e a razão para fazer isso


