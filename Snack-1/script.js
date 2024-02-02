// Snack 1:
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


let word1 = prompt ("Inserisci la prima parola");

let word2 = prompt ("Inserisci la segunda parola");

const shorterWord = (word1.length <= word2.length) ? word1 : word2;
console.log ("La parola più corta è " + shorterWord);

const longerWord = (word1.length > word2.length) ? word1 : word2;
console.log("La parola più lunga è " + longerWord);

