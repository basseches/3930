let delayInMilliseconds = 800;

document.getElementById("site-title").innerHTML = "<img src='/3930/assets/static/posts/portfolio.png' width='150px'>";

document.getElementById("me").onmouseenter = function() {jump()};

function jump()
{
  document.getElementById("me").onmouseenter = null;
  document.getElementById("me").src = "/3930/assets/static/posts/agg2.gif";

  setTimeout(function() {
    document.getElementById("me").src = "/3930/assets/static/posts/agg.gif";
    document.getElementById("me").onmouseenter = function() {jump()};
  }, delayInMilliseconds);
}
