// Calcola la somma e la media dei primi 10 numeri.


function averageSum() {
    let numbers = [];

    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }

    // Calcola la somma
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Calcola la media
    let average = sum / numbers.length;

    // Stampa la somma e la media
    document.getElementById("result").innerText = "Somma dei primi 10 numeri: " + sum + "\nMedia dei primi 10 numeri: " + average;
}

averageSum();