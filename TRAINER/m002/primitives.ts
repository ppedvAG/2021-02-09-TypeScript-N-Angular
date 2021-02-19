// BESONDERHEITEN VON CONDITIONS IN JS UND TS

let stringVar = 'wert von string'

if (stringVar)
    console.log('die Bedingung war true')

if (1)
    console.log('die Bedingung 2 war true')



// BESONDERHEIT VON ZWEIFACHEM VERGLEICH IN TS UND JS
let myString: string = '4'
let myNumber = 4
// if (myString == myNumber) // in JS werden damit nur die Werte verglichen aber keine Datentypen, in TS funktioniert das nicht




// TS-SPEZIFISCHEN PRIMITIVEN

// === void ===

// let myVoid: void
// console.log('typeof myVoid', typeof myVoid) // undefined

// myVoid = void; // Zuweisen von dem Wert 'void' ist nicht möglich

// if (typeof myVoid === typeof void) // Schlüsselwort 'void' ist nur bei den Funktionsdefinitionen verwendbar
//     console.log('true block')

function myVoidFct (): void {
    console.log('myVoidFct works')
}

myVoidFct()


// === any ===

let myAny: any
myAny = 4
console.log('typeof myAny', typeof myAny) // number
myAny = '4' // Typechecking ist bei any ausgeschaltet: any akzeptiert alle Werte
console.log('typeof myAny', typeof myAny) // string, also any-Variable ist flexibel, Datentyp wird ermittelt bei jeder neuen Zuweisung

myString = 'wert2 von string'
myString = myAny // Typechecking ist bei any ausgeschaltet: andere Datentypen akzeptieren die Werte von einer any-Variable
// todo #4 https://github.com/ppedvAG/2021-02-09-TypeScript-N-Angular/issues/4
// aber der Wert von der Variable links vom Zuweisungoperator wird angepasst!

myAny = 5
myString = myAny
console.log('myString', myString) //number
console.log('typeof myString', typeof myString) //number
myString = ' text nach einer Number-Zuweisung' // myString funktioniert jetzt auch wie any


// === unknown ===

let myUnknown: unknown

// gleich wie bei any:
myUnknown = 3
console.log('typeof myUnknown', typeof myUnknown) // number
myUnknown = false
console.log('typeof myUnknown', typeof myUnknown) // boolean


myUnknown = '  text  '
myAny = '  text  '

console.log('myAny.trim()', myAny.trim()) // type checking ist komplett aus
// console.log('myUnknown.trim()', myUnknown.trim()) // Object is of type 'unknown'.ts(2571)

let myString2: string = 'wert'
// Type-Checking bei Zuweisungen ist an
// myString2 = myUnknown // Type 'unknown' is not assignable to type 'string'.ts(2322)

// myString = myUnknown


// === never ===

let myEmptyArray: any[] = []
console.log('myEmptyArray[0]', myEmptyArray[0]) // Compiler zwingt, den Datentyp anzugeben

console.log('typeof [][0]', typeof [][0]) // undefined

// hier sehen wir, dass der Ausdruck [][0] den Datentyp never hat:
function checkNever (): never {
    return [][0]
}

function neverEndingFct (arg1: any): never {
    if (typeof arg1 != typeof Number) {
        throw new Error('wrong type')        
    }    
    throw new Error("function didn't work")
    console.log('test')
}