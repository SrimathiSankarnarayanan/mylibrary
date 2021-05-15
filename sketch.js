var movingRect, fixedRect, movingRect2,fixedRect2;



function setup() {
  createCanvas(1200,800);

  movingRect=createSprite(400,400,80,30);
  movingRect.shapeColor="green";
  movingRect.debug = true;

  fixedRect=createSprite(600,400,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;

 

  fixedRect2=createSprite(400,600,50,80);
  fixedRect2.shapeColor="green";
  fixedRect2.debug = true;

  gameObj1=createSprite(100,200,50,50);
  gameObj1.shapeColor="blue";
  gameObj1.debug = true;
  gameObj1.velocityX=2;

  gameObj2=createSprite(1100,200,50,50);
  gameObj2.shapeColor="yellow";
  gameObj2.debug = true;
  gameObj2.velocityX=-2;


  
}

function draw() {
  background("black");  
 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
//whatever we are passing is clalled arguments..(MR_FR)
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor= "red";
    fixedRect.shapeColor="red";
  }
else{
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
}

if(isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor= "red";
  fixedRect2.shapeColor="red";
}
else{
movingRect.shapeColor="green";
fixedRect2.shapeColor="green";
}

//Calling bounce off
bounceOff(gameObj1,gameObj2);

  console.log(fixedRect.x-movingRect.x);

  drawSprites();
}

