const colors = ["#a2f52f", "#FF71B9", "#FF6B56", "#0FBDF9", "#8F7BF1",
                "#3AE16E"];

document.getElementById("site-title").onmouseenter = function() {color()};

function color() {

    index = Math.floor(Math.random() * colors.length);
    hex = colors[index];

    document.getElementById("site-title").style.color = hex;
}
