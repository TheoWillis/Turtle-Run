// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var ghost;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  ghost = loadAnimation('sprites/Turtle1.png', 'sprites/Turtle2.png','sprites/Turtle3.png','sprites/Turtle4.png');
}

// create a variable to hold sprite character
let me;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(200, 255, 255);
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(ghost, 300, 300);
}
