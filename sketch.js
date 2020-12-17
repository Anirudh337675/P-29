
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var engine,world;



function setup() {
  var Canvas=createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  box8=new Box(330,235,30,40);
  box9=new Box(360,235,30,40);
  box10=new Box(390,235,30,40);
  box11=new Box(420,235,30,40);
  box12=new Box(450,235,30,40);
  
  box13=new Box(360,195,30,40);
  box14=new Box(390,195,30,40);
  box15=new Box(420,195,30,40);

  box16=new Box(390,155,30,40);

  ground=new Ground(400,390,800,10);

}

function draw() {
  background(0);
  Engine.update(engine);

box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
ground.display();

}