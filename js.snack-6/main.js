let random = Math.floor(Math.random()*10 + 1);

console.log(random);

let choseNumber = prompt ("Inserisci un numero....");

let number = parseInt(choseNumber);

if (random == number) {
    console.log("Hai vinto!");
} else if (number > 10) {
    console.log("Il numero deve essere compreso tra 1 e 10!");
} else {
    console.log("Hai perso!");
};