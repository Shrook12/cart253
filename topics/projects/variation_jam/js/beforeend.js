/**
 * This file contains the code to run *only* the before end state part of the program.
 */





let buttonColor = "black";//color of the buttons at the beginning
let colorAfter = "purple"; //color after clicked
let buttonW = 200; //button width
let buttonH = 75; //button height
let coordinates; //coordinates

//properties for button 1
button1 = {
    x: undefined,
    fill: "black",
    inside: "ROBOT"
}
//properties for button 2
button2 = {
    x: undefined,
    fill: "black",
    inside: "HAMSTER"
}
//properties for button 3
button3 = {
    x: undefined,
    fill: "black",
    inside: "GHOST"
}
//properties for button continue
let continueButtonEnd = {
    w: 200,
    h: 75,
    x: 500,
    y: 700,
    fill: "#000000ff",
    text: "Continue",
    visibily: false
}
//properties text at the top
let indicationChoose = {
    x: 400,
    instruction: "Choose...",
    size: 100,
    fill: "black",
    visibily: true
}

function beforeEndSetup() {




}

/**
 * This will be called every frame when the before end variation is active
 */
function beforeEndDraw() {
    //background color
    background("#c4d2e3");

    // the three cards
    drawCards();
    chooseButton(button1);// button for card1
    chooseButton(button2);//button for card2
    chooseButton(button3);//button for card3 

    drawContinueButtonEnd();//button end for answer
    drawText(indicationChoose, 100)//text at the top
    checkOverlap(continueButtonEnd);
}

/*draw the three cards*/
function drawCards() {
    let coordinates = [width / 4, width / 2, (width * 3) / 4];
    let y = height / 2;
    let w = 325;
    let h = 400;



    for (let i = 0; i < coordinates.length; i++) {
        //cards
        push();
        noStroke();
        rectMode(CENTER);
        fill("white")
        rect(coordinates[i], y, w, h, 20);
        pop();
        //images
        push();
        imageMode(CENTER);
        image(cardImages[i], coordinates[i], y - 50, 250, 250);
        pop();

    }

}

/**draw buttons */
function chooseButton(button) {
    let y = height / 2;
    button1.x = width / 4;
    button2.x = width / 2;
    button3.x = (width * 3) / 4;
    //button
    push();
    stroke("white");
    strokeWeight(4);
    fill(button.fill);
    rectMode(CENTER);
    rect(button.x, y + 100, buttonW, buttonH, 30);
    pop();

    //text inside
    push();
    fill("#ffffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(button.inside, button.x, y + 100);
    pop();
}
/*draw end button*/
function drawContinueButtonEnd() {
    if (continueButtonEnd.visibily === true) {
        //button
        push();
        stroke("white");
        strokeWeight(4);
        fill(continueButtonEnd.fill);
        rectMode(CENTER);
        rect(continueButtonEnd.x, continueButtonEnd.y, continueButtonEnd.w, continueButtonEnd.h, 30);
        pop();

        //text
        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(continueButtonEnd.text, continueButtonEnd.x, continueButtonEnd.y);
        pop();
    }
}


/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function endMousePressed() {
    //change color of button when clicked
    let y = height / 2;
    let buttonY = y + 100;
    if (mouseX > button1.x - buttonW / 2 &&
        mouseX < button1.x + buttonW / 2 &&
        mouseY > buttonY - buttonH / 2 &&
        mouseY < buttonY + buttonH / 2
    ) {
        if (button1.fill === "black") {
            button1.fill = "purple";
            //make contine button visible after clicking
            continueButtonEnd.visibily = true;
            soundOnClick.play();
        }
    }
    if (mouseX > button2.x - buttonW / 2 &&
        mouseX < button2.x + buttonW / 2 &&
        mouseY > buttonY - buttonH / 2 &&
        mouseY < buttonY + buttonH / 2
    ) {
        button2.fill = "purple";
        //make contine button visible after clicking
        continueButtonEnd.visibily = true;
        soundOnClick.play();

    }
    if (mouseX > button3.x - buttonW / 2 &&
        mouseX < button3.x + buttonW / 2 &&
        mouseY > buttonY - buttonH / 2 &&
        mouseY < buttonY + buttonH / 2
    ) {
        button3.fill = "purple";
        //make contine button visible after clicking
        continueButtonEnd.visibily = true;
        soundOnClick.play();

    }
    //call goToEnd function
    goToEnd();

}

/* go to end function*/
function goToEnd() {
    //if button clicked call check color
    if (mouseX > continueButtonEnd.x - continueButtonEnd.w / 2 && mouseX < continueButtonEnd.x + continueButtonEnd.w / 2 && mouseY > continueButtonEnd.y - continueButtonEnd.h / 2 && mouseY < continueButtonEnd.y + continueButtonEnd.h / 2) {
        soundOnClick.play();
        checkColor();


    }
}
/* check different scenario and go to different ending*/
function checkColor() {

    if (button2.fill === "purple" || button1.fill === "purple" && button2.fill === "purple" && button3.fill === "purple" || button1.fill === "purple" && button2.fill === "purple" || button2.fill === "purple" && button3.fill === "purple") {
        state = "sad-hamster";
        sadHamsterDraw();
    }
    if (button1.fill === "purple" && button2.fill === "black" && button3.fill === "black" || button3.fill === "purple" && button2.fill === "black" && button1.fill === "black") {
        state = "danger";
        dangerDraw();
    }

    if (button1.fill === "purple" && button3.fill === "purple" && button2.fill === "black") {
        state = "prison";
        prisonDraw();
    }
}
