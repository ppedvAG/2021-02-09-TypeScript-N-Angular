"use strict";
let myHTMLElement = document.getElementById('divId1');
// Document.getElementById(elementId: string): HTMLElement | null
console.log('myHTMLElement', myHTMLElement);
// Versuch 1
// myHTMLElement.textContent = 'Inhalt für divId1' //Object is possibly 'null'
// Versuch 2
// myHTMLElement?.textContent = 'Inhalt für divId1' // The left-hand side of an assignment expression may not be an optional property access.ts(2779)
// todo: Fragezeichen wird automatisch
// von der Erweiterung TSLint hinzugefügt
// Versuch 3
let myHTMLElement2 = myHTMLElement;
// mit dem Ausrufezeichen wird die null-Option weggenommen
myHTMLElement2.textContent = 'Inhalt für divId1';
