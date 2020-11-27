var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ground;

function setup() {
  createCanvas(800,480);
  ground = createSprite(200,480,1600,10);
  for(var k=0; k <=innerWidth; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  for (var j = 0; j< particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k< divisions.length; k++){
    divisions[k].display();
  } 
  for (var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10, 10));
  }
  particles[j].display();
  divisions[k].display();
  plinkos[j].display();
}
