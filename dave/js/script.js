window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.fontSize = "25px";
    document.getElementById("nav").style.backgroundColor = "#4b1b7a";
    document.getElementById("nav").style.transition = "0.4s";
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
  }
}