"use strict";
// Aufgabe:
// bei der gleichen Eingabe in 2 Inputfeldern wird entweder ein Button aktiv oder kommt eine Meldung, dass die Eingaben übereinstimmen
// let myBtnCheck = document.getElementById('')
let myInp1 = document.getElementById('inp1');
let myInp2 = document.getElementById('inp2');
let myBtnOk = document.getElementById('btnOk');
let myPAusgabe = document.getElementById('PAusgabe');
// todo #3
myInp1 === null || myInp1 === void 0 ? void 0 : myInp1.addEventListener('change', handleChange);
// myInp1!.addEventListener('change', handleChange)
myInp2.addEventListener('change', handleChange);
function handleChange() {
    console.log('handleChange triggert');
    if (myInp1.value === myInp2.value) {
        myPAusgabe.textContent = 'Die Eingaben stimmen überein';
        myBtnOk.disabled = false;
    }
}
