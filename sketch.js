function setup() {
    createCanvas(400, 400);
     background("black");
  }
  
  function draw() {
   
  
  stroke("black");
  fill("pink");
  rect(100, 250, 2, 2);
  
  // console.log(mouseIsPressed);
  
   if (mouseIsPressed){
       rect(mouseX, mouseY, 20, 35);
    }
  }