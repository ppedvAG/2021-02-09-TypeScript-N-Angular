// let var1 = 3; 
// Fehler: Cannot redeclare block-scoped variable 'var1'.ts(2451) 
// namespaces.ts(1, 5): 'var1' was also declared here.
// Diese Restriction kommt wegen dem Schlüsselwort let. Aber zeigt immernoch, dass wir uns im gleichen Scope mit der anderen Datei befinden.
var var2 = 5;
// im aktuellen Scope gibt es zwei Variablen var2, das ruft aber keinen Feher auf
// todo #8

var var3 = 6;
{
    var3 = 7
}
console.log('var3', var3) // 7


let var4 = 8
{
    var4 = 9
}
console.log('var4', var4) // 9

// todo #9

import { NS1 } from "./namespaces.ts";