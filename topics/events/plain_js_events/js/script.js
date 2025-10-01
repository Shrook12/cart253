/**
 * Plain JavaScript
 * Shrook Ahmed
 * 
 *
 * Experimenting with event handling in plain JavaScript
 */

"use strict";

// information about the current and possible background fills
const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#ffffff"
    },
    switchKey: 32 // space bar
}
/**
 * Creates the Canvas
*/
function setup() {
    createCanvas(400, 400);

    //listen for keypresses
    window.addEventListener("keydown", changeBG);
}


/**
 * Displays the background
*/
function draw() {
    background(bg.fill);

}

/**
 * Switches the background from black to white
 */

function changeBG(event) {
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }
}
