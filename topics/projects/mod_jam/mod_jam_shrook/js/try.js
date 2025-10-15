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
    }
    else if (gameState == "play") {
        gameScreen();
    }
    else if (gameState == "end") {
        endScreen();
    }
}

function startScreen() {
    background("#a545ffff");

}

function gameScreen() {
    background("#4577ffff");
}

function endScreen() {
    background("#ff456aff");
}


