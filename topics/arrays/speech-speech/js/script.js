/**
 * Speech! speech!
 * Shrook
 * 
 * Interactive speech-playing interface
 */

"use strict";

//the speech itself

let speech = ["Veni.", "Vidi", "Vici", "Sensi malum."];
//which sentence in the speech to display
let speechIndex = 0;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 100);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    //get the current line of the speech
    let currentLine = speech[speechIndex];
    //display text
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();

}
function mousePressed() {
    //next line
    speechIndex = speechIndex + 1;
    //handle the end of the speech
    if (speechIndex >= speech.length) {
        //start over
        speechIndex = 0;
    }

}