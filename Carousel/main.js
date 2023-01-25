var image = document.getElementById("image");
image.src = "imgs/p1.jpg";
var slide = 1;

function change(element) {
  let id = element.id.toString();
  image.src = "imgs/p" + id + ".jpg";

  slide = id;
  console.log(slide);

  changeDot();
}

function slideshow(i) {
  slide = parseInt(slide) + i;

  if (slide < 1) slide = 4;
  if (slide > 4) slide = 1;

  image.src = "imgs/p" + slide.toString() + ".jpg";

  console.log(slide);

  changeDot();
}

function changeDot() {
  var dots = document.getElementsByClassName("dot-item");

  for (let i = 0; i < dots.length; i++) {
    dots[i].innerHTML = "&#9898;";
  }

  dots[slide-1].innerHTML = "&#9899;";
}
