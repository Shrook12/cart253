/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

//properties for the buttons in menu state
let buttons = [
    //button[0] go to robot section
    {
        w: 300,//width of the button
        h: 75,// height og the button
        x: 300, //x coordinate 
        y: 500, //y coordinate 
        fill: "#000000ff", //color of the button
        text: "The Robot" //text inside button
    },
    //button[1] got to hamster section
    {
        w: 300, //width of the button
        h: 75,// height og the button
        x: 300,//x coordinate 
        y: 600,//y coordinate 
        fill: "#000000ff", //color of the button
        text: "The Hamster" //text inside button
    },
    //button[2] got to ghost section
    {
        w: 300,//width of the button
        h: 75, // height og the button
        x: 300,//x coordinate 
        y: 700,//y coordinate 
        fill: "#000000ff", //color of the button
        text: "The Ghost" //text inside button
    }
];



/**
 * Display the main menu
 */
function menuDraw() {
    background(0);

    //background image
    screen(fridgeImg);

    //logo
    drawObjects(logo, logoImg);

    //for the three buttons
    drawThreeButtons();

    //check overlap for the buttons so it will change color when overlap
    checkOverlap(buttons[0]);
    checkOverlap(buttons[1]);
    checkOverlap(buttons[2]);

}
/** draw the three buttons */
function drawThreeButtons() {
    for (let button of buttons) {

        push();
        stroke("white");
        strokeWeight(4);
        fill(button.fill);
        rectMode(CENTER);
        rect(button.x, button.y, button.w, button.h, 30);
        pop();


        push();
        fill("#ffffffff");
        textSize(32);
        textAlign(CENTER, CENTER);
        text(button.text, button.x, button.y);
        pop();

    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {
    //if overlap the first button it will go the robot section
    if (mouseX > buttons[0].x - buttons[0].w / 2 && mouseX < buttons[0].x + buttons[0].w / 2 && mouseY > buttons[0].y - buttons[0].h / 2 && mouseY < buttons[0].y + buttons[0].h / 2

    ) {
        state = "red-variation";
        redSetup();
    }
    //if overlap the second button it will go the hamster section
    else if (mouseX > buttons[1].x - buttons[1].w / 2 && mouseX < buttons[1].x + buttons[1].w / 2 && mouseY > buttons[1].y - buttons[1].h / 2 && mouseY < buttons[1].y + buttons[1].h / 2) {
        state = "green-variation";
        greenSetup();
        //if overlap the third button it will go the ghost section
    } else if (mouseX > buttons[2].x - buttons[2].w / 2 && mouseX < buttons[2].x + buttons[2].w / 2 && mouseY > buttons[2].y - buttons[2].h / 2 && mouseY < buttons[2].y + buttons[2].h / 2) {
        state = "blue-variation";
        blueSetup();
    }

}