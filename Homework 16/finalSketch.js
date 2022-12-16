var headX = 250;
var headY = 100;
var headDirection = 1;

var  bodyX = 200;
var  bodyY = 185;


var leftarmX = 147;
var leftarmY = 195;


var rightarmX = 358;
var rightarmY = 195;


var hairtieX =325;
var hairtieY =50;


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
    background(120,459,145);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("FINAL PROJECT!", 130,560);
    

    // head
    fill(25, 20, 660);
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
    point(220,75,10);
    point(288,75,10);

// nose
    triangle(250,90,255,82,260,90);
    
// mouth
    fill('red');
    ellipse(263, 135, 50, 15)

    // hair
    line(130,175,175,50);
    line(325,50,360,175);
    line(130,175,100,120);
    line(360,175,390,120);
    line(175,50,100,120);
    line(390,120,325,50);
    // hairtie1
    fill(784,918,608)
    circle(hairtieX,hairtieY,20);
    
    // hairtie2
    circle(175,50,20);

// body
    fill(25,20,660);
    rect(200,bodyY,150,180);
   
 // suit
    fill('#fae');
    
    triangle(224,185,274,310,324,185)

    // right arm
    fill(255, 204, 0);
    rect(rightarmX,rightarmY,100,15);
    
 // left arm
    rect(100,leftarmY,100,15);
  
  // left leg
    rect(200,364,10,130);
    // right leg
    rect(340,364,10,130);
    
    //right shoe
    fill(155,15,15);
    ellipse(355,510,50,30);

    //left shoe
    fill(155,15,15);
    ellipse(195,510,50,30);

    //right glove
    fill(155,15,15);
    ellipse(471,202,30,19);
    
    //left glove
    fill(155,15,15);
    ellipse(97,202,30,19);
    

}

