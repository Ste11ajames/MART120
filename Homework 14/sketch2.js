// character
var characterX = 476;
var characterY = 80;

// Exit door
var exitDoorX =38
var exitDoorY=720

// obstacle shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var rColor = ['red', 'green', 'yellow', 'orange', 'purple'];
var randomIndex = Math.floor(Math.random() * rColor.length);
var randomColor = rColor [randomIndex];


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
    
     // random speeds
     for (var i = 0; i < 10; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(800);
        shapeYs[i] = getRandomNumber(800);
        diameters[i] = getRandomNumber(30);
    }
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

  

  winNotification();

  exitDoor();



  // obstacle color
  
  // draw obstacle
  for(var i = 0; i < shapeXs.length; i++ ) {
    randomIndex = Math.floor(Math.random()*rColor.length);
    fill(rColor[randomIndex]);circle(shapeXs[i], shapeYs[i], diameters[i]);
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);



     
      // move obstacle
      
      shapeXs[i] += shapeXSpeeds[i];
      shapeYs[i] += shapeYSpeeds[i];
      // has obstacle gone out of bounds
      if (shapeXs[i] > width) {
          shapeXs[i] = 0;
      }
      if (shapeXs[i] < 0) {
          shapeXs[i] = width;
      }
      if (shapeYs[i] > height) {
          shapeYs[i] = 0;
      }
      if (shapeYs[i] < 0) {
          shapeYs[i] = height;
      }
  }
   
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
//random number function
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
