var balloon,bg,ballon_Ani;
var database,position;
var height;
function preload(){
  bg = loadImage("Hot Air Ballon-01.png");
  ballon_Ani = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,640);
  balloon = createSprite(500,200,20,20);
  balloon.addAnimation("running",ballon_Ani);
  balloon.scale = 0.5
}

function draw() {
  background(bg);  
  textSize(20);
  text("Use Arrow keys to move balloon",100,30);
  if(keyDown("down")){
    balloon.x+=0;
    balloon.y+=5;
  }
  if(keyDown("up")){
    balloon.x+=0;
    balloon.y-=5;
  }
  if(keyDown("left")){
    balloon.x-=5;
    balloon.y+=0;
  }
  if(keyDown("right")){
    balloon.x+=5;
    balloon.y+=0;
  }
  drawSprites();
}
