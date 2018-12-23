const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
    console.log("finish loading");
}


function painImage(imgNumber) {
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpeg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    painImage(randomNumber);

}

init();