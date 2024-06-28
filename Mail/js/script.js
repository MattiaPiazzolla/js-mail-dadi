// DEFINISCO L'ARRAI CON UNA LISTA DI EMAIL INVENTATE
let emailList = ["mattia@boolean.com", "doubleorquits@luckydice.com", "diceshake@boolean.com", "dicerhythm@boolean.com", "diceroll@boolean.com", "highroller@boolean.com", "dadifunziona@boolean.com", "dadisvelati@boolean.com", "dadi@boolean.com"];
// RECUPERO IL PULSANTE DI ACCESSO
const logInButton = document.getElementById('logIn');
// DETERMINO LE ISTRUZIONI PER UN EVENTO DEL PULSANTE
logInButton.addEventListener('click', function(){
    // RECUPERO IL VALORE ALL'INTERNO DEL CAMPO INPUT
    let emailInput = document.getElementById('emailInput').value.toLocaleLowerCase();
    console.log(emailInput)
    // VARIABILE DI CONTROLLO O FLAG 
    let registeredUser = false; //non capisco bene questo meccaniscmo...
    // CICLO L'ARRAI PER CONFRONTARE I SUOI ELEMENTI CON L'INPUT
    for (let i = 0; i < emailList.length; i++){
        
    }

})
