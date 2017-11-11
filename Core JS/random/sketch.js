function setup() {
  createCanvas(640, 360);
  background(0);
  let button = createButton("press");
  button.mousePressed(changeBackground);
}


function changeBackground() {
  background(random(255));
}