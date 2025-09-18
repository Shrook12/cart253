/**
 * Mr. Furious
 * Shrook Ahmed + Blaise Treverton
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
    },


    velocity: {
        x: 1,
        y: 0.5

    }


};

let rage = {
    min: -5,
    max: 5,
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


    rage.min = rage.min - 0.1;
    rage.max = rage.max + 0.1;
    mrFurious.x = constrain(mrFurious.x, 100, 300);



    mrFurious.x = mrFurious.x + random(rage.min, rage.max);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    bird();
}

function bird() {
    birdProperties.x = birdProperties.x + birdProperties.velocity.x;
    birdProperties.x = constrain(birdProperties.x, 30, 300);
    birdProperties.y = birdProperties.y + birdProperties.velocity.y;
    birdProperties.y = constrain(birdProperties.y, 150, 250);

    push();
    fill(birdProperties.fill.r, birdProperties.fill.g, birdProperties.fill.b);
    noStroke();
    rect(birdProperties.x, birdProperties.y, 50, 20);
    pop();
}
