const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,stone,slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1000,100,30);
  mango3=new mango(900,180,30);
  mango4=new mango(990,180,30);
  mango5=new mango(1080,180,30);
  mango6=new mango(1170,180,30);
  mango7=new mango(1260,180,30);
  mango8=new mango(1100,30,30);
  mango9=new mango(980,240,30);
  mango10=new mango(1120,240,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stone=new Stone(230,410);
	slingshot = new SlingShot(stone.body,{x:250, y:100});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();

  groundObject.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}
