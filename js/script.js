console.log("js Biglietto Treno")

//impedire alla pagina di inviare i dati
const myForm = document.getElementById('myForm');
//console.log(formElement);

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

})

// Chiedere Nome e Cognome
const nameSurname = document.getElementById("nameSurname")
console.log (nameSurname)

// Chiedere Km
const kmUsers = document.getElementById("kmUsers")
console.log (kmUsers)

// Chiedere età
const ageUsers = document.getElementById("ageUsers")
console.log (ageUsers)

// Calcolare costo biglietto in base ai km
const priceTicket = kmUsers * 0.21
console.log (priceTicket)
// Ciclo IF ELSE per calcolare sconto in base all'età


