/* Reto de Programación: FizzBuzz
Descripción:
Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:
Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no es múltiplo de ninguno, imprime el número tal cual */
/* 
1. Crear un bucle que recorra 100 números
2. Si el número es múltiplo de 3, imprime "Fizz"
    2.1 Ocupar la exresión número %3
    2.2 Es verdadero si el módulo es = 0
3. Si el número es múltiplo de 5, imprime "Buzz"
    3.1 Ocupar la expresión % 5
    3.2 Es verdadero si el módulo es = 0
4. Si el número es múltiplo de 3 y 5, imprime "FizzBuzz"
    4.1 Ocupar la expresión %3 y módulo %5
    4.2 Es verdadero solo si ambas expresiones son = 0
5. En caso de no ser múltiplo de ninguno, imprime únicamente el número */

let counter = 1;
do {
    if (counter%3===0&&counter%5===0) {
        console.log(`El número ${counter} es Fizzbuzz`);
    }else if(counter%5===0){
        console.log(`El número ${counter} es Buzz`);
    }else if(counter%3===0){
        console.log(`El número ${counter} es Fizz`);
    }else{
        console.log(counter);
    }
    counter++;
}while(counter<=100)

//! Firma de la función
const FizzBuzz=(counterNumber)=>{
    let counter = 1;
    do {
    if (counter%3===0&&counter%5===0) {
        console.log(`El número ${counter} es Fizzbuzz`);
    }else if(counter%5===0){
        console.log(`El número ${counter} es Buzz`);
    }else if(counter%3===0){
        console.log(`El número ${counter} es Fizz`);
    }else{
        console.log(counter);
    }
    counter++;
}while(counter<=counterNumber)
};

console.log("50 veces");
FizzBuzz(50);
console.log("200 veces");
FizzBuzz(200);