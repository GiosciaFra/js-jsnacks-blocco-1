// Snack 4:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.



    let inputNumber = prompt("Inserisci un numero di 4 cifre:");

    // Verifichiamo che l'input sia un numero di 4 cifre
    if (!isNaN(inputNumber) && inputNumber.length === 4) {
        let sum = 0;

        // Sommiamo le cifre 
        for (let i = 0; i < inputNumber.length; i++) {
            // Aggiungiamo le cifre alla somma
            sum += +inputNumber[i];
        }

       
        document.getElementById("result").innerText = "La somma delle cifre è: " + sum;
    } else {
        
        alert("Inserisci un numero di 4 cifre valido.");
    }