"use strict";
// Holen Sie ein Todo von jsonplaceholder.typicode.com 
// und geben Sie es im Browser (nicht in der Konsole) aus
let text = document.getElementById('output');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    //   .then(json => console.log(json))
    .then(deserialisedObject => text.innerText = deserialisedObject.id + ' ' + deserialisedObject.title);
