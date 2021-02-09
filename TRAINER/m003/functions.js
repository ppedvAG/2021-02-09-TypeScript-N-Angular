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
    var myThis = globalThis;
    console.log('this', this); // undefined
    console.log('globalThis', globalThis); // Window
}
classicFct();
// === Variante 2 ===
// anonyme Funktion
// === Variante 3 ===
var arrowFct = function () {
    // console.log('this', this) // The containing arrow function captures the global value of 'this'.ts(7041)
};
var myClass = /** @class */ (function () {
    function myClass() {
        var _this = this;
        this.arrowFct2 = function () {
            console.log('this', _this); // Pfeilfunktionen sind innerhalb von Klassen besonders nützlich
        };
        this.classicFct2 = function () {
            console.log('this', this);
        };
    }
    return myClass;
}());
var myClassInstance = new myClass();
myClassInstance.arrowFct2(); // myClass
myClassInstance.classicFct2(); // myClass
// DATENTYP 'FUNCTION'
var anyFunction = function () { };
var anyFunction2 = function () { };
var anyFunction3 = function () {
    return {};
};
// GENERISCHE FUNKTIONEN
var myStringArray = ['a', 'b', 'c'];
var myNumberArray = [1, 2, 3];
function makeBigger(arr) {
    var biggerArr = arr.concat(arr);
    return biggerArr;
}
console.log('makeBigger(myStringArray)', makeBigger(myStringArray));
console.log('makeBigger(myNumberArray)', makeBigger(myNumberArray));
// funktioniert, aber man verliert die Kontrolle über die Datentypen
function makeBiggerG(arr) {
    var biggerArr = arr.concat(arr);
    return biggerArr;
}
console.log('makeBiggerG(myStringArray)', makeBiggerG(myStringArray));
console.log('makeBiggerG(myNumberArray)', makeBiggerG(myNumberArray));
// UNBESTIMMTE ANZAHL VON ARGUMENTEN
function addManyNumbers() {
    var argsList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argsList[_i] = arguments[_i];
    }
    var summe = 0;
    for (var _a = 0, argsList_1 = argsList; _a < argsList_1.length; _a++) {
        var iterator = argsList_1[_a];
        summe += iterator;
    }
    return summe;
}
console.log('addManyNumbers(2,5,7)', addManyNumbers(2, 5, 7));
// console.log('addManyNumbers(2,5,7)', addManyNumbers([2,5,7])) // mit einem Array funktioniert es schon nicht
// SPREAD OPERATOR ...
var myArr = [1, 2];
// wiedergibt die Einträge aus einem Array (einer Struktur) einzeln
var myArr2 = myArr.concat([3, 4]);
console.log('myArr2', myArr2);
