function Dean(){
    var image = document.getElementById ("deanFromHell"); 
    console.log(image.src);
    if (image.src.includes("musicDime.png")) {
        image.src = "Images/musicDime1. jpg";
    } else {
        image.src = "Images/musicDime1.png";
    }
}