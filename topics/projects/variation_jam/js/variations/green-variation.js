/**
 * This file contains the code to run *only* the green variation part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let hamsterTalk; //name for the hamster text
let hamsterData; //data for the hamster text
let indexHamster = 0; //it will start at first line

//properties of the speech bubble image for hamster
let speechHamster = {
    x: 450,  //x coordinate 
    y: 640 //y coordinate 
}
//properties for the continue button in this section
let continueButtonHamster = {
    w: 150, //width of the button
    h: 50, //height of the button
    x: 835, //x coordinate 
    y: 668,//y coordinate 
    fill: "#000000ff", //button color
    text: "Continue", //text inside
    visibily: false //not visible 
}
// properties for the picture on the wall
picture = {
    x: 100, //x coordinate 
    y: 100, //y coordinate 
    width: 500, //width of the button
    height: 405, //height of the button
    pictureOpen: false //not visible 
}
//properties for the indication (press enter)
let indication2 = {
    x: 200, //x coordinate 
    instruction: "Press <ENTER> to Continue Reading", //text
    size: 24, //text size
    fill: "black", //color text
    visibily: true //visible
}
//properties for the indication after press enter
let indication3 = {
    x: 200, //x coordinate 
    instruction: "Now click on the picture", //text
    size: 24, //text size
    fill: "black", //color text
    visibily: false //not visibel
}
/**
 * This will be called just before the green variation starts
 */
function greenSetup() {

}

/**
 * This will be called every frame when the green variation is active
 */
function greenDraw() {
    background("green");

    //background image
    screen(hamsterImg);

    //for the speech bubble section
    speechHamster.y = height / 1.2; // change y
    speechHamster.x = width / 2.6; //change x
    drawObjects(speechHamster, speechHamsterImg); //draw image of the speech bubble
    //text inside speech bubble(obj,x,y.b.color.font)
    drawSpeech(hamsterTalk, width / 10, height / 1.32, 600, "black", fontHamster);

    //picture on wall small(before click)
    drawPictureSmaller();
    //drawHamsterText();


    //if indication3 visible 
    if (indication3.visibily === true) {
        drawText(indication3, height - 90);
    }
    //if indication2 is visible
    if (indication2.visibily === true) {
        drawText(indication2, height - 90);
    }

    //picture on wall small(after click)
    drawPictureBigger();
    //drawContinueButtonHamster();

    //for continue button
    continueButtonHamster.x = width / 1.5;// change x
    continueButtonHamster.y = height / 1.2; // change y
    drawContinueButton(continueButtonHamster);
    checkOverlap(continueButtonHamster)





}
/*function drawHamsterText() {
    hamsterTalk = hamsterData.hamster[indexHamster];
    push();
    fill("black");

    textSize(32);
    text(hamsterTalk, 100, height - 200, 600);
    pop();
}
*/
/*function drawContinueButtonHamster() {
    if (continueButtonHamster.visibily == true) {
        push();
        stroke("white");
        strokeWeight(4);
        fill(continueButtonHamster.fill);
        rectMode(CENTER);
        rect(continueButtonHamster.x, continueButtonHamster.y, continueButtonHamster.w, continueButtonHamster.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(28);
        textAlign(CENTER, CENTER);
        text(continueButtonHamster.text, continueButtonHamster.x, continueButtonHamster.y);
        pop();
    }
}*/

/* picture on wall if not open*/
function drawPictureSmaller() {
    if (picture.pictureOpen === false) {

        push();
        image(pictureImg, picture.x, picture.y, picture.width, picture.height);
        pop();
    }
}
/* picture on wall if open*/
function drawPictureBigger() {
    if (picture.pictureOpen === true) {
        push();

        imageMode(CENTER);
        image(pictureImg, width / 2, height / 2, pictureImg.width * 1.5, pictureImg.height * 1.5);
        pop();
    }
}
/**
 * This will be called whenever a key is pressed while the green variation is active
 */
function greenKeyPressed(event) {
    //if ENTER is pressed go to next index
    if (keyCode === ENTER) {
        if (indexHamster < hamsterData.hamster.length - 1) {
            indexHamster++;
            soundOnClickKeyboard.play();
        }
        // if it's last line of text
        if (indexHamster === hamsterData.hamster.length - 1) {
            //make indication2 not visible
            indication2.visibily = false;
            //and indication3 visible
            indication3.visibily = true;
        }
    }


}

/*function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}
*/
/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function greenMousePressed() {
    //if clicked on the picture one wall
    if (mouseX > picture.x && mouseX < picture.x + pictureImg.width &&
        mouseY > picture.y && mouseY < picture.y + pictureImg.height
    ) {
        //picture on wall become bigger
        picture.pictureOpen = true;
        //button become also visible
        continueButtonHamster.visibily = true;
        soundOnClick.play();
    }


    //if pressed on button go to ghost section
    if (mouseX > continueButtonHamster.x - continueButtonHamster.w / 2 && mouseX < continueButtonHamster.x + continueButtonHamster.w / 2 && mouseY > continueButtonHamster.y - continueButtonHamster.h / 2 && mouseY < continueButtonHamster.y + continueButtonHamster.h / 2

    ) {

        state = "blue-variation";
        blueSetup();
        soundOnClick.play();

    }
}