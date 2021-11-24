var canvas;
var block4;
var ball, edges;
var music;

function preload()
{
    music = loadSound("wooow.mpeg");
    image = loadImage("smooth1.jpg");
}
function setup()
{
    canvas = createCanvas(850,600);

    block4 = createSprite(350,580,2000,10);
    block4.shapeColor = "green";
    ball = createSprite(425,100,60,60);
    ball.shapeColor = ("blue")
}
function draw() 
{
    background(image)
    edges=createEdgeSprites();

    stroke("white");
    fill("BLACK");
    textSize(30);
    text("TO MY BEST FRIEND SMIT :)",210,550);
   
  
   if(block4.isTouching(ball) && ball.bounceOff(block4)) {
       ball.shapeColor = "green";
       music.play();
   }

    if (keyDown(DOWN_ARROW)) {
  ball.velocityX =0;
  ball.velocityY =4;
}


    drawSprites();
}
