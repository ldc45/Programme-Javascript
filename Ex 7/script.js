let characters = /[!@#\$%\^\&*\)\(+=._-]/;
let lowercase = /[a-z]/;
let uppercase = /[A-Z]/;
let lettersDigits = /[a-zA-Z0-9]/;
let minLength = 8;



function passwordStrength() {

    let passwordIndication = document.getElementById('passwordIndication');
    let passwordInput = document.getElementById('passwordInput').value;
    let compteur = 0;
    if (passwordInput.match(lettersDigits)) {
        compteur = compteur + 1;
        if (passwordInput.match(lowercase)) {
            compteur = compteur + 1;
        } if (passwordInput.match(uppercase)) {
            compteur = compteur + 1;
        } if (passwordInput.match(characters)) {
            compteur = compteur + 1;
        } if (passwordInput.length < minLength) {
            compteur = compteur - 1;
        }
    }
    console.log(compteur);

    switch (compteur) {
        case 4:
            passwordIndication.innerHTML = '<p class="text-success">Mot de passe Très sécurisé</p>'
            break;
        case 3:
            passwordIndication.innerHTML = '<p class="text-primary">Mot de passe sécurisé</p>'

            break;
        case 2:
            passwordIndication.innerHTML = '<p class="text-warning">Mot de passe moyen</p>'
            break;
        case 1:
        case 0:
            passwordIndication.innerHTML = '<p class="text-danger">Mot de passe dangeureux</p>'
            break;
    }
}


passwordInput.addEventListener("keyup", passwordStrength);

