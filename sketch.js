var ground;
var dustbinImg,dustbinSprite;
var paperImg,paperSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 650, 800, 10);
	
	dustbinSprite = new Log(600, 580, 150, 150);

	paperSprite = new Paper(100,200,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  paperSprite.display();
  dustbinSprite.display();
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperSprite.body,paperSprite.body.position, {x:265, y: -600});
	}
}

