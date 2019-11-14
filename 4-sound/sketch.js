//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;

var ghost;

let mySound;



function preload() {
  soundFormats('wav', 'ogg');
  mySound = loadSound('oof.wav');
  ghost = loadAnimation('sprite/Kodama001.png', 'sprite/Kodama015.png');
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3,true);

}

function draw(){
	background(0,0,0);


  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
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
    if(this.alive ==true){

      animation(ghost, this.x, this.y);
      // stroke("green");
      // strokeWeight(3);
      // fill("blue");
      // ellipse(this.x,this.y,20,20);
      // line(this.x,this.y, this.x, this.y+40);
      // line(this.x, this.y+40, this.x-20, this.y+60);
      // line(this.x, this.y+40, this.x+10, this.y+50);
      // line(this.x+10, this.y+50, this.x+5, this.y+60);
      // line(this.x, this.y+15, this.x-10, this.y+25);
      // line(this.x-10, this.y+25, this.x+10, this.y+35);


    }
    else{
      textSize(60)
      fill("red")
      text('you died',175,175)
    }

	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    		this.y = y;
        	this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    		stroke(0);
        	strokeWeight(1);
    		fill("red");
		ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
            mySound.setVolume(0.1);
            mySound.play();
            me.alive=false;
    		}
  	}

}
