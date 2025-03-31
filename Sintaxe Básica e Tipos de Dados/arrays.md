# Arrays em Java

## Introdução

Arrays são estruturas de dados fundamentais em Java que permitem armazenar múltiplos valores do mesmo tipo sob um único nome de variável. Um array é um objeto que contém elementos de um tipo específico, e seu tamanho é fixo após a criação.

## 1. Declaração de Arrays

Em Java, podemos declarar um array de duas maneiras:

### 1.1. Estilo preferido:
```java
tipo[] nomeArray;
```

### 1.2. Estilo alternativo (menos comum):
```java
tipo nomeArray[];
```

Exemplos:
```java
// Declaração de arrays de diferentes tipos
int[] numeros;          // Array de inteiros
String[] nomes;         // Array de strings
double[] precos;        // Array de números de ponto flutuante
boolean[] estados;      // Array de valores booleanos
char[] caracteres;      // Array de caracteres
```

Neste ponto, apenas declaramos a variável array, mas nenhum espaço foi alocado na memória. A variável é apenas uma referência que atualmente aponta para `null`.

## 2. Inicialização de Arrays

Existem várias maneiras de inicializar arrays em Java:

### 2.1. Usando o operador `new` com tamanho definido:
```java
int[] numeros = new int[5]; // Cria um array de inteiros com 5 elementos
```

Neste caso, os elementos são inicializados com valores padrão:
- Números (`byte`, `short`, `int`, `long`, `float`, `double`): `0`
- Booleanos (`boolean`): `false`
- Caracteres (`char`): `\u0000` (caractere nulo)
- Objetos (incluindo `String`): `null`

### 2.2. Inicialização com valores definidos (inicializador de array):
```java
int[] numeros = {10, 20, 30, 40, 50}; // Inicializa com valores específicos
```

### 2.3. Declaração, criação e inicialização em etapas separadas:
```java
// Declaração
String[] frutas;

// Criação
frutas = new String[3];

// Inicialização individual de elementos
frutas[0] = "Maçã";
frutas[1] = "Banana";
frutas[2] = "Laranja";
```

### 2.4. Usando o operador `new` com inicializador:
```java
int[] numeros = new int[] {10, 20, 30, 40, 50};
```

## 3. Acesso aos Elementos do Array

Os elementos de um array são acessados por meio de seu índice. Em Java, o índice começa em 0.

```java
int[] numeros = {10, 20, 30, 40, 50};

// Acessando elementos
int primeiro = numeros[0];   // Obtém o primeiro elemento (10)
int terceiro = numeros[2];   // Obtém o terceiro elemento (30)

// Modificando elementos
numeros[1] = 25;             // Altera o segundo elemento para 25
```

### Propriedade `length`

A propriedade `length` retorna o tamanho do array:

```java
int[] numeros = {10, 20, 30, 40, 50};
int tamanho = numeros.length;   // tamanho = 5
```

### Cuidado com `ArrayIndexOutOfBoundsException`

Tentar acessar um índice que está fora dos limites do array causa uma exceção:

```java
int[] numeros = {10, 20, 30, 40, 50};
int valor = numeros[5];   // Erro! O índice máximo é 4
```

## 4. Iteração sobre Arrays

Existem várias maneiras de percorrer os elementos de um array:

### 4.1. Usando o loop `for` tradicional:
```java
int[] numeros = {10, 20, 30, 40, 50};

for (int i = 0; i < numeros.length; i++) {
    System.out.println("Elemento " + i + ": " + numeros[i]);
}
```

### 4.2. Usando o loop `for-each` (enhanced for):
```java
int[] numeros = {10, 20, 30, 40, 50};

for (int numero : numeros) {
    System.out.println("Elemento: " + numero);
}
```

### 4.3. Usando o loop `while`:
```java
int[] numeros = {10, 20, 30, 40, 50};
int i = 0;

while (i < numeros.length) {
    System.out.println("Elemento " + i + ": " + numeros[i]);
    i++;
}
```

### 4.4. Usando o loop `do-while`:
```java
int[] numeros = {10, 20, 30, 40, 50};
int i = 0;

do {
    System.out.println("Elemento " + i + ": " + numeros[i]);
    i++;
} while (i < numeros.length);
```

### 4.5. Usando Arrays.stream() (Java 8+):
```java
int[] numeros = {10, 20, 30, 40, 50};

Arrays.stream(numeros).forEach(numero -> {
    System.out.println("Elemento: " + numero);
});
```

## 5. Arrays Multidimensionais

Java suporta arrays de arrays, conhecidos como arrays multidimensionais:

### 5.1. Declaração e inicialização de arrays bidimensionais:
```java
// Declaração
int[][] matriz;

// Inicialização com tamanho definido
matriz = new int[3][4];  // Matriz de 3 linhas e 4 colunas

// Inicialização com valores definidos
int[][] matriz2 = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
```

### 5.2. Acesso a elementos em arrays bidimensionais:
```java
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

int valor = matriz[1][2];  // Obtém o valor 6 (linha 1, coluna 2)
matriz[0][1] = 20;         // Altera o valor para 20 (linha 0, coluna 1)
```

### 5.3. Iteração sobre arrays bidimensionais:
```java
int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Usando loops for aninhados
for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.print(matriz[i][j] + " ");
    }
    System.out.println();
}

// Usando for-each
for (int[] linha : matriz) {
    for (int valor : linha) {
        System.out.print(valor + " ");
    }
    System.out.println();
}
```

### 5.4. Arrays irregulares (jagged arrays):

Em Java, cada linha de um array bidimensional pode ter um tamanho diferente:

```java
int[][] irregular = new int[3][];
irregular[0] = new int[2];
irregular[1] = new int[4];
irregular[2] = new int[1];

// Ou inicializado diretamente
int[][] irregular2 = {
    {1, 2},
    {3, 4, 5, 6},
    {7}
};
```

## 6. Operações Comuns com Arrays

### 6.1. Copiando Arrays

#### Usando o método `System.arraycopy()`:
```java
int[] origem = {1, 2, 3, 4, 5};
int[] destino = new int[origem.length];
System.arraycopy(origem, 0, destino, 0, origem.length);
```

#### Usando o método `Arrays.copyOf()` (Java 6+):
```java
int[] origem = {1, 2, 3, 4, 5};
int[] destino = Arrays.copyOf(origem, origem.length);
```

#### Usando o método `clone()`:
```java
int[] origem = {1, 2, 3, 4, 5};
int[] destino = origem.clone();
```

### 6.2. Comparando Arrays

#### Usando o método `Arrays.equals()`:
```java
int[] array1 = {1, 2, 3, 4, 5};
int[] array2 = {1, 2, 3, 4, 5};
boolean saoIguais = Arrays.equals(array1, array2);  // true
```

### 6.3. Preenchendo Arrays

#### Usando o método `Arrays.fill()`:
```java
int[] array = new int[5];
Arrays.fill(array, 10);  // Preenche todo o array com o valor 10
```

### 6.4. Ordenando Arrays

#### Usando o método `Arrays.sort()`:
```java
int[] array = {5, 2, 9, 1, 7};
Arrays.sort(array);  // Ordena o array em ordem crescente
// array agora é {1, 2, 5, 7, 9}
```

### 6.5. Pesquisando em Arrays

#### Usando o método `Arrays.binarySearch()` (array deve estar ordenado):
```java
int[] array = {1, 2, 5, 7, 9};
int indice = Arrays.binarySearch(array, 5);  // retorna 2 (índice do valor 5)
```

## 7. Exemplos Práticos

### 7.1. Calculando a Média de Valores em um Array:
```java
public class MediaArray {
    public static void main(String[] args) {
        int[] notas = {85, 92, 78, 95, 88};
        int soma = 0;
        
        for (int nota : notas) {
            soma += nota;
        }
        
        double media = (double) soma / notas.length;
        System.out.println("A média das notas é: " + media);
    }
}
```

### 7.2. Encontrando o Maior e o Menor Valor:
```java
public class MaiorMenorArray {
    public static void main(String[] args) {
        int[] numeros = {23, 9, 45, 12, 78, 32, 56};
        
        int maior = numeros[0];
        int menor = numeros[0];
        
        for (int i = 1; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
            
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }
        
        System.out.println("Maior valor: " + maior);
        System.out.println("Menor valor: " + menor);
    }
}
```

### 7.3. Removendo Elementos Duplicados:
```java
public class RemoverDuplicados {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 2, 5, 3, 6, 7, 1};
        
        // Primeiro, encontre os elementos únicos
        int contadorUnicos = 0;
        for (int i = 0; i < array.length; i++) {
            boolean ehDuplicado = false;
            
            // Verifica se o elemento já apareceu antes
            for (int j = 0; j < i; j++) {
                if (array[i] == array[j]) {
                    ehDuplicado = true;
                    break;
                }
            }
            
            if (!ehDuplicado) {
                contadorUnicos++;
            }
        }
        
        // Cria um novo array apenas com elementos únicos
        int[] semDuplicados = new int[contadorUnicos];
        int indice = 0;
        
        for (int i = 0; i < array.length; i++) {
            boolean ehDuplicado = false;
            
            for (int j = 0; j < i; j++) {
                if (array[i] == array[j]) {
                    ehDuplicado = true;
                    break;
                }
            }
            
            if (!ehDuplicado) {
                semDuplicados[indice++] = array[i];
            }
        }
        
        // Imprime o array sem duplicados
        System.out.print("Array original: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
        
        System.out.print("\nArray sem duplicados: ");
        for (int num : semDuplicados) {
            System.out.print(num + " ");
        }
    }
}
```

## 8. Boas Práticas

1. **Use `for-each` quando possível**: É mais limpo e menos propenso a erros de índice.

2. **Verifique os limites do array**: Sempre verifique se os índices estão dentro dos limites para evitar `ArrayIndexOutOfBoundsException`.

3. **Considere coleções em vez de arrays**: Para casos onde o tamanho precisa ser dinâmico, considere usar coleções como `ArrayList`.

4. **Inicialize arrays com tamanho adequado**: Escolha um tamanho apropriado, pois arrays não podem ser redimensionados depois de criados.

5. **Documente arrays multidimensionais**: Use comentários para descrever o que cada dimensão representa para aumentar a legibilidade.

6. **Use a propriedade `length`**: Sempre use a propriedade `length` para determinar o tamanho do array, em vez de números fixos.

7. **Passe arrays para métodos com cuidado**: Lembre-se que arrays são passados por referência, então modificações no método afetam o array original.