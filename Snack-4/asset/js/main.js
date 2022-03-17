// Snack4 (Bonus) Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const array1 = [15,20,58,60,87,90];
const array2 = [17,7];

let arrayMaggiore;
let arrayMinore;

if(array1.length == array2.length) {
    console.log('Sono uguali');
} else if (array1.length > array2.length)  {
    arrayMaggiore = array1;
    arrayMinore = array2;
} else {
    arrayMaggiore = array2;
    arrayMinore = array1;
}

let differenzaLunghezza = arrayMaggiore.length - arrayMinore.length;

for (let i = 0; i < differenzaLunghezza; i++) {
    const numRandom = Math.floor(Math.random()*10);
    arrayMinore.push(numRandom);
    console.log(arrayMinore);
    console.log(arrayMaggiore);
}