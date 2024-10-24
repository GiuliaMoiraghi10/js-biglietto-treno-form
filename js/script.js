console.log("js Biglietto Treno")

//impedire alla pagina di inviare i dati
const myForm = document.getElementById('myForm');
//console.log(formElement);

myForm.addEventListener('submit', function (event) {
    event.preventDefault();


// Chiedere Nome e Cognome
const nameSurname = document.getElementById("nameSurname").value
console.log (nameSurname)

// Chiedere Km
const kmUsers = document.getElementById("kmUsers").value
console.log (kmUsers)

// Età
const ageUsers = document.getElementById("eta").value
console.log (ageUsers)

//dichiaro prezzo per km
const priceKm = 0.21;

//CALCOLO PREZZO INTERO DEL BIGLIETTO
let ticketPrice = (kmUsers * priceKm);
console.log(ticketPrice)

//dichiaro variabili per sconto
let sconto
let biglietto

// Ciclo IF ELSE per calcolare sconto in base all'età
if (ageUsers === "2"){
    biglietto = "Biglietto per minorenne"
    sconto = 0.20
    console.log ("Sconto del 20%: " + sconto)
} else if (ageUsers === "3"){
    biglietto = "Biglietto per over 65"
    sconto = 0.40
    console.log ("Sconto del 40%: " + sconto)
} else {
    biglietto = "Biglietto standard"
    sconto = 0
    console.log ("Sconto 0%: " + sconto)
}

// Calcolo sconto su prezzo intero
let finalPrice = ticketPrice - (ticketPrice * sconto)

let finalPriceFixed = finalPrice.toFixed(2);
    console.log("prezzo finale: " + finalPriceFixed);

})