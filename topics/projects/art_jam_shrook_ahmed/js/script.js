/**
 * Art Jam
 * Shrook Ahmed
 * 
 * This is my portrait
 */

"use strict";


let hijab =
{
    shape: {
        x: 295,
        y: 200,
        w: 300,
        h: 350,
        corner: 155
    },
    shadow: {
        x: 295,
        y: 200,
        fills: {

            purple_2: "#7b5ca7",
            color_2: " rgba(222, 225, 140, 1)"
        },
        w: 320,
        h: 370,
        corner: 155
    },
    neck: {
        x: 340,
        y: 500,
        w: 250,
        h: 100,
        corner: 150
    },
    bottom: {
        x: 320,
        y: 500,
        w: 100,
        h: 270,
        corner: 150
    },
    purple_1: "#876aaf",
    color_1: "#fcffa1ff"

}

let faceShape =
{
    face: {
        x: 335,
        y: 250,
        fill: "#e18e71",
        w: 230,
        h: 250,
        corner: 150
    },
    shadow: {
        x: 325,
        y: 250,
        fill: "#de8463ff",
        w: 250,
        h: 270,
        corner: 150

    }


}
let sweater =
{
    sleeveLeft: {
        x: 500,
        y: 350,

        w: 80,
        h: 400,
        corner: 100
    },
    sweater: {
        x: 335,
        y: 530,

        w: 250,
        h: 400,
        corner: 100
    },
    fill: "#2b2b2bff"

}
let eye = {
    left: {
        x: 360,
        y: 320,

        w: 75,
        h: 95,
        corner: 60

    },
    right: {
        x: 465,
        y: 320,

        w: 75,
        h: 95,
        corner: 60

    },
    fill: "#ffffffff"

}
let insideEyes = {
    left: {
        x: 380,
        y: 340,

        w: 30,
        h: 45,
        corner: 60

    },
    right: {
        x: 485,
        y: 340,

        w: 30,
        h: 45,
        corner: 60

    },
    fill: "#000000ff"
}

let mouth = {
    x: 450,
    y: 435,
    w: 110,
    h: 110,
    fill: "#3b2f2fff"
}

/**
 * draw the background
*/
function setup() {
    //create the canva
    createCanvas(900, 800);

}


/**
 *
*/
function draw() {
    background("#023975ff");

    drawSweater();
    drawHijab();
    drawFace();
    drawEyes();
    drawMouth();
    drawCircle();
    checkInput();

}
/**
 * here is to draw the the dark grey sweater
 */
function drawSweater() {
    //left sleeve
    push();
    noStroke();
    fill(sweater.fill);
    rotate(QUARTER_PI / 2);
    rect(sweater.sleeveLeft.x, sweater.sleeveLeft.y, sweater.sleeveLeft.w, sweater.sleeveLeft.h, sweater.sleeveLeft.corner);
    pop();

    //right sleeve

    push();
    noStroke();
    fill("#2b2b2bff");
    rotate(-2);
    rect(550, 550, 80, 400, 100);
    pop();


    //main part of the sweater
    push();
    noStroke();
    fill(sweater.fill);
    rect(sweater.sweater.x, sweater.sweater.y, sweater.sweater.w, sweater.sweater.h, sweater.sweater.corner);
    pop();

}

/**
 * this part was to draw the hijab(the head covering)
 */
function drawHijab() {
    //the part of the hijab that's around the neck
    push();
    noStroke();
    fill(hijab.purple_1);
    rect(hijab.neck.x, hijab.neck.y, hijab.neck.w, hijab.neck.h, hijab.neck.corner);
    pop();
    //the part that's left of the hijab that come on the shoulder
    push();
    noStroke();
    fill(hijab.purple_1);
    rect(hijab.bottom.x, hijab.bottom.y, hijab.bottom.w, hijab.bottom.h, hijab.bottom.corner);
    pop();

    //to give a shadow feeling
    push();
    noStroke();
    fill(hijab.shadow.fills.purple_2);
    rect(hijab.shadow.x, hijab.shadow.y, hijab.shadow.w, hijab.shadow.h, hijab.shadow.corner);
    pop();
    //to draw the main part of the hijab
    push();
    noStroke();
    fill(hijab.purple_1);
    rect(hijab.shape.x, hijab.shape.y, hijab.shape.w, hijab.shape.h, hijab.shape.corner);
    pop();

}

/**this part is to draw the face */

function drawFace() {
    //this part is to draw the shadow of the face
    push();
    noStroke();
    fill(faceShape.shadow.fill);
    rect(faceShape.shadow.x, faceShape.shadow.y, faceShape.shadow.w, faceShape.shadow.h, faceShape.shadow.corner);
    pop();

    //this part is to draw the face
    push();
    noStroke();
    fill(faceShape.face.fill);
    rect(faceShape.face.x, faceShape.face.y, faceShape.face.w, faceShape.face.h, faceShape.face.corner);
    pop();

}
/**
 * this part is to draw the eyes and iris of the face
 */
function drawEyes() {
    // draw the left eye
    push();
    noStroke();
    fill(eye.fill);
    rect(eye.left.x, eye.left.y, eye.left.w, eye.left.h, eye.left.corner);
    pop();
    // draw the right eye
    push();
    noStroke();
    fill(eye.fill);
    rect(eye.right.x, eye.right.y, eye.right.w, eye.right.h, eye.right.corner);
    pop();
    // draw the left iris of the eyes
    push();
    noStroke();
    fill(insideEyes.fill);
    rect(insideEyes.left.x, insideEyes.left.y, insideEyes.left.w, insideEyes.left.h, insideEyes.left.corner);
    pop();
    // draw the right iris of the eyes
    push();
    noStroke();
    fill(insideEyes.fill);
    rect(insideEyes.right.x, insideEyes.right.y, insideEyes.right.w, insideEyes.right.h, insideEyes.right.corner);
    pop();
}
/**
 * this part is to draw the mouth
 */
function drawMouth() {
    //draw mouth
    push();
    noStroke();
    fill(mouth.fill);
    arc(mouth.x, mouth.y, mouth.w, mouth.h, PI + PI, PI);
    pop();

}

function drawCircle() {
    push();
    fill("#ffdd00ff");
    noStroke();
    ellipse(mouseX, mouseY, 60, 60);
    pop();
}

function checkInput() {
    const distance = dist(mouseX, mouseY, hijab.shape.x, hijab.shape.y);
    const mouseIsOverlapping = (distance < hijab.shape.x / 2);
    if (mouseIsOverlapping) {
        hijab.purple_1 = hijab.color_1;
        hijab.shadow.fills.purple_2 = hijab.shadow.fills.color_2;
    }
}

