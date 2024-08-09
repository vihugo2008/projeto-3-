let cor;
let cx;
let cy;

function setup() {
  createCanvas(500, 500);
  background("rgb(186,240,237)");
  cor = color(random(0,255),random(0,255),random(0,255));
  cx =[0,0,0];
  cy = [random(height),random(height),random(height)];
}

function draw() {
  fill(cor);
  
  for(let quantos in cx){
   circle(cx[quantos],cy[quantos],70);
   cx[quantos]+= random(0,3) 
    cx[quantos]+= random(-3,3) 
    if(cx[quantos] >= width){
      cx[quantos] =0;
      cy[quantos] = random(height)
    }
  }
  if(mouseIsPressed){
     cor = color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
     
}
