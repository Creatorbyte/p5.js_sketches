var x = 0.01; 
var y = 0;
var z = 0; 
var dx;
var dy;
var dz;
var a = 10.0;
var b = 28.0;
var c = (8.0 / 3.0);
var dt = 0.01; 
var i;
var h=0;
var type=2;

function setup() {

   createCanvas(windowWidth, windowHeight,WEBGL);
   background(0);
   colorMode(HSB);
}

function draw() {
   background(0);
   //translate(width/2, height/2);

//automatic rotations
rotateX(frameCount*0.01);
rotateY(frameCount*0.01);

//mouse controlled rotations
/**
rotateY(PI/3 + mouseX/float(height) * PI*4);
rotateX(PI/3 + mouseY/float(height) * PI*4);
*/

   strokeWeight(2);//line thickness

   scale(3);//"zooms in"
   noFill();//don't create faces for the verrices

   beginShape();//starts connecting vertices
   for(i=0;i<=1000;i++){

//The three Lorenz equations written in code

if(type == 1){
      dx= dt*(a*(y - x));
      dy= dt*((x*(b-z)-y));
      dz= dt*(x*y-c*z);
} else if(type == 2){
	
	  dx= dt*(-y-z);
      dy= dt*((x+a*y));
      dz= dt*(b+z*(x-c));
	
}
//updating x,y, and z positions
      x+=dx;
      y+=dy;
      z+=dz;


//sets color and thickness
      stroke(h,255,255);
      strokeWeight(3);

//adds a new point to the shape
      vertex(x,y,z-25);

      h=h+1;//incrememts color
      if(h>=255){
         h=0;
      }
   }
   endShape();// finish connecting all vertices

//draw the white cube
stroke(255);
box( 65,65,65);
}
