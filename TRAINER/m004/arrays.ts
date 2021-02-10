// Literale 

let myArray1 = []

// Konstruktoren ... weggelassen


// Eine Struktur zu einem Array umwandeln

console.log('this.Array()', this.Array()) // siehe Anzahl von Methoden von einem Array

let myHTMLColl = document.getElementsByTagName('li')
console.log('myHTMLColl', myHTMLColl)


// let myArrFromHTMLColl = Array.from(myHTMLColl) // für 'es2015' or later
// Hinweis: es2015 = ES6
// let myArrFromHTMLColl = [...myHTMLColl] // Type 'HTMLCollectionOf<HTMLLIElement>' is not an array type.

// let myArrFromHTMLColl = Array.slice.call(myHTMLColl) // Property 'slice' does not exist on type 'ArrayConstructor'.ts(2339)
let myArrFromHTMLColl = [].slice.call(myHTMLColl) // bis 'es2015'



// andere Collections werden ähnlich zu einem Array umgewandelt



// Destructuring bei Arrays

let myTupel: [number, number] = [1, 2] // Tupel

let [a, b] = [1, 2] // Destructuring
console.log('a', a)
console.log('b', b)

let c = [1, 2][0] //