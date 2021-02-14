
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;

function preload()
{
    polygon = loadImage("polygon.png")
}
var engine,world

function setup() {
	createCanvas(1600, 700);
    
    engine = Engine.create();
    world = engine.world
    Engine.run(engine)

    ground = new Ground(800,690,1600,10);

    Stand1 = new Stand(390,300,250,10);
    Stand2 = new Stand(700,200,200,10);

    Block1 = new Block(300,275,30,40);
    Block2 = new Block(330,275,30,40);
    Block3 = new Block(360,275,30,40);
    Block4 = new Block(390,275,30,40);
    Block5 = new Block(420,275,30,40);
    Block6 = new Block(450,275,30,40);
    Block7 = new Block(480,275,30,40);

    Block8 = new Block(330,235,30,40);
    Block9 = new Block(360,235,30,40);
    Block10 = new Block(390,235,30,40);
    Block11 = new Block(420,235,30,40);
    Block12 = new Block(450,235,30,40);

    Block13 = new Block(360,195,30,40);
    Block14 = new Block(390,195,30,40);
    Block15 = new Block(420,195,30,40);

    Block16 = new Block(390,155,30,40)

    Block17 = new Block(640,175,30,40)
    Block18 = new Block(670,175,30,40)
    Block19 = new Block(700,175,30,40)
    Block20 = new Block(730,175,30,40)
    Block21 = new Block(760,175,30,40)

    Block22 = new Block(670,135,30,40)
    Block23 = new Block(700,135,30,40)
    Block24 = new Block(730,135,30,40)
    
    Block25 = new Block(700,95,30,40)

    ball = Bodies.circle(100,200,20);
    World.add(world,ball)
    Slingshot = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {
    rectMode(CENTER);
    background("white");
    
    imageMode(CENTER)
    image(polygon,ball.position.x,ball.position.y,40,40)

    ground.display();

    Stand1.display();
    Stand2.display();
    fill("purple")
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    fill("orange")
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    fill("yellow")
    Block13.display();
    Block14.display();
    Block15.display();
    fill("green")
    Block16.display();
    fill("yellow")
    Block17.display();
    Block18.display();
    Block19.display();
    Block20.display();
    Block21.display();
    fill("green")
    Block22.display();
    Block23.display();
    Block24.display();
    fill("red")
    Block25.display();

    Slingshot.display();

    fill("black")
    text("Drag the Hexagonal Stone and Release it, to launch it towards the Blocks",100,100)

    drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(block.body,block.body.position,{x:-50,y:-50})
	}
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Slingshot.attach(this.ball)
    }
}

