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

/*let iceCream = {
    size: {
        ellipseSize: 100,
        triangleX1: 397,
        triangleY1: 400,
        triangleX2: 450,
        triangleY2: 600,
        triangleX3: 503,
        triangleY3: 400,

    }
}*/

let colorCircles = {
    sizes: {
        s1: 200,
        s2: 100,
        s3: 150,

    },
    location: {
        x1: 200,
        y1: 200,
        x2: 300,
        y2: 600,
        x3: 750,
        y3: 400
    },
    colors: {
        color1: "#ff2c2cff",
        color2: "#fff82cff",
        color3: "#6090ffff"
    },
    sizeChange: 0.7
}
let userRect = {
    x: undefined,
    y: undefined,
    fill: "#ffdd00ff",
    w: 60,
    h: 60
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


    drawColor1();
    drawColor2();
    drawColor3();
    drawSweater();
    drawHijab();
    drawFace();
    drawEyes();
    drawMouth();
    drawCircle();
    //   drawIcecream();
    checkInput();



}


/**function drawIcecream() {


    //draw ice cream ball
    push();
    noStroke();
    fill("#7a5c58ff");
    ellipse(450, 400, iceCream.size.ellipseSize, iceCream.size.ellipseSize);
    pop();

    //ice cream bottom part
    push();
    noStroke();
    fill("#ffd966ff");
    //triangle(397, 400, 450, 600, 503, 400);
    triangle(iceCream.size.triangleX1, iceCream.size.triangleY1, iceCream.size.triangleX2, iceCream.size.triangleY2, iceCream.size.triangleX3, iceCream.size.triangleY3);
    pop();
    //line on ice cream
    push();
    strokeWeight(5);
    stroke("#ffbd38ff");
    line(405, 405, 485, 450);
    line(410, 440, 477, 485);
    line(419, 475, 469, 520);
    line(430, 515, 460, 555);
    line(498, 404, 410, 440);
    line(490, 435, 422, 480);
    line(480, 475, 434, 520);
    pop();
}*/

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

//mouse
function drawCircle() {
    userRect.x = mouseX;
    userRect.y = mouseY;
    push();
    fill(userRect.fill);
    noStroke();
    rect(userRect.x, userRect.y, userRect.w, userRect.h);
    pop();
}


function checkInput() {
    const overlap = (userRect.x + userRect.w / 2 > hijab.shape.x - hijab.shape.w / 2 &&
        userRect.x - userRect.w / 2 < hijab.shape.x + hijab.shape.w / 2 && userRect.y + userRect.h / 2 > hijab.shape.y - hijab.shape.h / 2 && userRect.y - userRect.h / 2 < hijab.shadow.y + hijab.shadow.h / 2)
    //const distance = dist(mouseX, mouseY, hijab.shape.x, hijab.shape.y);
    //const mouseIsOverlapping = (distance < hijab.shape.w / 2);

    /*if (mouseIsOverlapping) {
        hijab.purple_1 = hijab.color_1;
        hijab.shadow.fills.purple_2 = hijab.shadow.fills.color_2;
    }*/
    if (overlap) {
        hijab.purple_1 = hijab.color_1;
        hijab.shadow.fills.purple_2 = hijab.shadow.fills.color_2;
    }
}

function drawColor1() {
    colorCircles.sizes.s1 += colorCircles.sizeChange;
    colorCircles.sizes.s1 = constrain(colorCircles.sizes.s1, 0, 700);
    push();
    fill(colorCircles.colors.color1);
    noStroke();
    ellipse(colorCircles.location.x1, colorCircles.location.y1, colorCircles.sizes.s1, colorCircles.sizes.s1);
    pop();
}
function drawColor2() {
    colorCircles.sizes.s2 += colorCircles.sizeChange;
    colorCircles.sizes.s2 = constrain(colorCircles.sizes.s2, 0, 500);
    push();
    fill(colorCircles.colors.color2);
    noStroke();
    ellipse(colorCircles.location.x2, colorCircles.location.y2, colorCircles.sizes.s2, colorCircles.sizes.s2);
    pop();
}

function drawColor3() {
    colorCircles.sizes.s3 += colorCircles.sizeChange;
    colorCircles.sizes.s3 = constrain(colorCircles.sizes.s3, 0, 800);
    push();
    fill(colorCircles.colors.color3);
    noStroke();
    ellipse(colorCircles.location.x3, colorCircles.location.y3, colorCircles.sizes.s3, colorCircles.sizes.s3);
    pop();
}

