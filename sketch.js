
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  monkey = createSprite(50,350,20,20);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.11
 
  ground = createSprite(200,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
background("pink");

if(ground.x<0){
  ground.x=ground.width/2
}

stroke("black");
strokeWeight(4)
textSize(20);
fill("white");
text("Score: " + score, 40, 50);
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime, 220, 50);

monkey.collide(ground)



spawnObstacles();
spawnBananas();
drawSprites();
}

function spawnObstacles(){
  if(frameCount%150===0){
     obstacle = createSprite(400,325,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    obstacle.lifetime = 200;
    console.log(obstacle.velocityX);
  }
}


function spawnBananas(){
  if(frameCount%80===0){
     banana = createSprite(400,Math.round(150,300),20);
     banana.addImage(bananaImage);
     banana.scale = 0.09;
    banana.velocityX = -4;
    banana.lifetime = 200;
    console.log(banana.velocityX);
  }
}




