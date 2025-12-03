/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";



let button = {
    w: 300,
    h: 75,
    x: 300,
    y: 500,
    fill: "#000000ff",
    text: "START"
}





/**
 * Create the canvas
*/
function startSetup() {

}



function startDraw() {

    screen(fridgeImg);
    drawStartButton();


}

//for the background images for all the states
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);


}
function drawStartButton() {
    push();
    stroke("white");
    strokeWeight(4);
    fill(button.fill);
    rectMode(CENTER);
    rect(button.x, button.y, button.w, button.h, 30);
    pop();


    push();
    fill("#ffffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(button.text, button.x, button.y);
    pop();

}

function startMousePressed() {
    if (mouseX > button.x - button.w / 2 && mouseX < button.x + button.w / 2 && mouseY > button.y - button.h / 2 && mouseY < button.y + button.h / 2

    ) {

        state = "story";
        storyDraw();

    }

}


