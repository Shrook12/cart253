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

let startPage;//bacground image for start state
let brainImg
let paperImg;
let ghostImg;//img for player1
let speechGhostImg;
let robotImg;
let robotBack;
let speechRobotImg;
let fridgeImg;
let speechImg;



function preload() {
    startPage = loadImage('./assets/images/start_page.png');
    brainImg = loadImage('./assets/images/brain.png');
    paperImg = loadImage('./assets/images/paper.png');
    ghostImg = loadImage('../assets/images/ghost.png');
    speechGhostImg = loadImage('./assets/images/speechghost.png');
    robotImg = loadImage('./assets/images/robot.png');
    robotBack = loadImage('./assets/images/back_robot.png');
    speechRobotImg = loadImage('./assets/images/robot_speech.png');
    fridgeImg = loadImage('./assets/images/backstart.png');
    speechImg = loadImage('./assets/images/speechstory.png');
    ghostData = loadJSON("./assets/data/ghost.json");
    robotData = loadJSON("./assets/data/robot.json");
    storyData = loadJSON("./assets/data/start_story.json")
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
        case "menu":
            menuKeyPressed(event);
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



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

