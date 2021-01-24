var canvas;
var musicSound;
var surface1,surface2,surface3,surface4;
var box;
var topEdge,leftEdge, rightEdge;

function preload(){
    musicSound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1600,600)
   
    //create 4 different surfaces

    surface1 = createSprite(210,500,380,25);
    surface1 . shapeColor = rgb(255,0,0);

    surface2 = createSprite(610,500,380,25);
    surface2 . shapeColor = rgb(0,255,0);

    surface3 = createSprite(1010,500,380,25);
    surface3 . shapeColor = rgb(190,185,0);

    surface4 = createSprite(1410,500,380,25);
    surface4 . shapeColor = rgb(0,0,550);

    topEdge = createSprite(800,2,1600,2);
    topEdge . shapeColor = rgb(255,255,255);

    leftEdge = createSprite(2,300,2,600);
    rightEdge = createSprite(1598,300,2,600);
    //create box sprite and give velocity

    box = createSprite(random(20,750),2,30,30);
    box . velocityY = 8;
    box . velocityX = 4;

}

function draw() 
{
    background(rgb(3,3,3));

  // createEdgeSprite

  //createEdgeSprites();
  box.bounceOff(topEdge);
  box.bounceOff(leftEdge);
  box.bounceOff(rightEdge);

 if(surface1.isTouching(box))
 {
     box . shapeColor = rgb(255,0,0);
     box.velocityX = 0;
     box.velocityY = 0;
     musicSound.stop();
 }

 if(surface2.isTouching(box) && box.bounceOff(surface2))
 {
     box . shapeColor = rgb(0,255,0);
     musicSound.play();
     musicSound.play();
     
 }
 
 if(surface3.isTouching(box) && box.bounceOff(surface3))
 {
     box . shapeColor = rgb(190,185,0);
     musicSound.play();
 }
  
 if(surface4.isTouching(box) && box.bounceOff(surface4))
 {
     box . shapeColor = rgb(0,0,550);
     musicSound.play();
 }

 
    drawSprites();

    //add condition to check if box touching surface and make it box
}
