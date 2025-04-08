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

20:30