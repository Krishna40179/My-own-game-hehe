var bg;
var James;
var enemy;
var en1,en2,en3;
var live=3;
var score=0
var enemygrp,bulletgrp;
function preload(){
  bg=loadImage("Images/bg.jpg")
  Jamesimg=loadImage("Images/spaceship.png")
en1=loadImage("Images/Enemy ship.png")
en2=loadImage("Images/miniboss.png")
en3=loadImage("Images/Tank enemy.png")
}

function setup() {
  createCanvas(1000,750);
  James=createSprite(500,700)
  James.addImage(Jamesimg)
  bulletgrp=createGroup();
   enemygrp=createGroup();
}

function draw() {
  background(bg); 
  James.depth+=10;
  if(keyDown("left")) {
    James.x-=15
  }
  if(keyDown("right")) {
    James.x+=15
  }
  if(keyWentDown("space")){
   bullets();
  }
  enemyship();
 drawSprites();
fill("white")
textSize(40)
stroke("red");
strokeWeight(4);
text("Lives left: "+live,100,50);
text("Score: "+score,800,50);
}

function enemyship(){
  if(frameCount%100==0){
enemy=createSprite(random(120,900),-10)
var rand=Math.round(random(1,3))
switch(rand){
  case 1 :enemy.addImage(en1)
  break;
  case 2 :enemy.addImage(en2)
  break;
  case 3 :enemy.addImage(en3)
  break;
  default:break;

}
enemy.velocityY=random(4,7);
enemy.lifetime=180
enemy.scale=0.5;
  }
}
function bullets(){
  var gun=createSprite(500,700,5,20)
  gun.shapeColor="red";
  gun.x=James.x;
  gun.y=James.y;
  gun.velocityY=-12;
  
}