const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperobj;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,650);
    paperobj = new paper(100,300);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
//   if(keyDown("m")){
// 	  paperobj.velocityY = -3;
//   }

//   if(keyDown("n")){
// 	paperobj.velocityX = -3;
// }

// if(keyDown("p")){
// 	paperobj.velocityX = 3;
// }

// if(keyDown("l")){
// 	paperobj.velocityY = 3;
// }

  paperobj.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:80,y:-80})
}
}