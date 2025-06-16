/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

let palindromo = prompt("Introduce una frase para verificar si es un palíndromo")

function verificarPalindromo(palindrome) {
    
let palindromoA = palindrome.toUpperCase()
palindromoA=palindromoA.normalize("NFD")                     // Separa las letras de sus tildes
palindromoA=palindromoA.replace(/[\u0300-\u036f]/g, "")     // Elimina los signos diacríticos
palindromoA=palindromoA.replace(/[^a-zA-Z]/g, "")

let palindromoArray = Array.from(palindromoA);
const arrayComparacion = [];
const compResult = [];
for (let i = 0; i <=palindromoA.length-1; i++) {
    arrayComparacion.unshift(palindromoArray[i])
    }
for (let i = 0; i <=palindromoA.length-1; i++) {
    if (arrayComparacion[i]===palindromoArray[i]) {
        compResult.push(1)
    }else{compResult.push(0)
    }
    }
let alerta=compResult.reduce((a,b)=>a+b);
if (alerta/palindromoA.length===1) {
    alert("La frase que ingraste es un palíndromo")
}else{alert("La frase que ingraste no es un palíndromo")}
}
console.log(verificarPalindromo(palindromo));


