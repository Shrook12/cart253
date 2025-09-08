/**
 * The Blank Page
 * Shrook
 * 
 *An exploration of the existential angst of a novelist confronting
 * the blank page while under huge pressure from their publisher.
 * 
 * The program is non-interactive intentionally in order to simulate the
 * writer's inability to get started on the project. 
 */

"use strict";

/**
 * Create a canvas for our masterpiece
 */
function setup() {
    //Create the canvas at a standard resolution
    createCanvas(640, 480);
}

/**
 * Draws the writer's desktop and a blank piece of paper
 */
function draw() {
    // the pink desktop
    background(255, 100, 100);
    //the blank piece of paper
    rect(200, 80, 240, 320);
}