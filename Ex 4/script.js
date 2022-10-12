//On initialise le montant du ticket 
const Amount = document.getElementById('Amount');
let ticketAmount = Math.floor(Math.random() * 101);
Amount.innerText = ticketAmount

//On récupère la somme à payer du client
const customerSumInput = document.getElementById('customerSum');

let customerSum;

//On pointe sur les id's des balises pour afficher le nombre de billet
const billof10 = document.getElementById('billet10');
const billof5 = document.getElementById('billet5');
const coins = document.getElementById('pieces1');

const button = document.getElementById('button');

let solde = document.getElementById('monney');



function getChange() {

    customerSum = parseInt(customerSumInput.value);
    change = customerSum - ticketAmount;
    solde.innerText = `${change} EUR`;
    
    let nombreBillet5;
    let nombreBillet10;
    let nombrepiece1;

    if (customerSum < ticketAmount){
        solde.innerText=(`Merci de faire l\'appoint de ${ticketAmount - customerSum} euros.`);
    } else if (customerSum === ticketAmount || change == 0) {
        solde.innerText=("Somme réglée");
    }

    while (change >= 10){
        nombreBillet10 = Math.floor(change / 10); 
        change = change - (nombreBillet10 * 10);
        billof10.innerText = nombreBillet10;
    }
    
     while(change >=5 && change <= 10){
        nombreBillet5 = Math.floor(change / 5);
        change = change - (nombreBillet5 * 5);
        billof5.innerText = nombreBillet5
     }

    while(change < 5 && change >0){
        nombrepiece1 = Math.floor(change / 1);
        change = change - (nombrepiece1 * 1);
        coins.innerText = nombrepiece1
     }
     
    //On vide le champ de saisie
    customerSumInput.value = "";
   

}




button.addEventListener('click', getChange);



//A revoir
// var utc = new Date();
// var n = utc.toLocaleTimeString();
// console.log(n)

