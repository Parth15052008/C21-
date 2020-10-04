var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  wallcreateSprite(1200,283,thickness,height/2);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}