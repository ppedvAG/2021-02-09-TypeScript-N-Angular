"use strict";
// Literale
let myObject1 = {};
let myObject2 = {
    a: 'wert von a',
    b: 'wert von b'
};
// Konstruktoren 
let myObject3 = new Object();
// let myObject4: = new Object({ // ohne Angabe vom Datentyp gibt es Fehler. Datentyp vom Objektshape funktioniert auch nicht
let myObject4 = new Object({
    a: 'wert von a',
    d: 'wert von d'
});
console.log('myObject4.a', myObject4.a);
// Destructuring bei Objekten
let { d } = myObject4; // der Wert der gleichbenannten Prop wird in die Variable übergeben
console.log('d', d);
// Datentyp Object
let myObject5 = new Object();
let myObject6 = new Object(); // object ist ein reserviertes Wort für Datentyp von dem Objekt 'Object'
