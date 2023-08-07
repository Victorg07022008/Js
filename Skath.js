function setup() {
    creatCanvas(600, 600);
    backgroud("black");
}

  function draw() {
    stroke("blue");
    fill("red");

    if(mouseaIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }


  }    
