/**
 * Instruction Challenge
 * Shrook Ahmed
 * 
 * This is the instruction challenge where I have to draw a landscape.
 * It's an imaginary landscape in the moon where an extraterrestrial bird live.
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(920, 700);

}


/**
 * this is to draw the my landscape with a sky, a land, a planet, a house and a creature.
*/
function draw() {

    drawSky();
    drawLand();
    drawPlanet();
    drawHouse();
    drawCreature();

}
/** draw the sky and the stars */
function drawSky() {
    /**
     * this is the background
     * color which is the sky */

    background(0, 0, 139);

    //some circles for the stars
    push();
    fill("#ffffffff");
    noStroke();
    ellipse(100, 100, 5, 5);
    ellipse(150, 380, 5, 5);
    ellipse(300, 250, 8, 8);
    ellipse(400, 350, 6, 6);
    ellipse(450, 150, 4, 4);
    ellipse(600, 50, 5, 5);
    ellipse(900, 100, 7, 7);
    pop();

}
/** this is to draw
 * the land and some circles inside. The land is on the moon:)
 * */
function drawLand() {
    //draw land
    push();
    fill("#e0e0e0ff");
    noStroke();
    rect(0, 400, 920, 320);
    pop();

    //draw circles in land for the moon texture
    push();
    fill("#a7a7a7ff");
    noStroke();
    ellipse(100, 600, 30, 30);
    ellipse(300, 450, 80, 80);
    ellipse(550, 480, 60, 60);
    ellipse(600, 650, 40, 40);
    ellipse(700, 580, 50, 50);
    ellipse(900, 520, 70, 70);

    pop();

    push();
    fill("#c3c3c3ff");
    noStroke();
    ellipse(10, 500, 60, 60);
    ellipse(250, 650, 100, 100);
    ellipse(450, 550, 70, 70);
    ellipse(750, 480, 120, 120);
    pop();

}


/**draw  another planet that we can see from the moon*/

function drawPlanet() {

    // big circle
    push();
    fill("#d490ffff");
    noStroke();
    ellipse(220, 160, 180, 180);
    pop();

    // a smaller circle
    push();
    fill("#e0adffff");
    noStroke();
    ellipse(240, 160, 140, 140);
    pop();
}

/** this is to draw the house and 
 * the other components of a house */
function drawHouse() {
    drawBody();
    drawDoor();
    drawWindow();
    drawRoof();

    /**draw the main body of the house */
    function drawBody() {
        push();
        fill("#ffdb78ff");
        noStroke();
        rect(470, 150, 200, 250);
        pop();
        push();
        fill("#ffe59fff");
        noStroke();
        rect(470, 150, 170, 220);
        pop();
    }
    /**draw the door of the house and the doorknob */
    function drawDoor() {
        //draw door
        push();
        fill("#ed7070ff");
        noStroke();
        rect(520, 270, 100, 130);
        pop();
        push();
        push();
        fill("#945151ff");
        noStroke();
        rect(520, 370, 100, 30);
        pop();
        push();
        // draw doorknob
        push();
        fill("#ffbf3fff");
        noStroke();
        ellipse(600, 340, 10, 10);
        pop();
    }


    /** draw the window of the house*/
    function drawWindow() {
        //the outside of the window
        push();
        fill("#ed7070ff");
        noStroke();
        ellipse(570, 210, 90, 90);
        pop();

        //the inside1 of the window
        push();
        fill("#adc1ffff");
        noStroke();
        ellipse(570, 210, 70, 70);
        pop();

        //the inside2 of the window

        push();
        fill("#67708bff");
        noStroke();
        ellipse(570, 210, 50, 50);
        pop();
    }
    /** draw the house roof*/
    function drawRoof() {
        push();
        fill("#ed7070ff");
        noStroke();
        triangle(468, 151, 572, 70, 672, 151);
        pop();

    }

}


/**draw bird alien(creature) */

function drawCreature() {

    drawLegs();
    drawBody();
    drawEyes();
    drawNose();

    /**draw the legs of the creature */
    function drawLegs() {
        //leg one
        push();
        fill("#d29a00ff");
        noStroke();
        rect(705, 300, 10, 100);
        rect(705, 380, 50, 20);
        pop();

        // leg 2
        push();
        fill("#ffbb00ff");
        noStroke();
        rect(675, 300, 10, 100);
        rect(675, 380, 50, 20);
        pop();
    }

    /**draw the main body of our creature */
    function drawBody() {
        push();
        fill("#44cbcbff");
        noStroke();
        ellipse(700, 260, 100, 100);
        pop();

        push();
        fill("#52d5d5ff");
        noStroke();
        ellipse(700, 260, 80, 80);
        pop();
    }


    /**draw the eyes of the creature */
    function drawEyes() {
        //draw eye 1
        push();
        fill("#ffffffff");
        noStroke();
        ellipse(675, 255, 25, 25);
        pop();
        //draw inside eyes 1
        push();
        fill("#000000ff");
        noStroke();
        ellipse(675, 255, 15, 15);
        pop();

        //draw eye 2
        push();
        fill("#ffffffff");
        noStroke();
        ellipse(725, 255, 25, 25);
        pop();
        //draw inside eye 2
        push();
        fill("#000000ff");
        noStroke();
        ellipse(725, 255, 15, 15);
        pop();
    }

    /**bird alien nose */
    function drawNose() {
        push();
        fill("#ffd500ff");
        noStroke();
        rect(695, 265, 30, 10);
        pop();
    }
}







