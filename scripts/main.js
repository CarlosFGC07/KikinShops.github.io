function dean(){
    var image=document.getElementById("deanFromHell"); 
    console.log(image.src);
    if (image.src.match("musicDime1")) {
        image.src="images/musicDime.png";
    } else {
        image.src="images/musicDime1.png";
    }
}

function mueble(){
    var image=document.getElementById("furniture"); 
    console.log(image.src);
    if (image.src.match("Mueble_a")) {
        image.src="images/Mueble.jpg";
    } else {
        image.src="images/Mueble_a.jpg";
    }
}

function iphone(){
    var image=document.getElementById("iphone16"); 
    console.log(image.src);
    if (image.src.match("Electronic_a")) {
        image.src="images/electronic.png";
    } else {
        image.src="images/Electronic_a.png";
    }
}

function hoodie(){
    var image=document.getElementById("trenHoodie"); 
    console.log(image.src);
    if (image.src.match("clothe_a")) {
        image.src="images/clothe.png";
    } else {
        image.src="images/clothe_a.jpg";
    }
}