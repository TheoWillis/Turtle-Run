//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

function setup() {
  createCanvas(800, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3,true);
}

function draw(){
	background(66, 135, 245);

  me.drawMe();
  me.moveMe();

  if (frameCount % 80 == 0) {
      let  b = new Ball(width, random(0,height), -3, false);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
          balls[i].bounceBall();
     }
}

//avatar class
class Avatar {

	constructor(x,y, speed,alive){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.alive = alive;
	}

	drawMe(){  // draw the running person
    if(this.alive==true){


      stroke("green");
      strokeWeight(3);
      fill(22, 161, 10);
      ellipse(this.x,this.y,40,40);

        }
        else{
          textSize(60)
          fill("red")
          text('you died',175,175)
        }
	}

	moveMe(){
    if (keyIsDown(LEFT_ARROW)) {
      this.x -=this.speed*2;
    }
   if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
      this.x += this.speed*2;
    }
    if (keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
    }
    if(keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
    }
  }
}
  // die(){
  //
  // }

//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, hit){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hit= hit;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("brown");
		 rect(this.x,this.y,100,35,10);
	}

	//update the location of the ball, so it moves cross the screen
	moveBall(){
		this.x = this.x+this.speed;
  //this.-# changes how fast the logs move from right to left
		this.y = this.y;
  }

  bounceBall(){
    //  if (me.x+20>=this.x && me.y-20>=this.y &&me.y+20<=this.y){
      if (me.x>=this.x && me.x<=this.x+10 && me.y-20<=this.y+35&&this.hit==false&&me.y+20>=this.y){
        this.speed=-this.speed;
        this.hit=true;
        me.alive=false;
      }
  }
}
