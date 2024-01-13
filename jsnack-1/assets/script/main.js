// crea un array vuoto 
// chiedi all’utente un numero da inserire nell’array
// continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50



let emptyArray = []

let showText = document.getElementById("showText")

let sumOfAll = 0

while (sumOfAll < 50) {

    for(let i = 0; i < emptyArray.length; i++){
        sumOfAll += emptyArray[i]
    }
    
    let number = prompt('Please insert a number:')

    let validNumber = parseInt(number)

    emptyArray.push(validNumber)

    showText.classList.remove("d-none")

    console.log(emptyArray)

    sumOfAll++; 

   
}

