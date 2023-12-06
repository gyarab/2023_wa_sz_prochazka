// let el = document.getElementById('gamestate')
// el.innerHTML = "new game"
// let counter = 5

// function gameCountDown() {
//    el.innerHTML = counter
//    counter --
//    if (counter > 0 ){
//     setTimeout(gameCountDown, 1000)
//    }
//    //nefunkcni
//    else{
//     counter = "hraj ty cokolado"
//     setTimeout(gameCountDown, 1000)
//    }
// }
// setTimeout(gameCountDown, 1000)
// el.innerHTML = "newgame"

// let card1 = document.getElementById('card-1')
// let card2 = document.getElementById('card-2')

var img_list = ["pexesoIMG/gragas1.jpg","pexesoIMG/gragas2.jpg","pexesoIMG/gragas3.jpg","pexesoIMG/gragas4.jpg","pexesoIMG/gragas5.jpg","pexesoIMG/gragas6.jpg"]
function change_card(cardID){
    console.log(cardID)
    var card = document.getElementById(cardID);
    var cardImg = card.getElementsByTagName("img")[0];
    var imgIndex = cardImg.dataset.imgindex
    if (cardImg.src.endsWith("pexesoIMG/lol.jpg")) {
        cardImg.src = img_list[imgIndex];
    } else {
        cardImg.src = "pexesoIMG/lol.jpg";
    }
}