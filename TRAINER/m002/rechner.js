"use strict";
/*
Übung Rechner

2 inputs für die Eingabe,
Control(s) (z.B. 4 buttons) für math. ops,
1 input/ output als ausgabe
*/
let zahl1;
let zahl2;
let op;
let myBtnIstGleich = document.getElementById('btnIstGleich');
myBtnIstGleich.addEventListener('click', berechne);
function berechne() {
    zahl1 = Number(document.getElementById('zahl1inp').value);
    zahl2 = Number(document.getElementById('zahl2inp').value);
    op = document.getElementById('operations').value;
    let result = NaN;
    switch (op) {
        case '+':
            result = zahl1 + zahl2;
            break;
        case '-':
            result = zahl1 - zahl2;
            break;
        case '*':
            result = zahl1 * zahl2;
            break;
        case '/':
            result = zahl1 / zahl2;
            break;
        default:
            console.log('smth went wrong');
            break;
    }
    document.getElementById("resultat").value = String(result);
}
