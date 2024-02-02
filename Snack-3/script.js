// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

let oddNumbers = [];

for (let i = 0; i < 6; i++) {
    let insertedNumber = +prompt ("Inserisci un numero");


    // verifico se l'input è 'odd' e lo aggiunge all'array
    if (!isNaN(insertedNumber) && insertedNumber % 2 !== 0) {
        oddNumbers.push(insertedNumber);
    }
}

    let printResult = "I numeri dispari inseriti dall'utente sono: ";


    // ciclo che costruisce la stringa dei numeri 'odd'
    for (let i= 0; i < oddNumbers.length; i++) {
    printResult += oddNumbers[i] ;

    // qui aggiungiamo una virgola e uno spazio tra i numeri a meno che non sia l'ultimo numero
    if (i < oddNumbers.length -1) {
        printResult += ", " ;
    }

}

document.getElementById("result").innerText = printResult;

