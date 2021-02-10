"use strict";
let normalString = 'wert von einer string variable';
normalString = 'ein anderer Wert';
let cmVariable;
cmVariable = 'cm';
// cmVariable = 'km' // Fehler: Type '"km"' is not assignable to type '"cm"'.ts(2322)
// als Literaltype sind auch komplexe Datentypen möglich
let arr;
// arr = new Array(1, 3) // Fehler: Type 'number[]' is not assignable to type '[]'.
// Target allows only 0 element(s) but source may have more.ts(2322)
let arr2;
arr2 = new Array(2, 3); // keine Fehlermeldung
// oder
let arr3;
//...
