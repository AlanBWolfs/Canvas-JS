/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

let palindromo = prompt("Introduce una frase para verificar si es un palíndromo")

function verificarPalindromo(palindrome) {
    
let palindromoA = palindrome.toUpperCase()
const palindromoB = palindromoA.replace(/[^\w\s`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]\s+/gi,'');
let palindromoC = palindromoB.replace(/\s+/g, '');
console.log(palindromoC);

let palindromoArray = Array.from(palindromoC);
const arrayComparacion = [];
const compResult = [];
for (let i = 0; i <=palindromoC.length-1; i++) {
    arrayComparacion.unshift(palindromoArray[i])
    }
for (let i = 0; i <=palindromoC.length-1; i++) {
    if (arrayComparacion[i]===palindromoArray[i]) {
        compResult.push(1)
    }else{compResult.push(0)
    }
    }
console.log(compResult.reduce((a,b)=>a+b));
console.log(palindrome.length);
let alerta=compResult.reduce((a,b)=>a+b);
if (alerta/palindromoC.length===1) {
    alert("La frase que ingraste es un palíndromo")
}else{alert("La frase que ingraste no es un palíndromo")}
console.log(compResult)
console.log(palindrome.length)
}
console.log(verificarPalindromo(palindromo));


