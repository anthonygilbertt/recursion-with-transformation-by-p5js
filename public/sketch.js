function setup() {
  createCanvas(500,500);
}

function draw() {
    background(51);
    //Let's pick an angle 0 to 90 degrees
    angle = PI / 4;

    //Start the tree from the bottom
    translate(width / 2, height);
    stroke(255);
    branch(120);
}

function branch(len) {
    //draw the branch
    strokeWeight(2);
    line(0, 0, 0, -len);
    
    //Move to the end of the shrink
    translate(0, -len);
    len *= 0.66;

    if (len > 2) {
        push();
        rotate(angle);
        branch(len);
        pop();

        //repeat the same thing, only branch off of the "left" this time!
        push();
        rotate(-angle);
        branch(len);
        pop();
    }

}