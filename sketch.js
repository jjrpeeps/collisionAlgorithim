var fixedRectangle,movingRectangle;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRectangle=createSprite(600,400,50,80);
  movingRectangle=createSprite(400,200,80,20);
  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2&&
    fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
      fixedRectangle.shapeColor="blue";
  movingRectangle.shapeColor="blue"; 
    }
    else{
      fixedRectangle.shapeColor="orange";
      movingRectangle.shapeColor="orange";   
    }
  drawSprites();
}