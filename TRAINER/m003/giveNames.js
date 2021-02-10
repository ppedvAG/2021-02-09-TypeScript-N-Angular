"use strict";
// Funktion, die als Argumente beliebige Anzahl von HTMLElements oder NodeListOf<HTMLElement> annimmt
// von den bekommenen Argumenten gibt die Funktion die Property 'nodeName' zurück, verpackt in ein Array
// objekt.nodeName
// myInputVariable.nodeName
// Nutzen von dieser anzulegenden Funktion ist, 
// dass man durch sie immer ein Array von nodeNames bekommt, 
// egal, mit welcher Traversing-Methode die (HTML)Elemente selektiert hat.
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
// todo #5
