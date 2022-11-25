
// All Variables

// input mot de passe
let mdp = document.getElementById("inputPassword");
// message mot de passe
let messageMDP = document.querySelector('.messageMDP');
//input vérif mot de passe
let mdpVerify = document.getElementById("inputPasswordVerify");
// input mail
let mail = document.getElementById('inputEmail');
// message sous mail
let message = document.querySelector('.messageMail');
// input identifiant
let id = document.getElementById('inputId');
// message sous identifiant
let messageId = document.querySelector('.messageId');




// Example starter JavaScript for disabling form submissions if there are invalid fields


(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            console.log(mdp.value);
            console.log(mdpVerify.value);

            if (!form.checkValidity()) {
                event.stopPropagation()
            };

            form.classList.add('was-validated');

            verifyMDP();
            regex();

        }, false)
    })
})()

//   régler le problème des bordures rouges quand mot de passe différent

function verifyMDP() {
    if(mdp.value !== mdpVerify.value) {
        console.log("Les mots de passes ne sont pas identiques !");
        mdp.classList.add('is-invalid');
        mdpVerify.classList.add('is-invalid');
    }
    else if (mdp.value === mdpVerify.value) {
        console.log("on est bon !");
        mdp.classList.remove('is-invalid');
        mdpVerify.classList.remove('is-invalid');
    }
}

// pop up focus


mail.addEventListener('focusin', function(){
    message.classList.remove('d-none');
})
mail.addEventListener('focusout', function(){
    message.classList.add('d-none');
})



id.addEventListener('focusin', function(){
    messageId.classList.remove('d-none');
})
id.addEventListener('focusout', function(){
    messageId.classList.add('d-none');
})



mdp.addEventListener('focusin', function(){
    messageMDP.classList.remove('d-none');
})
mdp.addEventListener('focusout', function(){
    messageMDP.classList.add('d-none');
})


// regex input
let ecrit = document.getElementsByClassName('write')[0];

let caractRSpe = /[&é"'(è_çà)+$*#=]/;
let minuscules = /[a-z]/;
let majuscules = /[A-Z]/;
let chiffres = /[0-9]/;

let missingRegex = ["Il manque une minuscule ", "Il manque une majuscule ", "Il manque un chiffre ", "Il manque un caractère spécial"]
let allRegex = [minuscules, majuscules, chiffres, caractRSpe];
let infoSup = ["de 'a' à 'z'", "de A à Z", "de 0 à 9", "Caractères autorisés : " + caractRSpe];

function regex(){
    if(!ecrit.classList.contains("d-none")){
        ecrit.classList.add("d-none");
        ecrit.innerHTML = "";
    }
    for(i=0; i<missingRegex.length; i++) {
        if(!mdp.value.match(allRegex[i])) {
            ecrit.classList.remove("d-none");
            ecrit.innerHTML +=  missingRegex[i] + ' : ' + infoSup[i] + '<br>';
            
        }
    }
    
}


