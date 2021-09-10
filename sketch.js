var jaxon, jaxon_running, edges;
var friend, friend_running;
var pathImage;
var path;
function preload(){
  jaxon_running = loadAnimation("Runner1.png", "Runner2.png");
  pathImage = loadImage("path.png");
  //pre-load images
  friend_running = loadAnimation("Runner1.png", "Runner2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4
path.scale = 1.2
friend = createSprite(50,100);
jaxon = createSprite(100,100);
jaxon.addAnimation("running", jaxon_running);
friend.addAnimation("speeding", friend_running);
edges = createEdgeSprites();

jaxon.scale = 0.1
friend.scale = 0.1


}

function draw() {
  background(0);
if(path.y > 400){
  path.y = height/2
}

jaxon.x = World.mouseX;
jaxon.y = World.mouseY;
drawSprites();
}


