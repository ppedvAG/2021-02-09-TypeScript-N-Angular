/* 
Übung Rechner

2 inputs für die Eingabe, 
Control(s) (z.B. 4 buttons) für math. ops, 
1 input/ output als ausgabe
*/

let zahl1: number 
let zahl2: number
let op: string

let myBtnIstGleich = document.getElementById('btnIstGleich')

myBtnIstGleich!.addEventListener('click', berechne);


function berechne(): void {
    zahl1 = Number((document.getElementById('zahl1inp') as HTMLInputElement).value)
    zahl2 = Number((document.getElementById('zahl2inp') as HTMLInputElement).value)
    op = (document.getElementById('operations') as HTMLSelectElement).value
    let result: number = NaN;
    switch (op) {
        case '+':
            result = zahl1 + zahl2;
            break;
        case '-':
            result = zahl1 - zahl2;
            break;
        case '*':
            result = zahl1 * zahl2;
            break;
        case '/':
            result = zahl1 / zahl2;
            break;
        default:
            console.log('smth went wrong');
            break;
    }
    (<HTMLInputElement>document.getElementById("resultat")!).value = String(result);
}