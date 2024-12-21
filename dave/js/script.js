window.onscroll = function() {scrollFunction()};
const nav = document.getElementsByClassName("nav-bg");
const navlinks = document.getElementsByClassName("nav-link");
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        for (let i = 0; i < nav.length; i++) {
            nav[i].style.fontSize = "25px";
            nav[i].style.backgroundColor = "rgba(255, 255, 255, 0.6)";
            nav[i].style.transition = "0.4s";
            nav[i].style.boxShadow = "0 4px 2px -2px rgba(0, 0, 0, 0.4)";
            nav[i].style.borderRadius = "0 10px 10px 0";
            nav[i].style.padding = "0 10px 10px 10px";
            if (window.innerWidth < 961) {
                nav[i].style.fontSize = "20px";
                nav[i].style.padding = "5px 0";
                nav[i].style.backgroundColor = "transparent";
                nav[i].style.boxShadow = "none";
            }
            
        }

        

        for (let i = 0; i < navlinks.length; i++) {
            navlinks[i].addEventListener("mouseover", () => {
                navlinks[i].style.color = "#9c57c2";
                navlinks[i].style.transform = "scale(1.1)";
            });
            navlinks[i].addEventListener("mouseleave", () => {
                navlinks[i].style.color = "#240642";
                navlinks[i].style.transform = "scale(1)";
            });
            navlinks[i].style.color = "#240642";
        }
    
    
    } else {
        for (let i = 0; i < nav.length; i++) {
            nav[i].style.backgroundColor = "transparent";
            nav[i].style.fontSize = "30px";
            nav[i].style.boxShadow = "none";
            for (let i = 0; i < navlinks.length; i++) {
                navlinks[i].style.color = "#ffccff";
                navlinks[i].addEventListener("mouseover", () => {
                    navlinks[i].style.color = "#240642";
                });
                navlinks[i].addEventListener("mouseleave", () => {
                    navlinks[i].style.color = "#ffccff";
                });
            }
        }
    }
  
}
