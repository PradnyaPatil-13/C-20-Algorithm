var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 300);
  movingRect= createSprite(400, 200, 80, 30);

  ball = createSprite(100,100,20,20);
  ball.shapeColor = "blue";
  ball.velocityX = 3;

  ball1 = createSprite(100,200,20,20);
  ball1.shapeColor = "yellow";
  ball1.velocityX = 3;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.x < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.x < fixedRect.height/2 + movingRect.height/2  )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

//collide
if(fixedRect.x - ball.x < fixedRect.width/2 + ball.width/2){
  ball.velocityX = 0;
}

//bounce off
if(fixedRect.x - ball1.x < fixedRect.width/2 + ball1.width/2){
  ball1.velocityX = ball1.velocityX * (-1);
}
  drawSprites();
}
