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
//let startButtonCreated = false;


/**
 * creates the canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    buttonPlay = createButton("PLAY"); //this create a button
    buttonPlay.position(width / 2, height / 2); //this is the position of the button
    buttonPlay.mousePressed(gameStarted);//call function gameStarted when pressing on the button


}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    if (gameState == "start") {
        startScreen();
    }
    else if (gameState == "play") {
        gameScreen();
    }
    else if (gameState == "end") {
        endScreen();
    }
}

//this was a try of mouse pressed because the button was not working
/*function mousePressed(event) {
    if (gameState == "start") {
        gameState = "play";
    }


}*/

function startScreen() {
    background("#a545ffff");

    //My button was here but I didn't really feel that was a good idea
    /*let button = createButton("PLAY");
    button.position(width / 2, height / 2);

     button.mousePressed(gameScreen);*/

    //prevent button to be created over and over again
    /*if (!startButtonCreated) {
        buttonPlay = createButton("PLAY"); //this create a button
        buttonPlay.position(width / 2, height / 2); //this is the position of the button
    }
    startButtonCreated = true;*/


}

function gameScreen() {
    background("#4577ffff");

}

function endScreen() {
    background("#ff456aff");
}

function gameStarted() {
    gameState = "play";
    buttonPlay.hide();//make button hide in the play state
}

/*resize canvas with different screen*/
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonPlay.position(width / 2, height / 2);

}



