/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let indexAnimation = 0;
let totalIndex = 7;

let frameAnimation = [];


/**
 * Create the canvas
*/
function dangerSetup() {

}



function dangerDraw() {
    background("black");



    frameAnimation = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

    imageMode(CENTER);
    image(frameAnimation[indexAnimation], width / 2, height / 2);
    if (indexAnimation < totalIndex - 1)
        indexAnimation += 1;

    if (indexAnimation >= totalIndex - 1) {
        frameAnimation = frameAnimation[6];
    }





}