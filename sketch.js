
//creating variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var mario ,mario_running;
var coin ,coinImage, coinGroup,obstacle, obstacleImage,obstacleGroup;
var score=0;
var  ground_Img
var tempcoin
function preload()
{
  ground_Img =loadImage("bg2.png")
 mario_running =loadAnimation("mrio1.png","mrio2.png","mrio3.png");
  
coinImage = loadImage("coin.png");
obstacleImage = loadImage("ob.png")



   
}
function setup() {
  createCanvas(1000, 400);
  
   ground=createSprite(400,355,10000,10)
  
 
  
  mario=createSprite(100,350,900,10)
  mario.addAnimation("moving",mario_running);
  mario.scale=2;
  
  mario.setCollider("rectangle",0,0,20,50)
   coinGroup=new Group ();     
  obstacleGroup=new Group ();
}

function draw() {
  background(ground_Img);
  mario.velocityY = mario.velocityY + 0.8
  textSize(40)
  textStyle(ITALIC);
  fill("red")
  text("Coincollected  "+score ,100,100)
console.log(score)
 //making monkey jump when space is pressed
if( gameState===PLAY){
  ground.visible=false
  for(var z=0;z<coinGroup.lenght;z++){
    tempcoin=coinGroup.get(z);
   if(mario.isTouching(tempcoin)){
    score=score+1;
    console.log("HI")
    tempcoin.destroy();
     
   }
  }
 if(keyDown("space") && mario.y>280)
  {
    mario.velocityY=-20
   
  }
 spawncoin();
spawnobstacle();
   
 
  
    
    
  


 if(mario.isTouching(obstacleGroup))  {
   
   gameState=END
  }
  mario.collide(ground);
  drawSprites()
}

   if (gameState === END) {
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  
     ground.velocityX = 0;
        mario.velocityY = 0
  
   }
}
                                  

  
   function spawncoin(){
if (World.frameCount%150===0){
coin=createSprite(1000,200,10,2);  
coin.y = Math.round(random(80,120))
coin.lifetime=300;
coin.velocityX=-3
coin.addImage( coinImage );
coin.scale=0.20     
coinGroup.add(coin);
}  
}  
  
 function spawnobstacle (){
if (World.frameCount%300===0){
obstacle=createSprite(900,280,300,2);
obstacle.lifetime=300;
obstacle.velocityX=-3
obstacle.addImage( obstacleImage);
obstacle.scale=0.50
obstacleGroup.add(obstacle);
}  
    
}  
  
 
  































































