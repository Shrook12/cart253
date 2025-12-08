/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let robotTalk; //name for the robot text
let robotData; //data for the robot text
let indexRobot = 0; //it will start at first line

//properties of the robot image
let robot = {
    x: 1000,  //x coordinate 
    y: 400 //y coordinate 
}
//properties of the speech bubble image for robot
let speechRobot = {
    x: 450,  //x coordinate 
    y: 650 //y coordinate 
}
//properties for the continue button in this section
let continueButtonRobot = {
    w: 200, //width of the button
    h: 75, //height of the button
    x: 500, //x coordinate 
    y: 700,//y coordinate 
    fill: "#000000ff", //button color
    text: "Continue", //text inside
    visibily: false //not visible 
}
//properties for the screw image
let screw = {
    x: 400, //x coordinate 
    y: 300 //y coordinate 
}


//this section is for the magnifying glass
let size = 40;
let x;
let y;



/**
 * This will be called just before the red variation starts
 */
function redSetup() {

}

/**
 * This will be called every frame when the red variation is active
 */
function redDraw() {
    background("red");

    //background image
    screen(robotBack);

    // for the screw image
    drawObjects(screw, screwImg);

    // for the robot image
    drawObjects(robot, robotImg);

    //for the speech bubble section
    speechRobot.y = height / 1.2; // change y
    speechRobot.x = width / 3; //change x
    drawObjects(speechRobot, speechRobotImg);//draw image of the speech bubble
    //text inside speech bubble(obj,x,y.b.color.font)
    drawSpeech(robotTalk, width / 10, height / 1.35, 600, "white", fontRobot);

    //drawRobotText();
    // drawContinueButton();

    //draw button when visible
    drawContinueButton(continueButtonRobot);
    //when mosue overlap change color button
    checkOverlap(continueButtonRobot);

    //draw indication when visible
    if (indication.visibily === true) {
        drawText(indication, height - 90);
    }

    // magnifying glass
    scaleDraw();
}
/*draw the magnifying glass */
function scaleDraw() {
    //make x and y coordinate of the magnifying glass follow the mouse
    x = mouseX;
    y = mouseY;

    //text at the top of the magnifying glass 
    push();
    textSize(15);
    fill("black");
    text("Use this to find clues", x, y - 5);
    pop();

    //magnifying glass 
    push();
    copy(x, y,
        size, size,
        x, y,
        size * 3, size * 3);

    noFill();
    strokeWeight(3);
    rect(x, y, size * 3, size * 3);
    pop();
}
/*function drawRobotText() {
    robotTalk = robotData.robot[indexRobot];
    push();
    fill("white");

    textSize(32);
    text(robotData.robot[indexRobot], 100, height - 250, 600);
    pop();
}*/
/**
 * This will be called whenever the ENTER is pressed while the red variation is active
 */
function redKeyPressed(event) {
    //if ENTER is pressed
    if (keyCode === ENTER) {

        if (indexRobot < robotData.robot.length - 1)
            //advance to next index
            indexRobot++;
        soundOnClickKeyboard.play();
    }

    //if we are at the last line of text 
    if (indexRobot === robotData.robot.length - 1) {
        //make button visible
        continueButtonRobot.visibily = true;
        //and indication not visible
        indication.visibily = false;

    }
}



/*function drawObjects(obj, img) {

    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}*/
/*function drawContinueButton() {
    if (continueButton.visibily === true) {
        push();
        stroke("white");
        strokeWeight(4);
        fill(continueButton.fill);
        rectMode(CENTER);
        rect(continueButton.x, continueButton.y, continueButton.w, continueButton.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(continueButton.text, continueButton.x, continueButton.y);
        pop();
    }

}*/


/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {
    //if button is pressed
    if (mouseX > continueButtonRobot.x - continueButtonRobot.w / 2 && mouseX < continueButtonRobot.x + continueButtonRobot.w / 2 && mouseY > continueButtonRobot.y - continueButtonRobot.h / 2 && mouseY < continueButtonRobot.y + continueButtonRobot.h / 2

    ) {
        //go to hamster section
        state = "green-variation";
        greenDraw();
        soundOnClick.play();


    }

}