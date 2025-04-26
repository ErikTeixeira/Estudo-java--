## Typescript

- Feito pela microsoft
- Não é diretamente executado, primeiro é compilado para javascript
- Tem como tipar os dados, tem classes, interfaces, generics, namespaces
    - namespaces são uma forma de organizar código, agrupar classes, interfaces, funções e variáveis sob um nome comum, impedindo que identificadores entrem em conflito com outros partes do código

### Advantages over javascript
- Static typing = catches errors at compile time rather than runtime
- Better code readability
- Object-Oriented features = classes, interfaces, inheritance ...
- Compatibility with javascript = can use existing javascript libraries and frameworks
- Enhanced developer experience

### Install Typescript
- Have node.js in pc, because need npm
- ```npm install -g typescript```  - installs ts globally, allowing to use tsc command from anywhere
- ```tsc -v``` - to see the version and verify the installation

#### Testing

```typescript
let message: string = "Hello";
console.log(message);
```

- ```tsc nomearquivo.ts``` - para compilar o arquivo

## Types

- TypeScript doesn’t allow you to dynamically change variable types
- If you don’t specify the type, TS will choose the type based on the variable’s value
- #### Tipos Primitivos

| Type         | Description                                      | Example                       |
|--------------|--------------------------------------------------|-------------------------------|
| `string`     | Sequence of characters                           | `"Hello, world!"`             |
| `number`     | Integer and floating-point numbers               | `23`, `3.14`                  |
| `boolean`    | True/false values                                | `true`, `false`               |
| `bigint`     | Arbitrary-precision integers                     | `9007199254740991n`           |
| `symbol`     | Unique, immutable identifier                     | `Symbol("id")`                |
| `null`       | Absence of a value                               | `null`                        |
| `undefined`  | Value not assigned                               | `undefined`                   |
| `void`       | No value (commonly as a function return type)    | `function log(): void { }`    |
| `any`        | Opt-out of type checking                         |                               |
| `unknown`    | Safe alternative to `any`                        |                               |

---

- #### Composite & Other Types

| Type                    | Description                                               | Example                                                                 |
|-------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------|
| `T[]` or `Array<T>`     | Array of elements all of type `T`                         | ```ts<br>let nums: number[] = [1, 2, 3];<br>let strs: Array<string> = ["a", "b", "c"];<br>``` |
| `[T1, T2, …]`           | Tuple with a fixed sequence of types                      | ```ts<br>let pair: [string, number] = ["Hello", 10];<br>```              |
| `enum`                  | Enumeration of named constants                            | ```ts<br>enum Color {<br>  Red,<br>  Green = 2,<br>  Blue<br>}<br>```   |


## Declare variables

- var, const, let
    - let and const are preferred, because they offer better scoping rules
- LET -> allows reassignment and is block-scoped
- CONST -> cannot be reassigned after initialization and is block-scoped
- VAR -> Declares a function-scoped or globally-scoped variable and can be redeclared and reassigned within their scope.

## Operations

#### Arithmetic
- +, -, *, /, %

#### Comparison
- ==, ===, !=, <, >, <=, >=
    - == (Equality operator): This operator performs type coercion before comparing values. It attempts to convert the operands to a common type, and then compares them. This can lead to unexpected results if the types are different.
    - === (Strict equality operator): This operator does not perform type coercion. It compares the values and types directly. If the types are different, it returns false.

    ```typescript 
    let x = 5;
    let y = "5";

    console.log(x == y); // true, because "5" is coerced to 5 before comparison
    console.log(x === y); // false, because the types are different
    ```

#### Logical
- && (AND), || (OR), ! (NOT)


