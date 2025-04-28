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
