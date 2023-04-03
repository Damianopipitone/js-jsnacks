/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
Javascript - JS*/

let word1 = prompt("Inserisci una parola...");

let word2 = prompt("Inserisci un'altra parola...");

if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
};