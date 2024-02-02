// Snack 5:
// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.


function main() {

    let userInput = prompt("Inserisci un numero:");

    
    if (!isNaN(userInput) && userInput > 0) {

        // Calcola (e stampa) il cubo dei primi N numeri
        let resultString = "Il cubo dei primi " + userInput + " numeri:\n";

        for (let i = 1; i <= userInput; i++) {

            // Calcola il cubo
            let cube = i ** 3; 
            resultString += "Numero: " + i + ", Cubo: " + cube + "\n";
        }

        document.getElementById("result").innerText = resultString;
    } else {

        alert("Inserisci un numero valido e maggiore di zero.");
    }
}

main();