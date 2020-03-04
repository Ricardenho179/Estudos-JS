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

//padrão
var c = document.getElementById("relogio");
var ctx4 = c.getContext("2d");
//dimensão da circunferência
var radius = c.height / 2;
//posicionamento: horizontal, vertical(Radius = centro)
ctx.translate(radius, radius);
//tamanho da gravura de dentro
radius = radius * 0.87
//função de configurações internas da gravura
drawClock();

function drawClock() {
    drawFace(ctx4, radius)
  }

function drawFace(ctx4, radius) {
    var grad;
    //posição conforme tela
    //Horizontal, vertical, tamanho, ?, formato
    ctx4.arc(199, 199, radius, 0 , 2*Math.PI);
    //Por aqui não precisa dos códigos da linha 34/36 pois é possível ajustar as mesmas coisas pelo
    //método arc()
    //cor
    ctx4.fillStyle = "Red";
    //executa ?
    ctx4.fill();
    //Basicamente este método cria uma borda em gradiente
    grad = ctx4.createRadialGradient(75, 50, 5, 90, 60, 100);
    //cor de baixo do gradiente
    grad.addColorStop(0, '#333');
    //cor do meio do gradiente
    grad.addColorStop(0.5, 'white');
    //cor de cima do gradiente
    grad.addColorStop(1, '#333');
    ctx4.strokeStyle = grad;
    ctx4.lineWidth = radius*0.10;
    ctx4.stroke();
    ctx4.beginPath();
    ctx4.arc(200, 200, radius*0.1, 0, 2*Math.PI);
    ctx4.fillStyle = '#333';
     ctx4.fill();
}