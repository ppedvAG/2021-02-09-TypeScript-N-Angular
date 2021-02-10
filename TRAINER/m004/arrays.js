"use strict";
// Literale 
var myArray1 = [];
// Konstruktoren ... weggelassen
// Eine Struktur zu einem Array umwandeln
console.log('this.Array()', this.Array()); // siehe Anzahl von Methoden von einem Array
var myHTMLColl = document.getElementsByTagName('li');
console.log('myHTMLColl', myHTMLColl);
// let myArrFromHTMLColl = Array.from(myHTMLColl) // für 'es2015' or later
// Hinweis: es2015 = ES6
// let myArrFromHTMLColl = [...myHTMLColl] // Type 'HTMLCollectionOf<HTMLLIElement>' is not an array type.
// let myArrFromHTMLColl = Array.slice.call(myHTMLColl) // Property 'slice' does not exist on type 'ArrayConstructor'.ts(2339)
var myArrFromHTMLColl = [].slice.call(myHTMLColl); // bis 'es2015'
// andere Collections werden ähnlich zu einem Array umgewandelt
// Destructuring bei Arrays
var myTupel = [1, 2]; // Tupel
var _a = [1, 2], a = _a[0], b = _a[1]; // Destructuring
console.log('a', a);
console.log('b', b);
var c = [1, 2][0]; //
