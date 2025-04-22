"use strict";
// classe com interface
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.nameP = name;
        this.age = age;
    }
    sayName() {
        return this.nameP;
    }
}
// subclasse
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
// instanciar
const person1 = new Person(1, "Sakura", 33);
