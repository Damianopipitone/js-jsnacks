let x = [];

for (let i = 0; i <= 6; i ++) {
    
    let choseNumber = prompt("Inserisci un numero...");

    let number = parseInt(choseNumber);
    
    if (number % 2 != 0) {
        x.push(number);
    }
    
};

console.log(x);