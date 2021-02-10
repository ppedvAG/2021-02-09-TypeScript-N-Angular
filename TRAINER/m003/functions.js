"use strict";
// AUFRUF EINER FUNKTION
// === Variante 1 ===
function showFctCall() {
    console.log('aufgerufen');
}
showFctCall();
// === Variante 2  ===
(function showFctCall2() {
    console.log('aufgerufen2');
})();
// === Variante 3  ===
(function () {
    console.log('aufgerufen3');
})();
// DEKLARATION EINER FUNKTION
// === Variante 1 ===
// klassische Funktiondekl.
console.log('this', this); // Window
function classicFct() {
    let myThis = globalThis;
    console.log('this', this); // undefined
    console.log('globalThis', globalThis); // Window
}
classicFct();
// === Variante 2 ===
// anonyme Funktion
// === Variante 3 ===
let arrowFct = () => {
    // console.log('this', this) // The containing arrow function captures the global value of 'this'.ts(7041)
};
class myClass {
    constructor() {
        this.arrowFct2 = () => {
            console.log('this', this); // Pfeilfunktionen sind innerhalb von Klassen besonders nützlich
        };
        this.classicFct2 = function () {
            console.log('this', this);
        };
    }
}
let myClassInstance = new myClass();
myClassInstance.arrowFct2(); // myClass
myClassInstance.classicFct2(); // myClass
// DATENTYP 'FUNCTION'
let anyFunction = () => { };
let anyFunction2 = () => { };
let anyFunction3 = () => {
    return {};
};
// GENERISCHE FUNKTIONEN
let myStringArray = ['a', 'b', 'c'];
let myNumberArray = [1, 2, 3];
function makeBigger(arr) {
    let biggerArr = arr.concat(arr);
    return biggerArr;
}
console.log('makeBigger(myStringArray)', makeBigger(myStringArray));
console.log('makeBigger(myNumberArray)', makeBigger(myNumberArray));
// funktioniert, aber man verliert die Kontrolle über die Datentypen
function makeBiggerG(arr) {
    let biggerArr = arr.concat(arr);
    return biggerArr;
}
console.log('makeBiggerG(myStringArray)', makeBiggerG(myStringArray));
console.log('makeBiggerG(myNumberArray)', makeBiggerG(myNumberArray));
// UNBESTIMMTE ANZAHL VON ARGUMENTEN
function addManyNumbers(...argsList) {
    let summe = 0;
    for (const iterator of argsList) {
        summe += iterator;
    }
    return summe;
}
console.log('addManyNumbers(2,5,7)', addManyNumbers(2, 5, 7));
// console.log('addManyNumbers(2,5,7)', addManyNumbers([2,5,7])) // mit einem Array funktioniert es schon nicht
// SPREAD OPERATOR ...
let myArr = [1, 2];
// wiedergibt die Einträge aus einem Array (einer Struktur) einzeln
let myArr2 = [...myArr, 3, 4];
console.log('myArr2', myArr2);
