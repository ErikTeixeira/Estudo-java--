// interface  -> convenção: quando é de uma classe coloca INomeInterface
interface IPerson {
    id: number;
    nameP: string;
    age: number;
    sayName(): string;
}


// classe com interface
class Person implements IPerson {
        // readonly - é para não poder modificar o atributo, só vai conseguir dentro do constructor
        // protected - só da para acessar dentro da classe e subclasse, não funciona com interface
        // private - só da para acessar dentro da classe, não funciona com interface
    readonly id: number;
    nameP: string;
    age: number;


    constructor( id: number, name: string, age: number ) {
        this.id = id;
        this.nameP = name;
        this.age = age;
    }

    sayName(): string {
        return this.nameP;
    }
}


// Da para diminuir a quantidade de código assim, e é a mesca coisa de cima
class PersonRefact {
    
    constructor (
        readonly id: number,
        nameP: string,
        age: number,
    ) {}
}



// subclasse
class Employee extends Person {

    constructor( id: number, name: string, age: number ) {
        super( id, name, age );
    }

    // se alguma propriedade estivesse private, não funcionario acessar ela aqui com o this.

}


// instanciar
const person1 = new Person(1, "Sakura", 33);
