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
        size: 22,// size hand player1
        speed: 60, //speed of hand of player 1 when it goes out
        state: "idle", //current state of hand player 1
        fill: "#83b12b" // color of hand
    }
};

// properties of player 2
let player2 = {
    body: {
        x: 320,// x position of player2
        y: 50,// y position of player2

    },
    hand: {
        x: undefined,// x position of the hand of player2
        y: 100,// Y position of the hand of player2
        size: 22,// size hand player2
        speed: 60,//speed of hand of player 2 when it goes out
        state: "idle",//current state of hand player 2
        fill: "#a938bf"// color of hand
    }
};

//properties of human

let human_1 = {
    x: 0, // x position of human1
    y: 300,//y position of human1
    size: 50, //size for the overlap
    speed: 3, // speed of human1
    acceleration: 0.005 //to make human1 go faster
};
let human_2 = {
    x: 0, // x position of human2
    y: 500,//y position of human2
    size: 70, //size for the overlap
    speed: 5, // speed of human2
    acceleration: 0.007 //to make human2 
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
// properties for the instruction box
let instructionBox = {
    x: 125, //x position for the instruction
    y: 50, //Y position for the instruction
    w: 1200,// width of the box
    h: 700, // Height of the box

}
// properties for the planet
let planet = {
    x: -1500, //x position for the planet
    y: -200,//y position for the planet
    speed: 50 //speed of the planet
}

let finishState = "none";// who wins or draw
let gameState = "start"; //the current game state
let score1 = 0; //score for player 1 start at 0
let score2 = 0;//score for player 2 start at 0
let buttonPlay; // button at the start
let timeOpacity = 0;//to make the timer not visible during instruction
let img;//background image for game and end state
let playerImg;//img for player1
let playerImg2;//img for player2
let humanImg;//human img
let soundOnClick;//for the sound on click
let soundOverlap;//for the sound when hand and human overlap
let startPage;//bacground image for start state
let myFont; //for the font
let music; //
let spaceship1;//for spaceship img player1 for end state
let spaceship2;//for spaceship  img player2 for end state
let planetImg;//img for planet


//for the instruction section using arrays
let instruction = []; //for instructions
let instructionIndex = 0;//for instructions index
let images = []; //for images
let imagesIndex = 0; //for images index
let visiblity = true;//to make instruction disappear







// to load images,sounds and fonts
function preload() {
    img = loadImage('../assets/images/space.png');
    playerImg = loadImage('../assets/images/player1.png');
    playerImg2 = loadImage('../assets/images/player2.png');
    humanImg = loadImage('../assets/images/human1.png');
    soundOnClick = loadSound('../assets/sounds/sound_click2.wav');
    soundOverlap = loadSound('../assets/sounds/sound1.wav');
    startPage = loadImage('../assets/images/start_page.png');
    spaceship1 = loadImage('../assets/images/spaceship1.png');
    spaceship2 = loadImage('../assets/images/spaceship2.png');
    music = loadSound('../assets/sounds/music_game2.mp3');
    myFont = loadFont('../assets/fonts/bitcountgrid.ttf');
    planetImg = loadImage('../assets/images/planet.png');

    //array images part for instruction
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

    // font of my game
    textFont(myFont);
    //an image for the cursor
    cursor('../assets/images/mouse.png');


    //array text part for the instructions
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


    //to make the button with some styles
    buttonPlay = createButton("PLAY"); //this create a button
    buttonPlay.position(100, height / 1.7); //this is the position of the button
    buttonPlay.mousePressed(gameStarted);//call function gameStarted when pressing on the button
    buttonPlay.size(400, 150);// button width,height
    buttonPlay.style("background-color", "#000000"); //button backgrounf color
    buttonPlay.style("font-size", "72px");// button font size = 72px

    buttonPlay.style("border-radius", "10px");//border-radius = 10px
    buttonPlay.style("color", "white");// color of button is white
    buttonPlay.style("font-weight", "bold");//to make font-weight bold
    buttonPlay.style("border", "8px solid white");//to give a white border of 8px


}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //this is for anything that goes in start state
    if (gameState == "start") {
        screen(startPage)


    }
    //this is for anything that goes in play state
    else if (gameState == "play") {

        screen(img)

        moveHuman(human_1);
        moveHuman(human_2);
        drawHuman(humanImg, human_1);
        drawHuman(humanImg, human_2);
        movePlayer1();
        moveHand();
        moveHandPlayer2();
        drawPlayer(player1, playerImg);
        drawPlayer(player2, playerImg2);
        score1 = checkHandOverlap(player1, score1, human_1);
        score1 = checkHandOverlap(player1, score1, human_2);
        score2 = checkHandOverlap(player1, score2, human_1);
        score2 = checkHandOverlap(player1, score2, human_2);

        keyboard();

        displayScore(score1, player1, height - 5);
        displayScore(score2, player2, 40);
        displayTime();
        displayInstruction();
        movePlanet();
        drawPlanet();




    }
    //this is for anything that goes in end state
    else if (gameState == "end") {
        screen(img)
        displayFinishSate();


    }
}


//for the background images for all the states
function screen(obj) {
    background(255);

    //background image 
    image(obj, 0, 0, width, height, 0, 0, obj.width, obj.height, COVER);


}



//for countdown timer

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
    // to change the values from milliseconds to seconds
    let timeLeft = int((timer.timeInterval - timer.timePassed) / 1000);


    fill(255, 255, 0, timeOpacity);// color and to make opacity not visible at the beginning
    textSize(timer.size);//size of the text
    text(timeLeft, width / 2, timer.y);//text and placement

    // if time is finished go to end state
    if (timer.timePassed > timer.timeInterval) {
        gameState = "end";

    }
}


//to make the human move on the x position
function moveHuman(obj) {

    //if instruction is not visible make human move
    if (visiblity === false) {
        obj.speed += obj.acceleration;
        //move human
        obj.x += obj.speed;

        //handle the human going off the canvas
        if (obj.x > width) {
            resetHuman(obj);

        }
    }

}

/**
 * draw the human
 */

function drawHuman(img_human, obj) {
    push();
    imageMode(CENTER);//uses the ((x,y) coordinates as the image center point. 
    image(img_human, obj.x, obj.y);
    pop();
}

/**
 * Reset human to the left
 */
function resetHuman(obj) {
    obj.x = 0;// reset human at 0
    obj.y = random(250, height - 250);// to make it at different y position
}

/**
 * Move player1 to the reverse mouse position of x
 */
function movePlayer1() {
    let mouseReverse = width - mouseX //to reverse mouse X
    player1.body.x = mouseReverse;//to make player1 at the reverse way of the mouse
}

/**
 * to make a hand move
 */
function moveHand() {

    //hand matches player1's x
    player1.hand.x = player1.body.x;

    //if hand idle, doesn't do anything
    if (player1.hand.state === "idle") {
        //nothing
    }
    //if the hand is outbound, it moves up
    else if (player1.hand.state === "outbound") {
        player1.hand.y += -player1.hand.speed;
        // hand bounces back if it hits the top
        if (player1.hand.y <= 0) {
            player1.hand.state = "inbound";
        }
    }
    //moves back to bottom
    else if (player1.hand.state === "inbound") {
        player1.hand.y += player1.hand.speed;

        //becomes idle again
        if (player1.hand.y >= height) {
            player1.hand.state = "idle";
        }
    }
}

function moveHandPlayer2() {

    player2.hand.x = player2.body.x;
    //if hand idle, doesn't do anything
    if (player2.hand.state === "idle") {
        //do nothing
    }
    //if the hand is outbound, it moves down
    else if (player2.hand.state === "outbound") {
        player2.hand.y += player2.hand.speed;
        // hand bounces back if it hits the bottom
        if (player2.hand.y >= windowHeight) {
            player2.hand.state = "inbound";
        }
    }
    //moves back to top
    else if (player2.hand.state === "inbound") {
        player2.hand.y += -player2.hand.speed;
        //becomes idle again
        if (player2.hand.y <= 0) {
            player2.hand.state = "idle";
        }
    }

}
// to make the planet move after 30 seconds passed
function movePlanet() {
    if (visiblity === false && timer.timePassed > 30000) {
        planet.x += planet.speed;
    }



}

// draw the planet
function drawPlanet() {
    image(planetImg, planet.x, planet.y);
}


//to draw the players
function drawPlayer(obj, temp_img) {
    // to make player one height at height - 50
    player1.body.y = height - 50;
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
 * hand overlapping the human
 */

function checkHandOverlap(obj, scoreNumber, human) {
    //distance from hand to human
    const d = dist(obj.hand.x, obj.hand.y, human.x, human.y);
    //check if overlap
    const eaten = (d < obj.hand.size / 2 + human.size / 2);
    if (eaten) {
        //reset the human
        resetHuman(human);
        scoreNumber++;
        //bring hand back
        obj.hand.state = "inbound";
        soundOverlap.play();
    }
    return scoreNumber;

}

/** 
 * to display the score of each player
*/

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
 * launch hand on click for player 1
 */

function mousePressed() {
    // if state is play make the sound play when mouse pressed
    if (gameState === "play") {
        soundOnClick.play();
    }
    //make hand outbound when mouse is clicked
    if (player1.hand.state === "idle") {
        player1.hand.state = "outbound";
    }

}

/**
 * launch hand on click for player 2 and to handle the instruction
 */

function keyPressed(event) {
    // if state is play and the up arrow is pressed make the sound play
    if (gameState === "play" && keyCode === UP_ARROW) {
        soundOnClick.play();
    }
    //make hand outbound when up arrow is pressed
    if (keyCode === UP_ARROW) {
        if (player2.hand.state === "idle") {
            player2.hand.state = "outbound";
        }
    }
    //when space key pressed it goes to the next instruction
    if (keyCode === 32) {

        imagesIndex++;//go to next image
        instructionIndex++;// go to next instruction
    }
    //if instrcutions are finished make it not visible
    if (instructionIndex >= instruction.length) {
        visiblity = false;
        timer.startTime = millis();// make time start at this point
        timeOpacity = 255;// change opacity for timer so it become visible
    }
}

/**
 * to use arrow keys to make player 2 move right and left
 */
function keyboard() {
    //contrain player 2 to the canvas size
    player2.body.x = constrain(player2.body.x, 0, windowWidth);
    //if key right is being pressed move player to the left
    if (keyIsDown(RIGHT_ARROW) === true) {
        player2.body.x += -25;
    }
    //if key left is being pressed move player to the right
    if (keyIsDown(LEFT_ARROW) === true) {
        player2.body.x += 25;
    }
}

/**
 * display instruction and image with background white rectangle
 */
function displayInstruction() {

    if (visiblity) {

        //background white rectangle
        push();
        noStroke();
        fill("white");
        rect(instructionBox.x, instructionBox.y, instructionBox.w, instructionBox.h, 50);
        pop();
        //image
        push();
        image(images[imagesIndex], instructionBox.w / 5, instructionBox.h / 3);

        //instruction text
        textAlign(LEFT);
        textSize(28);
        fill("black");
        text(instruction[instructionIndex], instructionBox.w / 1.7, instructionBox.h / 3, 500);
        pop();
        // text to let players know that they need to press space key to continue
        push();
        textSize(24);
        textAlign(CENTER);
        fill("black");
        text("Press space key to continue", instructionBox
            .w / 2.2, instructionBox
                .h - 20, 400);


    }


}


//display text and image for finish state depending on the situation(who won or draw)
function displayFinishSate() {

    //if player1 wins
    if (score1 > score2) {
        finishState = "Player 1 wins";
        image(spaceship1, width / 4, 0);
    }
    //if player 2 wins
    else if (score2 > score1) {
        finishState = "Player 2 wins";
        image(spaceship2, width / 4, 0);

    }
    //if no one win
    else if (score1 === score2) {
        finishState = "Draw";
    }

    textSize(80);
    text(finishState, width / 2, height / 2)
}

//to hide button in play state and end state
function gameStarted() {
    gameState = "play";
    buttonPlay.hide();//make button hide in the play state
}


/*resize canvas with different screen*/
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    buttonPlay.position(100, height / 1.7);

}



