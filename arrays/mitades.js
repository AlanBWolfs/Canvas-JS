/* 
Number divided into halves
Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
*/

const numeroADividir = [982]
const partes = 5
function arrayCreate(a,b){
    const elementos=numeroADividir[0]/partes;
    const resultado=[""];
    for (let i = 1; i<=elementos; i++) {
        resultado.push(partes);
        }
    resultado.shift();
    return resultado
}
let residuo=(numeroADividir%partes)
console.log(arrayCreate(numeroADividir,partes),`El número ${numeroADividir} se divide en ${(arrayCreate(numeroADividir,partes).length)} partes iguales de ${partes} y un residuo de ${residuo}`);

