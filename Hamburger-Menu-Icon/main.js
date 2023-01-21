var navLinks = document.getElementById("nav-links");
navLinks.style.visibility = "hidden";

var isMenuOpen = false;

function toggle() {
  var navBar = document.getElementById("nav-bar");
  var firstLine = document.getElementById("first-line");
  var secondLine = document.getElementById("second-line");
  var thirdLine = document.getElementById("third-line");
  var hrLine = document.getElementById("hr-line");

  if (isMenuOpen == true) {
    // need to close menu
    firstLine.style.transform = "rotate(0deg)";
    firstLine.style.top = "0px";
    secondLine.style.visibility = "visible";
    thirdLine.style.transform = "rotate(0deg)";
    thirdLine.style.top = "0px";

    navLinks.style.visibility = "hidden";
    navLinks.style.transform = "translateX(-10px)";

    navBar.style.width = "40px";

    isMenuOpen = false;
  } else {
    // open menu
    firstLine.style.transform = "rotate(45deg)";
    firstLine.style.top = "11px";
    secondLine.style.visibility = "hidden";
    thirdLine.style.transform = "rotate(-45deg)";
    thirdLine.style.top = "-11px";
    
    navLinks.style.visibility = "visible";
    navLinks.style.transition = "all 0.25s ease-in transform";
    navLinks.style.transform = "translateX(10px)";

    navBar.style.width = "100px";
    isMenuOpen = true;
  }
}
