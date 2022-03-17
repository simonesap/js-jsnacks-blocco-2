// Snack1 Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


do  {
    numero_inserito = parseInt(prompt("Inserisci un numero: ")); // Prompt permette d'inserire un valore di tipo stringa, in questo caso lo usiamo per inserire il numero
    numero=parseInt(numero_inserito); // La funzione parseInt converte il numero di tipo stringa in tipo intero
    if (numero%2==0){
               soluzione="Il numero è pari";
               document.getElementById('box').innerHTML = `${soluzione}`
    } else {
              soluzione="Il numero è dispari";
              document.getElementById('box').innerHTML = `${soluzione}`
    }
    
    alert(soluzione); // Visualizza se il numero è pari oppure dispari
    risposta= prompt("Vuoi continuare?","si/no"); // Chiedere all'utente se vuole inserire un altro numero
    risposta=risposta.toLowerCase();

} while(risposta=="si");



// ALTRO METODO 
// let numeroDaInserire = parseInt(prompt('inserisci un numero'));

// // Capire quando un numero è pari o dispari

// if (numeroDaIns % 2 == 0) {
//     console.log (numeroDaInserire);
// } else {
//     numeroDaInserire += 1;
//     console.log(numeroDaInserire);
// }
