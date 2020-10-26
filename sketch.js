
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(400,300,50,50);
	chain1 = new chain (bob1.body,roof1.body); 

	bob2 = new bob(402,300,50,50);

	
	bob3 = new bob(404,300,50,50);

	
	bob4 = new bob(406,300,50,50);

	
	bob5 = new bob(408,300,50,50);

	
	ground = new roof(400,600,800,30);
	roof1 = new roof(400,200,350,40);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display(); 
  bob5.display();
  ground.display();
  roof1.display();
  chain1.display();
  drawSprites();
 
}



