// Ciclo For

// Crea due array che hanno un numero di elementi diversi
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

// Array con 5 elementi
let arrayOne = [10, 20, 30, 40, 50];

// Array con 8 elementi
let arrayTwo = [60, 70, 80, 90, 100, 110, 120, 130];

let showDiv = document.getElementById("showDiv")

for(let i = arrayOne.length; i < arrayTwo.length; i++){
    let askNumber = parseInt(prompt("Insert Here A Number"))
    arrayOne.push(askNumber)

    showDiv.classList.remove("d-none")
    
    console.log(arrayOne)
    console.log(arrayTwo)
}