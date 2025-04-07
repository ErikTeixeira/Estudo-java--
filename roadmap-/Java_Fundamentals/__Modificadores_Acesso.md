# Modificadores de Acesso em Java

Os modificadores de acesso em Java controlam a visibilidade e acessibilidade de classes, métodos e atributos. Eles são fundamentais para implementar o encapsulamento, um dos princípios da Orientação a Objetos.

## Tipos de Modificadores

Java possui quatro modificadores de acesso:

### 1. `public`
- **Visibilidade**: Acessível em qualquer lugar
- **Uso comum**: APIs públicas, métodos que devem ser acessados externamente

```java
public class Carro {
    public void acelerar() {
        System.out.println("Acelerando...");
    }
}
```

### 2. `protected`
- **Visibilidade**: Acessível na mesma classe, mesmo pacote e subclasses
- **Uso comum**: Métodos e atributos que devem ser acessíveis em subclasses

```java
public class Animal {
    protected void comer() {
        System.out.println("Comendo...");
    }
}

public class Cachorro extends Animal {
    public void alimentar() {
        comer(); // Método protected acessível na subclasse
    }
}
```

### 3. `default` (sem modificador)
- **Visibilidade**: Acessível apenas na mesma classe e mesmo pacote
- **Uso comum**: Classes auxiliares, implementações internas

```java
class Utilitario { // Modificador default
    void processar() {
        System.out.println("Processando...");
    }
}
```

### 4. `private`
- **Visibilidade**: Acessível apenas na mesma classe
- **Uso comum**: Atributos e métodos internos da classe

```java
public class ContaBancaria {
    private double saldo;
    
    public void depositar(double valor) {
        saldo += valor;
    }
    
    public double getSaldo() {
        return saldo;
    }
}
```

## Tabela Comparativa

| Modificador | Mesma Classe | Mesmo Pacote | Subclasse | Qualquer Lugar |
|-------------|--------------|--------------|-----------|----------------|
| `public`    | ✓            | ✓            | ✓         | ✓              |
| `protected` | ✓            | ✓            | ✓         | ✗              |
| `default`   | ✓            | ✓            | ✗         | ✗              |
| `private`   | ✓            | ✗            | ✗         | ✗              |

## Exemplo Prático

```java
package banco;

public class Conta {
    private double saldo;         // Visível apenas nesta classe
    protected String titular;     // Visível nesta classe, no pacote e subclasses
    double taxaManutencao;        // Default - visível apenas no pacote
    public String numeroConta;    // Visível em qualquer lugar
    
    public double getSaldo() {
        return saldo;
    }
    
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }
}
```

## Dicas
- Use `private` para atributos que não devem ser acessados diretamente
- Use `public` apenas para métodos que fazem parte da interface da classe
- Use `protected` quando quiser permitir acesso em subclasses
- O modificador `default` é útil para limitar o acesso ao mesmo pacote