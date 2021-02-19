"use strict";
// Es gibt ja mehrere Funktionen, mit denen man DOM-Elemente (HTML-Elemente) ansprechen kann.
// Aber diese Funktionen liefern verschiedene Datenstrukturen zurück.
// Ihre Aufgabe ist, eine Funktion zu definieren, die als Argumente verschiedene Datenstrukturen oder nur ein einzelnes Element annimmt.
// Objekte HTMLElement und Element haben beide die Eigenschaft 'nodeName'.
// Ziel ist es, von den bekommenen HTMLElement- oder Element-Objekten diese Eigenschaft auszulesen und deren Wert in ein Array zu verpacken und dieses zurückgeben.
// Erweitern Sie die Definition dieser Funktion, damit sie der Beschreibung entspricht
// function giveNodeNames(*argumentenListe*): Array<string> {
//     return *arrayOfNodeNames*
// }
function giveNames(htmlColl, nodesList, ...elementsOrNodes) {
    let namesArray = [];
    if (nodesList) {
        for (let index = 0; index < nodesList.length; index++) {
            namesArray.push(nodesList[index].nodeName);
        }
    }
    if (elementsOrNodes) {
        for (let index = 0; index < elementsOrNodes.length; index++) {
            namesArray.push(elementsOrNodes[index].nodeName);
        }
    }
    if (htmlColl) {
        for (let index = 0; index < htmlColl.length; index++) {
            namesArray.push(htmlColl[index].nodeName);
        }
    }
    return namesArray;
}
console.log('giveNames(document.getElementById("inp1Id")!) :>> ', giveNames(undefined, undefined, document.getElementById("inp1Id")));
console.log('giveNames(document.getElementsByName("inpName")) :>> ', giveNames(undefined, document.getElementsByName("inpName")));
console.log('object', giveNames(document.getElementsByClassName("extraBig")));
console.log('object', giveNames(document.getElementsByTagName("p")));
// todo #5 issue verschoben nach PPKURS-TS
// Die Übung braucht mehr Themen um gelöst zu werden, als bisher behandelt. Sie muss ersetzt werden.
