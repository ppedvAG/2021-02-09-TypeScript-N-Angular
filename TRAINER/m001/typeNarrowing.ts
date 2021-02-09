// eine andere Option die größeren Datentypen auf den gewünschten Datentyp anzupassen wären die Typeguards

let myHTMLElement3 = document.getElementById('divId2')

if (myHTMLElement3 instanceof HTMLDivElement) {
    myHTMLElement3.textContent = 'Inhalt für divId2'
}

// Hinweis: mit if (myHTMLElement3 === HTMLDivElement) wird nicht funktionieren