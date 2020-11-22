var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Right_Box,Left_Box,Bottom_Box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	packageBody = Bodies.circle(width/2,200,5,{restitution:0.6,isStatic:true});
	World.add(world, packageBody);

	Right_Box = Bodies.rectangle(510,610,20,100,{isStatic:true});
	World.add(world,Right_Box);
	Left_Box = Bodies.rectangle(290,610,20,100,{isStatic:true});
	World.add(world,Left_Box);
	Bottom_Box = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world,Bottom_Box);

	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
 	World.add(world,ground);

	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 fill("red");
 rect(Right_Box.position.x,Right_Box.position.y,20,100);
 rect(Left_Box.position.x,Left_Box.position.y,20,100);
 rect(Bottom_Box.position.x,Bottom_Box.position.y,200,20);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false); 
  }
}



