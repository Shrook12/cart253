/**
 * Art Jam
 * Shrook Ahmed
 * 
 * This is my portrait
 */

"use strict";


let hijabShape =
{
    x: 590,
    y: 400
}

let faceShape =
{
    x: 650,
    y: 500
}

/**
 * draw the background
*/
function setup() {
    //create the canva
    createCanvas(900, 800);

}


/**
 *
*/
function draw() {
    background("#023975ff");

    drawSweater();
    drawHijab();
    drawFace();
    drawEyes();





}

function drawSweater() {
    push();
    noStroke();
    fill("#2b2b2bff");
    rotate(QUARTER_PI / 2);
    rect(500, 350, 80, 400, 100);
    pop();

    push();
    noStroke();
    fill("#2b2b2bff");
    rotate(QUARTER_PI / 2);
    rotate(QUARTER_PI / 2);
    rect(900, 350, 80, 400, 100);
    pop();

    push();
    noStroke();
    fill("#2b2b2bff");
    rect(335, 530, 250, 400, 100);
    pop();

}
function drawHijab() {

    push();
    noStroke();
    fill("#876aaf");
    rect(340, 500, 250, 100, 150);
    pop();

    push();
    noStroke();
    fill("#876aaf");
    rect(320, 500, 100, 270, 150);
    pop();


    push();
    noStroke();
    fill("#7b5ca7");
    rect(hijabShape.x / 2, hijabShape.y / 2, 320, 370, 155);
    pop();

    push();
    noStroke();
    fill("#876aaf");
    rect(hijabShape.x / 2, hijabShape.y / 2, 300, 350, 155);
    pop();

}

function drawFace() {
    push();
    noStroke();
    fill("#de8463ff");
    rect(faceShape.x / 2, faceShape.y / 2, 250, 270, 150);
    pop();

    push();
    noStroke();
    fill("#e18e71");
    rect(335, 500 / 2, 230, 250, 150);
    pop();

}

function drawEyes() {
    push();
    noStroke();
    fill("#ffffffff");
    rect(360, 320, 75, 95, 60);
    pop();

    push();
    noStroke();
    fill("#ffffffff");
    rect(465, 320, 75, 95, 60);
    pop();

    push();
    noStroke();
    fill("#000000ff");
    rect(380, 340, 30, 45, 60);
    pop();

    push();
    noStroke();
    fill("#000000ff");
    rect(485, 340, 30, 45, 60);
    pop();
}

