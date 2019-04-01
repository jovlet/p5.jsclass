function setup (){
    createCanvas(800, 800);
}

function draw(){
     background(0, 0, 255);
   let Ypos = 20;
   while(Ypos < height){
   	fill(255, 0, 0);
   ellipse(width / 2, Ypos, 30, 30);
   Ypos += 40;
   }
}










