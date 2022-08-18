let input = require('fs').readFileSync('E:/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let a = parseFloat(lines[0]).toFixed(1);
let b = parseFloat(lines[1]).toFixed(1);
let c = parseFloat(lines[2]).toFixed(1);
let media = ((a * 2)+(b * 3)+(c * 5)) / 10;
console.log("MEDIA =",media.toFixed(1));