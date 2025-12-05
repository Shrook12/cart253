/**
 * This file contains the code to run *only* the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let hamsterTalk;
let hamsterData;
let indexHamster = 0;

let speechHamster = {
    x: 450,
    y: 640
}
let continueButtonHamster = {
    w: 200,
    h: 75,
    x: 550,
    y: 700,
    fill: "#000000ff",
    text: "Continue",
    visibily: false
}
/**
 * This will be called just before the green variation starts
 */
function greenSetup() {

}

/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {
    background("green");
    image(hamsterImg, 0, 0, width, height, 0, 0, hamsterImg.width, hamsterImg.height, COVER);
    drawObjects(speechHamster, speechHamsterImg);
    drawHamsterText();
    drawContinueButtonHamster();

}
function drawHamsterText() {
    hamsterTalk = hamsterData.hamster[indexHamster];
    push();
    fill("black");

    textSize(32);
    text(hamsterTalk, 100, height - 200, 600);
    pop();
}

function drawContinueButtonHamster() {
    if (continueButtonHamster.visibily == true) {
        push();
        stroke("white");
        strokeWeight(4);
        fill(continueButtonHamster.fill);
        rectMode(CENTER);
        rect(continueButtonHamster.x, continueButtonHamster.y, continueButtonHamster.w, continueButtonHamster.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(continueButtonHamster.text, continueButtonHamster.x, continueButtonHamster.y);
        pop();
    }
}
/**
 * This will be called whenever a key is pressed while the green variation is active
 */
function greenKeyPressed(event) {
    if (keyCode === ENTER) {
        if (indexHamster < hamsterData.hamster.length - 1) {
            indexHamster++;
        }
    }
    if (indexHamster === hamsterData.hamster.length - 1) {
        continueButtonHamster.visibily = true;
    }

}

function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}

/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function greenMousePressed() {
    if (mouseX > continueButtonHamster.x - continueButtonHamster.w / 2 && mouseX < continueButtonHamster.x + continueButtonHamster.w / 2 && mouseY > continueButtonHamster.y - continueButtonHamster.h / 2 && mouseY < continueButtonHamster.y + continueButtonHamster.h / 2

    ) {

        state = "blue-variation";
        blueSetup();

    }

}