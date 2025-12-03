/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the red variation starts
 */
let player1 = {
    body: {
        x: 320, // x position of player1
        y: 520,// y position of player1
        size: 100
    },
    score: 0
};
let human_1 = {
    x: 300, // x position of human1
    y: 300,//y position of human1

    size: 50, //size for the overlap
    speed: 3, // speed of human1
    acceleration: 0.005, //to make human1 go faster
    size: 80

};



function redSetup() {

}

/**
 * This will be called every frame when the red variation is active
 */
function redDraw() {
    background("red");
    image(space, 0, 0, width, height, 0, 0, startPage.width, startPage.height, COVER);


}


/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {

}