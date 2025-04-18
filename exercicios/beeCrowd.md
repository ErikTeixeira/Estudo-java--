### Área do Círculo

A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

Entrada
A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

Saída
Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, **com 4 casas após o ponto decimal**. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".


```java
import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
         
         Scanner ler = new Scanner(System.in);
         
         double n = 3.14159;
         double raio;
         double area;
         
         raio = ler.nextDouble();
         
         area = n * (raio * raio);
         
         System.out.printf("A=%.4f%n", area);
         
         ler.close();
    }
}
```

> System.out.printf("A=%.4f%n", area);  -  é diferente println, pois esse não aceita valor separado por vírgula e sim por +

---

### Soma de 2 valores

```java
import java.io.IOException;
import java.util.Scanner;

public class Main {
 
    public static void main(String[] args) throws IOException {
 
        Scanner ler = new Scanner(System.in);
         
         int A, B;
         int SOMA;
         
         A = ler.nextInt();
         B = ler.nextInt();
         
         SOMA = A + B;
         
         System.out.println("SOMA = "+ SOMA);
         
         ler.close();
    }
}
```

---

```java
import java.util.*;
import java.lang.*;
import java.io.*;
import java.util.Scanner;


class Main {
    public static void main(String[] args) {
        // 500
        // 35.0                               saida  -  14.286 km/l

        Scanner readData = new Scanner(System.in);

        int dist = readData.nextInt();

        double combus = readData.nextDouble();

        double result = 0.0;

        try {
            result = dist / combus;
            
        } catch (Exception e) {
            System.out.println( e.getMessage() );
        }


        System.out.printf("%.3f km/l%n", result);
        
    }
}
```

---

```java
import java.util.Scanner;

class Main {
    public static void main(String[] args) {

        // 1.0 7.0
        // 5.0 9.0

        Scanner readData = new Scanner(System.in);

        String linha1 = readData.nextLine();
        String linha2 = readData.nextLine();

        String[] ponto1 = linha1.split(" ");
        String[] ponto2 = linha2.split(" ");

        double x1 = Double.parseDouble( ponto1[0] );
        double y1 = Double.parseDouble( ponto1[1] );

        double x2 = Double.parseDouble( ponto2[0] );
        double y2 = Double.parseDouble( ponto2[1] );

        double subx = x2 - x1;
        double suby = y2 - y1;

        // Potência
        double formx = Math.pow( subx, 2 );
        double formy = Math.pow( suby, 2 );

        double soma = formx + formy;

        // Raiz quadrada
        double distancia = Math.sqrt( soma );

        // 4.4721

        System.out.printf("%.4f%n", distancia);
    }
}
```

---

```java 
import java.util.Scanner;


class Main {
    public static void main(String[] args) {

        Scanner readData = new Scanner(System.in);

        String entrada = readData.nextLine();

            // entrada 2 3 6 7

        // adicionar cada número em um lugar da lista
        String[] nums = entrada.split(" ");

        int a = Integer.parseInt( nums[0] );
        int b = Integer.parseInt( nums[1] );
        int c = Integer.parseInt( nums[2] );
        int d = Integer.parseInt( nums[3] );

        int somaCD = c + d;
        int somaAB = a + b;

        if ( b > c && d > a && somaCD > somaAB && c > 0 && d > 0 && a % 2 == 0 ) {

            System.out.println("Valores aceitos");
        } else {
            System.out.println("Valores nao aceitos");
        }
    }
}
```

---
O printf arredonda valores do tipo x.y5. Por padrão, o System.out.printf("%.1f") faz arredondamento “half‑up”, convertendo 4,85 em 4,9
---


