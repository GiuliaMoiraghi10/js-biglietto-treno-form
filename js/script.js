console.log("js Biglietto Treno")

//impedire alla pagina di inviare i dati
const myForm = document.getElementById('myForm');
//console.log(formElement);

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

})

// Chiedere Nome e Cognome
const nameSurname = document.getElementById("nameSurname").value
console.log (nameSurname)

// Chiedere Km
const kmUsers = document.getElementById("kmUsers").value
console.log (kmUsers)

// Calcolare costo biglietto in base ai km
const priceTicket = kmUsers * 0.21
console.log (priceTicket)

// Ciclo IF ELSE per calcolare sconto in base all'età



