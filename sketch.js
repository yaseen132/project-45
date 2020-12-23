var spaceShip;
var bg;
var asteroid;
var asteroidImage;
var asteroidsGroup;
//var gameState="play"
var score=0;
var invisibleWall;
//sajnazy@gmail.com
function preload(){
spaceshipImage=loadImage("hero.png")
bg=loadImage("bg.jpg");
asteroidImage=loadImage("asteroid.png")

}
function setup(){
createCanvas(1000,300);

spaceShip=createSprite(50,200,20,20);
spaceShip.addImage(spaceshipImage)
spaceShip.scale=0.3
spaceShip.debug=true

invisibleWall=createSprite(20,250,20,500)
invisibleWall.visible=true

asteroidsGroup=new Group()

}
function draw(){
background(bg)

//if(gameState==="play"){
if(keyDown(UP_ARROW)){
    spaceShip.velocityY=-4
}
spaceShip.velocityY=spaceShip.velocityY+0.5

   if(asteroidsGroup.isTouching(spaceShip)){
   spaceShip.velocityY=0;
  }
  if(asteroidsGroup.isTouching(invisibleWall)){
    score=score+1;
  

   
}
  

asteroids();


drawSprites();
textSize(20)
text("SCORE:"+score,400,30)
}

    

function asteroids(){
if(frameCount%120===0)
{
    var asteroid=createSprite(1000,200,20,20)
    asteroid.addImage(asteroidImage) 
    asteroid.scale=0.3
    asteroid.velocityX=-3
    asteroid.debug=true
    asteroid.lifetime=309
    asteroid.y=Math.round(random(40,250))
  //  asteroid.y=Math.round(random(150,300))
    asteroidsGroup.add(asteroid)
    
    asteroid.setCollider("circle",0,0,160)
    
    
   

}


}