/**
 * Art Jam
 * Shrook Ahmed
 * 
 * This is my portrait
 */

"use strict";

let faceShape = {
    x: 450,
    y: 400
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


    push();
    noStroke();
    fill("#bf47e4ff");
    rect(faceShape.x / 2, faceShape.y / 2, 300, 350, 100);
    pop();

    push();
    noStroke();
    fill("#ffcfb5ff");
    rect(faceShape.x / 2, faceShape.y / 2, 250, 290, 100);
    pop();


}