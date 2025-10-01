/**
 * introduing events
 * Shrook Ahmed
 * 
 * Taking a look at how events work in JavaScript and p5
 */

"use strict";

/**
 * creates the canvas, makes the canvas black
*/
function setup() {
    createCanvas(400, 400);
    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
/**draw a circle in mouse location*/
function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}