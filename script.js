/*Author: Gaddis & Mahadeshwar*/

var canvasSize = 800;

function main(){
    var canvas = document.getElementById("myCanvas");
    var pen = canvas.getContext("2d");
    pen.fillStyle="black";
    pen.beginPath();
	pen.rect(50, 50, 700, 700);
	
	for(a = 2; a < 15; a++){
		pen.moveTo(50, a*50);
		for(b = 1; b < 16; b++){
			pen.lineTo(b*50, a*50);
		}
	}
		
	for(i = 2; i < 15; i++){
		pen.moveTo(i*50,50);
		for(j = 2; j < 16; j++){
			pen.lineTo(i*50,j*50);	
		}
	} 
	
	var grid = [];
	for(i = 1; i < 16; i++){
		for(j = 1; j < 16; j++){
			grid.push([i*50][j*50]);			
		}
	}
	
    pen.stroke();
}