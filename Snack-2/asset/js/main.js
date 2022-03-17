// Snack2 Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// let nomi = [{key : 'Peppe', key : 'Pippo', key : 'Pluto', key : 'Pietro', key : 'Pascal'}];
// let cognomi = ['Rossi', value : 'Bossi', value : 'Massi', value : 'Meneghetti', value :'Santucci'}];

// let dict = {};

// for (i=0; i<= nomi.length && cognomi.length; i++) {
//     dict = nomi[i].key + cognomi[i].value;
//      document.getElementById('box').innerHTML += `${Math.floor(Math.random(dict))}`;
//      console.log(dict)
// }



let nomi = ['Peppe','Pippo','Pluto','Pietro','Pascal'];
let cognomi = ['Rossi', 'Bossi','Massi','Meneghetti','Santucci'];

let invitati = [];

for(let i=0; i < nomi.length; i++) {
    const numeroRandomNomi = Math.floor(Math.random()*(nomi.length));
    console.log('Numeri random nomi: ',numeroRandomNomi);
    const numeroRandomCognomi = Math.floor(Math.random()*(nomi.length));
    console.log('Numeri random cognomi: ',numeroRandomCognomi);

    // Con questa variabile otteniamo l'unione di un nome random con un cognome random
    const nomeCognome = `${nomi[numeroRandomNomi]} ${cognomi[ numeroRandomCognomi]}`
    console.log(nomeCognome);
    invitati.push(nomeCognome);
}
console.log(invitati);

// nomi.splice(x,1);
// cognomi.splice(y,1);