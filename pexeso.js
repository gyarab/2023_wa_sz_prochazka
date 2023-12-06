var img_list = ["pexesoIMG/gragas0.jpg","pexesoIMG/gragas1.jpg","pexesoIMG/gragas2.jpg","pexesoIMG/gragas3.jpg","pexesoIMG/gragas4.jpg","pexesoIMG/gragas5.jpg"]
let opened_prev = 0
let prev_openned_ID = null
let prev_openned_ID2 = null

function shuffle(container) {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

// Get the container element and call the shuffle function
document.addEventListener('DOMContentLoaded', function() {
            const gridContainer = document.getElementById('grid-container');
            shuffle(gridContainer);
        });

function card_click(cardID){
    if (opened_prev == 0){
        prev_openned_ID = cardID
        opened_prev = 1
        change_card(cardID)
    }else if (same_img(cardID, prev_openned_ID) && opened_prev == 1){
        change_card(cardID)
        cards_found(cardID, prev_openned_ID)
        opened_prev = 0
    } else if(opened_prev == 1){
        opened_prev = 2
        prev_openned_ID2 = cardID
        change_card(cardID)   
    } else {
        close_cards (prev_openned_ID, prev_openned_ID2)
        opened_prev = 0
    }
}
function change_card(cardID){
    var card = document.getElementById(cardID);
    var cardImg = card.getElementsByTagName("img")[0];
    var imgIndex = cardImg.dataset.imgindex
    if (cardImg.src.endsWith("pexesoIMG/lol.jpg")) {
        cardImg.src = img_list[imgIndex]
     } 
}
function close_cards(ID1,ID2){
    var card1 = document.getElementById(ID1)
    var cardImg1 = card1.getElementsByTagName("img")[0];

    var card2 = document.getElementById(ID2)
    var cardImg2 = card2.getElementsByTagName("img")[0];

    cardImg1.src = "pexesoIMG/lol.jpg"
    cardImg2.src = "pexesoIMG/lol.jpg"
}
function same_img(ID1,ID2){
    var card1 = document.getElementById(ID1)
    var cardImg1 = card1.getElementsByTagName("img")[0];
    var imgIndex1 = cardImg1.dataset.imgindex

    var card2 = document.getElementById(ID2)
    var cardImg2 = card2.getElementsByTagName("img")[0];
    var imgIndex2 = cardImg2.dataset.imgindex

    if(imgIndex1 == imgIndex2){
        return true
    }else{
        return false
    }
}
function cards_found(ID1, ID2){
    var card1 = document.getElementById(ID1)
    var card2 = document.getElementById(ID2)

    card1.style.pointerEvents = "none"
    card1.style.visibility = "hidden"

    card2.style.pointerEvents = "none"
    card2.style.visibility = "hidden"
}