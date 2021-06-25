var hr, min, sec;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200, 200);
  rotate(-90);
  
  strokeWeight(4);
  noFill();
  
  stroke(255, 100, 150);
  let secAngle = map(sec, 0, 59, 0, 360);
  arc(0, 0, 150, 150, 0, secAngle);
  
  stroke(255, 100, 255);
  let minAngle = map(min, 0, 59, 0, 360);
  arc(0, 0, 130, 130, 0, minAngle);

  stroke(255, 255, 150);
  let hourAngle = map(hr, 0, 24, 0, 360);
  arc(0, 0, 110, 110, 0, hourAngle);

  push();
  rotate(secAngle);
  stroke(255, 100, 150);
  line(0, 0, 45, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(255, 100, 255);
  line(0, 0, 40, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(255, 255, 150);
  line(0, 0, 25, 0);
  pop();

  
  //text(hr + ":" + min + ":" + sec, 10, 200);
  drawSprites();
}