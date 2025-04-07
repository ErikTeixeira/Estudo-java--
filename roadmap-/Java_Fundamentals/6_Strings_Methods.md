# Strings e Métodos em Java

## Introdução às Strings em Java

Em Java, uma `String` é uma sequência de caracteres que representa texto. Diferentemente de muitas linguagens, em **Java as Strings são objetos**, não tipos primitivos. A classe `String` é uma das classes mais utilizadas no desenvolvimento Java, sendo fundamental para manipulação de texto.

## Criando Strings em Java

Existem várias maneiras de criar Strings em Java:

### 1. Usando literais de String

```java
String nome = "Java";
String linguagem = "Programação em Java";
```

### 2. Usando o construtor da classe String

```java
String nome = new String("Java");
char[] letras = {'J', 'a', 'v', 'a'};
String linguagem = new String(letras);
```

### 3. Concatenando Strings

```java
String primeiroNome = "Programação";
String segundoNome = "Java";
String nomeCompleto = primeiroNome + " em " + segundoNome;  // "Programação em Java"
```

## Métodos Úteis da Classe String

A classe `String` em Java oferece diversos métodos para manipulação de texto. Vamos explorar os principais:

### `.length()` - Retorna o comprimento da String

```java
String texto = "Java Programming";
int tamanho = texto.length();  // tamanho = 16
```

### `.toUpperCase()` - Converte para maiúsculas

```java
String texto = "Java Programming";
String maiusculas = texto.toUpperCase();  // maiusculas = "JAVA PROGRAMMING"
```

### `.toLowerCase()` - Converte para minúsculas

```java
String texto = "Java Programming";
String minusculas = texto.toLowerCase();  // minusculas = "java programming"
```

### `.substring()` - Extrai parte da String

```java
String texto = "Java Programming";

// Substring com índice inicial
String parte1 = texto.substring(5);  // parte1 = "Programming"

// Substring com índice inicial e final (o índice final não é incluído)
String parte2 = texto.substring(0, 4);  // parte2 = "Java"
```

### `.charAt()` - Retorna o caractere em uma posição específica

```java
String texto = "Java";
char primeiraLetra = texto.charAt(0);  // primeiraLetra = 'J'
char ultimaLetra = texto.charAt(texto.length() - 1);  // ultimaLetra = 'a'
```

### `.indexOf()` - Retorna a posição da primeira ocorrência de um caractere ou substring

```java
String texto = "Java Programming Language";
int posicao1 = texto.indexOf("Programming");  // posicao1 = 5
int posicao2 = texto.indexOf('a');  // posicao2 = 1 (primeira ocorrência de 'a')
int posicao3 = texto.indexOf('a', 2);  // posicao3 = 3 (próxima ocorrência após o índice 2)
```

### `.lastIndexOf()` - Retorna a posição da última ocorrência

```java
String texto = "Java Programming Language";
int ultimaPosicao = texto.lastIndexOf('a');  // ultimaPosicao = 21
```

### `.trim()` - Remove espaços em branco do início e do fim

```java
String textoComEspacos = "   Java Programming   ";
String textoSemEspacos = textoComEspacos.trim();  // textoSemEspacos = "Java Programming"
```

### `.replace()` - Substitui caracteres ou substrings

```java
String texto = "Java Programming";
String novoTexto = texto.replace('a', 'o');  // novoTexto = "Jovo Progromming"
String substituido = texto.replace("Java", "Python");  // substituido = "Python Programming"
```

### `.split()` - Divide a string em um array com base em um delimitador

```java
String texto = "Java,Python,C++,JavaScript";
String[] linguagens = texto.split(",");  
// linguagens = {"Java", "Python", "C++", "JavaScript"}
```

### `.equals()` - Compara o conteúdo de duas strings (case-sensitive)

```java
String str1 = "Java";
String str2 = "java";
boolean igual = str1.equals(str2);  // igual = false
```

### `.equalsIgnoreCase()` - Compara o conteúdo ignorando maiúsculas/minúsculas

```java
String str1 = "Java";
String str2 = "java";
boolean igualIgnoreCase = str1.equalsIgnoreCase(str2);  // igualIgnoreCase = true
```

### `.startsWith()` e `.endsWith()` - Verifica se começa ou termina com determinado texto

```java
String texto = "Java Programming";
boolean comecaCom = texto.startsWith("Java");  // comecaCom = true
boolean terminaCom = texto.endsWith("ing");  // terminaCom = true
```

### `.contains()` - Verifica se contém determinado texto

```java
String texto = "Java Programming";
boolean contem = texto.contains("gram");  // contem = true
```

# Imutabilidade das Strings em Java

Uma característica fundamental das Strings em Java é que elas são **imutáveis**. Isso significa que, após a criação de um objeto String, seu conteúdo não pode ser alterado. Qualquer operação que pareça modificar uma String na verdade está criando uma nova String.

```java
String texto = "Java";
texto = texto + " Programming";  // Uma nova String é criada e atribuída à variável texto
```

Esta imutabilidade tem várias implicações:
- Segurança: Objetos String podem ser compartilhados com segurança
- Imutabilidade ajuda na implementação do pool de strings
- Desempenho pode ser afetado em operações intensivas de concatenação

## StringBuilder e StringBuffer

Para situações onde muitas modificações de strings são necessárias, Java oferece as classes `StringBuilder` e `StringBuffer`. Ambas fornecem objetos mutáveis para manipulação eficiente de strings.

### StringBuilder

O `StringBuilder` é não sincronizado (não thread-safe), mas tem melhor desempenho.

```java
StringBuilder sb = new StringBuilder("Java");
sb.append(" Programming");
sb.append(" Language");
String resultado = sb.toString();  // resultado = "Java Programming Language"
```

Principais métodos do StringBuilder:

- `.append(String s)` - Adiciona uma string ao final
- `.insert(int offset, String s)` - Insere uma string em uma posição específica
- `.delete(int start, int end)` - Remove uma parte da string
- `.reverse()` - Inverte a string
- `.replace(int start, int end, String str)` - Substitui uma parte da string
- `.toString()` - Converte o StringBuilder para String

### StringBuffer

O `StringBuffer` é sincronizado (thread-safe), adequado para múltiplas threads, mas um pouco mais lento.

```java
StringBuffer sb = new StringBuffer("Java");
sb.append(" Programming");
sb.reverse();  // Inverte a string
String resultado = sb.toString();  // resultado = "gnimmargorP avaJ"
```

StringBuffer tem os mesmos métodos que o StringBuilder.

## Comparação entre String, StringBuilder e StringBuffer

| Característica | String | StringBuilder | StringBuffer |
|----------------|--------|---------------|--------------|
| Mutabilidade | Imutável | Mutável | Mutável |
| Thread-safe | Sim | Não | Sim |
| Performance | Baixa para muitas concatenações | Alta | Média |
| Uso ideal | Poucas alterações | Muitas alterações em ambiente single-thread | Muitas alterações em ambiente multi-thread |

## Exemplos Práticos

### Exemplo 1: Concatenação massiva de strings

```java
// Usando String (ineficiente)
String resultado = "";
long inicio = System.currentTimeMillis();
for (int i = 0; i < 100000; i++) {
    resultado += "a";
}
long fim = System.currentTimeMillis();
System.out.println("Tempo com String: " + (fim - inicio) + "ms");

// Usando StringBuilder (eficiente)
StringBuilder sb = new StringBuilder();
inicio = System.currentTimeMillis();
for (int i = 0; i < 100000; i++) {
    sb.append("a");
}
resultado = sb.toString();
fim = System.currentTimeMillis();
System.out.println("Tempo com StringBuilder: " + (fim - inicio) + "ms");
```

### Exemplo 2: Manipulação de Strings

```java
public class ManipulacaoStrings {
    public static void main(String[] args) {
        String texto = "Java é uma linguagem orientada a objetos";
        
        // Contando caracteres
        System.out.println("Tamanho: " + texto.length());
        
        // Convertendo maiúsculas/minúsculas
        System.out.println("Maiúsculas: " + texto.toUpperCase());
        System.out.println("Minúsculas: " + texto.toLowerCase());
        
        // Verificando ocorrências
        System.out.println("Posição de 'linguagem': " + texto.indexOf("linguagem"));
        System.out.println("Última ocorrência de 'a': " + texto.lastIndexOf('a'));
        
        // Extraindo partes
        System.out.println("Primeiras 4 letras: " + texto.substring(0, 4));
        System.out.println("Do caractere 5 em diante: " + texto.substring(5));
        
        // Verificações
        System.out.println("Começa com 'Java'? " + texto.startsWith("Java"));
        System.out.println("Contém 'orientada'? " + texto.contains("orientada"));
        
        // Substituições
        System.out.println("Substituindo: " + texto.replace("Java", "Python"));
        
        // Dividindo a string
        String[] palavras = texto.split(" ");
        System.out.println("Número de palavras: " + palavras.length);
        for (String palavra : palavras) {
            System.out.println("- " + palavra);
        }
    }
}
```

### Exemplo 3: Comparando desempenho entre StringBuilder e StringBuffer

```java
public class ComparacaoDesempenho {
    public static void main(String[] args) {
        int repeticoes = 1000000;
        
        // Teste com StringBuilder
        long inicio = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < repeticoes; i++) {
            sb.append("a");
        }
        long fim = System.currentTimeMillis();
        System.out.println("StringBuilder: " + (fim - inicio) + "ms");
        
        // Teste com StringBuffer
        inicio = System.currentTimeMillis();
        StringBuffer sbf = new StringBuffer();
        for (int i = 0; i < repeticoes; i++) {
            sbf.append("a");
        }
        fim = System.currentTimeMillis();
        System.out.println("StringBuffer: " + (fim - inicio) + "ms");
    }
}
```

## Melhores Práticas

1. **Use `String` quando:**
   - O valor da string não vai mudar
   - Você precisa de imutabilidade
   - Para variáveis simples e constantes

2. **Use `StringBuilder` quando:**
   - Você está em um ambiente single-thread
   - Precisa fazer muitas modificações na string
   - Desempenho é importante

3. **Use `StringBuffer` quando:**
   - Você está em um ambiente multi-thread
   - Segurança de thread é mais importante que desempenho
   - Precisa fazer muitas modificações na string

4. **Para comparar conteúdo de strings, use:**
   - #### Usar este ao inves do == para comparar o contúdo da String, porque o == compara o endereço de memoria
   - `.equals()` ao invés de `==` (que compara referências, não conteúdo)
   - `.equalsIgnoreCase()` para comparação sem diferenciar maiúsculas de minúsculas

5. **Para strings constantes:**
   - Utilize a palavra-chave `final` para garantir que o valor não seja alterado

6. **Para concatenação de strings:**
   - Use operador `+` para poucas concatenações
   - Use `StringBuilder` para muitas concatenações em um loop

## Conclusão

Strings são uma parte essencial da programação Java, e saber como manipulá-las eficientemente é fundamental. A natureza imutável das Strings oferece vantagens de segurança, mas pode criar problemas de desempenho em certas situações, onde classes como StringBuilder e StringBuffer se tornam indispensáveis.

Compreender quando usar cada abordagem e os métodos disponíveis para manipulação de strings permitirá que você escreva código mais eficiente e legível.