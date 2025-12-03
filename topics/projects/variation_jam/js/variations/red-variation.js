/**
 * This file contains the code to run *only* the red variation part of the program.
 * Note how it has its own draw, redDraw(), and its own keyPressed, redKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let robotTalk = "Eh?, Someone ate the ice cream?";
let robotData;


let robot = {
    x: 1000,
    y: 400
}
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

    drawRobotText();
}

function drawRobotText() {

    push();
    fill("pink");

    textSize(32);
    text(robotTalk, 100, height - 200, 1000);
    pop();
}

function redKeyPressed(event) {
    if (keyCode === ENTER) {
        robotTalk = robotData.robot[index];
        index++;

        if (index >= robotData.robot.length) {
            state = "menu";
            menuDraw();
        }
    }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {

}