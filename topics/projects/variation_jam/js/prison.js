/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";





/**
 * Create the canvas
*/
function prisonSetup() {

}



function prisonDraw() {

    image(prisonImg, 0, 0, width, height, 0, 0, prisonImg.width, prisonImg.height, COVER);



    drawTextEnd("YOU WIN!", "Now they are in prison for the crime they did.", width / 2, height - 150, 600, "#00c735ff", fontGhost);




}