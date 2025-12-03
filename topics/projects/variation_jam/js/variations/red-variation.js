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
let speechRobot = {
    x: 450,
    y: 640
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

    drawRobotText();
    drawObjects(robot, robotImg);
    drawObjects(speechRobot, speechRobotImg);
    drawRobotText();
    scaleDraw();
}

function scaleDraw() {
    x = mouseX;
    y = mouseY;
    copy(x, y,
        size, size,
        x, y,
        size * 3, size * 3);

    noFill();
    strokeWeight(3);
    rect(x, y, size * 3, size * 3);

}
function drawRobotText() {

    push();
    fill("white");

    textSize(32);
    text(robotTalk, 100, height - 200, 600);
    pop();
}

function redKeyPressed(event) {
    if (keyCode === ENTER) {
        robotTalk = robotData.robot[index];
        index++;

        if (index >= robotData.robot.length) {
            state = "green-variation";
            greenDraw();
        }
    }
}
function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}


/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {

}