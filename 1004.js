let input = require('fs').readFileSync('E:/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let PROD = a * b;
console.log("PROD =",PROD);