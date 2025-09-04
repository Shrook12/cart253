/**
 * Creating Variables
 * Shrook Ahmed
 * 
 * Experimenting with creating variables
 */

"use strict";

let cheeseRed = 255;
let chesseGreen = 255;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 110;
let holeX = 140;
let holeY = 175;

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(480, 480);

}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    //The cheese
    background(cheeseRed, chesseGreen, cheeseBlue);

    //The hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();

}