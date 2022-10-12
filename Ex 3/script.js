/*Écrire un programme en JavaScript qui va demander à un utilisateur une heure , puis les minutes et enfin les secondes.

Votre programme affichera l'heure qu'il sera à la seconde suivante.

Nous partons du principe que l'heure saisie par l'utilisateur est valide !
*/

const heureInput = document.getElementById("heure");
const minutesInput = document.getElementById("minutes");
const secondesInput = document.getElementById("secondes");
const buton = document.getElementById("button");
const horaire = document.getElementById("horaire");

let heure;
let minutes;
let secondes ;

// Start
function getHours() {

heure = parseInt(heureInput.value);
minutes = parseInt(minutesInput.value);
secondes = parseInt(secondesInput.value);
secondes++

if (secondes == 60) { 
  secondes = 00
  minutes++
}
if (minutes == 60) { 
  minutes = 00
  heure++
}
if (heure == 24) { 
  heure = 00
}


horaire.innerText = `Dans une seconde il sera : ${heure} h ${minutes} et ${secondes} secondes`
}
// End

buton.addEventListener('click', getHours);