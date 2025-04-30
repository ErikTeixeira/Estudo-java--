# Java

- High-level, class-based, and object-oriented programming language that has been around since 1995

### Data types
- #### Java Primitive Data Types

| Data Type | Size (bits)                   | Default Value | Example                         |
|-----------|-------------------------------|---------------|---------------------------------|
| `byte`    | 8                             | `0`           | `byte b = 100;`                 |
| `short`   | 16                            | `0`           | `short s = 1000;`               |
| `int`     | 32                            | `0`           | `int i = 100_000;`              |
| `long`    | 64                            | `0L`          | `long l = 1_000_000_000L;`      |
| `float`   | 32                            | `0.0f`        | `float f = 3.14f;`              |
| `double`  | 64                            | `0.0d`        | `double d = 3.1415926535;`      |
| `char`    | 16                            | `'\u0000'`    | `char c = 'A';`                 |
| `boolean` | JVM-specific (at least 1 bit) | `false`       | `boolean flag = true;`          |

- #### Java Non-Primitive (Reference) Types

| Reference Type  | Description                                           | Example                                    |
|-----------------|-------------------------------------------------------|--------------------------------------------|
| **Class**       | Blueprint for objects, containing fields and methods. | `class Person { String name; int age; }`   |
| **Interface**   | Contract declaring methods without implementations.   | `interface Runnable { void run(); }`       |
| **Array**       | Fixed-size container for multiple values of one type. | `int[] nums = {1, 2, 3};`                  |
| **Enum**        | Special class defining a fixed set of constants.      | `enum Day { MONDAY, TUESDAY, ... }`        |
| **Annotation**  | Metadata you can attach to classes, methods, etc.     | `@Override public String toString() {…}`   |
| **String**      | Immutable sequence of characters (java.lang.String).  | `String msg = "Hello, World!";`            |
| **Wrapper**     | Object wrappers for primitives (e.g., Integer).       | `Integer count = 42; Double pi = 3.14;`    |

- Constants
    - A variable whose value cannot change once it's assigned
    ```java
    final int MAX_USERS = 100;      // this variable can't be reassigned to any other value
    ```

### Type Conversion
- Implicit
    - Automatically convert smaller data types to larger ones
        ```java
        int a = 10;
        double b = a;       // b == 10
        ```

- Explicit
    - Convert a larger data type to a smaller one
        ```java
        double x = 25.20;
        int y = (int) x;        // y == 25  (decimal .20 is discarded)
        ```

### Variable Scope
- The scope of a variable is the part of the program where the variable can be accessed ou modified. There are 3 main scopes
    - **Local variable** = declared inside a method or block, only accessible within that method/block
    - **Instance variables** = declared inside a class but outside methods, accessible by all methods within that class
    - **Static variable** = declared using the static keyword, shared across all instances of the class

### Operators
- **Arithmetic**
    - +, -, *, /, %

- **Relational**
    - ==, !=
    ``` boolean isEqual = (5 == 5);   // true```

- **Logical**
    - || (or), && (and)

### Printing Output
- ```System.out.print()``` and ```System.out.println()```
    - println() method adds a newline after printing, while print() does not

- ```printf()``` allows formatting of output using format specifiers

| Format Specifier | Description |
|------------------|-------------|
| `%d`             | Prints a signed decimal integer. |
| `%f`             | Prints a floating-point number (decimal notation). |
| `%c`             | Prints a single character. |
| `%s`             | Prints a string of characters. |
| `%%`             | Prints a literal `%` character. |
| `%.2f`           | Floating-point number with 2 decimals. |


### Taking Input with Scanner

- Import = ```import java.util.Scanner;```
- Create a Scanner object = ```Scanner sc = new Scanner(System.in);```
- read user input = ```String name = sc.nextLine();``` -- string
    - ```sc.nextInt();```  -- int
    - ```sc.nextDouble();```  -- double
    - ```sc.nextBoolean();```  -- boolean

- **Always close Scanner object at the end to prevent memory leaks**
    - ```sc.close()```

### Loops

#### Switch Statement -> it's a loop and conditional statement

- Allows a variable to be tested for equality against multiple values

```java
switch (expression) {
    case value1:
        // code to be executed if expression equals value1
        break;
    case value2:
        // code to be executed if expression equals value2
        break;
    default:
        // code to be executed if expression does not match any case
}
```

#### For Loop

- Used when the number of iterations is known

```java
for (initialization; condition; update) {
    // code to be executed repeatedly
}
```

#### While Loop

- Executes a block of code as long as the condition is true

```java
while (condition) {
    // code to be executed repeatedly
}
```

#### Do-while Loop:  

- Similar to the while loop, but the block of code will be executed at least once before the condition is tested

```java
do {
    // code to be executed
} while (condition);
```

### Conditional Statements

####  If Statement

- Executes a block of code if the specified condition evaluates to true

```java
if (condition) {
    // code to be executed if the condition is true
}
```

#### Else Statement

- Specifies a block of code to execute if the condition in the if statement is false

```java
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

#### Else if Ladder

- Used to specify a new condition to test if the previous condition was false

```java
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition1 is false and condition2 is true
} else {
    // code to be executed if all conditions are false
}
```


