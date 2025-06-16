/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

let numFactorial = 7

function multiplicacionFactorial(number) {
    let resultado = 1
    for (let i = number; i>0; i--) {
        resultado*=i;
    }
    return resultado;
}
console.log(multiplicacionFactorial(numFactorial))