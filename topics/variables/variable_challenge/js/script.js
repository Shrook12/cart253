/**
 * Mr. Furious
 * Shrook Ahmed
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};
let skyColor = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
};
let birdProperties = {
    x: 30,
    y: 200,

    fill: {
        r: 64,
        g: 224,
        b: 208
    }

}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    background(skyColor.fill.r, skyColor.fill.g, skyColor.fill.b);
    skyColor.fill.r = skyColor.fill.r - 1;
    skyColor.fill.g = skyColor.fill.g - 1;
    skyColor.fill.b = skyColor.fill.b - 1;
    skyColor.fill.b = constrain(skyColor.fill.b, 139, 200);



    mrFurious.fill.g = mrFurious.fill.g - 1;
    mrFurious.fill.b = mrFurious.fill.b - 1;

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    bird();
}

function bird() {
    birdProperties.x = birdProperties.x + 1;
    push();
    fill(birdProperties.fill.r, birdProperties.fill.g, birdProperties.fill.b);
    noStroke();
    rect(birdProperties.x, birdProperties.y, 50, 20);
    pop();
}
