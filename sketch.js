var pos = [];
var t, s, n;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	smooth();
	
	t = random(100);
	s = 400;
}

function draw() {
	background(255);
	if(pos.length != 0) {
    n = map(noise(t), 0, 1, -10, 10);
    
		for(let i = 0; i < pos.length; i++) {
      fill(255, 20);
      noStroke();
      rect(0, 0, width, height);
      noFill();
      stroke(0);
      strokeWeight(4);
			
      var p = pos[i];
      p.add(createVector(n, 6));
      ellipse(p.x, p.y, s, s/4);
      t += 0.001;
      
      if(p.y > height) pos.splice(i, 1);
    }
  }
	
  pos.push(createVector(width/2, height/2));
}