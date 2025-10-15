"use strict";



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let finishState = "none";
let gameState = "start";
let score = 0;
let buttonPlay;
let startButtonCreated = false;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);


}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    if (gameState == "start") {
        startScreen();
        //prevent button to be created over and over again
        if (!startButtonCreated) {
            buttonPlay = createButton("PLAY"); //this create a button
            buttonPlay.position(width / 2, height / 2); //this is the position of the button
        }
        startButtonCreated = true;
    }
    else if (gameState == "play") {
        gameScreen();
    }
    else if (gameState == "end") {
        endScreen();
    }
}

function mousePressed(event) {
    if (gameState == "start") {
        gameState = "play";
    }


}

function startScreen() {
    background("#a545ffff");
    /*let button = createButton("PLAY");
    button.position(width / 2, height / 2);

     button.mousePressed(gameScreen);*/


}

function gameScreen() {
    background("#4577ffff");

}

function endScreen() {
    background("#ff456aff");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonPlay.position(width / 2, height / 2);

}



