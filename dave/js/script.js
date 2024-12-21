window.onscroll = function() {scrollFunction()};
const nav = document.getElementById("nav");
const navlinks = document.getElementsByClassName("nav-link");
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.fontSize = "25px";
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    nav.style.transition = "0.4s";
    nav.style.boxShadow = "0 4px 2px -2px rgba(0, 0, 0, 0.4)";
    nav.style.borderRadius = "0 0 10px 10px";
    nav.style.padding = "10px 0";
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "black";
    }
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.fontSize = "30px";
    nav.style.boxShadow = "none";
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "#ffccff";
    }
  }
}