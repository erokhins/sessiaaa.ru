function startG(t) {
	var a = document.getElementById('can1')
	document.ctx = a.getContext("2d");
	kO = t;
	//printLine(0,0, 300, 300, color(3,3,200));
	
//	printLine(10,100, 100, 100, color(200,3,200));
	step1();
}


function printLine(x1, y1, x2, y2, c) {
	document.ctx.beginPath();
	document.ctx.moveTo(x1, y1);
	document.ctx.lineTo(x2, y2);
	var clr ="rgb("+c.r+","+c.g+","+c.b+")";
	//console.log(y1);
	//console.log(clr);
	document.ctx.strokeStyle = clr;
	document.ctx.stroke();
}

function color(r, g, b) {
	var o = Object()
	o.r=r;
	o.g=g;
	o.b=b;
	return o;
}

function step1() {
	var steps = Colors.length - 1;
	var pointsCount = Colors[steps].length;
	Colors[steps+1] = Array();
	Path[steps] = Array();
	
	var count = 0;
	for(var i=0; i< pointsCount; i++) {
		Path[steps][i] = count;
		var childrenCount = getNewCount();
		for(var j=0; j < childrenCount; j++) {
			Colors[steps+1][count+j] = mutableColor(Colors[steps][i]);
		}
		count = count + childrenCount;
	}
	Path[steps][pointsCount] = count ;
	print();
	if (steps < 21) {	
		setTimeout("step1();", 500);
	}
}

function print() {
	var steps = Colors.length - 2;
	var upY = canStep * steps;
	var downY = canStep + upY;
	var upDX = canWidth/(Colors[steps].length + 1);
	var downDX = canWidth/(Colors[steps + 1].length + 1);
	for(var i=0; i<Colors[steps].length; i++) {
		for(var j=Path[steps][i]; j < Path[steps][i+1]; j++) {
			printLine(upDX*(i+1), upY, downDX*(j+1), downY, Colors[steps+1][j]);
		}
	}
}

function mutableColor(color) {
	var steps = Colors.length - 2;
	rd = 255/(steps+1);
	c1 = Object();
	c1.r = color.r + getRandom(rd);
	c1.g = color.g + getRandom(rd);
	c1.b = color.b + getRandom(rd);
	return c1;
}

function getRandom(d) {
	return Math.floor((Math.random()*2*d -d))
}

function getNewCount() {
	return Math.floor((Math.random()*kO))
}

var canWidth = 900;
var canStep = 30;


var kO = 4;
var Colors = Array();
Colors[0] = Array(color(0,0,0));
var Path = Array();
