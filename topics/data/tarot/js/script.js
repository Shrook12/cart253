/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";
//our tarot data
let tarot = undefined;

let fortune = "Click to show a fortune.";
/**
 * tbd.
*/
function preload() {
    tarot = loadJSON("assets/data/tarot_interpretations.json");
}
function setup() {
    createCanvas(800, 400);
}


/**
 * tbd.
*/
function draw() {
    background(0);



    push();
    textSize(16);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop();
}

function mousePressed() {
    //choose a random card
    const card = random(tarot.tarot_interpretations);
    //choose a random fortune
    fortune = random(card.fortune_telling)
}
