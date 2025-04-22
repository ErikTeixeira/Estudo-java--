# Orientação a Objetos em Java

A Orientação a Objetos (OOP) é o paradigma central do Java e fundamental para o desenvolvimento com Spring Boot. Este guia oferece uma visão detalhada dos conceitos principais com exemplos práticos.

## 1. Classes e Objetos

**Classes** são os modelos ou "plantas" para criar objetos. Elas definem a estrutura e o comportamento que os objetos terão. Você pode pensar em uma classe como um "tipo" personalizado que você cria.

**Objetos** são instâncias concretas de classes que possuem:
- **Estado**: representado pelos atributos (variáveis)
- **Comportamento**: representado pelos métodos (funções)

Uma classe é como a planta de uma casa, enquanto um objeto é a casa real construída com base naquela planta.

```java
// Definição da classe
public class Carro {
    // Atributos (estado)
    String modelo;
    int ano;
    double velocidade;
    
    // Métodos (comportamento)
    void acelerar() {
        velocidade += 10;
        System.out.println("Acelerando para " + velocidade + " km/h");
    }
    
    void frear() {
        velocidade -= 10;
        System.out.println("Reduzindo para " + velocidade + " km/h");
    }
}

// Criando e usando objetos
public class ExemploCarro {
    public static void main(String[] args) {
        // Criando objetos (instâncias)
        Carro meuCarro = new Carro();
        meuCarro.modelo = "Sedan";
        meuCarro.ano = 2023;
        
        // Chamando métodos
        meuCarro.acelerar(); // Saída: Acelerando para 10.0 km/h
        meuCarro.acelerar(); // Saída: Acelerando para 20.0 km/h
        meuCarro.frear();    // Saída: Reduzindo para 10.0 km/h
    }
}
```

## 2. Construtores

**Construtores** são métodos especiais executados automaticamente quando um objeto é criado (com o operador `new`). Seus principais propósitos são:

1. Inicializar os atributos do objeto com valores específicos
2. Executar qualquer configuração necessária antes que o objeto esteja pronto para uso
3. Garantir que o objeto comece em um estado válido

Características importantes:
- Têm o mesmo nome da classe
- Não possuem tipo de retorno (nem mesmo `void`)
- Podem ser sobrecarregados (múltiplos construtores com diferentes parâmetros)
- São chamados apenas uma vez durante a criação do objeto

```java
public class Produto {
    String nome;
    double preco;
    int quantidade;
    
    // Construtor padrão (sem parâmetros)
    public Produto() {
        nome = "Sem nome";
        preco = 0.0;
        quantidade = 0;
    }
    
    // Construtor com parâmetros
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;         // "this" refere-se ao atributo da classe
        this.preco = preco;
        this.quantidade = quantidade;
    }
    
    // Exemplo de sobrecarga de construtores
    public Produto(String nome, double preco) {
        this(nome, preco, 1);  // Chama o construtor com 3 parâmetros
    }
    
    void exibirInfo() {
        System.out.println("Produto: " + nome + ", Preço: R$" + preco + 
                          ", Quantidade: " + quantidade);
    }
}

// Usando construtores
public class ExemploProduto {
    public static void main(String[] args) {
        Produto p1 = new Produto();                    // Construtor padrão
        Produto p2 = new Produto("Notebook", 3500.0, 5); // Construtor com 3 parâmetros
        Produto p3 = new Produto("Mouse", 120.0);      // Construtor com 2 parâmetros
        
        p1.exibirInfo(); // Saída: Produto: Sem nome, Preço: R$0.0, Quantidade: 0
        p2.exibirInfo(); // Saída: Produto: Notebook, Preço: R$3500.0, Quantidade: 5
        p3.exibirInfo(); // Saída: Produto: Mouse, Preço: R$120.0, Quantidade: 1
    }
}
```

## 3. Os Quatro Pilares da POO

A Programação Orientada a Objetos se fundamenta em quatro princípios principais que trabalham juntos para criar sistemas bem estruturados, modulares e reutilizáveis.

### 3.1. Abstração

**Abstração** é o processo de simplificar a realidade, identificando as características essenciais de um objeto e ignorando os detalhes irrelevantes para o contexto específico.

**Por que é importante:**
1. Reduz a complexidade, permitindo focar apenas no que é relevante
2. Facilita a compreensão de sistemas complexos
3. Separa a interface (o que algo faz) da implementação (como faz)

**Como implementar abstração:**
- **Classes Abstratas em Java POO**
    - Uma classe abstrata em Java é um tipo especial de classe que não pode ser instanciada diretamente. Ela serve como um modelo ou template para outras classes que a estendem.

- **Características de Classes Abstratas**

    - Não pode ser instanciada: Não é possível criar objetos diretamente a partir de uma classe abstrata.
    - Declaração: É definida usando a palavra-chave abstract antes da palavra-chave class.
    - Pode conter métodos abstratos: Métodos sem implementação que devem ser implementados pelas subclasses.
    - Pode conter métodos concretos: Métodos com implementação completa que são herdados pelas subclasses.

- **Métodos Abstratos**
    Quando uma classe estende (herda) uma classe abstrata, ela deve obrigatoriamente implementar todos os métodos abstratos da classe pai, a menos que a própria subclasse também seja declarada como abstrata.

```java
// Classe abstrata
public abstract class Forma {
    // Método abstrato (sem implementação)
    public abstract double calcularArea();
    
    // Método concreto (com implementação)
    public void exibirArea() {
        System.out.println("Área: " + calcularArea());
    }
}

// Classes concretas
public class Circulo extends Forma {
    private double raio;
    
    public Circulo(double raio) {
        this.raio = raio;
    }
    
    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}

public class Retangulo extends Forma {
    private double largura;
    private double altura;
    
    public Retangulo(double largura, double altura) {
        this.largura = largura;
        this.altura = altura;
    }
    
    @Override
    public double calcularArea() {
        return largura * altura;
    }
}

// Usando abstração
public class ExemploAbstracao {
    public static void main(String[] args) {
        // Forma forma = new Forma(); // Erro! Não pode instanciar classe abstrata
        
        Forma circulo = new Circulo(5);
        Forma retangulo = new Retangulo(4, 6);
        
        circulo.exibirArea();   // Saída: Área: 78.53981633974483
        retangulo.exibirArea(); // Saída: Área: 24.0
    }
}
```

Na abstração, pensamos: "O que este objeto precisa fazer?" antes de "Como ele fará isso?". Por exemplo, todas as formas geométricas precisam calcular sua área, mas cada forma específica implementa esse cálculo de maneira diferente.

### 3.2. Encapsulamento

**Encapsulamento** é o princípio de esconder os detalhes internos de implementação e proteger os dados de um objeto, controlando o acesso através de uma interface pública bem definida.

**Por que é importante:**
1. Protege os dados contra acesso incorreto
2. Esconde a complexidade interna
3. Facilita a manutenção (permite alterar a implementação sem afetar o código cliente)
4. Aumenta a segurança do código

**Como implementar encapsulamento:**
1. Declarar atributos como privados (`private`)
2. Fornecer métodos públicos de acesso controlado (getters e setters)
3. Implementar validação de dados nos setters

```java
public class ContaBancaria {
    // Atributos privados - acessíveis apenas dentro da classe
    private String titular;
    private double saldo;
    private int numero;
    
    // Construtor
    public ContaBancaria(String titular, double saldoInicial, int numero) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.numero = numero;
    }
    
    // Getters (métodos para acessar atributos)
    public String getTitular() {
        return titular;
    }
    
    public double getSaldo() {
        return saldo;
    }
    
    public int getNumero() {
        return numero;
    }
    
    // Setters (métodos para modificar atributos com validação)
    public void setTitular(String titular) {
        if (titular != null && !titular.isEmpty()) {
            this.titular = titular;
        }
    }
    
    // Métodos de negócio
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado. Novo saldo: R$" + saldo);
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }
    
    public boolean sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado. Novo saldo: R$" + saldo);
            return true;
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
            return false;
        }
    }
}

// Usando encapsulamento
public class ExemploEncapsulamento {
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria("João Silva", 1000.0, 12345);
        
        // Usando getters
        System.out.println("Titular: " + conta.getTitular());
        System.out.println("Saldo inicial: R$" + conta.getSaldo());
        
        // Usando métodos de negócio
        conta.depositar(500);  // Saída: Depósito de R$500.0 realizado. Novo saldo: R$1500.0
        conta.sacar(200);      // Saída: Saque de R$200.0 realizado. Novo saldo: R$1300.0
        
        // Não podemos acessar diretamente: conta.saldo = -1000; // Erro de compilação!
    }
}
```

O encapsulamento é como uma caixa-preta: o usuário sabe como usar (interface), mas não precisa saber o funcionamento interno (implementação). Isso permite que a implementação seja alterada sem impactar o código que usa a classe.

### Modificadores de Acesso

Os modificadores de acesso são fundamentais para o encapsulamento:

| Modificador | Classe | Pacote | Subclasse | Todos |
|-------------|--------|--------|-----------|-------|
| `private`   | ✓      | ✗      | ✗         | ✗     |
| `default`   | ✓      | ✓      | ✗         | ✗     |
| `protected` | ✓      | ✓      | ✓         | ✗     |
| `public`    | ✓      | ✓      | ✓         | ✓     |

### 3.3. Herança

**Herança** é o mecanismo pelo qual uma classe (subclasse/classe filha) pode estender outra classe (superclasse/classe pai), herdando seus atributos e comportamentos, e podendo adicionar ou modificar funcionalidades.

**Por que é importante:**
1. Promove a reutilização de código
2. Permite criar hierarquias de classes que representam relações "é um"
3. Facilita extensões de funcionalidade
4. Suporta o polimorfismo

**Como implementar herança:**
- Use a palavra-chave `extends` para herdar de uma classe
- Use `super()` para chamar construtores da classe pai
- Use `super.método()` para chamar métodos da classe pai
- Use `@Override` para sobrescrever métodos

```java
// Classe base/pai
public class Funcionario {
    protected String nome;
    protected String cpf;
    protected double salarioBase;
    
    public Funcionario(String nome, String cpf, double salarioBase) {
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
    }
    
    public double calcularSalario() {
        return salarioBase;
    }
    
    public void exibirDados() {
        System.out.println("Nome: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Salário: R$" + calcularSalario());
    }
}

// Classe derivada/filha (herda de Funcionario)
public class Gerente extends Funcionario {
    private double bonus;
    private int numSubordinados;
    
    public Gerente(String nome, String cpf, double salarioBase, double bonus, int numSubordinados) {
        super(nome, cpf, salarioBase);  // Chama o construtor da classe pai
        this.bonus = bonus;
        this.numSubordinados = numSubordinados;
    }
    
    @Override  // Sobrescrita do método da classe pai
    public double calcularSalario() {
        return salarioBase + bonus + (numSubordinados * 100);
    }
    
    @Override
    public void exibirDados() {
        super.exibirDados();  // Chama o método da classe pai
        System.out.println("Bônus: R$" + bonus);
        System.out.println("Subordinados: " + numSubordinados);
    }
}

// Usando herança
public class ExemploHeranca {
    public static void main(String[] args) {
        Funcionario func = new Funcionario("Ana Silva", "111.222.333-44", 3000);
        Gerente ger = new Gerente("Carlos Souza", "222.333.444-55", 5000, 2000, 5);
        
        System.out.println("=== Funcionário ===");
        func.exibirDados();
        // Saída:
        // Nome: Ana Silva
        // CPF: 111.222.333-44
        // Salário: R$3000.0
        
        System.out.println("\n=== Gerente ===");
        ger.exibirDados();
        // Saída:
        // Nome: Carlos Souza
        // CPF: 222.333.444-55
        // Salário: R$7500.0
        // Bônus: R$2000.0
        // Subordinados: 5
    }
}
```

A herança segue uma relação "é um" - um gerente É UM funcionário. Quando uma relação não é claramente "é um", considerar composição (tem um) em vez de herança.

### 3.4. Polimorfismo

**Polimorfismo** é a capacidade de objetos de diferentes classes responderem de maneira diferente ao mesmo método ou mensagem. Literalmente significa "muitas formas".

**Por que é importante:**
1. Permite tratar objetos de diferentes classes de maneira uniforme
2. Aumenta a flexibilidade e extensibilidade do código
3. Facilita a adição de novos tipos sem alterar o código existente
4. Permite implementar comportamentos específicos mantendo uma interface comum

**Tipos de polimorfismo:**
1. **Polimorfismo de sobrecarga**: Múltiplos métodos com mesmo nome mas parâmetros diferentes
2. **Polimorfismo de sobreposição**: Substituição de métodos da classe pai na classe filha
3. **Polimorfismo de subtipo**: Referência de superclasse pode apontar para objeto de subclasse

```java
// Exemplo com as classes Funcionario e Gerente anteriores
public class ExemploPolimorfismo {
    public static void main(String[] args) {
        // Criando um array de Funcionarios
        Funcionario[] equipe = new Funcionario[3];
        
        // Populando com diferentes tipos
        equipe[0] = new Funcionario("Ana Silva", "111.222.333-44", 3000);
        equipe[1] = new Gerente("Carlos Souza", "222.333.444-55", 5000, 2000, 5);
        equipe[2] = new Funcionario("Maria Oliveira", "333.444.555-66", 3200);
        
        // Polimorfismo em ação - mesmo método, comportamentos diferentes
        System.out.println("=== Folha de Pagamento ===");
        double totalFolha = 0;
        
        for (Funcionario f : equipe) {
            System.out.println(f.nome + ": R$" + f.calcularSalario());
            totalFolha += f.calcularSalario();
        }
        
        System.out.println("Total da folha: R$" + totalFolha);
        
        // Saída:
        // === Folha de Pagamento ===
        // Ana Silva: R$3000.0
        // Carlos Souza: R$7500.0
        // Maria Oliveira: R$3200.0
        // Total da folha: R$13700.0
    }
}
```

O polimorfismo permite escrever código que pode trabalhar com qualquer tipo de funcionário (atual ou futuro) sem precisar ser modificado. Isso é a essência do princípio "aberto para extensão, fechado para modificação" (princípio SOLID).

## 4. Interfaces e Classes Abstratas

### 4.1. Classes Abstratas

Uma **classe abstrata** é uma classe que não pode ser instanciada diretamente e geralmente contém métodos abstratos que devem ser implementados por suas subclasses.

**Características das classes abstratas:**
1. Declaradas com o modificador `abstract`
2. Podem conter métodos abstratos e concretos
3. Podem conter atributos e construtores
4. Subclasses devem implementar todos os métodos abstratos ou também ser declaradas como abstratas
5. Podem estender apenas uma única classe (herança simples)

**Quando usar:**
- Quando você quer compartilhar código entre várias classes relacionadas
- Quando as subclasses devem fornecer implementações específicas de certos comportamentos
- Quando você quer definir um modelo parcial para suas subclasses

### 4.2. Interfaces

Uma **interface** define um contrato que as classes implementadoras devem seguir, especificando quais métodos devem ser implementados.

**Características das interfaces:**
1. Todos os métodos são implicitamente `public` e `abstract` (exceto default methods em Java 8+)
2. Não podem conter implementações de métodos (exceto default/static methods em Java 8+)
3. Não podem conter atributos (exceto constantes `public static final`)
4. Uma classe pode implementar múltiplas interfaces (vs. herança simples)
5. Não têm construtores (não podem ser instanciadas)

**Quando usar:**
- Para definir capacidades que classes não relacionadas podem implementar
- Quando você quer especificar um contrato sem fornecer implementação
- Quando você precisa de "herança múltipla" de tipos
- Para permitir polimorfismo entre classes que não compartilham herança

```java
// Definição da interface
public interface Pagavel {
    double calcularPagamento();  // Implicitamente public e abstract
    boolean processarPagamento(String metodoPagamento);
}

// Implementando interface
public class Fatura implements Pagavel {
    private String cliente;
    private double valor;
    
    public Fatura(String cliente, double valor) {
        this.cliente = cliente;
        this.valor = valor;
    }
    
    @Override
    public double calcularPagamento() {
        return valor;
    }
    
    @Override
    public boolean processarPagamento(String metodoPagamento) {
        System.out.println("Processando fatura de " + cliente);
        System.out.println("Valor: R$" + valor);
        System.out.println("Método: " + metodoPagamento);
        return true;
    }
}

// Múltiplas interfaces
public interface Entregavel {
    void entregar(String endereco);
}

public class ProdutoFisico implements Pagavel, Entregavel {
    private String nome;
    private double preco;
    private double peso;
    
    public ProdutoFisico(String nome, double preco, double peso) {
        this.nome = nome;
        this.preco = preco;
        this.peso = peso;
    }
    
    @Override
    public double calcularPagamento() {
        return preco;
    }
    
    @Override
    public boolean processarPagamento(String metodoPagamento) {
        System.out.println("Processando pagamento do produto: " + nome);
        return true;
    }
    
    @Override
    public void entregar(String endereco) {
        double frete = peso * 0.1;
        System.out.println("Enviando " + nome + " para " + endereco);
        System.out.println("Frete: R$" + frete);
    }
}
```

### Classes Abstratas vs Interfaces

| Característica | Classe Abstrata | Interface |
|----------------|-----------------|-----------|
| Métodos concretos | Permitido | Default methods (Java 8+) |
| Atributos | Permitido | Apenas constantes |
| Extensão | Single (uma) | Múltiplas |
| Construtores | Sim | Não |
| Acesso | Qualquer | Implicitamente público |
| Uso principal | Compartilhar código | Definir contratos |
| Relação | "É um" | "Comporta-se como" |

**Quando escolher cada um:**
- Use **classes abstratas** quando você tem uma hierarquia clara com comportamentos comuns
- Use **interfaces** quando diferentes classes precisam compartilhar comportamentos, mas não têm relação de herança

## 5. Exemplo Completo: Aplicando Todos os Conceitos

Este exemplo demonstra como todos os conceitos de OOP (Classes, Objetos, Encapsulamento, Herança, Polimorfismo, Abstração, Interfaces) podem ser aplicados juntos em um sistema coeso.

```java
// Interface
interface Tributavel {
    double calcularImposto();
}

// Classe abstrata
abstract class Produto {
    protected String codigo;
    protected String nome;
    protected double preco;
    
    public Produto(String codigo, String nome, double preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    
    // Método abstrato
    public abstract String getCategoria();
    
    // Método concreto
    public void exibirInfo() {
        System.out.println("Produto: " + nome);
        System.out.println("Código: " + codigo);
        System.out.println("Preço: R$" + preco);
        System.out.println("Categoria: " + getCategoria());
    }
    
    // Getters e setters
    public double getPreco() {
        return preco;
    }
}

// Implementação concreta
class ProdutoEletronico extends Produto implements Tributavel {
    private int garantiaMeses;
    private String voltagem;
    
    public ProdutoEletronico(String codigo, String nome, double preco, 
                           int garantiaMeses, String voltagem) {
        super(codigo, nome, preco);
        this.garantiaMeses = garantiaMeses;
        this.voltagem = voltagem;
    }
    
    @Override
    public String getCategoria() {
        return "Eletrônico";
    }
    
    @Override
    public double calcularImposto() {
        return preco * 0.15; // 15% de imposto
    }
    
    @Override
    public void exibirInfo() {
        super.exibirInfo();
        System.out.println("Garantia: " + garantiaMeses + " meses");
        System.out.println("Voltagem: " + voltagem);
        System.out.println("Imposto: R$" + calcularImposto());
    }
}

class ProdutoAlimenticio extends Produto {
    private String dataValidade;
    
    public ProdutoAlimenticio(String codigo, String nome, double preco, String dataValidade) {
        super(codigo, nome, preco);
        this.dataValidade = dataValidade;
    }
    
    @Override
    public String getCategoria() {
        return "Alimentício";
    }
    
    @Override
    public void exibirInfo() {
        super.exibirInfo();
        System.out.println("Validade: " + dataValidade);
    }
}

// Demonstração
public class SistemaProdutos {
    public static void main(String[] args) {
        // Polimorfismo com classe abstrata
        Produto[] produtos = new Produto[2];
        produtos[0] = new ProdutoEletronico("E001", "Smartphone", 2500, 12, "Bivolt");
        produtos[1] = new ProdutoAlimenticio("A001", "Chocolate", 10, "12/2024");
        
        for (Produto p : produtos) {
            p.exibirInfo();
            System.out.println("----------------------------");
        }
        
        // Polimorfismo com interface
        Tributavel[] tributaveis = new Tributavel[1];
        tributaveis[0] = (ProdutoEletronico)produtos[0];
        
        double totalImpostos = 0;
        for (Tributavel t : tributaveis) {
            totalImpostos += t.calcularImposto();
        }
        
        System.out.println("Total de impostos: R$" + totalImpostos);
    }
}
```

## 6. Pontos Importantes da OOP em Java

1. **Encapsulamento**: 
   - Protege dados através de modificadores de acesso
   - Esconde a implementação interna dos objetos
   - Expõe apenas o necessário através de uma API pública

2. **Herança**: 
   - Cria relações "é um" entre classes
   - Promove reutilização de código
   - Facilita a criação de hierarquias de objetos

3. **Polimorfismo**: 
   - Permite tratar objetos relacionados de maneira uniforme
   - Possibilita substituição de comportamentos em subclasses
   - Suporta extensibilidade sem modificar código existente

4. **Abstração**: 
   - Foca no essencial, escondendo detalhes complexos
   - Simplifica modelos de domínio complexos
   - Separa interface da implementação

5. **Interfaces e Classes Abstratas**: 
   - Fornecem contratos e modelos para implementação
   - Permitem definir comportamentos sem implementação completa
   - Possibilitam implementação de "múltipla herança" de tipo

6. **Benefícios Gerais da OOP**:
   - Modularidade: código organizado em unidades lógicas
   - Reutilização: redução de duplicação de código
   - Extensibilidade: facilidade para adicionar novos recursos
   - Manutenibilidade: mudanças localizadas e isoladas
   - Organização: estruturação natural de problemas do mundo real