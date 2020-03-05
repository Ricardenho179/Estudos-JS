alert('A chamada JS ta rolando!');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(75,100,150,200);

window.onload = function() {
    var canvas3 = document.getElementById("canvas2");
    var ctx3 = canvas3.getContext("2d");
    var img = document.getElementById("scream");
   ctx3.drawImage(img, 10, 10,200,200);
   ctx3.font = "10px Arial";
   ctx3.strokeText("Apenas se faz possível usar imagem",220,75);
   ctx3.strokeText("dentro do canvas se caso esta",220,90);
   ctx3.strokeText("imagem já tiver sido declarada",220,105);
   ctx3.strokeText("com um ID específico.",220,120);
};

var canvas2 = document.getElementById("canvas3");
var ctx2 = canvas2.getContext("2d");
ctx2.font = "15px sanse";
ctx2.strokeText("Apenas usando o método strokeText()",10, 50);
ctx2.strokeText("Onde é possível alterar tamanho da letra, font e posicionamento", 10,90)
ctx2.fillStyle = "#000";
ctx2.fillRect(100,100,200,200)