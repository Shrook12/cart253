/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let ghostTalk; //name for the ghost text
let ghostData; //data for the ghost text
let indexGhost = 0; //it will start at first line

let randomClues = ""; // name for random clues
let clueData; //data for random clues
let indexClues = 0; //it will start at first line

//properties of the ghost image
let ghost = {
    x: 1000, //x coordinate 
    y: 400 //y coordinate 
}

//properties of the brain image
let brain = {
    x: 200, //x coordinate 
    y: 100 //y coordinate 


}
//properties of the paper image
let paper = {
    x: 100, //x coordinate 
    y: 10 //y coordinate 
}
//properties of the speech bubble image for ghost
let speechGhost = {
    x: 550, //x coordinate 
    y: 600 //y coordinate 
}
// properties for the closed secret card, behind the brain
let secretCard = {
    w: 150, //width of the card
    h: 200, //height of the card
    x: 200, // x coordinate 
    y: 100,//y coordinate 
    cardOpen: false //not open yet




}

//properties for the continue button in this section
let continueButtonGhost = {
    w: 200, //width of the button
    h: 75, //height of the button
    x: 500, //x coordinate 
    y: 700, //y coordinate 
    fill: "#000000ff", //button color
    text: "Continue",  //text inside
    visibily: false //not visible 

}
// properties for the brain indication(saying that this is the ghost brain)
let brainIndication = {
    x: 420, //x coordinate 
    instruction: "This is the ghost brain!", //text
    fill: "white",//text color
    size: 20,//textsize

}
// this is for the layer thay you can scratch
let paintLayer;



/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {
    // this is for the layer thay you can scratch
    paintLayer = createGraphics(width, height);
    paintLayer.image(paperImg, paper.x, paper.y, paper.w, paper.h);
    paintLayer.imageMode(CENTER);
    paintLayer.strokeWeight(40);
    paintLayer.blendMode(REMOVE);


    //make indication visible 
    indication.visibily = true;
}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
    background("blue");

    //baclground
    gradient();
    //ghost image
    drawObjects(ghost, ghostImg);


    //for the speech bubble section
    speechGhost.x = width / 2.5; // change y
    speechGhost.y = height / 1.3;// change x
    drawObjects(speechGhost, speechGhostImg); //draw image of the speech bubble
    //drawGhostText();
    //text inside speech bubble(obj,x,y.b.color.font)
    drawSpeech(ghostTalk, width / 10, height / 1.29, 600, "pink", fontGhost);

    //secret card hidden
    secretRect();

    //brain image
    image(brainImg, brain.x, brain.y);
    //brain indication
    drawText(brainIndication, 250);



    // this to make like a brush on the paint layer to remove
    if (mouseIsPressed) {
        paintLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    }
    image(paintLayer, 0, 0);

    //if indication visible
    if (indication.visibily === true) {
        indication.x = width / 2.9;
        drawText(indication, height - 90);
    }

    //secret card open
    secretRectOpen();

    //drawButtonContinueEnd();

    //button
    continueButtonGhost.x = width / 2; //change x
    continueButtonGhost.y = height / 2 + 200; //change y
    drawContinueButton(continueButtonGhost);
    checkOverlap(continueButtonGhost)



}

/* bacground gradient*/
function gradient() {
    let startColor = color(151, 143, 186);//0%
    let endColor = color(47, 38, 64);//100%

    let x = 0;
    let xSize = 50;
    let y1 = 0;
    let y2 = height;
    let strokeNumber = 0;
    let y = 0;

    for (let y = 0; y < height; y++) {
        let percent = y / height;
        let c = lerpColor(startColor, endColor, percent);
        stroke(c);

        line(0, y, width, y);

    }
}
/*function drawGhostText() {
    ghostTalk = ghostData.ghost[indexGhost];
    push();
    fill("pink");

    textSize(32);
    text(ghostTalk, 200, height - 200);
    pop();
}*/
/** keypressed for this section */
function blueKeyPressed(event) {
    //if ENTER is pressed go to next index
    if (keyCode === ENTER) {

        if (indexGhost < ghostData.ghost.length - 1) {
            //go to next index
            indexGhost++;
        }
        // if it's last line of text 
        if (indexGhost === ghostData.ghost.length - 1) {
            //make indication not visible
            indication.visibily = false;
        }
    }
}

/*function drawObjects(obj, img) {
    push();
    imageMode(CENTER);
    image(img, obj.x, obj.y);
    pop();
}*/

/** this is for the closed card that is hidden behind the brain */
function secretRect() {
    if (secretCard.cardOpen === false) {
        //card
        push();
        fill("white");
        noStroke();
        rect(secretCard.x, secretCard.y, secretCard.w, secretCard.h, 20);
        pop();
        //text on card to open card
        push();
        fill(0, 80);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("Click to Open", secretCard.x, secretCard.y, secretCard.w, secretCard.h);
    }
}
/**after clicking on card, this is the opened card */
function secretRectOpen() {
    randomClues = random(clueData.clues);
    if (secretCard.cardOpen === true) {
        //card
        push();
        fill("white");
        rectMode(CENTER);
        noStroke();
        rect(width / 2, height / 2, secretCard.w + 300, secretCard.h + 400, 20);
        pop();
        //text at top of card
        push();
        fill(0);
        rectMode(CENTER);
        textSize(20);
        textAlign(CENTER);
        text("Try to read if you can :)", width / 2, height / 2 - 100);
        pop();
        //those are the clues
        push();
        fill(0);
        rectMode(CENTER);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(randomClues, width / 2, height / 2, secretCard.w, secretCard.h);
        pop();
    }
}
/*function drawButtonContinueEnd() {
    if (continueButtonGhost.visibily == true) {

        push();
        stroke("white");
        strokeWeight(4);
        fill(continueButtonGhost.fill);
        rectMode(CENTER);
        rect(width / 2, height / 2 + 200, continueButtonGhost.w, continueButtonGhost.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(continueButtonGhost.text, width / 2, height / 2 + 200);
        pop();
    }

}*/

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {
    //if card clicked 
    if (mouseX > secretCard.x && mouseX < secretCard.x + secretCard.w &&
        mouseY > secretCard.y && mouseY < secretCard.y + secretCard.h
    ) {
        //card open become true
        secretCard.cardOpen = true;
        //and button appear
        continueButtonGhost.visibily = true;
    }

    //if button clicked
    if (mouseX > continueButtonGhost.x - continueButtonGhost.w / 2 && mouseX < continueButtonGhost.x + continueButtonGhost.w / 2 && mouseY > continueButtonGhost.y - continueButtonGhost.h / 2 && mouseY < continueButtonGhost.y + continueButtonGhost.h / 2

    ) {
        //go to before end state
        state = "before-end";
        beforeEndDraw();

    }
}





