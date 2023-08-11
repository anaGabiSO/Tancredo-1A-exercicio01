function setup() {
  createCanvas(400, 400);
  background("purple");
}

function draw() {
  stroke("black")
  
  
  
  fill("lime")
  
  if(mouseIsPressed){
    rect(mouseX,mouseY,30,30)
  }
}
    