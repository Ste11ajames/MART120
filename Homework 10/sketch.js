
var headX = 250;
var headY = 100;
var headDirection = 1;

var  bodyX = 200;
var  bodyY = 185;
var  bodyDirection = 3;

var leftarmX = 150;
var leftarmY = 195;
var leftarmDirection = 3;

var rightarmX = 300;
var rightarmY = 195;
var rightarmDirection = 1;

var hairtieX =325;
var hairtieY =50;
var hairtieDirectionX = 1;
var hairtieDirectionY = 3;

var size = 22;
var count = 0;
var sizeDirection =2;

var movement = 13;

function setup()
{
    createCanvas(500, 600);
    movement = floor(random(1,11));

}
function draw()
{
    background(120,45,145);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Portrait woohoo!", 10,20);
    

    // head
    fill(255, 204, 0);
    circle(headX, headY,175);
    headX+=headDirection;
    if(headX >= 418|| headX <= 82)
   {
    headDirection *= -1;
    movement *= -1;
   }
   headX += movement;

 // eyes
    strokeWeight(8);
    fill(255, 204, 100);
    point(200,75,10);
    point(288,75,10);

// nose
    triangle(240,90,245,82,250,90);
    
// mouth
    fill('red');
    ellipse(245, 135, 45, 30)

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    line(130,175,100,120);
    line(360,175,390,120)
    // hairtie1
    circle(hairtieX,hairtieY,20);
    hairtieX=hairtieX + hairtieDirectionX;
    hairtieY=hairtieY + hairtieDirectionY;
    if(hairtieX >= 500 || hairtieY >=500)
    {
        hairtieDirectionX *= -1;
        hairtieDirectionY *= -1;
    }
    if(hairtieX <= 1 || hairtieY <= 1)
    {
        hairtieDirectionX*=-1;
        hairtieDirectionY*=-1;
    }

    // hairtie2
    circle(175,50,20);

// body
    fill('#fae');
    rect(200,bodyY,100,180);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 600)
    {
        bodyDirection *= -1;
    }
 // decoration
    fill('rgb(0,255,0)');
    triangle(220,320,250,364,280,320)
    triangle(220,185,250,220,280,185)

    // right arm
    fill(255, 204, 0);
    rect(rightarmX,rightarmY,50,10);
    rightarmX += rightarmDirection;
    if(rightarmX >= 500 || rightarmX <= 0)
    {
        rightarmDirection *= -1;
        movement *= -1;
    }
    rightarmX += movement;
 // left arm
    rect(150,leftarmY,50,10);
    leftarmY += bodyDirection;
    if(leftarmY <= 0 || leftarmY >= 600)
{
    bodyDirection *= -1;
    movement *= -1;
}
leftarmY += movement;
  // left leg
    rect(200,364,10,130);
    // right leg
    rect(290,364,10,130);
    
    fill(120);
    textSize(22);
    text("Stella Smith",190,550 );

}


