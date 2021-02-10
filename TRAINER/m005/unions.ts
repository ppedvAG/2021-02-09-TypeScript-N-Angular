let datum: string | Date
// wenn die Variable links von dem Zuweisungsoperator steht, dann hat sie den Typ string | Date
// wenn die Variable rechts von dem Zuweisungsoperator steht oder in den Ausdrücken genutzt wird,
// dann hat sie den Typ, welcher von dem konkreten Wert der Variable vorgegeben wird

datum = new Date()
console.log('datum', datum)
console.log('typeof datum', typeof datum) // object

datum = '2021-01-31'
console.log('datum', datum)
console.log('typeof datum', typeof datum) // string



// Wenn der Wert von der Variable in zwei Formaten (string und Datum) akzeptiert wird
// aber nur als Datum abgespeichert werden muss, dann:
if(datum.length) { // Prüfung, ob string. Strings haben die Prop length, Date nicht
    console.log('bin in if')
    datum = new Date(datum);
    console.log('datum', datum)
    console.log('typeof datum', typeof datum);
}
// if(datum.length) {} // Date hat keine Prop length




