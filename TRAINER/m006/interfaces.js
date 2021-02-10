"use strict";
// Interfaces haben keine Konstruktoren
// let Max = new Person() //'Person' only refers to a type, but is being used as a value here.ts(2693)
let Max = { lastName: 'Mustermann', firstName: 'Max', address: 'Hauptstraße 1', age: 25, getFullName: function () { return this.firstName + ' ' + this.lastName; } };
console.log('Max.getFullName()', Max.getFullName());
Max.age = 26;
let Student = {
    studiengang: 'Medieninformatik',
    matrikelnummer: 1234134,
    lastName: 'Müller',
    firstName: 'Kerstin',
    address: 'Dingenskirchensstraße 1',
    age: 28,
    getFullName: function () { return this.firstName + ' ' + this.lastName; }
};
// Die Interfaces können andere Interfaces erweitern. Man könnte theoretisch auch ohne Klassen auskommen.
// Aber das Anlegen von neuen Instanzen ist mühsam, also nur durch Objekt-Literale möglich.
// Dazu hat man keine private/public Modifizierer
