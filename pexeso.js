let el = document.getElementById('gamestate')
el.innerHTML = "new game"
let counter = 5

function gameCountDown() {
   el.innerHTML = counter
   counter --
   if (counter > 0 ){
    setTimeout(gameCountDown, 1000)
   }
   //nefunkcni
   else{
    counter = "hraj ty cokolado"
    setTimeout(gameCountDown, 1000)
   }
}
setTimeout(gameCountDown, 1000)
el.innerHTML = "newgame"

let card1 = document.getElementById('card-1')
let card2 = document.getElementById('card-2')

function clickCard(){
    card1.innerHTML = '<img src="source/gragas.jpg" alt="card2">'
}