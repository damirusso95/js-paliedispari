// pari e dispari consegna:
// 1) L’utente sceglie su cosa puntare: pari o dispari.
// 2) L'utente inserisce un numero da 1 a 5.
// 3) Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).
// 4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// 5) Dichiariamo chi ha vinto.
// BONUS: scriviamo sul dom


// chiediamo all'utente su cosa puntare
let sceltaUtente = prompt("scegli pari o dispari")
console.log(sceltaUtente);
// chiedo all'utente un numero compreso tra 1 e 5
let sceltaUtenteNumero = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(sceltaUtenteNumero);



// funzione numero random per pc
let numeroComputer = getRandomNumber(1, 5);
console.log(numeroComputer);

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// somma risultati
let risultatoSomma = sceltaUtenteNumero + numeroComputer;
console.log("il risultato è:" + risultatoSomma);


let risultato = pariOrDispari(risultatoSomma);

function pariOrDispari( risultatoSomma ) {
    
    	
	//controllo che "numero", cioè il valore fornito sia pari o dispari
	if( risultatoSomma % 2 == 0 ) {
		 var testo = "vince pari";
         console.log(testo);
		        
	}
   	
	else{
         var testo = "vince dispari";
         console.log(testo);

    };
 
}




