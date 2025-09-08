/**
 * The Greatest Record of All Time
 * Shrook
 * 
 * Displays the Greatest Record of All Time
 */

"use strict";

/**
 * Creates a square CANVAS 
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * Displays the record
*/
function draw() {
    //grey background
    background(150);

    //the main part of the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    //the label on the record
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140);
    pop();

    //The hole in the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20);
    pop();

}