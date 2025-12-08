
/**
 * This file contains the code to run *only* the before start state part of the program.
 */

"use strict";


//these are the properties for the start button
let buttonStart = {
    w: 300, //width of the button
    h: 75, //height of the button
    x: 300, // x coordinate of the button
    y: 550,// y coordinate of the button
    fill: "#000000ff", //color
    text: "START" //text inside 
}
// these are the properties for the logo
let logo = {
    x: 300,// x coordinate of the logo
    y: 250 //y coordinate of the logo
}





/**
 * Create the canvas
*/
function startSetup() {

}


/* Draw everything inside on the screen*/
function startDraw() {
    //background image for this section
    screen(fridgeImg);

    //call the start button
    drawButton(buttonStart);
    //drawStartButton();

    //call draw object to draw logo
    drawObjects(logo, logoImg);
    checkOverlap(buttonStart);


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

/* mousePressed for this section*/
function startMousePressed() {
    if (mouseX > buttonStart.x - buttonStart.w / 2 && mouseX < buttonStart.x + buttonStart.w / 2 && mouseY > buttonStart.y - buttonStart.h / 2 && mouseY < buttonStart.y + buttonStart.h / 2

    ) {
        //if mousePressed go story state
        state = "story";
        storyDraw();

    }

}


