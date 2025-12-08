/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let ghostTalk;
let ghostData;
let indexGhost = 0;

let randomClues = "";
let clueData;
let indexClues = 0;

let ghost = {
    x: 1000,
    y: 400
}

let brain = {
    x: 200,
    y: 100,


}
let paper = {
    x: 100,
    y: 10
}
let speechGhost = {
    x: 550,
    y: 600
}
let secretCard = {
    w: 150,
    h: 200,
    x: 200,
    y: 100,
    cardOpen: false




}
let continueButtonGhost = {
    w: 200,
    h: 75,
    x: 500,
    y: 700,
    fill: "#000000ff",
    text: "Continue",
    visibily: false

}
let brainIndication = {
    x: 420,
    instruction: "This is the ghost brain!",
    fill: "white",
    size: 18,
    visibily: true
}

let paintLayer;


/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {
    paintLayer = createGraphics(width, height);
    paintLayer.image(paperImg, paper.x, paper.y, paper.w, paper.h);
    paintLayer.imageMode(CENTER);

    paintLayer.strokeWeight(40);
    paintLayer.blendMode(REMOVE);
}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
    background("blue");


    gradient();

    drawObjects(ghost, ghostImg);


    secretRect();
    speechGhost.x = width / 2.5;
    speechGhost.y = height / 1.3;
    drawObjects(speechGhost, speechGhostImg);
    //drawGhostText();
    drawSpeech(ghostTalk, width / 10, height / 1.29, 600, "pink")
    image(brainImg, brain.x, brain.y);
    drawText(brainIndication, 250);




    if (mouseIsPressed) {
        paintLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    }
    image(paintLayer, 0, 0);
    if (indication.visibily === true) {
        indication.x = width / 2.9;
        drawText(indication, height - 90);
    }
    secretRectOpen();
    //drawButtonContinueEnd();
    continueButtonGhost.x = width / 2;
    continueButtonGhost.y = height / 2 + 200;
    drawContinueButton(continueButtonGhost);



}
function gradient() {
    let startColor = color(151, 143, 186);//0%
    let endColor = color(47, 38, 64);//100%

    let x = 0;
    let xSize = 50;
    let y1 = 0;
    let y2 = height;
    let strokeNumber = 0;
    let y = 0;

    for (let y = 0; y < height; y++) {
        let percent = y / height;
        let c = lerpColor(startColor, endColor, percent);
        stroke(c);

        line(0, y, width, y);

    }
}
/*function drawGhostText() {
    ghostTalk = ghostData.ghost[indexGhost];
    push();
    fill("pink");

    textSize(32);
    text(ghostTalk, 200, height - 200);
    pop();
}*/

function blueKeyPressed(event) {
    if (keyCode === ENTER) {

        if (indexGhost < ghostData.ghost.length - 1) {

            indexGhost++;
        }

        if (indexGhost === ghostData.ghost.length - 1) {
            indication.visibily = false;
        }
    }
}

/*function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}*/

function secretRect() {
    if (secretCard.cardOpen === false) {

        push();
        fill("white");
        noStroke();
        rect(secretCard.x, secretCard.y, secretCard.w, secretCard.h, 20);
        pop();

        push();
        fill(0, 80);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("Click to Open", secretCard.x, secretCard.y, secretCard.w, secretCard.h);
    }
}
function secretRectOpen() {
    randomClues = random(clueData.clues);
    if (secretCard.cardOpen === true) {
        push();
        fill("white");
        rectMode(CENTER);
        noStroke();
        rect(width / 2, height / 2, secretCard.w + 300, secretCard.h + 400, 20);
        pop();

        push();
        fill(0);
        rectMode(CENTER);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(randomClues, width / 2, height / 2, secretCard.w, secretCard.h);
    }
}
/*function drawButtonContinueEnd() {
    if (continueButtonGhost.visibily == true) {

        push();
        stroke("white");
        strokeWeight(4);
        fill(continueButtonGhost.fill);
        rectMode(CENTER);
        rect(width / 2, height / 2 + 200, continueButtonGhost.w, continueButtonGhost.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(continueButtonGhost.text, width / 2, height / 2 + 200);
        pop();
    }

}*/

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {
    if (mouseX > secretCard.x && mouseX < secretCard.x + secretCard.w &&
        mouseY > secretCard.y && mouseY < secretCard.y + secretCard.h
    ) {
        secretCard.cardOpen = true;
        continueButtonGhost.visibily = true;
    }


    if (mouseX > continueButtonGhost.x - continueButtonGhost.w / 2 && mouseX < continueButtonGhost.x + continueButtonGhost.w / 2 && mouseY > continueButtonGhost.y - continueButtonGhost.h / 2 && mouseY < continueButtonGhost.y + continueButtonGhost.h / 2

    ) {

        state = "before-end";
        beforeEndDraw();

    }
}





