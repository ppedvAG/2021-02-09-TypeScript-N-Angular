"use strict";
// Initialisieren von Tuples ...
// Ändern von Tuples ...
// Verwendung von Tuples
// z.B. zum Abspeichern von Koordinaten
var coord1 = [123, 43];
var coord2 = [43, 32];
var coord3 = [8, 1];
var coord4 = [345, 150];
var coord5 = [255, 55];
var myPolygon = document.createElement('polygon');
var htmlStringForPolygon = "\n<polygon points=\"\n" + coord1 + "\n" + coord2 + "\n" + coord3 + "\n" + coord4 + "\n" + coord5 + "\n\" style=\"fill:lime; stroke:purple; stroke-width: 2\" />\n";
var mySVG = document.getElementById('svgId');
mySVG.innerHTML = htmlStringForPolygon;
