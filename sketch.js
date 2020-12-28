const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; //namespacing or giving short names

var engine, world;
var object, ground, ball;

function setup() {
  createCanvas(800,400);
  myengine = Engine.create(); //creating our engine
  myworld = myengine.world;  //giving short name engine.world (our engine's our world)
  var options = { 
    isStatic: true
  } // the options with which the body will be made
  ground = Bodies.rectangle(400,380,800,40,options); //creating the rectangle body
  World.add(myworld,ground); //adding the body to the world


  var ball_options = { 
    restitution: 1
  } // the options with which the body will be made
  ball = Bodies.circle(400,50,40,ball_options); //creating the rectangle body
  World.add(myworld,ball); //adding the body to the world


  console.log(ground);
}

function draw() {
  background(255,255,255);  
  Engine.update(myengine)

  rectMode(CENTER) //make p5 draw the rect from center
  rect(ground.position.x, ground.position.y, 800,40) // to draw the rect where the body iss
 
  ellipseMode(RADIUS); //to make ellipse accept radius
  ellipse(ball.position.x,ball.position.y, 40,40) //to draw the circle where the ball is

}