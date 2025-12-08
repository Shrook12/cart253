/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";



let buttonStart = {
    w: 300,
    h: 75,
    x: 300,
    y: 550,
    fill: "#000000ff",
    text: "START"
}

let logo = {
    x: 300,
    y: 250
}





/**
 * Create the canvas
*/
function startSetup() {

}



function startDraw() {

    screen(fridgeImg);
    drawButton(buttonStart);
    //drawStartButton();
    drawObjects(logo, logoImg);


}

//for the background images for all the states
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);


}
/*function drawStartButton() {
    push();
    stroke("white");
    strokeWeight(4);
    fill(buttonStart.fill);
    rectMode(CENTER);
    rect(buttonStart.x, buttonStart.y, buttonStart.w, buttonStart.h, 30);
    pop();


    push();
    fill("#ffffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(buttonStart.text, buttonStart.x, buttonStart.y);
    pop();

}*/

function startMousePressed() {
    if (mouseX > buttonStart.x - buttonStart.w / 2 && mouseX < buttonStart.x + buttonStart.w / 2 && mouseY > buttonStart.y - buttonStart.h / 2 && mouseY < buttonStart.y + buttonStart.h / 2

    ) {

        state = "story";
        storyDraw();

    }

}


