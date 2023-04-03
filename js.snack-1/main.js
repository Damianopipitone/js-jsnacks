let chosenNumber1 = prompt("Inserisci un numero...");

let chosenNumber2 = prompt("Inserisci un altro numero...");

let number1 = parseInt (chosenNumber1);

let number2 = parseInt (chosenNumber2);

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2){
    console.log(number2);
} else if (isNaN(number1) && isNaN(number2)) {
    console.log("Errore: non è stato inserito alcuna cifra numerica");
} else {
    console.log("I due numeri coincidono");
};