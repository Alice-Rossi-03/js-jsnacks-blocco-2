// Inserisci un numero
// Se è pari stampa il numero
// Se è dispari stampa il numero successivo

let number = document.getElementById("number")
let btn = document.getElementById("btn")


btn.addEventListener("click", function(){

    let numberValue = number.value 


    if((numberValue % 2) === 0){
        console.log(+numberValue)
    } else {
        console.log(+numberValue + 1)
    }
})