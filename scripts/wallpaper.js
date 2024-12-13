var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var W_old = W;
var H_old = H;

var fontSize = 16;
var columns = Math.ceil(W / fontSize);

var drops = [];
for (var i = 0; i < columns; i++) {
  drops.push(0);
}
var str = "H a Ck #4012xyzXYZ568 *!";

function draw() {
  W = window.innerWidth;
  H = window.innerHeight;

  if (W != W_old || H != H_old) {
    canvas.width = W;
    canvas.height = H;

    W_old = W;
    H_old = H;

    columns = Math.ceil(W / fontSize);
    drops = [];
    for (var i = 0; i < columns; i++) {
      drops.push(0);
    }
  }

  // printText("JavaScript Hacking Effect");

  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0, 0, W, H);
  context.fontSize = "700 " + fontSize + "px";
  context.fillStyle = "#00cc33";
  for (var i = 0; i < columns; i++) {
    var index = Math.floor(Math.random() * str.length);
    var x = i * fontSize;
    var y = drops[i] * fontSize;
    context.fillText(str[index], x, y);
    if (y >= canvas.height && Math.random() > 0.99) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

draw();
setInterval(draw, 30);
