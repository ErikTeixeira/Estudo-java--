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
- Have node.js in pc, because needs npm
- ```npm install -g typescript```  - installs ts globally, allowing to use tsc command from anywhere
- ```tsc -v``` - to see the version and verify the installation

#### Testing

```typescript
let message: string = "Hello";
console.log(message);
```

- #### ```tsc nomearquivo.ts``` - para compilar o arquivo

## Types

- TypeScript doesn’t allow you to dynamically change variable types
- If you don’t specify the type, TS will choose the type based on the variable’s value

- #### Primitive data types
    - In TypeScript, string is a primitive type, whereas in Java, String is a class and not a primitive

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
| `T[]` or `Array<T>`     | Array of elements all of type `T`                         | ```ts <br> let nums: number[] = [1, 2, 3];  <br> let strs: Array<string> = ["a", "b", "c"]; <br>``` |
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


## Functions and Parameters

#### Declaring a Function

- A function name
- Parameters with types
- A return type

```typescript
function greet(name: string): string {  
    return `Hello, ${name}!`;  
}  

console.log(greet("Alice")); // Output: Hello, Alice! 
```

#### Optional and Default Parameters

- Parameters can be marked as optional using **?**, **or** given **default values**

```typescript
function greet(name: string, greeting: string = "Hello"): string {  
    return `${greeting}, ${name}!`;  
}  

console.log(greet("Alice")); // Output: Hello, Alice!  
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!  
```

#### Arrow Functions

- TypeScript supports arrow functions (=>), making code concise

```typescript
const add = (a: number, b: number): number => a + b;  
console.log(add(5, 10)); // Output: 15  
```

- #### If a function doesn't return anything, it's return type is void


## Object-Oriented Programming Basics

- Object-Oriented Programming (OOP) is a programming paradigm that revolves around objects and classes 
- TypeScript, being a superset of JavaScript, brings strong OOP features, making it easier to write scalable and maintainable code

##### Key OOP Concepts in TypeScript :
1. **Classes** - Blueprints for creating objects.
2. **Objects** - Instances of classes.
3. **Encapsulation** - Restricting direct access to object properties.
4. **Inheritance** - Extending a class to reuse functionality.
5. **Polymorphism** - Overriding methods to change behavior.


#### Creating a Class and Instantiating Objects

- A class defines properties and methods, while an object is an instance of a class

```typescript
class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.displayInfo(); // Output: Car: Toyota Corolla
```


#### Encapsulation : Controlling Access with Modifiers

- TypeScript provides public, private, and protected access modifiers

```typescript
class BankAccount {
  private balance: number = 1000;

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();
console.log(account.getBalance()); // ✅ Allowed
// console.log(account.balance); // ❌ Error: Property 'balance' is private
```

#### Inheritance : Extending a Class

- A class can inherit properties and methods from another class using extends

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Some sound...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark! Bark!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Bark! Bark!
```

#### Polymorphism : Overriding Methods

- Polymorphism allows a subclass to provide a specific implementation of a method

```typescript
class Shape {
  area(): void {
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  area(): void {
    console.log("π × r²");
  }
}

const myCircle = new Circle();
myCircle.area(); // Output: π × r²
```

- #### Always use super() in the constructor when extending a class to call  the parent class's constructor


## Access Modifiers and Inheritance

#### Three Types of Access Modifiers:
  - public – Can be accessed from anywhere. (Default modifier)
  - private – Only accessible within the same class.
  - protected – Accessible within the class and its subclasses.


Access modifiers in TypeScript control how class properties and methods can be accessed
They help in encapsulation, ensuring data security and structured code

```typescript
class Person {
  public name: string;  // Accessible anywhere 🌍
  private age: number;  // Accessible only inside this class 🔐
  protected job: string; // Accessible in this class & subclasses 👨‍💻

  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  getAge(): number {
    return this.age; // ✅ Allowed inside the class
  }
}

const person = new Person("Alice", 30, "Developer");
console.log(person.name); // ✅ Allowed
console.log(person.getAge()); // ✅ Allowed
// console.log(person.age); // ❌ Error: 'age' is private
// console.log(person.job); // ❌ Error: 'job' is protected
```


#### Inheritance 

Allows one class to reuse the properties and methods of another. This helps in reducing code duplication and improving structure.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Some sound... 🎵");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark! Bark! 🐕");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Bark! Bark! 🐕
```

Here, Dog inherits from Animal and overrides the makeSound method

- When a subclass inherits from a parent class, access modifiers determine what it can access.

- ##### Using Protected Modifier in Inheritance

```typescript
class Employee {
  protected company: string = "TechCorp"; // Accessible in subclasses

  showCompany() {
    console.log(`Company: ${this.company} 🏢`);
  }
}

class Developer extends Employee {
  showDetails() {
    console.log(`I work at ${this.company} 💻`); // ✅ Allowed (protected)
  }
}

const dev = new Developer();
dev.showDetails(); // Output: I work at TechCorp 💻
// console.log(dev.company); // ❌ Error: 'company' is protected
```

- Key Takeaways :
  - public – Can be accessed anywhere 🌍
  - private – Restricted to the same class 🔐
  - protected – Accessible within the class and its subclasses 🏗️
  - Inheritance allows reusability and extends class functionality 🚀


## Interfaces and Abstract Classes

#### Interface

- An interface in TypeScript **defines the structure of an object**. It **enforces a contract** that any implementing class must follow. 
- However, it **does not contain any implementation** details—just method and property definitions.

- ##### Key Features of Interfaces :
  - Defines the shape of an object.
  - Can be implemented by classes using implements.
  - Supports optional properties (?).
  - Can extend other interfaces.

```typescript
interface Person {
  name: string;
  age: number;
  speak(): void;
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old! 🎤`);
  }
}

const student = new Student("Alice", 22);
student.speak(); // Output: Hi, I'm Alice and I'm 22 years old!
```

**Interfaces only define structure, they don't provide actual functionality**


#### Abstract classes

- An abstract class is a special type of class that cannot be instantiated.
- It is designed to be a blueprint for other classes, containing method definitions that subclasses must implement.

- ##### Key Features of Abstract Classes :
  - Can have both defined and abstract (undefined) methods.
  - Cannot be instantiated directly.
  - Must be extended using extends.

```typescript
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void; // Must be implemented by subclasses

  move() {
    console.log(`${this.name} is moving... 🏃`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark! Bark! 🐶");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Bark! Bark! 🐶
myDog.move(); // Output: Buddy is moving... 🏃
```

**Use abstract classes when you want to provide a base class with some shared functionality but enforce method implementation in subclasses**

| Feature                      | Interface 📜              | Abstract Class 🏗️                        |
|-----------------------------|----------------------------|------------------------------------------|
| Can have method implementations? | ❌ No                     | ✅ Yes                                   |
| Can be instantiated?        | ❌ No                     | ❌ No                                   |
| Supports multiple inheritance? | ✅ Yes                    | ❌ No (only single inheritance)         |
| Used for?                   | Defining structure        | Providing base functionality            |

- ##### When to Use What? 🤔
  - Use interfaces when defining the shape of an object
  - Use abstract classes when creating a blueprint with some shared logic


## Arrays and Tuples

#### Array

- An array in TypeScript is a collection of elements of the same type. 
- Unlike JavaScript, TypeScript ensures type safety, meaning all elements must be of the declared type.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

> [!TIP]
> Use `Array<T>` notation for readability, e.g., `Array<number>` instead of `number[]`.

  “e.g.” is an abbreviation of the Latin phrase exempli gratia, which literally means “for the sake of example.”
  we use it to introduce one or more examples of what we just mentioned

- Common Array Methods
  - ``let fruits: string[] = ["Apple", "Banana", "Mango"];``
  - **push** - ``fruits.push("Orange");  // Adds an element``
  - **pop** - ``fruits.pop();           // Removes the last element``
  - **length** - ``console.log(fruits.length); // Outputs: 3``

#### Tuple 

- A tuple is a special type of array with a fixed length and specific types for each position

- **Declaring a Tuple**
  ```typescript
  let user: [string, number] = ["Alice", 25]; // Must match types & order
  ```

- Accessing and Modifying Tuples
  - ``user[0] = "Bob";  // ✅ Allowed``
  - ``user[1] = 30;     // ✅ Allowed``
  - ``// user[1] = "Thirty"; // ❌ Error: Expected number, got string``

> [!TIP]
> Use tuples when you need a fixed structure with different data types


- Tuples are useful for returning multiple values from functions
  - Function Returning a Tuple
  ```typescript
  function getUser(): [string, number] {
  return ["Alice", 25];
  }

  const [name, age] = getUser();
  console.log(`Name: ${name}, Age: ${age}`); // Output: Name: Alice, Age: 25
  ```


#### Tuple vs. Array: Key Difference ⚖️

| Feature      | Array                        | Tuple                                |
|--------------|------------------------------|--------------------------------------|
| Length       | Can vary                     | Fixed                                |
| Type Order   | Same type for all elements   | Specific types for each position     |
| When to Use  | when storing multiple values of the same type   | when dealing with fixed-length data structures     |


### Key Difference from Java Arrays
- **Java array:** int[] arr = new int[5]; → fixed size, low-level.
- **TypeScript array:** let arr: number[] = [1, 2, 3]; → dynamic, like ArrayList.


## Enums and Type Aliases

#### Enum

- An enum in TypeScript is a way to define a set of named constants. 
- Enums make your code more readable and help avoid using magic numbers or strings.

```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

> By default, enum values start at 0 and increment automatically

- You can also manually set values in an enum

```typescript
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log(Status.NotFound); // Output: 404
```

#### Type Alias

- Allows you to create a custom name for a type, making your code more readable and reusable

```typescript
type User = {
  name: string;
  age: number;
};

  // the type of const is user
const person: User = { name: "Alice", age: 25 };
```

> [!TIP]
> Use type aliases to make complex types easier to read and reuse!

- **Type Aliases with Union Types**
  - You can use type aliases with union types to define multiple possible values.

  ```typescript
  type Status = "success" | "error" | "loading";

  let requestStatus: Status = "success"; // ✅ Allowed
  // requestStatus = "failed"; // ❌ Error: "failed" is not part of the type
  ```


| Feature        | Enum 🏆        | Type Alias 🏷️ |
|----------------|----------------|----------------|
| Stores values? | ✅ Yes         | ❌ No         |
| Works with numbers & strings? | ✅ Yes | ✅ Yes |
| Better for? | Named constants | Complex object structures |

- ##### Combining Enums & Type Aliases

  ```typescript
  enum Role {
  Admin,
  User,
  Guest
  }

  type Person = {
    name: string;
    role: Role;
  };

  const newUser: Person = { name: "Bob", role: Role.Admin };
  console.log(newUser.role); // Output: 0
  ```

- ##### 💡 When to Use What?
  - ✔️ Use Enums for defining fixed sets of named constants.
  - ✔️ Use Type Aliases to create custom types for objects and unions. 


## Generics in TypeScript

- Generics in TypeScript allow you to create reusable, type-safe code. They let you write functions, classes, or interfaces that work with any type while maintaining type safety

- ##### Why Use Generics?
  - ✅ Provides flexibility without losing type safety.
  - ✅ Avoids redundant code for different types.
  - ✅ Helps catch type errors at compile time.

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(42));      // Output: 42
```

> `<T>` is a placeholder for a type that is determined when calling the function
 
>> **`<T>` is a common name for a generic type, but you can use any letter or word**

- #### Generics are commonly used with functions and arrays for flexible yet type-safe operations

- Generic Function with Arrays

  ```typescript
  function getFirstElement<T>(arr: T[]): T {
  return arr[0];
  }

  console.log(getFirstElement<string>(["Apple", "Banana"])); // Output: Apple
  console.log(getFirstElement<number>([10, 20, 30])); // Output: 10
  ```

> This function works with any array type while keeping type safety

>> **You can use multiple generics like `<T, U>`**

- Generic Interface

```Typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "TypeScript" };
const numberBox: Box<number> = { content: 100 };
```
> The Box<T> interface can now hold any type

- Generic Class

```Typescript
class Storage<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  getData(): T {
    return this.data;
  }
}

const numStorage = new Storage<number>(50);
console.log(numStorage.getData()); // Output: 50
```

- #### 🔑 Key Takeaways :
  - ✔️ Generics allow type flexibility without losing type safety.
  - ✔️ Functions, interfaces, and classes can all use generics.
  - ✔️ Use <T> as a placeholder for any type.



## Utility Types and Type Manipulation

- Utility types in TypeScript help modify existing types, making code more flexible and reusable. They allow you to create new types by transforming existing ones.

- #### Common Utility Types
  
**1. Partial**<T> – Makes all properties optional
  - Partial<T> takes a type with required properties and makes them optional

  ```Typescript
  type User = { name: string; age: number };
  let user: Partial<User> = { name: "Alice" }; // ✅ age is optional
  ```

**2. Required<T>** – Makes all properties required
  - Required<T> takes a type with optional properties and makes them required

  The “?” you see in the Required example is there to show that the properties were optional before applying Required<T>. After applying it, the properties lose the “?” and become required

  ```Typescript
  type User = { name?: string; age?: number };

  // ✅ Providing all properties satisfies the type
  let fullUser: Required<User> = { name: "Bob", age: 30 };

  // ❌ Omitting any property causes an error
  let missingProp: Required<User> = { name: "Bob" };
  // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Required<User>'
  ```

**3. Readonly<T>** – Prevents modifications to properties

  ```Typescript
  type User = { name: string };
  const user: Readonly<User> = { name: "Charlie" };
  // user.name = "David"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
  ```

**4. Pick<T, K>** – Selects specific properties from a type

  ```Typescript
  type User = { name: string; age: number; email: string };
  type UserSummary = Pick<User, "name" | "email">;   // Only 'name' and 'email' are kept
  ```


> Use utility types when you need variations of an existing type


