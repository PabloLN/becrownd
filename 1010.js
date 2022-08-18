let input = require('fs').readFileSync('C:/Users/pln/OneDrive/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let l1 = lines[0].split(' ');
let l2 = lines[1].split(' ');
let numpeca1 = parseInt(l1[1]);
let numpeca2 = parseInt(l2[1]);
let valorunit1 = parseFloat(l1[2]);
let valorunit2 = parseFloat(l2[2]);
let total = (numpeca1 * valorunit1) + (numpeca2 * valorunit2);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);