
import Complex from './defaultValues.js';
import {clasa} from './script5.js';


window.onload = mareSmekerie(clasa);
var req;

export function mareSmekerie(clasa) {

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
	let defazaj = 0;

	var p0 = {
			x: width / 2 + defazaj,
			y: height - 50
		},
		p1 = {
			x: width / 2  - defazaj,
			y: 50
		},
		branchAngleA,
		branchAngleB,
	
		tA = clasa.val1,
		tAS = clasa.val2,
		tB = clasa.val3,
		tBS = clasa.val4;
		var trunkRatio=clasa.val5;


	draw();

	function draw() {


		context.clearRect(0, 0, width, height);
		branchAngleA = Math.cos(tA += tAS) *0.5;   //-0.5

		branchAngleB = Math.sin(tB += tBS) *0.5; ///0.5
	
		tree(p0, p1, clasa.limitaBucConstruite,clasa.grosimea,clasa);
	
		req=requestAnimationFrame(draw);
	}

	function tree(p0, p1, limit,grosime,clasa) {
		var dx = p1.x - p0.x,  //0
			dy = p1.y - p0.y,  //-678
			dist = Math.sqrt(dx * dx + dy * dy), ///678
			angle = Math.atan2(dy, dx), //-pi/2  (-1.57)
			branchLength = dist * (1 - trunkRatio), ///474
			pA = {
				x: p0.x + dx * trunkRatio,
				y: p0.y + dy * trunkRatio
			},
			pB = {
				x: pA.x + Math.cos(angle + branchAngleA) * branchLength,
				y: pA.y + Math.sin(angle + branchAngleA) * branchLength,
			},
			pC = {
				x: pA.x + Math.cos(angle + branchAngleB) * branchLength,
				y: pA.y + Math.sin(angle + branchAngleB) * branchLength,
			};

if(clasa.bifat)
context.lineWidth=(limit*3+grosime)/2;
else context.lineWidth=grosime;

		context.beginPath();
		context.moveTo(p0.x, p0.y);
		context.lineTo(pA.x, pA.y);
		context.strokeStyle=clasa.culoare2;

			if(limit>=6){
				context.strokeStyle=clasa.culoare1;
			}
	


		
	
		context.stroke();

		if(limit > 0) {
	
			tree(pA, pC, limit - 1,grosime,clasa);
			tree(pA, pB, limit - 1,grosime,clasa);
		}
		else {
			context.beginPath();
			context.moveTo(pB.x, pB.y);
			context.lineTo(pA.x, pA.y);
			context.lineTo(pC.x, pC.y);
			context.stroke();
		}
	}
};




export {req};