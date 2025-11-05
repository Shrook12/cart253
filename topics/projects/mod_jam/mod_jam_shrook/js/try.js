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
        x: 320, // x position of player1
        y: 520,// y position of player1

    },
    hand: {
        x: undefined, // x position of the hand of player1
        y: 480,// Y position of the hand of player1
        size: 22,
        speed: 60,
        state: "idle",
        fill: "#83b12b"
    }
};

// properties of player 2
let player2 = {
    body: {
        x: 320,
        y: 50,
        size: 250
    },
    hand: {
        x: undefined,
        y: 100,
        size: 22,
        speed: 60,
        state: "idle",
        fill: "#a938bf"
    }
};
//properties of the fly

let fly = {
    x: 0,
    y: 300,
    size: 50,
    speed: 3,
    acceleration: 0.005
};

let timer = {
    startTime: 0,
    timePassed: 0,
    timeInterval: 90000,
    speed: 1,
    size: 90,
    x: undefined,
    y: 90
}
let speechBox = {
    x: 125,
    y: 50,
    w: 1200,
    h: 700,
    padding: 20

}

let planet = {
    x: -1500,
    y: -200,
    speed: 50
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
let spaceship1;
let spaceship2;
let planetImg;



let instruction = [];
let instructionIndex = 0;
let images = [];
let imagesIndex = 0;
let visiblity = true;
let timeOpacity = 0;





//let startButtonCreated = false;

function preload() {
    img = loadImage('../assets/images/space.png');
    playerImg = loadImage('../assets/images/player1.png');
    playerImg2 = loadImage('../assets/images/player2.png');
    human = loadImage('../assets/images/human1.png');
    soundOnClick = loadSound('../assets/sounds/sound_click2.wav');
    soundOverlap = loadSound('../assets/sounds/sound1.wav');
    startPage = loadImage('../assets/images/start_page.png');
    spaceship1 = loadImage('../assets/images/spaceship1.png');
    spaceship2 = loadImage('../assets/images/spaceship2.png');
    music = loadSound('../assets/sounds/music_game2.mp3');
    myFont = loadFont('../assets/fonts/bitcountgrid.ttf');
    planetImg = loadImage('../assets/images/planet.png');


    images[0] = loadImage('../assets/images/image1.png');
    images[1] = loadImage('../assets/images/image2.png');
    images[2] = loadImage('../assets/images/image3.png');


}


/**
 * creates the canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    textFont(myFont);

    cursor('../assets/images/mouse.png');



    instruction = [
        [
            "Welcome to Reversed Space, a game where nothing makes sense. Humans float in space, hoping to be abducted by aliens. Aliens compete to abduct as many humans as possible. Every abduction the human laughs because, again, this game makes no sense!",

        ],
        [
            "For the top player: Use the arrow keys. The controls are reversed! Left goes right and right goes left. Press up to extend your alien hand and abduct humans.",


        ],
        [
            "For the bottom player: Use the mouse or trackpad. The controls are also reversed. Move left to go right and right to go left . Click to abduct humans.",
            "Whoever abducts the most humans wins. Watch out for the timer, it might get weird!",

        ]



    ]

    //music.play();
    // music.loop();
    //music.setVolume(0.2);



    buttonPlay = createButton("PLAY"); //this create a button
    buttonPlay.position(100, height / 1.7); //this is the position of the button
    buttonPlay.mousePressed(gameStarted);//call function gameStarted when pressing on the button
    buttonPlay.size(400, 150);
    buttonPlay.style("background-color", "#000000");
    buttonPlay.style("font-size", "72px");

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
        moveHand();
        moveHandPlayer2();
        drawPlayer(player1, playerImg);
        drawPlayer(player2, playerImg2);
        score1 = checkHandFlyOverlap(player1, score1);
        score2 = checkHandFlyOverlap(player2, score2);
        keyboard();

        displayScore(score1, player1, height - 5);
        displayScore(score2, player2, 40);
        displayTime();
        displayInstruction();
        movePlanet();
        drawPlanet();




    }
    else if (gameState == "end") {
        endScreen();


    }
}



function startScreen() {
    background(255);
    image(startPage, 0, 0, width, height, 0, 0, startPage.width, startPage.height, COVER);


}



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
    // this is to make timer go faster after 60 seconds
    if (timer.timePassed > 60000) {
        //after 60 seconds has passed 
        let after = timer.timePassed - 60000;
        //make timer go faster
        timer.timePassed = 60000 + after * 3;
    }

    let timeLeft = int((timer.timeInterval - timer.timePassed) / 1000);


    fill(255, 255, 0, timeOpacity);
    textSize(timer.size);
    text(timeLeft, width / 2, timer.y);
    if (timer.timePassed > timer.timeInterval) {
        gameState = "end";

    }
}



function moveFly() {
    if (visiblity === false) {
        fly.speed += fly.acceleration;
        //move fly
        fly.x += fly.speed;

        //handle the fly going off the canvas
        if (fly.x > width) {
            resetFly();
        }
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
    fly.y = random(250, height - 250);
}

/**
 * Move player1 to the mouse position on x
 */
function movePlayer1() {
    let mouseReverse = width - mouseX
    player1.body.x = mouseReverse;
}

/**
 * to make tongue move
 */
function moveHand() {

    //tongue matches player1's x
    player1.hand.x = player1.body.x;

    //if tongue idle, doesn't do anything
    if (player1.hand.state === "idle") {
        //nothing
    }
    //if the tongue is outbound, it moves up
    else if (player1.hand.state === "outbound") {
        player1.hand.y += -player1.hand.speed;
        // tongue bounces back if it hits the top
        if (player1.hand.y <= 0) {
            player1.hand.state = "inbound";
        }
    }
    else if (player1.hand.state === "inbound") {
        player1.hand.y += player1.hand.speed;


        if (player1.hand.y >= height) {
            player1.hand.state = "idle";
        }
    }
}

function moveHandPlayer2() {

    player2.hand.x = player2.body.x;

    if (player2.hand.state === "idle") {
        //do nothing
    }
    else if (player2.hand.state === "outbound") {
        player2.hand.y += player2.hand.speed;

        if (player2.hand.y >= windowHeight) {
            player2.hand.state = "inbound";
        }
    }
    else if (player2.hand.state === "inbound") {
        player2.hand.y += -player2.hand.speed;

        if (player2.hand.y <= 0) {
            player2.hand.state = "idle";
        }
    }

}

function movePlanet() {
    if (visiblity === false && timer.timePassed > 30000) {
        planet.x += planet.speed;
    }



}


function drawPlanet() {
    image(planetImg, planet.x, planet.y);
}



function drawPlayer(obj, temp_img) {
    //player1.body.x = width/2;
    //to make player1 at the bottom
    player1.body.y = height - 50;
    //draw tongue tip
    push();
    fill(obj.hand.fill);
    noStroke();
    ellipse(obj.hand.x, obj.hand.y, obj.hand.size);
    pop();


    //draw rest of tongue
    push();
    stroke(obj.hand.fill);
    strokeWeight(player1.hand.size);
    line(obj.hand.x, obj.hand.y, obj.body.x, obj.body.y);
    pop();

    // player 1 body
    push();
    imageMode(CENTER);
    image(temp_img, obj.body.x, obj.body.y);
    pop();

}

/**
 * tongue overlapping the fly
 */

function checkHandFlyOverlap(obj, scoreNumber) {
    //distance from tongue to fly
    const d = dist(obj.hand.x, obj.hand.y, fly.x, fly.y);
    //check if overlap
    const eaten = (d < obj.hand.size / 2 + fly.size / 2);
    if (eaten) {
        //reset the fly
        resetFly();
        scoreNumber++;
        //bring tongue back
        obj.hand.state = "inbound";
        soundOverlap.play();
    }
    return scoreNumber;

}


function displayScore(scoreNumber, temp_x, temp_y) {
    push();
    textSize(45);
    fill("#2c2c6cff");
    text(scoreNumber, temp_x.body.x, temp_y);
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
    if (player1.hand.state === "idle") {
        player1.hand.state = "outbound";
    }

}



function keyPressed(event) {
    if (gameState === "play" && keyCode === UP_ARROW) {
        soundOnClick.play();
    }
    if (keyCode === UP_ARROW) {
        if (player2.hand.state === "idle") {
            player2.hand.state = "outbound";
        }
    }

    if (keyCode === 32) {

        imagesIndex++;
        instructionIndex++;
    }
    if (instructionIndex >= instruction.length) {
        visiblity = false;
        timer.startTime = millis();
        timeOpacity = 255;
    }
}

function keyboard() {
    player2.body.x = constrain(player2.body.x, 0, windowWidth);
    if (keyIsDown(RIGHT_ARROW) === true) {
        player2.body.x += -25;
    }
    if (keyIsDown(LEFT_ARROW) === true) {
        player2.body.x += 25;
    }
}

function displayInstruction() {

    if (visiblity) {
        push();
        noStroke();
        fill("white");
        rect(speechBox.x, speechBox.y, speechBox.w, speechBox.h, 50);
        pop();

        push();
        image(images[imagesIndex], speechBox.w / 5, speechBox.h / 3);
        textAlign(LEFT);
        textSize(28);
        fill("black");
        text(instruction[instructionIndex], speechBox.w / 1.7, speechBox.h / 3, 500);
        pop();

        push();
        textSize(24);
        textAlign(CENTER);
        fill("black");
        text("Press space key to continue", speechBox.w / 2.2, speechBox.h - 20, 400);


    }


}

function endScreen() {
    background("#ff456aff");
    image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);


    if (score1 > score2) {
        finishState = "Player 1 wins";
        image(spaceship1, width / 4, 0);
    }
    else if (score2 > score1) {
        finishState = "Player 2 wins";
        image(spaceship2, width / 4, 0);

    }
    else if (score1 === score2) {
        finishState = "Draw";
    }

    textSize(80);
    text(finishState, width / 2, height / 2)


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



