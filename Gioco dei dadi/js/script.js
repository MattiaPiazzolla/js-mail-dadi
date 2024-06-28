const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// DEFINISCO L'ARRAI CON UNA LISTA DI EMAIL INVENTATE
let emailList = ["mattia@boolean.com", "doubleorquits@luckydice.com", "diceshake@boolean.com", "dicerhythm@boolean.com", "diceroll@boolean.com", "highroller@boolean.com", "dadifunziona@boolean.com", "dadisvelati@boolean.com", "dadi@boolean.com"];
// RECUPERO IL PULSANTE DI ACCESSO
const logInButton = document.getElementById('logIn');
// RECUPERO DIV PER MESSAGGII DI OUTPUT
let logged = document.getElementById('welcomeMsg')
let notLogged = document.getElementById('notRegistered')
// DETERMINO LE ISTRUZIONI PER UN EVENTO DEL PULSANTE
logInButton.addEventListener('click', function(){
    // RECUPERO IL VALORE ALL'INTERNO DEL CAMPO INPUT
    let emailInput = document.getElementById('emailInput').value.toLocaleLowerCase();
    // VARIABILE DI CONTROLLO O FLAG 
    let registeredUser = false; //non capisco bene questo meccaniscmo...
    // CICLO L'ARRAI PER CONFRONTARE I SUOI ELEMENTI CON L'INPUT
    for (let i = 0; i < emailList.length; i++){
        // CONDIZIONE IN CUI IL VALORE DI INPUT COMBACIA CON UN ELEMENT DELL'ARRAY
        if (emailList[i].toLocaleLowerCase() === emailInput){
            registeredUser = true;
        }
        // MESSAGGIO DI OUTPUT
        if (registeredUser === true){
            console.log("Accesso Eseguito")
            logged.innerHTML=`<h1 class="text-center mt-5 fs-custom">Benvenuto/a</h1>`
            document.getElementById('log-in-card').classList.add('d-none')
        } else {
            console.log("Accesso Negato")
            notRegistered.innerHTML=`<p class="d-block text-center text-danger">l'email utilizzata non risulta registrata</p>`
        }
    }

})

