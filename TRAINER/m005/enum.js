"use strict";
var lengthUnit;
(function (lengthUnit) {
    lengthUnit[lengthUnit["cm"] = 0] = "cm";
    lengthUnit[lengthUnit["meter"] = 1] = "meter";
    lengthUnit[lengthUnit["kilometer"] = 2] = "kilometer";
    lengthUnit[lengthUnit["meile"] = 3] = "meile";
})(lengthUnit || (lengthUnit = {})); // die werte sind string-Konstanten
// Unterschied bei enum ist, dass ich die möglichen Werte durch Indizes ansprechen kann
// und dass ich die Werte von diesem Datentyp nur direkt von dem enum selbst bekommen kann
var schiffGeschwEinheit = lengthUnit.meile; // Syntax wei bei Objekten
// let autoGeschwEinheit: lengthUnit = lengthUnit[2] // Fehler Type 'string' is not assignable to type 'lengthUnit'.ts(2322)
// let autoGeschwEinheit: lengthUnit = 'kilometer' // Fehler Type '"kilometer"' is not assignable to type 'lengthUnit'.ts(2322)
console.log('lengthUnit[0]', lengthUnit[0]); // cm
console.log('lengthUnit["meile"]', lengthUnit['meile']); // 3
// Hinweis: diese Syntax kommt nicht von Arrays, sondern von Objekten:
console.log('window["Window"]', window["Window"]);
// wann sind verschiedene Indizes nötig?
// z.B. wenn man an der Summe von Indizes rausfinden möchte, welche Elemente aus dem enum eingesetzt sind
var cuttlery;
(function (cuttlery) {
    cuttlery[cuttlery["fork"] = 1] = "fork";
    cuttlery[cuttlery["knife"] = 10] = "knife";
    cuttlery[cuttlery["spoon"] = 100] = "spoon";
})(cuttlery || (cuttlery = {}));
