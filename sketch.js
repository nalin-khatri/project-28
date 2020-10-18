
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, tree;

var boy, stone;
var chain;

var body1, body2, body3, body4, body5;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(825,380,360,600);
	ground = new Base(500,680);
	boy = new Boy(250, 580);
	stone = new Stone(200,500);

	chain = new Connect(stone.body, boy.body);

	body1 = new Mango(830,240);
	body2 = new Mango(740,280);
	body3 = new Mango(750,340);
	body4 = new Mango(920,300);
	body5 = new Mango(840,150);

	Engine.run(engine);
  
}


function draw() {
  background("white");

  Engine.update(engine);

  textSize(20);
  text("Press Space to get a second chance to play!!", 200,200);

  tree.display();
  ground.display();

  boy.display();
  stone.display();

  chain.display();

  body1.display();
  body2.display();
  body3.display();
  body4.display();
  body5.display();

  detectcollision(stone,body1);
  detectcollision(stone,body2);
  detectcollision(stone,body3);
  detectcollision(stone,body4);
  detectcollision(stone,body5);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	chain.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 235, y: 500});
		chain.attach(stone.body);
	}
}







