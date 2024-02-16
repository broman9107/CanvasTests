var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var iw = window.innerWidth;
var ih = window.innerHeight;

canvas.width = window.innerWidth;    
canvas.height = window.innerHeight;

// c.beginPath();
// c.moveTo(200, 200);
// c.lineTo(300, 300);
// c.lineTo(400, 400);
// c.lineTo(400, 300);
// c.lineTo(300, 200);
// c.lineTo(200, 100);
// c.lineTo(200, 200);
// c.fillStyle = "black";
// c.fill();
// c.strokeStyle = "white"
// c.stroke();

// c.beginPath();
// c.moveTo(600, 600);
// c.lineTo(900, 500);
// c.lineTo(1200, 200);
// c.lineTo(1500, 100);
// c.lineTo(1600, 730);
// c.lineTo(600, 600);
// c.fillStyle = "black";
// c.fill();
// c.strokeStyle = "white"
// c.stroke();

// c.beginPath();
// c.arc(wx / 2, wy / 2, 50, 0, Math.PI * 2, false)
// c.fillStyle = "black"
// c.fill();
// c.strokeStyle = "white"
// c.stroke();

var x = Math.random() * iw;
var y = Math.random() * ih;
var dx = (Math.random() - .5) * 40;
var dy = (Math.random() - .5) * 40;
var radius = 50;

function animate() {
    requestAnimationFrame(animate);
    //c.clearRect(0, 0, iw, ih);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false)
    c.fillStyle = "black"
    c.fill();
    c.strokeStyle = "white"
    c.stroke();
    
    if (x + radius > iw || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > ih || y - radius < 0) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
};

animate();

// var radiusMax = 20;
// var radiusMin = 3;

// for (i = 0; i < 800; i++) {
//     c.beginPath();
//     var radius = Math.floor(Math.random() * (radiusMax) + radiusMin);
//     var x = Math.floor(Math.random() * wx - radius);
//     var y = Math.floor(Math.random() * wy - radius);
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.fillStyle = "black";
//     c.fill();
//     c.strokeStyle = "white";
//     c.stroke();
// };

