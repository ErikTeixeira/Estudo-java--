# Arrays em Java

Os arrays são estruturas de dados fundamentais que permitem armazenar múltiplos valores do mesmo tipo em uma única variável. Este guia explica como trabalhar com arrays em Java, incluindo declaração, inicialização, acesso a elementos e arrays multidimensionais.

## Pontos Importantes sobre Arrays em Java

1. **Tamanho Fixo**: Uma vez criado, o tamanho de um array não pode ser alterado.
2. **Índices Baseados em Zero**: O primeiro elemento está na posição 0.
3. **Homogeneidade**: Todos os elementos devem ser do mesmo tipo.
4. **ArrayIndexOutOfBoundsException**: Acessar um índice fora dos limites do array lança essa exceção.
5. **Passagem por Referência**: Arrays são passados por referência para métodos.

## Declaração e Inicialização de Arrays

Existem várias maneiras de declarar e inicializar arrays em Java:

### Método 1: Declaração e inicialização em etapas separadas

```java
// Declaração (apenas cria a referência, sem alocar memória)
int[] numeros;

// Inicialização (aloca memória para 5 elementos)
numeros = new int[5]; // Cria um array com 5 elementos, todos inicializados com 0
```

### Método 2: Declaração e inicialização em uma única etapa

```java
// Declaração e inicialização combinadas
int[] numeros = new int[5]; // Cria um array com 5 elementos, todos inicializados com 0
```

### Método 3: Inicialização com valores específicos

```java
// Inicialização com valores específicos usando chaves {}
int[] numeros = {1, 2, 3, 4, 5}; // Cria um array com 5 elementos com os valores especificados
```

### Método 4: Declaração alternativa (menos comum)

```java
// Outra forma de declaração (menos comum, mas válida)
int numeros[] = new int[5];
```

### Método 5:
```java
String[] listString2 = new String[]{"valor1", "valor2"};
```


## Valores Padrão

Quando um array é criado sem valores específicos, Java inicializa os elementos com valores padrão:

- Tipos numéricos (int, byte, short, long): 0
- Tipo float: 0.0f
- Tipo double: 0.0d
- Tipo char: '\u0000' (caractere nulo)
- Tipo boolean: false
- Tipos de referência (objetos): null

```java
// Exemplo
int[] numeros = new int[3];      // {0, 0, 0}
boolean[] flags = new boolean[2]; // {false, false}
String[] nomes = new String[2];   // {null, null}
```

## Acessando e Modificando Elementos

Os elementos de um array são acessados através de índices, que começam em 0:

```java
int[] numeros = {10, 20, 30, 40, 50};

// Acessando elementos
int primeiroNumero = numeros[0]; // Obtém o primeiro elemento (10)
int terceiroNumero = numeros[2]; // Obtém o terceiro elemento (30)

// Modificando elementos
numeros[0] = 15;  // Altera o primeiro elemento para 15
numeros[4] = 55;  // Altera o quinto elemento para 55

// Após as modificações: {15, 20, 30, 40, 55}
```

### Comprimento (Length) de um Array

O atributo `length` retorna o tamanho do array:

```java
int[] numeros = {10, 20, 30, 40, 50};
int tamanho = numeros.length; // 5
```

### Percorrendo um Array

Existem várias maneiras de percorrer um array:

#### Com loop for tradicional:

```java
int[] numeros = {10, 20, 30, 40, 50};

// Usando índices
for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento " + i + ": " + numeros[i]);
}
```

#### Com for-each (enhanced for):

```java
int[] numeros = {10, 20, 30, 40, 50};

// Usando for-each (mais limpo, mas não fornece o índice)
for (int numero : numeros) {
    System.out.println("Valor: " + numero);
}
```

## Arrays Multidimensionais

Arrays multidimensionais são "arrays de arrays". O mais comum é o array bidimensional (matriz):

### Declaração e Inicialização

```java
// Declaração e inicialização de um array 3x3
int[][] matriz = new int[3][3]; // Cria uma matriz 3x3 com todos os elementos 0

// Inicialização com valores específicos
int[][] matriz2 = {
    {1, 2, 3},  // Primeira linha
    {4, 5, 6},  // Segunda linha
    {7, 8, 9}   // Terceira linha
};
```

### Acessando e Modificando Elementos em Arrays Multidimensionais

```java
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Acessando elementos (linha, coluna)
int elemento = matriz[1][2]; // Acessa a segunda linha, terceira coluna (valor 6)

// Modificando elementos
matriz[0][0] = 10; // Modifica o elemento na primeira linha, primeira coluna para 10
```

### Percorrendo Arrays Multidimensionais

```java
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Percorrendo com loops aninhados
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.print(matriz[i][j] + " ");
    }
    System.out.println(); // Nova linha após cada linha da matriz
}

// Percorrendo com for-each aninhados
for (int[] linha : matriz) {
    for (int elemento : linha) {
        System.out.print(elemento + " ");
    }
    System.out.println();
}
```

### Arrays Irregulares (Jagged Arrays)

Java também suporta arrays onde cada linha pode ter um comprimento diferente:

```java
// Declaração de um array irregular
int[][] irregular = new int[3][];

// Inicialização de cada linha com tamanhos diferentes
irregular[0] = new int[2];  // Primeira linha com 2 elementos
irregular[1] = new int[4];  // Segunda linha com 4 elementos
irregular[2] = new int[3];  // Terceira linha com 3 elementos

// Ou diretamente:
int[][] irregular2 = {
    {1, 2},
    {3, 4, 5, 6},
    {7, 8, 9}
};
```

## Exemplo Completo

```java
public class ExemploArrays {
    public static void main(String[] args) {
        // Arrays unidimensionais
        System.out.println("===== Arrays Unidimensionais =====");
        
        // Declaração e inicialização
        int[] numeros = {10, 20, 30, 40, 50};
        
        // Acessando elementos
        System.out.println("Primeiro elemento: " + numeros[0]);  // 10
        System.out.println("Último elemento: " + numeros[numeros.length - 1]);  // 50
        
        // Modificando elementos
        numeros[2] = 35;  // Altera o terceiro elemento para 35
        System.out.println("Após modificação, terceiro elemento: " + numeros[2]);  // 35
        
        // Percorrendo o array
        System.out.println("\nTodos os elementos:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("numeros[" + i + "] = " + numeros[i]);
        }
        
        // Arrays multidimensionais
        System.out.println("\n===== Arrays Multidimensionais =====");
        
        // Declaração e inicialização de matriz 3x3
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Acessando elementos
        System.out.println("Elemento na posição [1][1]: " + matriz[1][1]);  // 5
        
        // Modificando elementos
        matriz[0][2] = 30;  // Modifica o elemento na posição [0][2]
        System.out.println("Após modificação, elemento [0][2]: " + matriz[0][2]);  // 30
        
        // Percorrendo a matriz
        System.out.println("\nTodos os elementos da matriz:");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();  // Nova linha após cada linha da matriz
        }
        
        // Array irregular
        System.out.println("\n===== Array Irregular =====");
        int[][] irregular = {
            {1, 2},
            {3, 4, 5},
            {6}
        };
        
        System.out.println("Estrutura do array irregular:");
        for (int i = 0; i < irregular.length; i++) {
            System.out.print("Linha " + i + ": ");
            for (int j = 0; j < irregular[i].length; j++) {
                System.out.print(irregular[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```

Saída:
```
===== Arrays Unidimensionais =====
Primeiro elemento: 10
Último elemento: 50
Após modificação, terceiro elemento: 35

Todos os elementos:
numeros[0] = 10
numeros[1] = 20
numeros[2] = 35
numeros[3] = 40
numeros[4] = 50

===== Arrays Multidimensionais =====
Elemento na posição [1][1]: 5
Após modificação, elemento [0][2]: 30

Todos os elementos da matriz:
1	2	30	
4	5	6	
7	8	9	

===== Array Irregular =====
Estrutura do array irregular:
Linha 0: 1 2 
Linha 1: 3 4 5 
Linha 2: 6 
```

## Pontos Importantes sobre Arrays em Java

1. **Tamanho Fixo**: Uma vez criado, o tamanho de um array não pode ser alterado.
2. **Índices Baseados em Zero**: O primeiro elemento está na posição 0.
3. **Homogeneidade**: Todos os elementos devem ser do mesmo tipo.
4. **ArrayIndexOutOfBoundsException**: Acessar um índice fora dos limites do array lança essa exceção.
5. **Passagem por Referência**: Arrays são passados por referência para métodos.