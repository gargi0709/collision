var fixedRect, movingRect;
var object1,object2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  object1 = createSprite(100,100,50,50)
  object1.shapeColor = "green"

  object2 = createSprite(300,100,50,50)
  object2.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(istouching(movingRect,object1)){
  object1.shapeColor = "red"
  movingRect.shapeColor = "red"
}
else{
object1.shapeColor = "blue"
movingRect.shapeColor = "blue"
}
  drawSprites();
}
function istouching(obj1,obj2){
  if( obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true
}
else {
  return false
}
}