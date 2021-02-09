"use strict";
// Aufgabe:
// bei der gleichen Eingabe in 2 Inputfeldern wird entweder ein Button aktiv oder kommt eine Meldung, dass die Eingaben übereinstimmen
// let myBtnCheck = document.getElementById('')
var myInp1 = document.getElementById('inp1');
var myInp2 = document.getElementById('inp2');
var myBtnOk = document.getElementById('btnOk');
var myPAusgabe = document.getElementById('PAusgabe');
// todo
// myInp1?.addEventListener('change', handleChange);
myInp1.addEventListener('change', handleChange);
myInp2.addEventListener('change', handleChange);
function handleChange() {
    console.log('handleChange triggert');
    if (myInp1.value === myInp2.value) {
        myPAusgabe.textContent = 'Die Eingaben stimmen überein';
        myBtnOk.disabled = false;
    }
}
