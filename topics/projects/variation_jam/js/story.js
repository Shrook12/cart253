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

let button = {
    w: 300,
    h: 75,
    x: 300,
    y: 500,
    fill: "#000000ff",
    text: "START"
}
let story = "";
let storyData;
let index = 0;

let startPage;//bacground image for start state
let space;
let playerImg;//img for player1
let humanImg;


function preload() {
    startPage = loadImage('./assets/images/start_page.png');
    space = loadImage('./assets/images/space.png');
    playerImg = loadImage('../assets/images/player1.png');
    humanImg = loadImage('./assets/images/human2.png');


    storyData = loadJSON("assets/data/start_story.json")
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}



function draw() {
    if (state === "start") {
        screen(space);
        drawStartButton();
    }
    else if (state === "story") {
        screen(space);
        drawSpeech();
    }
}

//for the background images for all the states
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);


}
function drawStartButton() {
    push();
    stroke("white");
    strokeWeight(4);
    fill(button.fill);
    rectMode(CENTER);
    rect(button.x, button.y, button.w, button.h, 30);
    pop();


    push();
    fill("#ffffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(button.text, button.x, button.y);
    pop();

}

function mousePressed() {
    if (mouseX > button.x - button.w / 2 && mouseX < button.x + button.w / 2 && mouseY > button.y - button.h / 2 && mouseY < button.y + button.h / 2

    ) {

        state = "story";

    }

}

function drawSpeech() {

    push();
    fill("pink");

    textSize(32);
    text(story, 50, height - 200, 1000);
    pop();
}

function keyPressed() {
    if (keyCode === ENTER) {
        story = storyData.speech[index];
        index++;


    }
}