// esercizio palindromi consrgna:
// Sono accettate solo soluzioni che fanno uso del ciclo.
// 1)Chiedere all’utente di inserire una parola.
// 2)Creare una funzione per capire se la parola inserita è palindroma.
//   Bonus: soluzioni più "comode"

// chiedo all'utente di inserire una parola utilizzando una variabile
// let parolaUtente = prompt("scrivi una parola");
// console.log(parolaUtente);

// let carattere;
// let parolaInversa = '';

// let i = parolaUtente.length - 1;

// while (i >= 0) {
//     carattere = parolaUtente[i];
//     parolaInversa += carattere;
//     console.log(carattere);
//     i--;
//   }

//   console.log(parolaInversa);

// if (parolaUtente === parolaInversa) {
//     console.log('La parola è palindroma');
// } else {
//     console.log('La parola non è palindroma');
// }

let parolaUtente = prompt("scrivi una parola");
// const parola ='otto';
let parolaInversa = invertiParola(parolaUtente);

if (parolaUtente === parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

function invertiParola(str){
  let parolaInversa = '';

  let i = str.length - 1;

  while (i >= 0) {
    parolaInversa += str[i];
    i--;
  }

  return parolaInversa;
}



