# Sintaxe Básica de Java


## 1. Estrutura de um Programa Java

Em Java, todo código deve estar dentro de uma classe. Um programa básico tem a seguinte estrutura:

```java
public class MeuPrograma {
    public static void main(String[] args) {
        // Código do programa aqui
        System.out.println("Olá, Mundo!");
    }
}
```

### Componentes Principais:
- **Classe**: Definida por `public class NomeDaClasse`
- **Método main**: Ponto de entrada da aplicação, definido por `public static void main(String[] args)`
- **Corpo do programa**: Todo código executável fica dentro do método main

### Exemplos:

**Exemplo 1: Programa Básico**
```java
public class ExemploBásico {
    public static void main(String[] args) {
        System.out.println("Meu primeiro programa Java!");
    }
}
```

**Exemplo 2: Programa com mais operações**
```java
public class CalculadoraSimples {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        int soma = a + b;
        System.out.println("A soma de " + a + " e " + b + " é " + soma);
    }
}
```

### Exercícios:

**Exercício 1.1:** Crie um programa Java chamado `ApresentaçãoPessoal` que imprima seu nome, idade e hobby favorito.

**Exercício 1.2:** Crie um programa Java chamado `Calculadora` que realize as quatro operações básicas (adição, subtração, multiplicação e divisão) com dois números inteiros e imprima os resultados.

## 2. Convenções de Nomenclatura

Java segue convenções específicas para nomeação de elementos:

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| Classes | PascalCase (CamelCase iniciando com maiúscula) | `MinhaClasse` |
| Métodos | camelCase (iniciando com minúscula) | `calcularSoma()` |
| Variáveis | camelCase (iniciando com minúscula) | `idadeUsuario` |
| Constantes | SNAKE_CASE_MAIÚSCULO | `MAX_VALOR` |
| Pacotes | tudo em minúsculas, usando pontos como separadores | `com.empresa.projeto` |

### Exemplos:

**Exemplo 1: Convenções de Classes e Métodos**
```java
public class CalculadoraUtilitaria {
    public static int somarNumeros(int a, int b) {
        return a + b;
    }
    
    public static final double PI = 3.14159;
}
```

**Exemplo 2: Convenções de Variáveis e Constantes**
```java
public class ProcessadorDados {
    public static void main(String[] args) {
        final int TAMANHO_MAXIMO = 100;
        String nomeCompleto = "João Silva";
        int idadeUsuario = 25;
        
        System.out.println("Nome: " + nomeCompleto);
        System.out.println("Idade: " + idadeUsuario);
        System.out.println("Tamanho máximo: " + TAMANHO_MAXIMO);
    }
}
```

### Exercícios:

**Exercício 2.1:** Crie um programa com uma classe chamada `ConversorTemperatura` que tenha métodos para converter Celsius para Fahrenheit e vice-versa. Aplique as convenções de nomenclatura apropriadas.

**Exercício 2.2:** Crie uma classe `CalculadoraIMC` que calcule o Índice de Massa Corporal. Use constantes para classificação (ex: `PESO_NORMAL`, `SOBREPESO`) e variáveis para armazenar peso e altura, seguindo as convenções corretas.

## 3. Palavras Reservadas

Java possui palavras-chave reservadas que têm significados especiais:

### Modificadores de Acesso
| Modificador | Descrição |
|-------------|-----------|
| `public` | Acesso a partir de qualquer classe. O membro pode ser acessado de qualquer lugar. |
| `private` | Acesso apenas dentro da própria classe. O membro só é visível dentro da classe onde foi declarado. |
| `protected` | Acesso dentro do mesmo pacote e por subclasses. O membro é visível dentro do pacote e para todas as classes que herdam desta classe, mesmo se estiverem em pacotes diferentes. |
| `default` (sem modificador) | Acesso apenas dentro do mesmo pacote. É o acesso padrão quando nenhum modificador é especificado. |

### Outros Modificadores
| Categoria | Exemplos | Descrição |
|-----------|----------|-----------|
| Modificadores de Classes e Métodos | `static` | Pertence à classe, não à instância; compartilhado entre todas as instâncias |
| | `final` | Para classes: não pode ser estendida; Para métodos: não pode ser sobrescrito; Para variáveis: não pode ser alterado após inicialização |
| | `abstract` | Para classes: não pode ser instanciada; Para métodos: não tem implementação, deve ser implementado nas subclasses |
| | `synchronized` | Garante que apenas uma thread execute o método por vez |
| Tipos Primitivos | `byte` | Inteiro de 8 bits (-128 a 127) |
| | `short` | Inteiro de 16 bits (-32.768 a 32.767) |
| | `int` | Inteiro de 32 bits (-2.147.483.648 a 2.147.483.647) |
| | `long` | Inteiro de 64 bits |
| | `float` | Ponto flutuante de 32 bits |
| | `double` | Ponto flutuante de 64 bits |
| | `char` | Caractere Unicode de 16 bits |
| | `boolean` | Valor lógico (true/false) |
| Controle de Fluxo | `if`, `else` | Execução condicional |
| | `switch`, `case` | Seleção múltipla |
| | `for`, `while`, `do` | Estruturas de repetição |
| | `break`, `continue` | Controle dentro de loops |
| Tratamento de Exceções | `try`, `catch` | Captura e tratamento de exceções |
| | `finally` | Bloco executado sempre, independente de exceção |
| | `throw`, `throws` | Lançamento e declaração de exceções |
| Outros | `class`, `interface` | Definição de tipos |
| | `enum` | Tipo enumerado |
| | `new` | Criação de objetos |
| | `this`, `super` | Referência à instância atual ou à superclasse |

### Exemplos:

**Exemplo 1: Modificadores de Acesso e Classes**
```java
public class Pessoa {
    // Acesso apenas dentro desta classe
    private String nome;
    private int idade;
    
    // Construtor público - acessível de qualquer lugar
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Método público - acessível de qualquer lugar
    public String getNome() {
        return nome;
    }
    
    // Método protegido - acessível no mesmo pacote e subclasses
    protected void setIdade(int idade) {
        this.idade = idade;
    }
    
    // Método com acesso default - acessível apenas no mesmo pacote
    void exibirDetalhes() {
        System.out.println("Nome: " + nome + ", Idade: " + idade);
    }
}
```

**Exemplo 2: Tipos e Controle de Fluxo**
```java
public class VerificadorNumero {
    public static void main(String[] args) {
        int numero = 15;
        
        // Exemplo de estrutura if-else-if
        if (numero > 0) {
            System.out.println("Positivo");
        } else if (numero < 0) {
            System.out.println("Negativo");
        } else {
            System.out.println("Zero");
        }
        
        // Exemplo de operação booleana
        boolean ehPar = (numero % 2 == 0);
        System.out.println("É par? " + ehPar);
        
        // Exemplo de switch
        switch (numero % 5) {
            case 0:
                System.out.println("Divisível por 5");
                break;
            case 1:
                System.out.println("Resto 1 quando dividido por 5");
                break;
            default:
                System.out.println("Outro resto");
        }
    }
}
```

### Exercícios:

**Exercício 3.1:** Crie uma classe `Funcionario` com atributos privados (nome, salário, cargo) e métodos públicos para acessá-los (getters e setters). Implemente um método que calcule o aumento de salário.

**Exercício 3.2:** Crie um programa que use as palavras-chave `if`, `else`, `switch` e `for` para classificar números em uma sequência como pares/ímpares e positivos/negativos/zero.

## 4. Expressões e Declarações

### Declaração de Variáveis
```java
tipo nomeDaVariável = valor;
```

### Tipos de Expressões
- **Aritméticas**: `+`, `-`, `*`, `/`, `%`
- **Relacionais**: `>`, `<`, `>=`, `<=`, `==`, `!=`
- **Lógicas**: `&&`, `||`, `!`
- **Atribuição**: `=`, `+=`, `-=`, `*=`, `/=`

### Exemplos:

**Exemplo 1: Declarações e Expressões Aritméticas**
```java
public class OperacoesMatematicas {
    public static void main(String[] args) {
        // Declarações
        int a = 10;
        int b = 3;
        double c = 7.5;
        
        // Expressões aritméticas
        int soma = a + b;
        int diferenca = a - b;
        int produto = a * b;
        double divisao = (double) a / b;
        int resto = a % b;
        
        System.out.println("Soma: " + soma);
        System.out.println("Diferença: " + diferenca);
        System.out.println("Produto: " + produto);
        System.out.println("Divisão: " + divisao);
        System.out.println("Resto: " + resto);
    }
}
```

**Exemplo 2: Expressões Lógicas e Relacionais**
```java
public class ValidadorDados {
    public static void main(String[] args) {
        int idade = 25;
        double altura = 1.75;
        
        boolean ehAdulto = idade >= 18;
        boolean alturaValida = altura > 0 && altura < 2.5;
        boolean dadosValidos = ehAdulto && alturaValida;
        
        System.out.println("É adulto? " + ehAdulto);
        System.out.println("Altura válida? " + alturaValida);
        System.out.println("Dados válidos? " + dadosValidos);
    }
}
```

### Exercícios:

**Exercício 4.1:** Crie um programa que declare variáveis de diferentes tipos (int, double, boolean, String) e realize operações entre elas (quando possível), exibindo os resultados.

**Exercício 4.2:** Escreva um programa que verifique se uma pessoa pode dirigir, baseado em idade (>= 18) E se possui habilitação (variável booleana). Use expressões lógicas e relacionais.

## 5. Impressão de Saída

Java oferece várias formas de exibir informações:

### System.out
```java
System.out.println("Texto com quebra de linha");
System.out.print("Texto sem quebra de linha");
System.out.printf("Formatação: %d, %.2f\n", inteiro, decimal);
```

### Exemplos:

**Exemplo 1: Métodos de Impressão Básicos**
```java
public class ExemploSaida {
    public static void main(String[] args) {
        System.out.println("Linha 1");
        System.out.print("Mesma linha: ");
        System.out.print("continuação\n");
        System.out.println("Linha 2");
    }
}
```

**Exemplo 2: Formatação com System.out.printf**
```java
public class FormatacaoSaida {
    public static void main(String[] args) {
        String nome = "Ana";
        int idade = 30;
        double altura = 1.65;
        
        System.out.printf("Nome: %s\n", nome);
        System.out.printf("Idade: %d anos\n", idade);
        System.out.printf("Altura: %.2f metros\n", altura);
        System.out.printf("%s tem %d anos e %.2f metros de altura.\n", 
                          nome, idade, altura);
    }
}
```

#### printf
- %s → String (texto)
- %d → Inteiro (int)
- %.2f → Número de ponto flutuante (double), com 2 casas decimais
- \n → Nova linha


### Exercícios:

**Exercício 5.1:** Crie um programa que imprima uma tabela de produtos com nome, preço e quantidade, usando diferentes métodos de impressão (`println`, `printf`).

**Exercício 5.2:** Escreva um programa que formate e imprima informações bancárias (conta, saldo, limite) usando `System.out.printf` com especificadores de formato adequados.

## 6. Leitura de Entrada

Java possui diferentes classes para ler dados de entrada:

### Scanner (mais comum)
```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
String texto = scanner.nextLine();  // Lê uma linha
int numero = scanner.nextInt();     // Lê um inteiro
double decimal = scanner.nextDouble(); // Lê um decimal
scanner.close();  // Fechar o scanner quando não for mais necessário
```

### BufferedReader (mais eficiente para grandes volumes)
```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
String linha = reader.readLine();  // Lê uma linha de texto
int numero = Integer.parseInt(reader.readLine());  // Convertendo para inteiro
reader.close();  // Fechar o reader quando não for mais necessário
```

### Exemplos:

**Exemplo 1: Leitura com Scanner**
```java
import java.util.Scanner;

public class LeituraScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine();
        
        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt();
        
        System.out.println("Olá, " + nome + "! Você tem " + idade + " anos.");
        
        scanner.close();
    }
}
```

**Exemplo 2: Leitura com BufferedReader**
```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class LeituraBuffered {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        try {
            System.out.print("Digite seu nome: ");
            String nome = reader.readLine();
            
            System.out.print("Digite sua idade: ");
            int idade = Integer.parseInt(reader.readLine());
            
            System.out.println("Olá, " + nome + "! Você tem " + idade + " anos.");
            
            reader.close();
        } catch (IOException e) {
            System.out.println("Erro de entrada/saída: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Formato de número inválido: " + e.getMessage());
        }
    }
}
```

### Exercícios:

**Exercício 6.1:** Crie um programa que use `Scanner` para ler o nome, peso e altura de uma pessoa, e calcule seu IMC (Índice de Massa Corporal).

**Exercício 6.2:** Desenvolva um programa usando `BufferedReader` que solicite ao usuário os dados de um retângulo (base e altura) e calcule sua área e perímetro.

---

## Conclusão

A sintaxe básica de Java fornece os fundamentos necessários para começar a programar nesta linguagem. Domine estes conceitos através da prática constante dos exercícios propostos e da criação de seus próprios programas.

Lembre-se sempre de:
- Seguir as convenções de nomenclatura
- Estruturar corretamente seus programas
- Utilizar as palavras reservadas de forma apropriada
- Testar diferentes tipos de expressões
- Praticar a entrada e saída de dados

