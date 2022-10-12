/* Un magasin de reprographie facture :

 0,10 € les dix premières photocopies.

 0,09 € les vingt suivantes.

 Et 0,08 € au-delà.

 Écrivez un programme en JavaScript  qui demande à l'utilisateur le nombre de photocopies qu'il souhaite effectuer et qui affiche par la suite la facture correspondante.
*/

const nombreDeCopiesInput = document.getElementById('nbcopie');
const pallierA = 0.10
const pallierB = 0.09
const pallierC = 0.08
const button = document.getElementById('button');
const prix = document.getElementById('prix');

let nombreDeCopies;
let result;

function facture() {

    nombreDeCopies = parseFloat(nombreDeCopiesInput.value);
    if (nombreDeCopies <= 10) {
        result = nombreDeCopies * pallierA
        prix.innerText = `${result.toFixed(2)}eur`
    } else if (nombreDeCopies > 10 && nombreDeCopies < 20) {
        result = (nombreDeCopies - 10) * 0.09 + 1
        prix.innerText = `${result.toFixed(2)}eur`
    } else {
        result = (nombreDeCopies - 30) * 0.08 + 2.8
        prix.innerText = `${result.toFixed(2)}eur`
    }
};

button.addEventListener('click', facture);

