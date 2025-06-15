/*
Antipodal Average

Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2. 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.
*/

//! Inserción de Array
let arrayAntipodal = [1,2,3,5,22,6];

//! Eliminación del elemento impar central
let largoSubArray =0;
if (arrayAntipodal.length%2>0){
    arrayAntipodal.splice((arrayAntipodal.length/2)-.5,1);
    };
largoSubArray= (arrayAntipodal.length/2)

//! Función de promedio antipodal

function funcionAntipodal(arrayToAvg) {

    //*Declaración del primer subArray para promediar
    const subArray1 = [];
    for (let i = 0; i <=largoSubArray-1; i++) {
        subArray1.push(arrayAntipodal[i]);
    }
    
    //*Declaración de segundo subArray para promediar
    const subArray2 = [];
    for (let i = largoSubArray; i<=largoSubArray*2-1; i++) {
        subArray2.unshift(arrayAntipodal[i]);
    }

    //*Promedio
    const promedios=[];
    for (let i = 0;i<=largoSubArray-1; i++) {
        promedios.push(
        (subArray1[i]+subArray2[i])/2);
    }
    return promedios
}

console.log(`El promedio antipodal del array indicado es ${funcionAntipodal(arrayAntipodal)}`)
