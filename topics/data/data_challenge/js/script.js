/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";



// Starts with the instruction
let carName = undefined;
let dinosaurName = "";

/**
 * Load the car, dinosaur and language data
 */
function preload() {
    carData = loadJSON("assets/data/cars.json");
    dinosaurData = loadJSON("assets/data/dinosaurs.json");
    langData = loadJSON("assets/data/lang.json");


}



/**
 * Create the canvas
*/

function setup() {
    createCanvas(600, 400);
    // if language is fr then take the french instruction from the lang.js
    if (lang === "fr") {
        carName = langData.language.fr;
    }
    // if language is fr then take the english instruction from the lang.js
    else if (lang === "en") {
        carName = langData.language.en;
    }
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {


    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName + dinosaurName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    //choose a random car
    carName = random(carData.cars);
    //choose a random dinosaur
    dinosaurName = random(dinosaurData.dinosaurs);


}
