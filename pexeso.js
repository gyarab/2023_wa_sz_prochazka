var img_list = ["pexesoIMG/gragas0.jpg","pexesoIMG/gragas1.jpg","pexesoIMG/gragas2.jpg","pexesoIMG/gragas3.jpg","pexesoIMG/gragas4.jpg","pexesoIMG/gragas5.jpg"]

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