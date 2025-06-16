/*
Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/

let temporizador=prompt("Introduce Los minutos y segundos que deseas que dure tu alarma, sepáralos con un ':'");

    const minutosySegundos = temporizador.split(':');

    const timeAlarm=[];
    for (let i = 0; i <=1; i++) {
        timeAlarm.push(parseInt(minutosySegundos[i]));
    }
    
    const minutos = minutosySegundos[0];
    const segundos = minutosySegundos[1];
    
    setTimeout(()=> {
        alert("Tiempo finalizado");},
    (minutos*60000)+(segundos*1000))


