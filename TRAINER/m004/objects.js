"use strict";
// Literale
var myObject1 = {};
var myObject2 = {
    a: 'wert von a',
    b: 'wert von b'
};
// Konstruktoren 
var myObject3 = new Object();
// let myObject4: = new Object({ // ohne Angabe vom Datentyp gibt es Fehler. Datentyp vom Objektshape funktioniert auch nicht
var myObject4 = new Object({
    a: 'wert von a',
    d: 'wert von d'
});
console.log('myObject4.a', myObject4.a);
// Destructuring bei Objekten
var d = myObject4.d; // der Wert der gleichbenannten Prop wird in die Variable übergeben
console.log('d', d);
// Datentyp Object
var myObject5 = new Object();
var myObject6 = new Object(); // object ist ein reserviertes Wort für Datentyp von dem Objekt 'Object'
