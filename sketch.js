var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var boxRightBody,boxLeftBody,boxBottomBody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 660);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
    //packageSprite = new Package();

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	engine = Engine.create();
	world = engine.world;

	
	packageBody = new Package(200,100,10,10);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:false});
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    boxBottomBody = new Ground(400,650,200,20,{isStatic:true});
	boxRightBody = new Ground(310,650,20,200,{isStatic:true});
	boxLeftBody = new Ground(490,650,20,200,{isStatic:true});

	
    
 	

 	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine);

 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 






  drawSprites();
  //packageBody.display();
  boxLeftBody.display();
  boxRightBody.display();
  boxBottomBody.display();
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) { 
		Matter.Body.setStatic(packageBody.body,false);
	}
	else if(keyCode == LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 20
	 }
	
	else if(keyCode == RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20
	}
}