//! User profile
//? Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

//* 1. Username, edad y una lista de películas favoritas
//* 2. Mostrar en consola la información del usuario, donde cada película debe tener un mensaje como este.
//* 3. Ocupando un array, vamos a almacenar las películas del usuario
//n. Mostrar en consola la información del usuario, donde cada película debe tener un mensaje como este "The film [] is one of my favorites"
let counter = 0;

const username=prompt("Introduce tu nombre de usuario:");
const age=prompt("Ahora ingresa tu edad:");
const favoriteMovies=[];
for (let i=1; i<=5; i++) {
    favoriteMovies.push(prompt(`Ingresa la película número ${i}`));    //! Backtics para ingreso de variables en cadenas
}
console.log(favoriteMovies);
console.log(`Hola, soy ${username}. Tengo ${age} años y mis películas favoritas son:`);


while(counter<favoriteMovies.length){
    console.log(`Mi película favorita número ${counter+1} es: ${favoriteMovies[counter]}`);
    counter++;
}
