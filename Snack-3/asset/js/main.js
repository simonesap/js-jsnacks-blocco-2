// Snack3 Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const arrayNumeri = [2, 3, 5, 8, 18, 21];
console.log(arrayNumeri);
let sum = 0;

for (let i=0; i < arrayNumeri.length; i++) {
    if (i % 2 != 0) {
        // Se il numero è dispari
        sum += arrayNumeri[i];
    }
}
console.log(sum);

// Metodo smart
for(i=1; i < arrayNumeri; i = i + 2) {
    sum += arrayNumeri[i];
}
console.log(sum);