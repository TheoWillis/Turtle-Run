//create an empty array called balls
let balls = [];

let fishes = [];
// let highscore = localStorage.getItem("maxscore")

let score = 0;


//create a variable to hold your avatar
let me;
let timer = 15;

var turtle;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  turtle = loadAnimation('sprites/Turtle1.png', 'sprites/Turtle2.png','sprites/Turtle3.png','sprites/Turtle4.png');
}


function setup() {
  createCanvas(800, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3, true);
}

function draw(){
  background(66, 135, 245);

  textSize(30);
  fill(250, 250, 250);
  text ("Score: " + score,50,50)
  text ("Life: " + timer,650,50)
  textSize(15);
  text ("Use Arrow Keys to Move; Dodge Logs; Collect Fish to Replenish Your Life", 155,390)
  // text ("Highscore: " + maxscore,50, 100)

  me.drawMe();
  me.moveMe();

  // animation(turtle, 300, 200);
  if(me.alive==true){
    if (frameCount%60==0){
      score=score+1
      timer=timer-1
      }

    }

  else{
      // score=0
      timer=0
    }
    if(timer==0){
      me.alive=false
    }


  if (frameCount % 80 == 0) {
      let  b = new Ball(width, random(0,height), -3, false);

      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

    if (frameCount % 400 == 0) {
        let  b = new Fish(width, random(0,height), -3, false);
        fishes.push(b);
        console.log(fishes); //print the balls array to the console
      }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
          balls[i].bounceBall();
     }
     for (let i = 0; i < fishes.length; i++) {
   	 	      fishes[i].drawFish();
          	fishes[i].moveFish();
            fishes[i].bounceFish();
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
      animation(turtle,this.x,this.y);
      // stroke("green");
      // strokeWeight(3);
      // fill(22, 161, 10);
      // ellipse(this.x,this.y,40,40);
        }
    else{
      textSize(60)
      fill("red")
      text('GAME OVER',250,250)
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

  //  if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
      //  this.y += this.speed;
    }
  }
	}

  // die(){
  //
  // }



  //ball class from which to create new balls with similar properties.
  class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed,hit){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hit = hit;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
      fill("brown");
		 rect(this.x,this.y,100,35,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y;
	}

  	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
    bounceBall(){

      //  if (me.x+20>=this.x && me.y-20>=this.y &&me.y+20<=this.y){
        if (me.x>=this.x && me.x<=this.x+10 && me.y-20<=this.y+35&&this.hit==false&&me.y+20>=this.y){
          this.speed=this.speed;
          this.hit=true;
          me.alive=false;

        //   if (score>highscore){
  			// 		localStorage.setItem("maxscore",score)
        // }
    }
  }
}

class Fish {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed, hit){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.hit= hit;
	}

	// draw a ball on the screen at x,y
	drawFish(){
    	stroke(0);
      strokeWeight(1);
    	fill(245, 114, 0);
		  ellipse(this.x,this.y,30,30);
	}

	//update the location of the ball, so it moves cross the screen
	moveFish(){
		this.x = this.x+this.speed;
  //this.-# changes how fast the logs move from right to left
		this.y = this.y;
  }

  bounceFish(){
    //  if (me.x+20>=this.x && me.y-20>=this.y &&me.y+20<=this.y){
      if (me.x>=this.x && me.x<=this.x+10 && me.y-20<=this.y+35&&this.hit==false&&me.y+20>=this.y){
        this.speed=this.speed;
        this.hit=true;
        this.x=-20;
        timer=15;
      }
  }

}
