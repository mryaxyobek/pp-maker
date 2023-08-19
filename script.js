let canvas = document.createElement('canvas');
canvas.width = '1000'
canvas.height = '1000'
let context = canvas.getContext("2d");
let input = document.getElementById("textInput");
let loadButton = document.getElementById("loadButton");

let canvasDownload = document.getElementById("canvasDownload");
console.log(canvas);
let image = new Image();
image.src = "./images/cartoon_girl-www.pictures-for-profile-uz.netlify.app.jpg";
image.onload = function () {
    context.drawImage(image, 0, 0, 1000, 1000);

    context.font = "80px sans-serif";
    context.fillStyle = "#4c4c4c";

    loadButton.addEventListener('click', function () {
        let ming = 1000 - context.measureText(input.value).width
        let ming2 = ming - ming/2
        context.clearRect(0, 0, 1000, 1000);
        context.drawImage(image, 0, 0, 1000, 1000);
        context.fillText(input.value, ming2,880);

        //  bliarc 
        const pngDataUrl = canvas.toDataURL("image/png");
        canvasDownload.href = pngDataUrl;   
    });
};