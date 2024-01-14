// ciclo while 

// genera un numero casuale tra 1 e 100 
// chiedi all'utente di indovinare il numero
// Il programma poi deve far comparire un messaggio
    // "il numero è troppo alto"
    // "il numero è troppo basso" 
    // "hai vinto! azzeccato il numero"

// definiamo le variabili 
let numberCheck = document.getElementById("numberCheck")
let btnCheck = document.getElementById("btnCheck")
let appendContainer = document.getElementById("appendContainer")

// funzione per generare unn numero randomico
function RandomNumber(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min )
}

let numberToGuess 

numberToGuess = RandomNumber(1,100)

console.log(numberToGuess)



let divNumber = document.createElement("div")
appendContainer.append(divNumber)


btnCheck.addEventListener("click", function(){
    
    let numberValue = numberCheck.value

    console.log(+numberValue)

    +numberValue === 0 
    
    
    while(+numberValue < 100){

        if(+numberValue > numberToGuess){
            divNumber.innerHTML = 'The number is too high'
        } else if(+numberValue < numberToGuess){
            divNumber.innerHTML = 'The number is too low'
        } else if(+numberValue === numberToGuess){
            divNumber.innerHTML = 'The number is the same'
        }

        +numberValue++
    }

})