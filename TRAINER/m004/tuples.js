"use strict";
// Initialisieren von Tuples ...
// Ändern von Tuples ...
// Verwendung von Tuples
// z.B. zum Abspeichern von Koordinaten
let coord1 = [123, 43];
let coord2 = [43, 32];
let coord3 = [8, 1];
let coord4 = [345, 150];
let coord5 = [255, 55];
let myPolygon = document.createElement('polygon');
let htmlStringForPolygon = `
<polygon points="
${coord1}
${coord2}
${coord3}
${coord4}
${coord5}
" style="fill:lime; stroke:purple; stroke-width: 2" />
`;
let mySVG = document.getElementById('svgId');
mySVG.innerHTML = htmlStringForPolygon;
