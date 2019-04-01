var diameter = 25

function setup() {
	createCanvas(1000, 600);
}


function draw() {
 
	background(0);

    for (var xpos= 25; xpos < width;  xpos += 30) {
		for (var ypos= 25; ypos < height;  ypos += 30) {
			fill(random(0), random(255), random(255));
			ellipse(xpos, ypos, diameter, diameter);
		}
	}
}