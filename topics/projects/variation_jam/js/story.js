/**
 * This file contains the code to run *only* the before story state part of the program.
 */

"use strict";




let story; //name for text
let storyData; //data text from json for the story part
let index = 0;//start at the first line

//properties for the speech bubble rectangles
let speech = {
    x: 500, // x coordinate 
    y: 640 // y coordinate 
}

//properties for the indication (press enter)
let indication = {
    x: 250, // x coordinate 
    instruction: "Press <ENTER> to Continue Reading", //text
    size: 24, //text size
    fill: "white",//color of the text
    visibily: true //start by being visible
}


/**
 * Create the canvas
*/
function storySetup() {

}


/*draw everything inside on the screen*/
function storyDraw() {

    //background image
    screen(fridgeImg);

    //for speech bubble image
    speech.y = height / 1.2; //change y
    speech.x = width / 2.7;// change x
    drawObjects(speech, speechImg);

    //drawSpeech();

    //text inside speech bubble(obj,x,y.b.color.font)
    drawSpeech(story, width / 11, height / 1.35, 700, "pink", fontGhost);

    //text for indication(obj.y)
    drawText(indication, height - 50);




}




/*function drawSpeech() {
    story = storyData.speech[index];

    push();
    fill("pink");

    textSize(32);
    text(story, 50, height - 250, 800);
    pop();
}*/


/* keypressed for this state to go to next state*/
function storyKeyPressed(event) {
    //if ENTER is clicked and the state is story
    if (keyCode === ENTER && state == "story") {

        //go to next index for story
        index++;
        soundOnClickKeyboard.play();
        //if the index of story are finished go to menu state
        if (index >= storyData.speech.length) {
            state = "menu";
            menuDraw();
        }
    }

}