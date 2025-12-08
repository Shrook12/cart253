/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";




let story;
let storyData;
let index = 0;

let speech = {
    x: 500,
    y: 640
}

let indication = {
    x: 250,
    instruction: "Press <ENTER> to Continue Reading",
    size: 24,
    fill: "white",
    visibily: true
}


/**
 * Create the canvas
*/
function storySetup() {

}



function storyDraw() {

    screen(fridgeImg);
    speech.y = height / 1.2;
    speech.x = width / 2.7;
    drawObjects(speech, speechImg);
    //drawSpeech();
    drawSpeech(story, width / 11, height / 1.4, 700, "pink");
    drawText(indication, height - 70);




}

//for the background images for all the states
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);


}


/*function drawSpeech() {
    story = storyData.speech[index];

    push();
    fill("pink");

    textSize(32);
    text(story, 50, height - 250, 800);
    pop();
}*/

function storyKeyPressed(event) {

    if (keyCode === ENTER && state == "story") {


        index++;

        if (index >= storyData.speech.length) {
            state = "menu";
            menuDraw();
        }
    }

}