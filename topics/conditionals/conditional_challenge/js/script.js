/**
 * Circle Master
 * Shrook Ahmed
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",
    speed: 2
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

const target = {
    x: 300,
    y: 200,
    size: 50,
    fill: "#4668ffff",
    fill2: "#da46ffff"

};
/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();
    movePuck();
    checkTarget();

    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();
}

function movePuck() {

    // we are making puck to move

    const distance = dist(user.x, user.y, puck.x, puck.y);
    const mouseIsOverlapping = (distance < puck.size / 2);

    if (mouseIsOverlapping) {
        //puck.x = puck.x + 10;
        if (mouseX < puck.x) {
            puck.x = puck.x + puck.speed;
        } else {
            puck.x = puck.x - puck.speed;
        }
        if (mouseY < puck.y) {
            puck.y = puck.y + puck.speed;
        } else {
            puck.y = puck.y - puck.speed;
        }
    }



};

function checkTarget() {

    const distance = dist(puck.x, puck.y, target.x, target.y);
    const mouseIsOverlapping = (distance < target.size);

    if (mouseIsOverlapping) {
        target.fill = target.fill2;
    }

};

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

function drawTarget() {

    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();

}
