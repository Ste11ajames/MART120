// character
var characterX = 476;
var characterY = 80;

// Exit door
var exitDoorX =38
var exitDoorY=720

// obstacle shape 1
var shapeX = 76;
var shapeY = 160;
var shapeXSpeed;
var shapeYSpeed;

// obstacle shape 2
var shape2X = 80
var shape2Y = 90
var shape2XSpeed;
var shape2YSpeed;

// mouse shape
var mouseShapeX;
var mouseShapeY;

// key codes for WSAD
var w = 87; 
var s = 83;
var a = 65;
var d = 68;


function setup()
{
    createCanvas(800, 800);
    // shape 1 random speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
    // shape 2 random speed
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
     createCharacter(680,40);
}


function draw()
{

  //canvas design
 background(120,45,111);
 stroke(0);
 fill(0);
 
  createBorders(10);
  
  drawCharacter();
  
  characterMovement();

  drawMouseClicked();

  darwObstacleOne();
  
  drawObstacleTwo();

  moveObstacleOne();
  moveObstacleTwo();
  borderObstacleOne();
  borderObstacleTwo();


  winNotification();

  exitDoor();
   
}

function createBorders(thickness)
{
  // color design
  stroke(0);
   fill(66,99,90);
  // top border
  rect(0,0,width,thickness);
  // left border
  rect(0,0,thickness,height-50);
  // bottom border
  rect(0, height-10,width,thickness);
  // right upper border
  rect(width-10,0,thickness,height);
}

function characterMovement()
{
// handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}

function createCharacter(x,y)
{
  characterX= x;
  characterY= y;
  console.log(characterX)
}

function drawCharacter()
{
  // character
  fill(12,60,400);
  circle(characterX,characterY,25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function drawMouseClicked()
{
  //  mouse click shape
  fill(120,13,222);
  circle(mouseShapeX, mouseShapeY, 90);
}

function darwObstacleOne()
{
// shape 1
fill(40,197,140);
circle(shapeX, shapeY, 26);
}

function drawObstacleTwo()
{
 // shape 2
 fill(70,80,33);
 circle(shape2X, shape2Y, 50);
}

function moveObstacleOne()
{
// move the shape 1
shapeX += shapeXSpeed;
shapeY += shapeYSpeed;
// shape 1 random speed
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
}
function borderObstacleOne()
{
// check to see if the shape has gone out of bounds
if(shapeX > width)
{
    shapeX = 0;
}
if(shapeX < 0)
{
    shapeX = width;
}
if(shapeY > height)
{
    shapeY = 0;
}
if(shapeY < 0)
{
    shapeY = height;
}
}
function borderObstacleTwo()
{
// shape 2 out of bounds
if(shape2X > width)
{
    shape2X = 0;
}
if(shape2X < 0)
{
    shape2X = width;
}
if(shape2Y > height)
{
    shape2Y = 0;
}
if(shape2Y < 0)
{
    shape2Y = height;
}

}
function moveObstacleTwo()
{
   // move shape 2
   shape2X += shape2XSpeed
   shape2Y += shape2YSpeed
// shape 2 random speed
shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
}

function winNotification()
{
// exit notification
if(characterX < 0 && characterY > 750)
{
    fill('#fae');
    stroke(5);
    textSize(30);
    text("Winner Winner Chicken Dinner!", width/2-50, height/2-50);
}
}

function exitDoor()
{
// exit message
textSize(16);
text("EXIT",49,750)

// exit door
fill(255, 204, 0)
rect(exitDoorX,exitDoorY,50,10)

}