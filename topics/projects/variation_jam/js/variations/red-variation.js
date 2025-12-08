/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let robotTalk;
let robotData;
let indexRobot = 0;


let robot = {
    x: 1000,
    y: 400
}
let speechRobot = {
    x: 450,
    y: 650
}
let continueButton = {
    w: 200,
    h: 75,
    x: 500,
    y: 700,
    fill: "#000000ff",
    text: "Continue",
    visibily: false
}
let screw = {
    x: 400,
    y: 300
}
let size = 40;
let x;
let y;
/*let speechRobot = {
    x: 550,
    y: 600
}*/
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
    image(robotBack, 0, 0, width, height, 0, 0, robotBack.width, robot.height, COVER);

    drawObjects(screw, screwImg);
    drawObjects(robot, robotImg);
    speechRobot.y = height / 1.2;
    speechRobot.x = width / 3;
    drawObjects(speechRobot, speechRobotImg);
    drawSpeech(robotTalk, width / 10, height / 1.4, 600, "white");
    //drawRobotText();
    // drawContinueButton();
    drawContinueButton(continueButton);
    if (indication.visibily === true) {
        drawText(indication, height - 90);
    }
    scaleDraw();
}

function scaleDraw() {
    x = mouseX;
    y = mouseY;
    push();
    textSize(15);
    fill("black");
    text("Use this to find clues", x, y - 5);
    pop();
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

function redKeyPressed(event) {

    if (keyCode === ENTER) {
        if (indexRobot < robotData.robot.length - 1)
            indexRobot++;
    }


    if (indexRobot === robotData.robot.length - 1) {
        continueButton.visibily = true;
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
    if (mouseX > continueButton.x - continueButton.w / 2 && mouseX < continueButton.x + continueButton.w / 2 && mouseY > continueButton.y - continueButton.h / 2 && mouseY < continueButton.y + continueButton.h / 2

    ) {

        state = "green-variation";
        greenDraw();

    }

}