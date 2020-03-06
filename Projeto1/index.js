alert('A chamada JS ta rolando!');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(75,100,150,200);



var canvas2 = document.getElementById("canvas3");
var ctx2 = canvas2.getContext("2d");
ctx2.font = "15px sanse";
ctx2.strokeText("Apenas usando o método strokeText()",10, 50);
ctx2.strokeText("Onde é possível alterar tamanho da letra, font e posicionamento", 10,90)
ctx2.fillStyle = "#000";
ctx2.fillRect(100,100,200,200)
