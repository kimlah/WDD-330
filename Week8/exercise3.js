// ensure element has loaded
window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    // grab image
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68); 
}