"use strict";
// selektieren Sie die Elemente in der HTML Datei, die ein ß haben
// ß muss durch ss ersetzt werden
// die Sammlung von Elemente muss mit for-each durchiteriert werden
// denkt an die string-Methoden wie find() replaceAt(), replace()
// Versuch, alle HTML tags von Document zu selektieren
// NR 1
// document.getElementsByTagName('*')
// NR2
// let rootNode = document.getRootNode();
// console.log('rootNode :>> ', rootNode);
// let children = rootNode.childNodes
// console.log('children :>> ', children);
// let allTags = document.querySelector('*') // (gibt eine DOM-Struktur zurück)
var allTagsHTMLColl = document.getElementsByTagName('*'); // gibt eine HTMLCollection zurück
console.log('allTags', allTagsHTMLColl);
var allTagsArr = [].slice.call(allTagsHTMLColl); // bis 'es2015'
var myStringß = 'ßßßßß';
// let newString = myStringß.replace(/ß/i, 'ss')
var newString = myStringß.replace(/ß/g, 'ss');
// let newString = myStringß.replace('ß', 'ss')
console.log('myStringß', myStringß);
console.log('newString', newString);
allTagsArr.forEach(function (element) {
    var text = element.innerText;
    console.log('text :>> ', text);
    text = text.replace('ß', 'ss');
    element.innerText = text;
});
console.log('allTagsArr', allTagsArr);
// todo #6
// forEach() ändert das Array nicht, an welchem es ausgeführt wurde
//     console.log('arr :>> ', arr);
//     let arrayFromStreetsColl3 = arrayFromStreetsColl2.map(element => {
//         let text = element.innerText
//         console.log('text :>> ', text);
//         return text.replace('ß', 'ss')
//     })
//     console.log('arrayFromStreetsColl3 :>> ', arrayFromStreetsColl3);
//     // return arrayFromStreetsColl2
//     return arrayFromStreetsColl3
// }
