console.log('JS OK!');

/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// 1. Chiedo all'utente il numero dei km da percorrere
// 2. Chiedo all'utente l'età del passeggero
// 3. Calcolo il prezzo al netto dello sconto
// 4. Applico lo sconto

// ** Chiedo all'utente il numero dei km da percorrere
const kmOfTravel = parseInt(prompt("Inserisci il numero di chilometri da compiere: ", '50'));
console.log(kmOfTravel);

// **Recupero elemento in pagina
const cost = document.getElementById('cost');

// ** Chiedo all'utente l'età del passeggero
const userAge = parseInt(prompt("Inserisci età del passeggero:",'25'));
console.log(userAge);

// ** Calcolo il prezzo iniziale
const priceInitial = kmOfTravel * 0.21; 
console.log(priceInitial);

// ** Messaggio di ritorno
const message = ("Il costo del biglietto è di euro ")

//** Se l'utente ha meno di 18 anni applico uno sconto 
if (userAge < 18){
    const priceForMinors = (priceInitial -  (priceInitial * 0.20)).toFixed(2);
    console.log(message + priceForMinors);
    cost.innerHTML = (message + priceForMinors);
} else if (userAge > 65){
    const priceForSeniors = (priceInitial -  (priceInitial * 0.60)).toFixed(2);
    console.log(message + priceForSeniors);
    cost.innerHTML = (message + priceForseniors);
} else { 
    console.log(message + (priceInitial).toFixed(2));
    cost.innerHTML = (message + (priceInitial).toFixed(2));
}