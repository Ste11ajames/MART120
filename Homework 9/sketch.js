function setup()
{
    createCanvas(500, 600);
}
function draw()
{
    background(120,45,145);
    textSize(22)
    text("Portrait woohoo!", 10,20);

    // head
    fill(255, 204, 0);
    circle(250,100,175);
   
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
    
    circle(325,50,20);
    circle(175,50,20);
    // body
    fill('#fae');
    rect(200,185,100,180);
    
    // decoration
    fill('rgb(0,255,0)');
    triangle(220,320,250,364,280,320)
    triangle(220,185,250,220,280,185)
    // right arm
    fill(255, 204, 0);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,364,10,130);
    // right leg
    rect(290,364,10,130);
    
    fill(120);
    textSize(22);
    text("Stella Smith",190,550 );

}


