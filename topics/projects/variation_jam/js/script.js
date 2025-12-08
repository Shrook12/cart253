/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "start";


let brainImg
let paperImg;
let ghostImg;//img for player1
let speechGhostImg;
let robotImg;
let robotBack;
let speechRobotImg;
let fridgeImg;
let speechImg;
let hamsterImg;
let speechHamsterImg;
let logoImg;
let screwImg;
let pictureImg;
let cardImages = [];
let hamsterSadImg;
let prisonImg;
let frame1, frame2, frame3, frame4, frame5, frame6, frame7;







function preload() {

    brainImg = loadImage('./assets/images/brain.png');
    paperImg = loadImage('./assets/images/paper2.png');
    ghostImg = loadImage('../assets/images/ghost.png');
    speechGhostImg = loadImage('./assets/images/speechghost.png');
    robotImg = loadImage('./assets/images/robot.png');
    robotBack = loadImage('./assets/images/back_robot.png');
    speechRobotImg = loadImage('./assets/images/robot_speech.png');
    fridgeImg = loadImage('./assets/images/backstart.png');
    speechImg = loadImage('./assets/images/speechstory.png');
    hamsterImg = loadImage('./assets/images/hamster.png');
    speechHamsterImg = loadImage('./assets/images/hamster_speech.png');
    logoImg = loadImage('./assets/images/logo.png');
    screwImg = loadImage('./assets/images/screw.png');
    pictureImg = loadImage('./assets/images/picturehamster.png');
    hamsterSadImg = loadImage('./assets/images/sadhamster.png');
    prisonImg = loadImage('./assets/images/prison.png');
    frame1 = loadImage('./assets/images/frame1.png');
    frame2 = loadImage('./assets/images/frame2.png');
    frame3 = loadImage('./assets/images/frame3.png');
    frame4 = loadImage('./assets/images/frame4.png');
    frame5 = loadImage('./assets/images/frame5.png');
    frame6 = loadImage('./assets/images/frame6.png');
    frame7 = loadImage('./assets/images/frame7.png');

    ghostData = loadJSON("./assets/data/ghost.json");
    robotData = loadJSON("./assets/data/robot.json");
    storyData = loadJSON("./assets/data/start_story.json");
    clueData = loadJSON("./assets/data/random_clues.json");
    hamsterData = loadJSON("./assets/data/hamster.json");


    cardImages[0] = loadImage('./assets/images/beforeendrobot.jpg');
    cardImages[1] = loadImage('./assets/images/beforeendhamster.jpg');
    cardImages[2] = loadImage('./assets/images/beforendghost.jpg');



}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}



/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "start":
            startDraw();
            break;
        case "story":
            storyDraw();
            break;
        case "menu":
            menuDraw();
            break;
        case "red-variation":
            redDraw();
            break
        case "green-variation":
            greenDraw();
            break;
        case "blue-variation":
            blueDraw();
            break;
        case "before-end":
            beforeEndDraw();
            break;
        case "sad-hamster":
            sadHamsterDraw();
            break;
        case "prison":
            prisonDraw();
            break;
        case "danger":
            dangerDraw();
            break;

    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "start":
            startMousePressed();
            break;
        case "menu":
            menuMousePressed();
            break;
        case "red-variation":
            redMousePressed();
            break
        case "green-variation":
            greenMousePressed();
            break;
        case "blue-variation":
            blueMousePressed();
            break;
        case "before-end":
            endMousePressed();
            break;
    }
}


/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "story":
            storyKeyPressed(event);
            break;
        case "red-variation":
            redKeyPressed(event);
            break
        case "green-variation":
            greenKeyPressed(event);
            break;
        case "blue-variation":
            blueKeyPressed(event);
            break;
    }


}


function drawText(obj, y) {

    push();
    fill(obj.fill);

    textSize(24);
    text(obj.instruction, obj.x, y);
    pop();
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

