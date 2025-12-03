let imgColor, imgBW;

const boxX = 50;
const boxY = 50;
const boxW = 200;
const boxH = 200;

function preload() {
    imgColor = loadImage("./assets/images/b.png");
    imgBW = loadImage("./assets/images/p.png");
}

function setup() {
    createCanvas(400, 400);
    image(imgBW, 0, 0);


}

function draw() {
    if (mouseIsPressed &&
        mouseX > boxX && mouseX < boxX + boxW &&
        mouseY > boxY && mouseY < boxY + boxH) {

        const s = 40;
        copy(
            imgColor,
            mouseX - s / 2, mouseY - s / 2, s, s,
            mouseX - s / 2, mouseY - s / 2, s, s
        );
    }
}