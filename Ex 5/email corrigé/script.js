
let mail = document.getElementById("email")




function validation() {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let  text = document.getElementById("text");
    
    const pattern = /^([a-zA-Z0-9_.-]+@[\da-zA-z.-]+.[a-zA-Z ]{2,3})$/ ;


    if (email.match(pattern)) {

        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML="Ton email est valide"
        text.style.color="#00ff00"

    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML="Ton email est invalide"
        text.style.color="#ff0000"
    }

}




mail.addEventListener("keydown", validation);
