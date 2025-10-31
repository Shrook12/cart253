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
// this are the properties of player1
let player1 = {
    body: {
        x: 320,
        y: 520,

    },
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        state: "idle"
    }
};

// properties of player 2
let player2 = {
    body: {
        x: 320,
        y: 50,
        size: 250
    },
    tongue: {
        x: undefined,
        y: 100,
        size: 20,
        speed: 20,
        state: "idle"
    }
};
//properties of the fly

let fly = {
    x: 0,
    y: 200,
    size: 50,
    speed: 3,
    acceleration: 0.003
};

let timer = {
    startTime: 0,
    timePassed: 0,
    timeInterval: 60000,
    speed: 1
}

let finishState = "none";
let gameState = "start";
let score1 = 0;
let score2 = 0;
let buttonPlay;
let img;
let playerImg;
let playerImg2;
let human;
let soundOnClick;
let soundOverlap;
let startPage;
let myFont;
let music;

//let startButtonCreated = false;

function preload() {
    img = loadImage('../assets/images/space.png');
    playerImg = loadImage('../assets/images/player1.png');
    playerImg2 = loadImage('../assets/images/player2.png');
    human = loadImage('../assets/images/human1.png');
    soundOnClick = loadSound('../assets/sounds/sound_click2.wav');
    soundOverlap = loadSound('../assets/sounds/sound1.wav');
    startPage = loadImage('../assets/images/start_page.png');
    music = loadSound('../assets/sounds/music_game2.mp3');


}


/**
 * creates the canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    //music.play();
    // music.loop();
    //music.setVolume(0.2);



    buttonPlay = createButton("PLAY"); //this create a button
    buttonPlay.position(100, height / 1.7); //this is the position of the button
    buttonPlay.mousePressed(gameStarted);//call function gameStarted when pressing on the button
    buttonPlay.size(400, 150);
    buttonPlay.style("background-color", "#000000");
    buttonPlay.style("font-size", "72px");
    buttonPlay.style("font-family", "Arial");
    buttonPlay.style("border-radius", "10px");
    buttonPlay.style("color", "white");
    buttonPlay.style("font-weight", "bold");
    buttonPlay.style("border", "8px solid white");


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
        moveTonguePlayer2();
        drawPlayer1();
        drawPlayer2();
        checkTongueFlyOverlap();
        keyboard();
        checkTongueOverlapPlayer2();
        displayScore();
        displayTime();


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
    background(255);
    image(startPage, 0, 0, width, height, 0, 0, startPage.width, startPage.height, COVER);
    timer.startTime = millis();



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

/*function planetStart() {
    push();
    image(startPage, 0, 0);
    pop();



}*/


function gameScreen() {
    background(255);

    image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);

    //this part is for me:
    // millis() = time since started running
    //so millis()-timer.startTime =. the time since play began
    //int() converts decimal number to an integer


}
function displayTime() {

    //to make timer start when entering the game state
    timer.timePassed = millis() - timer.startTime;
    // this is to make timer go faster after 30 seconds
    if (timer.timePassed > 30000) {
        //after 30 seconds has passed 
        let after = timer.timePassed - 30000;
        //make timer go faster
        timer.timePassed = 30000 + after * 3;
    }

    let timeLeft = int((timer.timeInterval - timer.timePassed) / 1000);


    fill("#ffff00ff");
    textSize(60);
    text(timeLeft, width / 2, 40);
    if (timer.timePassed > timer.timeInterval) {
        gameState = "end"

        if (score1 > score2) {
            finishState = "Player 1 wins"
        }
        else if (score2 > score1) {
            finishState = "Player 2 wins"

        }
        else if (score1 === score2) {
            finishState = "Draw"
        }

    }
}


function moveFly() {
    fly.speed += fly.acceleration;
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
    imageMode(CENTER);
    image(human, fly.x, fly.y);
    pop();
}

/**
 * Reset the fly to the left
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(125, height - 125);
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
    //if the tongue is outbound, it moves up
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

function moveTonguePlayer2() {

    player2.tongue.x = player2.body.x;

    if (player2.tongue.state === "idle") {
        //do nothing
    }
    else if (player2.tongue.state === "outbound") {
        player2.tongue.y += player2.tongue.speed;

        if (player2.tongue.y >= windowHeight) {
            player2.tongue.state = "inbound";
        }
    }
    else if (player2.tongue.state === "inbound") {
        player2.tongue.y += -player2.tongue.speed;

        if (player2.tongue.y <= 0) {
            player2.tongue.state = "idle";
        }
    }

}



function drawPlayer1() {
    //player1.body.x = width/2;
    //to make player1 at the bottom
    player1.body.y = height - 50;
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
    imageMode(CENTER);
    image(playerImg, player1.body.x, player1.body.y);
    pop();

}

function drawPlayer2() {
    push();
    fill("#5eff00ff");
    noStroke();
    ellipse(player2.tongue.x, player2.tongue.y, player2.tongue.size);
    pop();


    //draw rest of tongue
    push();
    stroke("#80ff00ff");
    strokeWeight(player2.tongue.size);
    line(player2.tongue.x, player2.tongue.y, player2.body.x, player2.body.y);
    pop();

    push();
    imageMode(CENTER);
    image(playerImg2, player2.body.x, player2.body.y);
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
        score1++;
        //bring tongue back
        player1.tongue.state = "inbound";
        soundOverlap.play();
    }

}

function checkTongueOverlapPlayer2() {
    const d = dist(player2.tongue.x, player2.tongue.y, fly.x, fly.y);

    const eaten = (d < player2.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        resetFly();
        score2++;
        player2.tongue.state = "inbound";
        soundOverlap.play();
    }
}

function displayScore() {
    push();
    textSize(45);
    fill("#2c2c6cff");
    text(score1, player1.body.x - 15, height - 5);
    pop();

    push();
    textSize(45);
    fill("#2c2c6cff");
    text(score2, player2.body.x - 10, 40);
    pop();
}
function displayFinishSate() {
    push();
    textSize(24);
    fill("#fff700ff");
    text(finishState, width / 2, height / 2);
    pop();
}

/**
 * launch tongue on click
 */

function mousePressed() {
    if (gameState === "play") {
        soundOnClick.play();
    }
    if (player1.tongue.state === "idle") {
        player1.tongue.state = "outbound";
    }

}



function keyPressed(event) {
    if (gameState === "play" && keyCode === DOWN_ARROW) {
        soundOnClick.play();
    }
    if (keyCode === DOWN_ARROW) {
        if (player2.tongue.state === "idle") {
            player2.tongue.state = "outbound";
        }
    }
}

function keyboard() {
    player2.body.x = constrain(player2.body.x, 0, windowWidth);
    if (keyIsDown(LEFT_ARROW) === true) {
        player2.body.x += -15;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        player2.body.x += 15;
    }
}



/*function keyPressed(event) {
    if (keyCode === RIGHT_ARROW) {
        player2.body.x += 10;
    } else if (keyCode === LEFT_ARROW) {
        player2.body.x += -10;
    }

}*/

/*function checkTongueOverlapPlayer2() {
    //distance from tongue to fly
    const d = dist(player2.tongue.x, player2.tongue.y, fly.x, fly.y);
    //check if overlap
    const eaten = (d < player2.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        //reset the fly
        resetFly();
        //bring tongue back
        player2.tongue.state = "outbound";
    }

}

/**
 * launch tongue on click
 

function keyPressed(event) {
    if (player2.tongue.state === "idle") {
        player2.tongue.state = "inbound";
    }
}
*/
function endScreen() {
    background("#ff456aff");
    image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
    displayFinishSate();

}

function gameStarted() {
    gameState = "play";
    buttonPlay.hide();//make button hide in the play state
}


/*resize canvas with different screen*/
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonPlay.position(100, height / 1.7);

}



