/**
 * Introducing variables
 * Author Name
 * 
 * Learning what variable is and does
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(640, 480)

}


/**
 * Draws a circle in the centre of the canva
*/
function draw() {
    background(0);

    //Draw the circle
    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
}