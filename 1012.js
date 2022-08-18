let input = require('fs').readFileSync('C:/Users/pln/OneDrive/TDS2/LabProg/entrada.txt', 'utf8');
let lines = input.split('\n');

let array = lines[0].split(' ');
let a = parseFloat(array[0]);
let b = parseFloat(array[1]);
let c = parseFloat(array[2]);
const pi = 3.14159;
let areaTrianguloRetangulo = 0;
let areaCirculo = 0;
let areaTrapezio = 0;
let areaQuadrado = 0;
let areaRetangulo = 0;

areaTrianguloRetangulo = (a*c)/2;
areaCirculo = pi * (c*c);
areaTrapezio = ((a+b) * c) / 2;
areaQuadrado = b*b;
areaRetangulo = a*b;

console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);