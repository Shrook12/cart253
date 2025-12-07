/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the red variation starts
 */
let cardImages = [];


let buttonFill = [];
let buttonColor = "black";
let colorAfter = "purple";
let buttonW = 200;
let buttonH = 75;
let coordinates;
button1 = {
    x: undefined,
    fill: "black",
    inside: "ROBOT"
}
button2 = {
    x: undefined,
    fill: "black",
    inside: "HAMSTER"
}
button3 = {
    x: undefined,
    fill: "black",
    inside: "GHOST"
}

function preload() {
    cardImages[0] = loadImage('./assets/images/beforeendrobot.jpg');
    cardImages[1] = loadImage('./assets/images/beforeendhamster.jpg');
    cardImages[2] = loadImage('./assets/images/beforendghost.jpg');
}
function setup() {
    createCanvas(windowWidth, windowHeight);



}

/**
 * This will be called every frame when the red variation is active
 */
function draw() {
    background("#c4d2e3");

    drawCards();
    chooseButton(button1);
    chooseButton(button2);
    chooseButton(button3);
}

function drawCards() {
    let coordinates = [width / 4, width / 2, (width * 3) / 4];
    let y = height / 2;
    let w = 325;
    let h = 400;



    for (let i = 0; i < coordinates.length; i++) {
        push();
        noStroke();
        rectMode(CENTER);
        rect(coordinates[i], y, w, h, 20);
        pop();

        push();
        imageMode(CENTER);
        image(cardImages[i], coordinates[i], y - 50, 250, 250);
        pop();

    }

}

function chooseButton(button) {
    let y = height / 2;
    button1.x = width / 4;
    button2.x = width / 2;
    button3.x = (width * 3) / 4;
    push();
    stroke("white");
    strokeWeight(4);
    fill(button.fill);
    rectMode(CENTER);
    rect(button.x, y + 100, buttonW, buttonH, 30);
    pop();


    push();
    fill("#ffffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(button.inside, button.x, y + 100);
    pop();
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function endKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function mousePressed() {
    let y = height / 2;
    let buttonY = y + 100;
    if (mouseX > button1.x - buttonW / 2 &&
        mouseX < button1.x + buttonW / 2 &&
        mouseY > buttonY - buttonH / 2 &&
        mouseY < buttonY + buttonH / 2
    ) {
        button1.fill = "purple";
    }
    if (mouseX > button2.x - buttonW / 2 &&
        mouseX < button2.x + buttonW / 2 &&
        mouseY > buttonY - buttonH / 2 &&
        mouseY < buttonY + buttonH / 2
    ) {
        button2.fill = "purple";
    }
    if (mouseX > button3.x - buttonW / 2 &&
        mouseX < button3.x + buttonW / 2 &&
        mouseY > buttonY - buttonH / 2 &&
        mouseY < buttonY + buttonH / 2
    ) {
        button3.fill = "purple";
    }
}

