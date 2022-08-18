let input = require('fs').readFileSync('C:/Users/pln/OneDrive/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let distancia = Number(lines[0]);
let combustivel = parseFloat(lines[1]).toFixed(1);
let mediaconsumo = distancia / combustivel;
console.log(mediaconsumo.toFixed(3),"km/l");