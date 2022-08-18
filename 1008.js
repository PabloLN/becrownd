let input = require('fs').readFileSync('E:/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let number = Number(lines[0]);
let workedhours = Number(lines[1]);
let salarybyhours = Number(lines[2]).toFixed(2);
let salary = workedhours * salarybyhours;
console.log("NUMBER =",number);
console.log("SALARY = U$",salary.toFixed(2));