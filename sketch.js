function setup() {
    createCanvas(800, 800);
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
