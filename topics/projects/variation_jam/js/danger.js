/**
 * This file contains the code to run *only* the dangerous ending state part of the program.
 */

"use strict";

let indexAnimation = 0;//index start at 0 for animation(first image)
let totalIndex = 7;//total index 7

let frameAnimation = [];//to make the images into an array


/**
 * Create the canvas
*/
function dangerSetup() {

}

/**
 * This will be called every frame when the danger state is active
 */
function dangerDraw() {
    //background color
    background("black");



    frameAnimation = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];//arrays

    imageMode(CENTER);

    //animation
    image(frameAnimation[indexAnimation], width / 2, height / 2, 1920, 1080);
    if (indexAnimation < totalIndex - 1)
        indexAnimation += 1;
    //stop at the last one
    if (indexAnimation >= totalIndex - 1) {
        frameAnimation = frameAnimation[6];
    }
    // text
    drawTextEnd("YOU ARE IN DANGER!", "Since you discovered only one culprit, the other one was able to rescue their partner in crime, and now they’ve come to eliminate you!", width / 2, height - 200, 800, "#ff0000ff", fontGhost);




}