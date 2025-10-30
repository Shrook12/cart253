/**
 * Boingo
 * Shrook Ahmed
 *
 * A ball that bounces around on the canvas
 */

let ball1 = undefined; // Will create it with createBall()
let ball2 = undefined;
let balls = [];
let cMouseX = 0;
let cMouseY = 0;

/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);

    // Create the ball
    ball1 = createBall();
    ball2 = createBall();
    frameRate(30);
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties


    let x = mouseX - pmouseX


    let y = mouseY - pmouseY
    console.log(y)



    const newBall = {
        // Position and dimensions
        x: mouseX,
        y: mouseY,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: x,
            y: y
        }
    };
    return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");



    for (let ball of balls) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }



    console.log(mouseX)
    console.log(pmouseX)
    line(pmouseX, pmouseY, mouseX, mouseY);

}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {



    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {


    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();

}

function mousePressed() {
    let newBall = createBall();
    balls.push(newBall);
    console.log(balls);

}
