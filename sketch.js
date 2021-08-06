const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = []


function preload(){
  backgroundImage = loadImage("snow2.jpg")
}



function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world
  ground = new Ground(500, 590, width, 20)
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  ground.display()

  if (frameCount% 60=== 0){
    particles.push(new Particle(random(20,width - 20), 10, 10))
  }
 for (var j = 0; j< particles.length; j++){
   particles[j].display()
 }
}

