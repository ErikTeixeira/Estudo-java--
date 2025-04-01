1. O primeiro princípio 

Na linguagem de programação Java, cada comando é escrito em sua própria linha. Um ponto e vírgula deve ser colocado no final de cada comando

```java
System.out.println("Humans and robots are friends forever");
System.out.println("Humans and robots are friends forever");
```

2. O segundo princípio 

Um programa só pode consistir em comandos e nada além

Na linguagem de programação Java, um comando não pode existir sozinho. Ele é parte de uma função (em Java, as funções também são chamadas de métodos). Um método é parte de uma classe. Em outras palavras, uma classe é dividida em métodos e métodos são divididos em comandos

- Classe
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


    
