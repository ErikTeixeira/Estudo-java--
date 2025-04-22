- vídeo do assunto  -  https://www.youtube.com/watch?v=BG4kOOfbOjc&t=2068s

## Try-catch-finally


```java
public static void main( String[] args ) throws Exception {

    int[] numeros = new int[] {10, 20 ,30};

    System.out.println("Número: ");

    // Vai tentar acessar o valor da posição 5
    System.out.println( numeros[5] );

    System.out.println("Mensagem Final");
}
```

### O java vai rodar e vai dar uma Exception

- ArrayIndexOutOfBoundsException
    - É uma classe da exception, e diz depois que o tamanho é de 3
    - E quando deu a exception **não rodou** o ``System.out.println("Mensagem Final");``
    - **QUANDO GERA UMA EXCEÇÃO SEU PROGRAMA ACABA NA HORA**


```java
public static void main( String[] args ) throws Exception {

    /*
        Pode deixar isso aqui ou lá
    int[] numeros = new int[] {10, 20 ,30};
    System.out.println("Número: ");
    */

    try {
        // todo código aqui ele tenta executar
        int[] numeros = new int[] {10, 20 ,30};
        System.out.println("Número: ");
        System.out.println( numeros[5] );

            // Não vai rodar isso, porque vai dar uma exceção antes
        System.out.println("Mensagem após a exceção");

    } catch ( Exception variavelDeErro ) {
        /*  trata os erros capturados no try
            Pode lidar assim ->
                - Imprimir no console o erro que aconteceu
                - criar um arquivo de log
                - se tiver uma interface, pode mostrar um pop-up com o erro na tela
                - pode tentar rodar de outra forma, chamar um método ...
        */

        // variavelDeErro  -> é um objeto, o java criou apartir da Exception
        // Tem vários métodos
        System.out.println( variavelDeErro.getMessage() );

    }

    System.out.println("Mensagem Final");
}
```

### Usar o try-catch

- Forma de tratar os erros
    - Mesmo com um erro,  ele continua rodando o código depois do catch
    - Se der uma exceção ele vai direto para o catch
    - Coloca no catch como lidar com o erro


```java
public static void main( String[] args ) throws Exception {

    int[] numeros = new int[] {10, 20 ,30, 100};
    int[] peso = new int[] {2, 4, 3, 5};

    for ( int i = 0; i < 4; i++ ) {
    
        try {
            /*
             - Se colocasse o for aqui, a primeira exceção ele parava de rodar
                for ( int i = 0; i < 4; i++ ) {
            */
            
            // 10 / 2 , 20 / 4 , 30 / 3 , 100 / 5
            int resultado = numeros[i] / peso[i];

            System.out.printf("%d / %d  = %d /n", numeros[i], peso[i], resultado);

            System.out.println("Mensagem após a exceção");

        } catch ( Exception variavelDeErro ) {

            System.out.println( "Erro de exceção: "+ variavelDeErro.getMessage() );
        }
    }

    System.out.println("Mensagem Final");
}
```

### Exceção  -  For

- For
    - Se colocar o for dentro do try-catch, a primeira exceção que aparecer vai parar o for e ir para o catch
    - Se colocar ele fora do try-catch e o try-catch dentro do for, ele vai rodar o for inteiro, e aparecendo os erros


```java
public static void main( String[] args ) throws Exception {

    int[] numeros = new int[] {10, 20 ,30, 100};
    int[] peso = new int[] {2, 4, 3, 5};

    for ( int i = 0; i < 4; i++ ) {
        try {
            int resultado = numeros[i] / peso[i];

            System.out.printf("%d / %d  = %d /n", numeros[i], peso[i], resultado);

            System.out.println("Mensagem após a exceção");

        } catch ( Exception variavelDeErro ) {
            // System.out.println( "Erro de exceção: "+ variavelDeErro.getMessage() );

            // Imprime uma pilha de exceção, onde o que tiver no topo é onde ocorreu a exceção
            // Pode usar ele para descobrir a classe de exceção
            erro.printStackTrace();     // vai mostrar o arquivo, método e linha que deu a exceção, e a classe da exceção ( como: ArithmeticException  )
        }
    }
    System.out.println("Mensagem Final");
}
```

### printStackTrace()

- Imprime uma pilha de exceção
    - O que tiver no topo é onde ocorreu a exceção
    - Pode usar ele para descobrir a classe de exceção
    - Mostrar o arquivo, método e linha que deu a exceção
    - Mostrar a classe da exceção ( como: ArithmeticException  )


```java
public static void main( String[] args ) throws Exception {

    int[] numeros = new int[] {10, 20 ,30, 100};
    int[] peso = new int[] {2, 0, 3};

    for ( int i = 0; i < 4; i++ ) {
        try {

            // Vai dar erro de divisão por zero, e de não ter o tamanho certo do array peso

            int resultado = numeros[i] / peso[i];
            System.out.printf("%d / %d  = %d /n", numeros[i], peso[i], resultado);
            System.out.println("Mensagem após a exceção");

        } catch ( ArithmeticException erro ) {
            // Trata dos erros de aritmética e cálculo matemático
            
            System.out.println("Erro de cálculo: "+ erro.getMessage() );
            
        } catch ( ArrayIndexOutOfBoundsException erro ) {
            // Trata os erros relacionado a ultrapassar o tamnaho do vetor

            System.out.println("Erro de vetor: "+ erro.getMessage() );
        } catch ( Exception erro ) {
            // Erro genérico
            System.out.println( erro.getMessage() );
        }
    }
    System.out.println("Mensagem Final");
}
```

### Mais de um catch

- Pegar mais de um erro específico
    - Quando ele é capturado ele não continua para o proximo

- Classe Exception
    - Todas as classes exception herdam desta classe Exception -> ArithmeticException ...
    - Qualquer erro vai dar nele, todas as exceções vai cair nele
    - Colocar as exceções em ordem correta -- especialistas primeiro, generalista final


```java
public static void main( String[] args ) throws Exception {

    for ( int i = 0; i < 4; i++ ) {
        try {
            int resultado = 10 /0;
            
            System.out.println("Mensagem após a exceção");

        } catch ( Exception erro ) {
            System.out.println( erro.getMessage() );
            
        } finally {
            System.out.println("Vai executar sempre, independente se houve erro ou não");

        }
    }
    System.out.println("Mensagem Final");
}
```

### Finally

- Fica no final do try-catch
    - Vai executar sempre, independente se houve erro ou não
    - É usado para fechar o arquivo ou algo que precisa de fechamento no final do uso, como o Scanner


---

## Criar classes de exceções

```java

public class ClasseBAse {

    private String nomeCliente


    public String getNomeCliente() {
        return this.nomeCliente;
    }

    // dizer para o método que ele pode disparar uma exceção  -  throws FaltaDados, ..., ...
    public void setNomeCliente( String nomeCliente ) throws FaltaDados {

        if ( nomeCliente.isEmpty() ) {
            // Usa o throw - para disparar uma exceção
            throw new FaltaDados();

        } else {
            this.nomeCliente = nomeCliente;
        }
    }
}

```

```java
public class FaltaDados extends Exception {

    public String mensagem;

    // construtor
    FaltaDados() {
        this.mensagem = "Nome do Cliente é obrigatório!!!";
    }
}

```

```java
// MAIN

public static void main(String[] args) {

    ClasseBase x = new ClasseBase();

    // obrigatório usar o try-catch para chamar o método da classe que lança uma execeção
    try {
        x.setNomeCliente("Nome exemplo");
    } catch (FaltaDados e) {

        // chamar a variável do FaltaDados
        System.out.println( "Mensagem de Erro: "+ e.mensagem );
    }
}
```

- Criar uma classe de exceção
    - Colocar o = ` extends Exeception `
    - Colocar ` throws nomeExceção, ..., ...` no método que vai utilizar a exceção criada
    - Chamar a exceção com ` throw new nomeExceção() `



### Como  lançar uma exceção

```java

public static void main(String[] args){

    int nota1, nota2, res;

    nota1 = 60;
    nota2 = 20;

    if (nota1 > 50) {
        
        // está gerando uma exeção desse tipo
        throw new IllegalArgumentException("Valor de nota inválido");
    }

    if (nota2 > 50) {
        throw new IllegalArgumentException("Valor de nota inválido");
    }

    res = nota1 + nota2;

    System.out.println(res);
}
```

- THROW, lançando uma exceção
    - Disparar uma exeção, gerar uma exeção e não o programa gerar a exeção
    - Quando lançar a exceção o restando do código não roda

