"use strict";



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let player1 = {
    body: {
        x: 320,
        y: 520,
        size: 200
    },
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        state: "idle"
    }
};

let fly = {
    x: 0,
    y: 200,
    size: 10,
    speed: 3
};

let finishState = "none";
let gameState = "start";
let score = 0;
let buttonPlay;
//let startButtonCreated = false;


/**
 * creates the canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);


    buttonPlay = createButton("PLAY"); //this create a button
    buttonPlay.position(width / 2, height / 2); //this is the position of the button
    buttonPlay.mousePressed(gameStarted);//call function gameStarted when pressing on the button


}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {


    if (gameState == "start") {
        startScreen();
    }
    else if (gameState == "play") {
        gameScreen();
        moveFly();
        drawFly();
        movePlayer1();
        moveTongue();
        drawPlayer1();
        checkTongueFlyOverlap();
    }
    else if (gameState == "end") {
        endScreen();
    }
}

//this was a try of mouse pressed because the button was not working
/*function mousePressed(event) {
    if (gameState == "start") {
        gameState = "play";
    }


}*/

function startScreen() {
    background("#a545ffff");

    //My button was here but I didn't really feel that was a good idea
    /*let button = createButton("PLAY");
    button.position(width / 2, height / 2);

     button.mousePressed(gameScreen);*/

    //prevent button to be created over and over again
    /*if (!startButtonCreated) {
        buttonPlay = createButton("PLAY"); //this create a button
        buttonPlay.position(width / 2, height / 2); //this is the position of the button
    }
    startButtonCreated = true;*/


}

function gameScreen() {
    background("#4577ffff");


}

function moveFly() {

    //move fly
    fly.x += fly.speed;
    //handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * draw the fly
 */

function drawFly() {
    push();
    fill("#4c0404ff");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Reset the fly to the left
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Move player1 to the mouse position on x
 */
function movePlayer1() {
    player1.body.x = mouseX;
}

/**
 * to make tongue move
 */
function moveTongue() {

    //tongue matches player1's x
    player1.tongue.x = player1.body.x;

    //if tongue idle, doesn't do anything
    if (player1.tongue.state === "idle") {
        //nothing
    }
    //if thw tongue is outbound, it moves up
    else if (player1.tongue.state === "outbound") {
        player1.tongue.y += -player1.tongue.speed;
        // tongue bounces back if it hits the top
        if (player1.tongue.y <= 0) {
            player1.tongue.state = "inbound";
        }
    }
    else if (player1.tongue.state === "inbound") {
        player1.tongue.y += player1.tongue.speed;


        if (player1.tongue.y >= height) {
            player1.tongue.state = "idle";
        }
    }
}

function drawPlayer1() {
    //to make player1 at the bottom
    player1.body.y = height;
    //draw tongue tip
    push();
    fill("#ffd000ff");
    noStroke();
    ellipse(player1.tongue.x, player1.tongue.y, player1.tongue.size);
    pop();


    //draw rest of tongue
    push();
    stroke("#ffd000ff");
    strokeWeight(player1.tongue.size);
    line(player1.tongue.x, player1.tongue.y, player1.body.x, player1.body.y);
    pop();

    // player 1 body
    push();
    fill("#4400ffff");
    noStroke();
    ellipse(player1.body.x, player1.body.y, player1.body.size);
    pop();

}

/**
 * tongue overlapping the fly
 */

function checkTongueFlyOverlap() {
    //distance from tongue to fly
    const d = dist(player1.tongue.x, player1.tongue.y, fly.x, fly.y);
    //check if overlap
    const eaten = (d < player1.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        //reset the fly
        resetFly();
        //bring tongue back
        player1.tongue.state = "inbound";
    }

}

/**
 * launch tongue on click
 */

function mousePressed() {
    if (player1.tongue.state === "idle") {
        player1.tongue.state = "outbound";
    }
}

function endScreen() {
    background("#ff456aff");
}

function gameStarted() {
    gameState = "play";
    buttonPlay.hide();//make button hide in the play state
}

/*resize canvas with different screen*/
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonPlay.position(width / 2, height / 2);

}



