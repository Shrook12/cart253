/**
 * Instruction Challenge
 * Shrook Ahmed
 * 
 * This is the instruction challenge where I have to draw a landscape.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(920, 700);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    background(0, 0, 139);

    push();
    fill("#e0e0e0ff");
    rect(0, 400, 920, 320);
    pop();

    push();
    fill("#a7a7a7ff");
    noStroke();
    ellipse(100, 600, 30, 30);
    ellipse(300, 450, 80, 80);
    ellipse(550, 480, 60, 60);
    ellipse(600, 650, 40, 40);
    ellipse(700, 580, 50, 50);
    ellipse(900, 520, 70, 70);

    pop();

    push();
    fill("#c3c3c3ff");
    noStroke();
    ellipse(10, 500, 60, 60);
    ellipse(250, 650, 100, 100);
    ellipse(450, 550, 70, 70);
    ellipse(750, 480, 120, 120);
    pop();



    push();
    fill("#d490ffff");
    noStroke();
    ellipse(220, 160, 180, 180);
    pop();

    push();
    fill("#e0adffff");
    noStroke();
    ellipse(240, 160, 140, 140);
    pop();

}