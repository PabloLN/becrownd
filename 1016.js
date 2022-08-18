let input = require('fs').readFileSync('C:/Users/pln/OneDrive/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let distancia = parseInt(lines[0]);
let tempo = distancia * 2;
console.log(tempo,"minutos");