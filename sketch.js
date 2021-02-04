
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone;
var hammer ;
var rubber;


function preload()
{
	


	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone =  new Stone (700,320,70,70);
    rubber = new Rubber(920,320,70,700);
    hammer = new Hammer(700,240,70,70);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



