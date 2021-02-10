"use strict";
class Employee {
    constructor(lastName, firstName, address, // readonly muss nochmal in der Klasse explizit angegeben werden, siehe TEST readonly address unten
    age) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.age = age;
        // eventuell noch die Props hier befüllen, deren Werte sich aus den Argumenten vom Konstruktor berechnet werden
    }
    getFullName() {
        throw new Error("Method not implemented.");
    }
}
let employeeMax = new Employee('Mustermann', 'Max', 'Hauptsraße 1', 26);
// === TEST readonly address?
// Modifizierer readonly vom Interface wird in die Klasse nicht übernommen
// employeeMax.address = 'Nebenstraße 1'
console.log('employeeMax.address', employeeMax.address);
// === props mit ! und ?
// Prop mit ?
if (employeeMax.hobbies) { // hobbies hat noch keine Wert
    console.log('employeeMax.hobbies', employeeMax.hobbies);
}
// console.log('employeeMax.hobbies.length', employeeMax.hobbies.length) // Fehler: Object is possibly 'undefined'.ts(2532)
employeeMax.hobbies = 'volleyball, cinema'; // datentyp immernoch string | undefined
if (employeeMax.hobbies) {
    console.log('employeeMax.hobbies', employeeMax.hobbies);
}
// Prop mit !
if (employeeMax.children) { // children ist noch undefined
    console.log('employeeMax.children', employeeMax.children);
}
// console.log('employeeMax.children.length', employeeMax.children.length) // kein Fehler beim Programmieren, erst beim Ausführen: 
// classes.js:35 Uncaught TypeError: Cannot read property 'length' of undefined
employeeMax.children = 'no children';
if (employeeMax.children) {
    console.log('employeeMax.children', employeeMax.children);
}
// todo #7
class Employer {
    constructor(lastName, firstName, address, age) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.age = age;
        // entweder
        // private salary!: number;
        // private salary?: number;
        // oder
        this.salary = 0; // ohne Methode getSalary - Hinweis: never read prop
        this.getSalary = () => {
            return this.salary;
        };
        // ohne setter ist auch das Befüllen der Prop von draußen nicht möglich, siehe 'TEST private'
        this.setSalary = (sal) => {
            this.salary = sal;
        };
        // this.salary = 0 // Wenn nicht als Arg im Konstruktor, dann kann die Prop direkt im Körper vom Konstruktor initialisiert werden
    }
    getFullName() {
        throw new Error("Method not implemented.");
    }
}
// === TEST private
let employerKerstin = new Employer('Müller', 'Kerstin', 'Dingenskirchensstraße 1', 28);
// employerKerstin.salary // Fehler: Property 'salary' is private and only accessible within class 'Employer'.ts(2341)
// nach dem Hinzufügen vom Setter:
employerKerstin.setSalary(2500);
console.log('employerKerstin.getSalary()', employerKerstin.getSalary());
