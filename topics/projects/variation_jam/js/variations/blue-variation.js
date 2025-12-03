/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let ghostTalk = "What! Seriously?!";
let ghostData;
let index = 0;

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



    drawObjects(speechGhost, speechGhostImg);
    drawGhostText();

    image(brainImg, brain.x, brain.y);

    if (mouseIsPressed) {
        paintLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    }
    image(paintLayer, 0, 0);


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
function drawGhostText() {

    push();
    fill("pink");

    textSize(32);
    text(ghostTalk, 100, height - 200, 1000);
    pop();
}

function keyPressed() {
    if (keyCode === ENTER) {
        ghostTalk = ghostData.ghost[index];
        index++;

        if (index >= ghostData.ghost.length) {
            state = "menu";
            menuDraw();
        }
    }
}

function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}




/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {

}

