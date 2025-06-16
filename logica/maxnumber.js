/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
*/

// 1,2,3,4,5,6,7,8,9,10
// 99,85,41,62,31,79,35,64,21


let arrayContent = prompt("Introduce 10 números separados por coma para encontrar el valor máximo");
let arrayMaxNum = arrayContent.split(',')

const intArray=[];
for(i=0;i<=9;i++){
    intArray.push(parseInt(arrayMaxNum[i]));
};

intArray.sort((a,b)=>b-a);

alert(`El número más grande entre los valores proporcionados es el ${intArray.shift()}`);

