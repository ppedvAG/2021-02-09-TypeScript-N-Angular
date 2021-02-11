// eine andere Option die größeren Datentypen auf den gewünschten Datentyp anzupassen wären die Typeguards

let myHTMLElement3 = document.getElementById('divId2')

if (myHTMLElement3 instanceof HTMLDivElement) {
    myHTMLElement3.textContent = 'Inhalt für divId2'
}

// Hinweis: mit if (myHTMLElement3 === HTMLDivElement) wird nicht funktionieren

// UNTERSCHIED ZWISCHEN == UND === 
let suit: string = ''
let suit1 : 'hearts' = 'hearts' 
let suit2: string | number = 'hearts'
let suit3: String = 'hearts'
enum test {hearts}

if (suit == suit1) { // bei kompatiblen datentypen können wir mit == nur die Werte vergleichen
    console.log('condition war true')
}

if  (suit === suit1) { // mit === werden Werte und Datentypen verglichen, bei kompatiblen datentypen kommt true raus
}

if  (suit === suit2) { // mit === werden Werte und Datentypen verglichen, bei kompatiblen datentypen kommt true raus
}

if  (suit === suit3) { // mit === werden Werte und Datentypen verglichen, bei kompatiblen datentypen kommt true raus
}

// if  (suit === test.hearts) { // Fehler: This condition will always return 'false' since the types 'string' and 'test' have no overlap.ts(2367)
// }

if  (suit === test[0]) { // Fehler: This condition will always return 'false' since the types 'string' and 'test' have no overlap.ts(2367)
}