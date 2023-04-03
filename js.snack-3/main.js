/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Javascript - JS*/

let sum = 0;

for (let i = 0; i < 10; i++) {
    
    let chosenNumber = prompt("Inserisci un numero...");
    
    let number = parseInt(chosenNumber);
    
    console.log(number);

    sum = sum + number; 
};

console.log(sum);