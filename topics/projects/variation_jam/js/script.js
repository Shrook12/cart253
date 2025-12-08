/**
 * Variation Menu
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "start";

// for ghost section
let brainImg; //image for brain
let paperImg;// image for paper
let ghostImg;// image for Ghost
let speechGhostImg; // speech bubble image for Ghost
let fontGhost;//font used for ghost

// for robot section
let robotImg; // robot image
let robotBack; //background for the robot section
let speechRobotImg; // speech bubble image for robot
let screwImg;//screw image for the robot section
let fontRobot;// the font used for robot 

//beginning section
let fridgeImg;// background image for the beginning
let speechImg;//speech bubble for the beginning of the story
let logoImg;// the image for logo

//hamster section
let hamsterImg;//the image for the hamster section
let speechHamsterImg; // speech bubble image for the hamster
let pictureImg;//picture wall for the hamster section
let fontHamster;// font used for hamster


let cardImages = [];//these are images fothe choosing part

//these are for the ending part
let hamsterSadImg;//sad hamster image, if someone choose the hamster
let prisonImg;//robot and ghost in prison image which is = win
let frame1, frame2, frame3, frame4, frame5, frame6, frame7;//animtion of robot and ghost going closer to the screen = you loose


let fontIndication;// this font is used for indication

//sounds
let soundOnClick;
let soundOnClickKeyboard;









function preload() {

    //images for the ghost section
    brainImg = loadImage('./assets/images/brain.png');
    paperImg = loadImage('./assets/images/paper2.png');
    ghostImg = loadImage('./assets/images/ghost.png');
    speechGhostImg = loadImage('./assets/images/speechghost.png');

    //images for the robot section
    robotImg = loadImage('./assets/images/robot.png');
    robotBack = loadImage('./assets/images/back_robot.png');
    speechRobotImg = loadImage('./assets/images/robot_speech.png');
    screwImg = loadImage('./assets/images/screw.png');

    //images for the beginning
    fridgeImg = loadImage('./assets/images/backstart.png');
    speechImg = loadImage('./assets/images/speechstory.png');
    logoImg = loadImage('./assets/images/logo.png');

    //images for the hamster section
    hamsterImg = loadImage('./assets/images/hamster.png');
    speechHamsterImg = loadImage('./assets/images/hamster_speech.png');
    pictureImg = loadImage('./assets/images/picturehamster.png');

    //images for the ending
    hamsterSadImg = loadImage('./assets/images/sadhamster.png');
    prisonImg = loadImage('./assets/images/prison.png');
    //images for the animation
    frame1 = loadImage('./assets/images/frame1.png');
    frame2 = loadImage('./assets/images/frame2.png');
    frame3 = loadImage('./assets/images/frame3.png');
    frame4 = loadImage('./assets/images/frame4.png');
    frame5 = loadImage('./assets/images/frame5.png');
    frame6 = loadImage('./assets/images/frame6.png');
    frame7 = loadImage('./assets/images/frame7.png');


    //json files
    ghostData = loadJSON("./assets/data/ghost.json");
    robotData = loadJSON("./assets/data/robot.json");
    storyData = loadJSON("./assets/data/start_story.json");
    clueData = loadJSON("./assets/data/random_clues.json");
    hamsterData = loadJSON("./assets/data/hamster.json");

    //font files
    fontIndication = loadFont('./assets/fonts/bitcountgrid.ttf');
    fontRobot = loadFont('./assets/fonts/silkscreen.ttf');
    fontHamster = loadFont('./assets/fonts/schoolbell.ttf');
    fontGhost = loadFont('./assets/fonts/special.ttf');

    //sounds
    soundOnClick = loadSound('./assets/sounds/mouseclick.wav');
    soundOnClickKeyboard = loadSound('./assets/sounds/keyboard.wav');


    //this part if for the before ending
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
 * Display the current variation
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

/*for instruction/indication text
*/
function drawText(obj, y) {

    push();
    fill(obj.fill);
    textFont(fontIndication);

    textSize(obj.size);
    text(obj.instruction, obj.x, y);
    pop();
}
/*for start button*/

function drawButton(obj) {
    push();
    stroke("white");
    strokeWeight(4);
    fill(obj.fill);
    rectMode(CENTER);
    rect(obj.x, obj.y, obj.w, obj.h, 30);
    pop();

    //for text inside
    push();
    fill("#ffffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(obj.text, obj.x, obj.y);
    pop();

}

/* for all text that are in a speech bubble */
function drawSpeech(obj, x, y, b, color, font) {
    story = storyData.speech[index];
    robotTalk = robotData.robot[indexRobot];
    hamsterTalk = hamsterData.hamster[indexHamster];
    ghostTalk = ghostData.ghost[indexGhost];

    push();
    fill(color);
    textAlign(LEFT);
    textFont(font);
    textSize(32);
    text(obj, x, y, b);
    pop();
}
/* for all text for the ending*/
function drawTextEnd(obj1, obj2, x, y, b, color, font) {
    push();
    fill(color);
    rectMode(CENTER);
    textAlign(CENTER);
    textFont(font);
    textSize(72);
    noStroke();
    text(obj1, x, y, b);
    pop();

    push();
    fill(color);
    rectMode(CENTER);
    textAlign(CENTER);
    textFont(font);
    textSize(30);
    noStroke();
    text(obj2, x, y + 100, b);
    pop();
}

/* for all continue button*/
function drawContinueButton(obj) {
    if (obj.visibily === true) {
        push();
        stroke("white");
        strokeWeight(4);
        fill(obj.fill);
        rectMode(CENTER);
        rect(obj.x, obj.y, obj.w, obj.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(obj.text, obj.x, obj.y);
        pop();
    }

}

/* for most image*/
function drawObjects(obj, img) {

    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}

/*for the background images for all the states*/
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);
}
/*if mouse on button change color*/
function checkOverlap(obj) {
    if (mouseX > obj.x - obj.w / 2 && mouseX < obj.x + obj.w / 2 && mouseY > obj.y - obj.h / 2 && mouseY < obj.y + obj.h / 2

    ) {

        obj.fill = "#dd3657";

    }
    else {
        obj.fill = "black";
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

