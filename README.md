Esercizio di oggi:
nome repo: js-mail-dadi
<!-- ESERCIZIO 1 MAIL-->
Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Vietato utilizzare la funzione includes
<!-- ESERCIZIO 2 DADI-->
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

SCOMPOSIZIONE IN SOTTOPROBLEMI
<!-- MAIL -->
>Preparo una struttura nell'html da cui andare ad attingere nel js
>Preparo un'array
    >Nell'array definisco n email
>Recupero il pulsante (per verificare se l'email è presente nell'array) dal DOM
    >>Associo il pulsante recuperato nel DOM ad una funzione con un eventlistener
        >>>Dentro la funzione recupero il valore inserito nel campo input 
        >>>Definisco una variabile di controllo con un booleano 
        >>>Definisco un ciclo for per confrontare se uno degli elementi dell'array al valore inserito nell'input 
        >>>Definisco una condizione if per verificare se il valore che sto ciclando dell'array corrisponde al valore inserito nell'input
        >>>Preparo le condizioni per i diversi messaggi di output 
<!-- DADI -->
>Preparo una struttura nell'html da cui andare ad attingere nel js
>Recupero il pulsante (per il lancio dei dadi) dal DOM
>Definisco una variabile per il lancio dei dadi dell'utente
    >>Tramite math.random faccio generare un numero casuale
    >>Tramite math.floor, arrotondo il numero
>Definisco una variabile per il lancio dei dadi del computer
    >>Tramite math.random faccio generare un numero casuale
    >>Tramite math.floor, arrotondo il numero
>Determino le condizioni if, per verificare quale numero è maggiore 
    >>Determino che se il numero generato per l'utente è maggiore di quello generato per il computer, allora l'utente ha vinto 
    >>Determino che se il numero generato per il computer è maggiore di quello generato per l'utente, allora il computer ha vinto 
    >>Determino che se i numeri sono uguali, è pareggio 
     