// create canvas element and append it to document body
let canvas = document.createElement('canvas');
document.body.appendChild(canvas);

document.body.style.margin = 0;
canvas.style.position = 'fixed';

// put it behind everything else so that it doesn't obstruct our view...
canvas.style.zIndex = -300;

let ctx = canvas.getContext('2d');
resize();

// last known position
let pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  ctx.beginPath();

  ctx.lineWidth = 1;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#333';

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}