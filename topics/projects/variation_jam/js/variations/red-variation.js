/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the red variation starts
 */
let player1 = {
    body: {
        x: 320, // x position of player1
        y: 520,// y position of player1

    },
    hand: {
        x: undefined, // x position of the hand of player1
        y: 480,// Y position of the hand of player1
        size: 22,// size hand player1
        speed: 70, //speed of hand of player 1 when it goes out
        state: "idle", //current state of hand player 1
        fill: "#83b12b" // color of hand
    },
    score: 0
};
let human_1 = {
    x: 0, // x position of human1
    y: 300,//y position of human1
    size: 50, //size for the overlap
    speed: 3, // speed of human1
    acceleration: 0.005 //to make human1 go faster
};


function redSetup() {

}

/**
 * This will be called every frame when the red variation is active
 */
function redDraw() {
    background("red");
    image(space, 0, 0, width, height, 0, 0, startPage.width, startPage.height, COVER);

    drawHuman(humanImg, human_1);
    drawPlayer(player1, playerImg);
    keyboardPlayer();
    keyboradHuman();

}

//to draw the players
function drawPlayer(obj, temp_img) {
    // to make player one height at height - 50
    //draw hand tip
    push();
    fill(obj.hand.fill);
    noStroke();
    ellipse(obj.hand.x, obj.hand.y, obj.hand.size);
    pop();


    //draw rest of the hand
    push();
    stroke(obj.hand.fill);
    strokeWeight(player1.hand.size);
    line(obj.hand.x, obj.hand.y, obj.body.x, obj.body.y);
    pop();

    // player body
    push();
    imageMode(CENTER);
    image(temp_img, obj.body.x, obj.body.y);
    pop();

}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function redKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

function keyboardPlayer() {
    //contrain player 2 to the canvas size
    player1.body.x = constrain(player1.body.x, 0, windowWidth);
    player1.body.y = constrain(player1.body.y, 0, windowHeight);
    //if key right is being pressed move player to the left
    if (keyIsDown(RIGHT_ARROW) === true) {
        player1.body.x += -25;
    }
    //if key left is being pressed move player to the right
    if (keyIsDown(LEFT_ARROW) === true) {
        player1.body.x += 25;
    }
    if (keyIsDown(DOWN_ARROW) === true) {
        player1.body.y += -25;
    }
    //if key left is being pressed move player to the right
    if (keyIsDown(UP_ARROW) === true) {
        player1.body.y += 25;
    }
}
function drawHuman(img_human, obj) {
    push();
    imageMode(CENTER);//uses the ((x,y) coordinates as the image center point. 
    image(img_human, obj.x, obj.y);
    pop();
}
function keyboradHuman() {
    //contrain player 2 to the canvas size
    human_1.x = constrain(human_1.x, 0, windowWidth);
    human_1.y = constrain(human_1.y, 0, windowHeight);
    //if key right is being pressed move player to the left
    if (keyIsDown(RIGHT_ARROW) === true) {
        human_1.x += -10;
    }
    //if key left is being pressed move player to the right
    if (keyIsDown(LEFT_ARROW) === true) {
        human_1.x += 10;
    }
    if (keyIsDown(DOWN_ARROW) === true) {
        human_1.y += -10;
    }
    //if key left is being pressed move player to the right
    if (keyIsDown(UP_ARROW) === true) {
        human_1.y += 10;
    }
}
/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {

}