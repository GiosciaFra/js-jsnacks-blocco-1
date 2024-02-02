// Snack 2:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


let sum = 0;

for (let i = 0; i < 10; i++) {

    let numberInserted = +prompt ("Inserisci un numero");

    if (!isNaN(numberInserted)) {
        sum += numberInserted;
    } else {
        alert("Sono ammessi SOLO caratteri numerici, riprova!");
        // decremento l'indice affinchè si possa fare un nuovo tentativo nel caso si inserisse un carattere non valido
        i--;
    }
}

document.getElementById("result").innerText = "La somma dei numeri inseriti è " + sum;