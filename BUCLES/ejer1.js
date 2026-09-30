/*
Suma condicional de múltiplos: 
Pide un número N y suma solo los múltiplos de 
3 o 5 hasta N. Muestra la suma y los 
múltiplos encontrados. 
*/
let n = 20;
let suma = 0;
let multiplos = [];
for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        multiplos.push(i);
        suma += i;
    }
}

console.log("Los múltiplos encontados: ", multiplos);
console.log("La suma es: ", suma);