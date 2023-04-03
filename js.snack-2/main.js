let word1 = prompt("Inserisci una parola...");

let word2 = prompt("Inserisci un'altra parola...");

if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
};