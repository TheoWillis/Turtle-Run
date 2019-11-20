//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(800, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(66, 135, 245);

  me.drawMe();
  me.moveMe();

  if (frameCount % 80 == 0) {
      let  b = new Ball(width, random(0,height), -1);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
     }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("green");
        strokeWeight(3);
    		fill(22, 161, 10);
		    ellipse(this.x,this.y,40,40);

	}

	moveMe(){


   if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
      this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
       this.x -= this.speed;
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
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
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
		this.x = this.x-3;
  //this.-# changes how fast the logs move from right to left
		this.y = this.y;
  //keep this.y with no +- any number to keep logs moving horizontal
	}

}
