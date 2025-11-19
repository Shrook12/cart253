/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";
let buttonVersion1;
let buttonVersion2;
let buttonVersion3;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);

    buttonVersion1 = createButton("var1"); //this create a button
    buttonVersion1.mousePressed(redSetup);//call function gameStarted when pressing on the button
    buttonVersion2 = createButton("var2"); //this create a button
    buttonVersion2.mousePressed(blueSetup);//call function gameStarted when pressing on the button
    buttonVersion3 = createButton("var3"); //this create a button
    buttonVersion3.mousePressed(greenSetup);//call function gameStarted when pressing on the button

}



/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuSetup();
            break;
        case "red-variation":
            redDraw();
            break
        case "green-variation":
            greenDraw();
            break;
        case "blue-variation":
            blueDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "red-variation":
            redMousePressed();
            break
        case "green-variation":
            greenMousePressed();
            break;
        case "blue-variation":
            blueMousePressed();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "red-variation":
            redKeyPressed(event);
            break
        case "green-variation":
            greenKeyPressed(event);
            break;
        case "blue-variation":
            blueKeyPressed(event);
            break;
    }
}