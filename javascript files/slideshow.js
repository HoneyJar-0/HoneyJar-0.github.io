var slideIndex = 0;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var x = document.getElementsByClassName("slide");
  if (n >= x.length) {slideIndex = 0}
  if (n < 0) {slideIndex = x.length - 1} ;
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex].style.display = "block";
}