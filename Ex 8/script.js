// On pointe sur les éléments  qu'on souhaite utiliser
const objectTitleOutput = document.getElementById('objectTitle');
const imageOutput = document.getElementById('image');
const buttonKey = document.getElementById('button');
const playerInput = document.getElementById('playerInput');
const trialCount = document.getElementById('trialCount');
const messageOutput = document.getElementById('message');

//Initialisation de la variable du joueur afin de récupérer la valeur
let player;

//Création des arrays image et objet chaque objets corresponds à son image car ils ont le même index
let object = ["Chaise Gaming", "Costume Halloween", "Grill", "Guitare", "Sac à main"];
let imgObject = ['chaise.png', 'costume-haloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png',];

//Initialisation de l'index aléatoire
let randomIndex = Math.floor(Math.random() * object.length);

//Répartition du même l'index(randomIndex) pour les arrays
objectTitleOutput.innerHTML = `<p class="bg-warning fs-3 m-0">${object[randomIndex]}</p>`;
imageOutput.innerHTML = `<img class=" w-100" src=/img/${imgObject[randomIndex]}></img>`;


// Initialisation  et affectation de la variable du nombre d'essais      
let trial = 0;

// Initialisation de la variable du juste prix aléatoire
const randomPrice = Math.floor(Math.random() * (101 - 30)) + 30;
console.log(randomPrice);


function matchPrice() {

  let player = parseInt(playerInput.value);

  if (trial == 10) {
    trialCount.innerText = trial
    messageOutput.innerHTML = `<p class="text-danger fw-bold fs-6">Fin du game!</p>`
    console.log("Fin du game!");
    setTimeout(function () {
      window.location.reload();
    }, 3000);

  } else if (player > randomPrice) {

    trial++
    messageOutput.innerHTML = `<p class="text-danger fw-bold fs-6">C\'est moins !</p><audio  autoplay src="/sons/faux.mp3"></audio>`
    console.log('C\'est moins')
    console.log(trial);
    trialCount.innerText = trial

  } else if (player < randomPrice) {

    trial++
    messageOutput.innerHTML = `<p class="text-success fw-bold fs-6">C\'est plus</p><audio  autoplay src="/sons/faux.mp3"></audio>`
    console.log('C\'est plus')
    console.log(trial);
    trialCount.innerText = trial

  } else if (player == randomPrice) {
    messageOutput.innerHTML = `<p class="text-success fw-bold fs-6">Vous avez Gagnez !!</p><audio  autoplay src="/sons/correct.mp3"></audio>`
    console.log('C\'est gagné')
    //Fonction confetti active via cdn
    confetti();

    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
  //On vide le champ de saisie
  playerInput.value = "";
}

//Ecouteur d'évènement 
buttonKey.addEventListener('click', matchPrice);



