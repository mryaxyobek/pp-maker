let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let input = document.getElementById("textInput");
let loadButton = document.getElementById("loadButton");

let canvasDownload = document.getElementById("canvasDownload");

let image = new Image();
image.src = "cartoon_girl-www.pictures-for-profile-uz.netlify.app.jpg";
image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    context.font = "20px sans-serif";
    context.fillStyle = "#4c4c4c";

    loadButton.addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        context.fillText(input.value, 100, 265); 

        //  bliarc 
        const pngDataUrl = canvas.toDataURL("image/png");
        console.log(pngDataUrl);
        canvasDownload.href = pngDataUrl;
        console.log(pngDataUrl);
    });
};