let x = [];

for (let i = 0; i <= 6; i ++) {
    
    let chosenNumber = prompt("Inserisci un numero...");

    let number = parseInt(chosenNumber);
    
    if (number % 2 != 0) {
        x.push(number);
    }
    
};

console.log(x);