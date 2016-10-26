/*Author: Gaddis & Mahadeshwar*/

function main()
{
    var canvas = document.getElementById("myCanvas");
    var pen = canvas.getContext("2d");
    pen.fillStyle="green";
    pen.beginPath();
    pen.arc(100,100, 50, 0, 2*Math.PI);
    pen.fill();
}