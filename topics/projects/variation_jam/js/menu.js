/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let buttons = [
    {
        w: 300,
        h: 75,
        x: 300,
        y: 500,
        fill: "#000000ff",
        text: "The Robot"
    },
    {
        w: 300,
        h: 75,
        x: 300,
        y: 600,
        fill: "#000000ff",
        text: "The Hamster"
    },
    {
        w: 300,
        h: 75,
        x: 300,
        y: 700,
        fill: "#000000ff",
        text: "The Ghost"
    }
];



/**
 * Display the main menu
 */
function menuDraw() {
    background(0);

    image(fridgeImg, 0, 0, width, height, 0, 0, fridgeImg.width, fridgeImg.height, COVER);

    drawObjects(logo, logoImg);

    let startColor = color(48, 25, 52);//0%
    let endColor = color(191, 64, 191);//100%
    let x = 0;
    let xSize = 50;
    let y = 0;


    for (let button of buttons) {




        /*for (let y = 0; y < button.h; y++) {
            let percent = map(y, 0, button.h, 0, 1);
            let c = lerpColor(startColor, endColor, percent);
            stroke("white");
            strokeWeight(4);
            fill(c);
            rectMode(CENTER);
            rect(button.x, button.y, button.w, button.h, 30);
        }*/

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
    if (mouseX > buttons[0].x - buttons[0].w / 2 && mouseX < buttons[0].x + buttons[0].w / 2 && mouseY > buttons[0].y - buttons[0].h / 2 && mouseY < buttons[0].y + buttons[0].h / 2

    ) {
        state = "red-variation";
        redSetup();
    }
    else if (mouseX > buttons[1].x - buttons[1].w / 2 && mouseX < buttons[1].x + buttons[1].w / 2 && mouseY > buttons[1].y - buttons[1].h / 2 && mouseY < buttons[1].y + buttons[1].h / 2) {
        state = "green-variation";
        greenSetup();
    } else if (mouseX > buttons[2].x - buttons[2].w / 2 && mouseX < buttons[2].x + buttons[2].w / 2 && mouseY > buttons[2].y - buttons[2].h / 2 && mouseY < buttons[2].y + buttons[2].h / 2) {
        state = "blue-variation";
        blueSetup();
    }

}