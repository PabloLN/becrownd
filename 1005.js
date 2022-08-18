let input = require('fs').readFileSync('E:/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines[0]).toFixed(1);
let b = parseFloat(lines[1]).toFixed(1);
let media = ((a * 3.5)+(b * 7.5)) / 11;
console.log("MEDIA =",media.toFixed(5));