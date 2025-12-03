/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let ghostTalk = "";
let ghostData;
let index = 0;

let ghost = {
    x: 1000,
    y: 400
}

let brain = {
    x: 400,
    y: 300,
    w: 300,
    h: 300

}
let paper = {
    x: 400,
    y: 295
}
let speechGhost = {
    x: 550,
    y: 600
}


/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {
    paintLayer = createGraphics(width, height);
}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
    background("blue");


    gradient();

    drawObjects(ghost, ghostImg);
    drawObjects(paper, paperImg);
    image(paintLayer, 0, 0, width, height);

    drawObjects(speechGhost, speechGhostImg);
    drawGhostText();



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
            menuSetup();
        }
    }
}

function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}




function paintColor() {

    if (mouseX > paper.x - paperImg.width / 2 &&
        mouseX < paper.x + paperImg.width / 2 &&
        mouseY > paper.y - paperImg.height / 2 &&
        mouseY < paper.y + paperImg.height) {

        let brushSize = 40;

        paintLayer.copy(brainImg,
            mouseX - brushSize / 2, mouseY - brushSize / 2, brushSize, brushSize,
            mouseX - brushSize / 2, mouseY - brushSize / 2, brushSize, brushSize,

        )
    }
}
/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {
    paintColor();
}

