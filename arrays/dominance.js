/*
Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*/
//! Verificación de domunancia de un array

const dominanceArray=[-1, -3, -5, 4, 6767,-332,-34,12,23,8];
function verificarDominancia(a){
    const numerosNegativos=a.filter(a=>a<0)
    const elementosNegativos=numerosNegativos.length
    const dominancia=dominanceArray.length-numerosNegativos.length
    if (dominancia>elementosNegativos){
        comparacion="positiva"} else if(
        dominancia==elementosNegativos){
        comparacion="neutra"} else {
        comparacion="negativa";}
    return comparacion;
}
console.log(`La dominancia del array ${dominanceArray} es ${verificarDominancia(dominanceArray)}`)