"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NS1 = void 0;
let var1 = 2;
var var2 = 3;
var NS1;
(function (NS1) {
    let variable1 = 3;
    NS1.variable2 = 5;
})(NS1 = exports.NS1 || (exports.NS1 = {}));
let variable1 = 3; // die zwei Variablen sind in verschiedene Scopes
// let variable4 = import variable2 from 'NS1';
