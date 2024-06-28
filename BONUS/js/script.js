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
function emailVeify() {
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
            logged.classList.remove('d-none')
            document.getElementById('log-in-card').classList.add('d-none')
        } else {
            console.log("Accesso Negato")
            notRegistered.innerHTML=`<p class="d-block text-center text-danger">l'email utilizzata non risulta registrata</p>`
        }
    }

}

// CLICK ED ENTER COME TRIGGER PER L'INPUT DELL'EMAIL
logInButton.addEventListener('click', emailVeify)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        emailVeify();
    }
});


// RECUPERO IL PULSANTE PER INIZIARE A "GIOCARE"
const startPlay = document.getElementById('diceStart');

// VARIABILE DI CONTROLLO O FLAG 
let gamePlayed = false;

// DETERMINO CHE GLI EVENTI AVVENGANO AL CLICK DEL PULSANTE
function play(){
    // DEFINISCO LE VARIABILI PER IL LANCIO DEI DADI
    let userDice = Math.floor((Math.random() * 6 + 1));
    let computerDice = Math.floor((Math.random() * 6 + 1));
    let userResultIcon = '<i class="fa-solid fa-dice"></i>'
    let computerResultIcon
    // RENDO VISIBILI LE ICONE 
    document.getElementById('iconsGame').classList.remove('d-none')
    // DEFINISCO LE CONDIZIONE PER L'OUTPUT DEL DADO CON IL NUMERO GIUSTO USER
    if (userDice === 1) {
        userResultIcon = '<i class="fa-solid fa-dice-one"></i>'
        document.getElementById('userResults').innerHTML=`${userResultIcon}`
    } else if (userDice === 2) {
        userResultIcon = '<i class="fa-solid fa-dice-two"></i>'
        document.getElementById('userResults').innerHTML=`${userResultIcon}`

    } else if (userDice === 3) {
        userResultIcon = '<i class="fa-solid fa-dice-three"></i>'
        document.getElementById('userResults').innerHTML=`${userResultIcon}`

    } else if (userDice === 4) {
        userResultIcon = '<i class="fa-solid fa-dice-four"></i>'
        document.getElementById('userResults').innerHTML=`${userResultIcon}`

    } else if (userDice === 5) {
        userResultIcon = '<i class="fa-solid fa-dice-five"></i>'
        document.getElementById('userResults').innerHTML=`${userResultIcon}`

    } else {
        userResultIcon = '<i class="fa-solid fa-dice-six"></i>'
        document.getElementById('userResults').innerHTML=`${userResultIcon}`

    }

    // DEFINISCO LE CONDIZIONE PER L'OUTPUT DEL DADO CON IL NUMERO GIUSTO USER
    if (computerDice === 1) {
        computerResultIcon = '<i class="fa-solid fa-dice-one"></i>'
        document.getElementById('computerResults').innerHTML=`${computerResultIcon}`
    } else if (computerDice === 2) {
        computerResultIcon = '<i class="fa-solid fa-dice-two"></i>'
        document.getElementById('computerResults').innerHTML=`${computerResultIcon}`

    } else if (computerDice === 3) {
        computerResultIcon = '<i class="fa-solid fa-dice-three"></i>'
        document.getElementById('computerResults').innerHTML=`${computerResultIcon}`

    } else if (computerDice === 4) {
        computerResultIcon = '<i class="fa-solid fa-dice-four"></i>'
        document.getElementById('computerResults').innerHTML=`${computerResultIcon}`

    } else if (computerDice === 5) {
        computerResultIcon = '<i class="fa-solid fa-dice-five"></i>'
        document.getElementById('computerResults').innerHTML=`${computerResultIcon}`

    } else {
        computerResultIcon = '<i class="fa-solid fa-dice-six"></i>'
        document.getElementById('computerResults').innerHTML=`${computerResultIcon}`

    }
    

    // DEFINISCO LE CONDIZIONI DI VITTORIA O DI SCONFITTA
    if (userDice > computerDice){
        console.log('Hai vinto')
        document.getElementById('gameOutput').innerHTML=`<p class="text-center">Il tuo punteggio è ${userDice} quell del computer è ${computerDice}. <span class="text-success">COMPLIMENTI HAI VINTO</span></p>
                        <h3 class="text-center mt-5">GIUBILO-GAUDIO-FESTA</h3>`
    } else if (userDice < computerDice){
        console.log('Hai perso')
        document.getElementById('gameOutput').innerHTML=`<p class="text-center">Il tuo punteggio è ${userDice} quell del computer è ${computerDice}. <span class="text-danger">hai perso...</span></p>`
    } else {
        console.log('Pareggio')
        document.getElementById('gameOutput').innerHTML=`<p class="text-center">Il tuo punteggio di entrambi è ${userDice}. <span class="text-warning">Avete Pareggiato</span></p>`
    }



    // CAMBIO IL TESTO NELL BOTTONE DOPO IL PRIMO LANCIO
    if(gamePlayed === true){
        startPlay.textContent = 'Gioca ancora';
    } else {
        // non capisco come posso triggerarlo subito dopo il primo lancio
        gamePlayed = true 
    }
}

// CLICK ED ENTER COME TRIGGER PER GIOCARE
startPlay.addEventListener('click', play)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        play();
    }
});
