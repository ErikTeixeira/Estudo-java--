# Orientação a Objetos em Java

A Orientação a Objetos (OOP) é o paradigma central do Java e fundamental para o desenvolvimento com Spring Boot. Este guia oferece uma visão clara dos conceitos principais com exemplos práticos.

## 1. Classes e Objetos

**Classes** são os modelos ou "plantas" para criar objetos. **Objetos** são instâncias de classes que possuem estado (atributos) e comportamento (métodos).

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

**Construtores** são métodos especiais executados quando um objeto é criado, permitindo inicializar os atributos.

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

## 3. Encapsulamento

**Encapsulamento** protege os dados usando modificadores de acesso e métodos getters/setters, controlando como os atributos são acessados e modificados.

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

### Modificadores de Acesso

| Modificador | Classe | Pacote | Subclasse | Todos |
|-------------|--------|--------|-----------|-------|
| `private`   | ✓      | ✗      | ✗         | ✗     |
| `default`   | ✓      | ✓      | ✗         | ✗     |
| `protected` | ✓      | ✓      | ✓         | ✗     |
| `public`    | ✓      | ✓      | ✓         | ✓     |

## 4. Herança

**Herança** permite que uma classe herde atributos e métodos de outra, facilitando a reutilização de código e criação de hierarquias.

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

## 5. Polimorfismo

**Polimorfismo** permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum, possibilitando comportamentos diferentes para o mesmo método.

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

## 6. Abstração

**Abstração** é o processo de identificar características essenciais e ignorar detalhes irrelevantes. Classes abstratas definem interfaces sem implementações completas.

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

## 7. Interfaces e Classes Abstratas

**Interfaces** definem contratos que as classes devem implementar. **Classes abstratas** combinam métodos abstratos e concretos.

### Interface

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

## Exemplo completo: Aplicando todos os conceitos

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

## Pontos Importantes da OOP em Java

1. **Encapsulamento**: Protege dados e implementações internas.
2. **Herança**: Permite a reutilização de código e criação de hierarquias.
3. **Polimorfismo**: Permite tratar objetos de classes diferentes de maneira uniforme.
4. **Abstração**: Permite focar no essencial, escondendo detalhes complexos.
5. **Interfaces**: Definem contratos que as classes devem implementar.


