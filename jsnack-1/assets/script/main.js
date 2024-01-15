// crea un array vuoto 
// chiedi all’utente un numero da inserire nell’array
// continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50



let emptyArray = []

let showText = document.getElementById("showText")

let sumOfAll = 0
let i = 0


while (sumOfAll < 50) {
    
    let number = prompt('Please insert a number:')

    let validNumber = parseInt(number)

    if(validNumber > (50 - sumOfAll)){
        alert(`You can only insert a max number of ${50 - sumOfAll}`)
    } else {
        emptyArray.push(validNumber)
        sumOfAll += emptyArray[i]
        showText.classList.remove("d-none")
        console.log(emptyArray)
    }

    sumOfAll++; 

}

