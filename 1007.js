let input = require('fs').readFileSync('E:/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let d = Number(lines[3]);
let DIFERENCA = (a*b)-(c*d);
console.log("DIFERENCA =",DIFERENCA);