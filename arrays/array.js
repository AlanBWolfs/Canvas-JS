/*
Sum of Resistors in Series
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.

1. Un array de resistencias
2. Usando math.abs, obtener el valor absoluto de los elementos del array
3. Reduce, usar ciclos para hacer la suma
4. Retornar un mensaje del tipo "15 ohms"
n. Suma de las resistencias en serie 
*/

function sumOfResistors(resistorsArray){
    const resistorAbs=resistorsArray.map((resistor)=>Math.abs(resistor));
    const totalResistance=resistorAbs.reduce((total,current)=>total+current);
    return `La resistencia total es de ${totalResistance} ohms`
}

console.log(sumOfResistors([-1,5,-6,3,-9]));
console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));