/**
 * Art Jam
 * Shrook Ahmed
 * 
 * This is my portrait
 */

"use strict";


let hijabShape =
{
    x: 600,
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

    drawHijab();
    drawFace();




}


function drawHijab() {

    push();
    noStroke();
    fill("#8e31abff");
    rect(340, 500, 250, 100, 150);
    pop();

    push();
    noStroke();
    fill("#8e31abff");
    rect(320, 500, 100, 270, 150);
    pop();


    push();
    noStroke();
    fill("#712289ff");
    rect(hijabShape.x / 2, hijabShape.y / 2, 320, 370, 150);
    pop();

    push();
    noStroke();
    fill("#8e31abff");
    rect(hijabShape.x / 2, hijabShape.y / 2, 300, 350, 150);
    pop();

}

function drawFace() {
    push();
    noStroke();
    fill("#e59165ff");
    rect(faceShape.x / 2, faceShape.y / 2, 250, 270, 150);
    pop();

    push();
    noStroke();
    fill("#e8a785ff");
    rect(faceShape.x / 2, faceShape.y / 2, 230, 250, 150);
    pop();

}
