/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";




let story = "Yesterday, a crime happened!";
let storyData;
let index = 0;

let speech = {
    x: 450,
    y: 640
}


/**
 * Create the canvas
*/
function storySetup() {

}



function storyDraw() {

    screen(fridgeImg);

    drawObjects(speech, speechImg);
    drawSpeech();




}

//for the background images for all the states
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);


}


function drawSpeech() {

    push();
    fill("pink");

    textSize(32);
    text(story, 50, height - 200, 800);
    pop();
}

function storyKeyPressed(event) {
    if (keyCode === ENTER && state == "story") {
        story = storyData.speech[index];
        index++;

        if (index >= storyData.speech.length) {
            state = "menu";
            menuDraw();
        }
    }

}