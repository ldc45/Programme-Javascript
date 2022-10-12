const ageInput = document.getElementById("age");
const sexInput = document.getElementById("sexe");
const button = document.getElementById("buton");
const message = document.getElementById("text");

let age;
let sex;

function Validate(){
    age = parseInt(ageInput.value);
    sex = sexInput.value;

if((age>20 && sex =="H") || (sex = "F" && age>=18 && age<=35)){
    message.innerText = "Vous êtes imposable !"
}else{
    alert("vous n'êtes pas imposable")
}

};

button.addEventListener('click', Validate);