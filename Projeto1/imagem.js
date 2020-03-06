window.onload = function() {
    var canvas3 = document.getElementById("canvas2");
    var canvas = document.getElementById("relogio");
    var ctx3 = canvas3.getContext("2d");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("rolex");
    var img3 = document.getElementById("scream");
   ctx3.drawImage(img3, 10, 10,200,200);
   ctx.drawImage(img, -170, -165,340,330);
   ctx3.font = "10px Arial";
   ctx3.strokeText("Apenas se faz possível usar imagem",220,75);
   ctx3.strokeText("dentro do canvas se caso esta",220,90);
   ctx3.strokeText("imagem já tiver sido declarada",220,105);
   ctx3.strokeText("com um ID específico.",220,120);
};