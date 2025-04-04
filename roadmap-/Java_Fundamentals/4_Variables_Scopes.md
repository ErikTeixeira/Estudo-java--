# Variáveis e Escopo em Java

## Introdução
Em Java, o conceito de variáveis e seus respectivos escopos são fundamentais para entender como os dados são armazenados, acessados e gerenciados durante a execução de um programa. Este documento explica os diferentes tipos de variáveis em Java, seus escopos e comportamentos.

## Tipos de Variáveis em Java

Java possui três tipos principais de variáveis, cada uma com características e escopos diferentes:

| Tipo de Variável | Definição | Escopo | Inicialização | Ciclo de Vida |
|------------------|-----------|--------|---------------|---------------|
| **Variáveis Locais** | Declaradas dentro de métodos, construtores ou blocos | Limitado ao método/bloco onde foi declarada | Não possui valor padrão, deve ser inicializada antes do uso | Existe apenas durante a execução do método/bloco |
| **Variáveis de Instância** | Declaradas na classe, fora de qualquer método | Disponível para todos os métodos da instância | Inicializada com valores padrão | Existe enquanto o objeto existir |
| **Variáveis Estáticas (de Classe)** | Declaradas com o modificador `static` | Disponível para toda a classe e suas instâncias | Inicializada com valores padrão | Existe enquanto a classe estiver carregada na JVM |

## Variáveis Locais

Variáveis locais são declaradas dentro de métodos, construtores ou blocos e são acessíveis apenas dentro desses contextos.

### Características:
- Devem ser inicializadas antes de serem usadas
- Não possuem valor padrão
- Existem apenas durante a execução do método/bloco
- Não podem ser acessadas fora do método/bloco onde foram declaradas
- Não podem utilizar modificadores de acesso (`public`, `private`, etc.)
- Não podem ser declaradas como `static`

### Exemplo:
```java
public class ExemploVariaveisLocais {
    public void metodoExemplo() {
        int contador = 0;  // Variável local
        String nome = "João";  // Variável local
        
        if (contador == 0) {
            boolean ativo = true;  // Variável local ao bloco if
            System.out.println(nome);  // Pode acessar 'nome'
        }
        
        // System.out.println(ativo);  // Erro! 'ativo' está fora de escopo
    }
    
    public void outroMetodo() {
        // System.out.println(contador);  // Erro! 'contador' está fora de escopo
    }
}
```

## Variáveis de Instância (Atributos)

Variáveis de instância são declaradas na classe, fora de qualquer método, e cada objeto da classe tem sua própria cópia dessas variáveis.

### Características:
- São inicializadas com valores padrão se não forem explicitamente inicializadas
- Existem enquanto o objeto existir
- Podem utilizar modificadores de acesso (`public`, `private`, `protected`, padrão)
- Cada objeto tem sua própria cópia dessas variáveis
- Podem ser acessadas por qualquer método da classe

### Exemplo:
```java
public class ExemploVariaveisInstancia {
    // Variáveis de instância
    private String nome;
    public int idade;
    protected double salario;
    boolean ativo;  // Modificador de acesso padrão (package-private)
    
    public void alterarDados() {
        nome = "Maria";  // Acesso direto à variável de instância
        idade = 30;
    }
    
    public void exibirDados() {
        System.out.println("Nome: " + nome);  // Acesso direto à variável de instância
        System.out.println("Idade: " + idade);
    }
}
```

## Variáveis Estáticas (de Classe)

Variáveis estáticas são declaradas com o modificador `static` e pertencem à classe, não aos objetos. Existe apenas uma cópia dessas variáveis, compartilhada por todos os objetos da classe.

### Características:
- São inicializadas com valores padrão se não forem explicitamente inicializadas
- Existem enquanto a classe estiver carregada na JVM
- Podem utilizar modificadores de acesso (`public`, `private`, `protected`, padrão)
- São compartilhadas por todos os objetos da classe
- Podem ser acessadas sem instanciar a classe

### Exemplo:
```java
    public class Aluno {

        public static int contador = 0;
        private static final String EMPRESA = "Minha Empresa";

        private String nome;

        // Construtor com parâmetro
        public Aluno(String nome) {
            this.nome = nome;
            contador++;
        }

        public static void exibirContador() {
            System.out.println("Número de instâncias: " + contador);
        }

        public void exibirDados() {
            System.out.println("Nome: " + nome);
            System.out.println("Empresa: " + EMPRESA);
            System.out.println("Contador: " + contador);
        }
    }

```

```java
    public class Main {
        public static void main(String[] args) {
            Aluno aluno1 = new Aluno("João");
            Aluno aluno2 = new Aluno("Maria");
            Aluno aluno3 = new Aluno("Carlos");
            Aluno aluno4 = new Aluno("Ana");

            aluno2.exibirDados();  // Vai exibir contador = 4
        }
    }
```

## Diferença entre Variáveis Globais e Locais

Em Java, não existem variáveis "globais" no sentido tradicional como em outras linguagens (C/C++). O que mais se aproxima de variáveis globais são as variáveis estáticas públicas.

### Comparação:

| Aspecto | Variáveis "Globais" (Estáticas Públicas) | Variáveis Locais |
|---------|------------------------------------------|------------------|
| Declaração | Na classe com `public static` | Dentro de métodos/blocos |
| Acesso | Por toda a aplicação através da classe | Apenas dentro do método/bloco |
| Ciclo de vida | Durante toda a execução do programa | Durante a execução do método/bloco |
| Visibilidade | Disponível para qualquer classe que importe | Limitada ao contexto de declaração |
| Risco | Alto - pode causar problemas de manutenção e bugs | Baixo - uso restrito e controlado |

### Exemplo:
```java
public class ExemploGlobalVsLocal {
    // "Variável global" (estática pública)
    public static String configuracaoGlobal = "Config padrão";
    
    public void metodoUm() {
        // Variável local
        int contadorLocal = 10;
        
        // Acesso à "variável global"
        System.out.println("Configuração: " + configuracaoGlobal);
    }
    
    public void metodoDois() {
        // Acesso à "variável global"
        configuracaoGlobal = "Nova config";
        
        // System.out.println(contadorLocal);  // Erro! Variável local não acessível
    }
}

// Em outra classe
class OutraClasse {
    public void metodo() {
        // Acesso à "variável global" de outra classe
        ExemploGlobalVsLocal.configuracaoGlobal = "Config externa";
    }
}
```

## Escopo de Variáveis

O escopo de uma variável define onde ela pode ser acessada dentro do código.

### Escopo de Bloco
Variáveis declaradas dentro de um bloco de código (delimitado por `{}`) são acessíveis apenas dentro desse bloco.

```java
public void exemplo() {
    if (true) {
        int x = 10;  // Variável de escopo de bloco
        System.out.println(x);  // OK
    }
    // System.out.println(x);  // Erro! 'x' está fora de escopo
}
```

### Escopo de Método
Variáveis declaradas dentro de um método são acessíveis em todo o método, após sua declaração.

```java
public void exemplo() {
    int contador = 0;  // Variável de escopo de método
    
    for (int i = 0; i < 5; i++) {
        contador++;  // OK, 'contador' está no escopo
    }
    
    System.out.println(contador);  // OK
    // System.out.println(i);  // Erro! 'i' está fora de escopo
}
```

### Escopo de Classe
Variáveis de instância e estáticas têm escopo de classe e são acessíveis por todos os métodos da classe.

```java
public class ExemploEscopoClasse {
    private int x = 10;  // Variável de instância (escopo de classe)
    
    public void metodoUm() {
        System.out.println(x);  // OK
        x = 20;  // OK, modifica a variável de instância
    }
    
    public void metodoDois() {
        System.out.println(x);  // OK, acessa o valor atualizado
    }
}
```

## Exemplo Completo

Vamos ver um exemplo completo que demonstra todos os tipos de variáveis e seus escopos:

```java
public class DemonstracaoVariaveis {
    // Variáveis de instância
    private String nome;
    private int idade;
    
    // Variável estática (de classe)
    public static int numeroDePessoas = 0;
    
    // Constante estática
    public static final String ESPECIE = "Humano";
    
    // Construtor
    public DemonstracaoVariaveis(String nome, int idade) {
        // Parâmetros são variáveis locais
        this.nome = nome;  // 'this.nome' refere-se à variável de instância
        this.idade = idade;  // 'this.idade' refere-se à variável de instância
        numeroDePessoas++;  // Incrementa a variável estática
    }
    
    public void celebrarAniversario() {
        // Variável local
        int anosAnteriores = idade;
        
        idade++;  // Modifica a variável de instância
        
        System.out.println(nome + " fez aniversário!");
        System.out.println("Idade anterior: " + anosAnteriores);
        System.out.println("Nova idade: " + idade);
    }
    
    public void verificarMaioridade() {
        // Variável local no escopo do método
        boolean ehMaior = idade >= 18;
        
        if (ehMaior) {
            // Variável local no escopo do bloco 'if'
            String status = "maior de idade";
            System.out.println(nome + " é " + status);
        } else {
            // Variável local no escopo do bloco 'else'
            String status = "menor de idade";
            System.out.println(nome + " é " + status);
        }
        
        // System.out.println(status);  // Erro! 'status' está fora de escopo
    }
    
    // Método estático
    public static void exibirContagem() {
        System.out.println("Total de pessoas: " + numeroDePessoas);
        System.out.println("Espécie: " + ESPECIE);
        // System.out.println(nome);  // Erro! Não pode acessar variável de instância
    }
    
    public static void main(String[] args) {
        // Criando instâncias
        DemonstracaoVariaveis pessoa1 = new DemonstracaoVariaveis("Ana", 25);
        DemonstracaoVariaveis pessoa2 = new DemonstracaoVariaveis("Carlos", 17);
        
        // Chamando métodos
        pessoa1.celebrarAniversario();
        pessoa2.verificarMaioridade();
        
        // Acessando variável estática
        System.out.println("Número total: " + DemonstracaoVariaveis.numeroDePessoas);
        
        // Chamando método estático
        DemonstracaoVariaveis.exibirContagem();
    }
}
```

## Melhores Práticas

1. **Minimize o escopo das variáveis**: declare-as o mais próximo possível de onde serão usadas
2. **Evite variáveis estáticas públicas**: use métodos de acesso (getters/setters)
3. **Use constantes (`static final`) para valores que não mudam**
4. **Dê nomes significativos às variáveis**
5. **Inicialize variáveis locais antes de usá-las**
6. **Prefira variáveis locais a variáveis de instância quando possível**
7. **Use modificadores de acesso apropriados para proteger os dados**

## Conclusão

Entender os diferentes tipos de variáveis e seus escopos em Java é essencial para desenvolver código eficiente, seguro e fácil de manter. O uso correto do escopo ajuda a prevenir bugs, melhorar a legibilidade do código e a economia de recursos.