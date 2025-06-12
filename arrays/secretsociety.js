/*
Secret Society
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.

1. Recibimos un conjunto de arrays con nombres
    1.1 Estos nombres empiezan en mayúscula
    1.2 Ordenar el array en orden alfabético
2. Inicializar una variable para guardar las iniciales
3. Utilizar un ciclo para recorrer el array
4. Obtener la primera letra de cada nombre utilizando la notación de corchetes
5. Pegar la inicial de cada nombre para 

n. Retornar el nombre de la sociedad secreta basado en la primera letra de cada nombre
*/

const secretName=function(namesArray){
    let societyName="";
    const sortedNames=namesArray.toSorted();
    sortedNames.forEach((name)=>societyName=societyName+name[0]);
    return societyName;
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));

