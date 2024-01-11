document.addEventListener("DOMContentLoaded", function() {
  const burgerIcon = document.querySelector(".nav-toggler");
  const navigation = document.querySelector("nav");

  burgerIcon.addEventListener("click", toggleNav);


  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
      link.addEventListener("click", closeNav);
  });

  function toggleNav() {
      burgerIcon.classList.toggle("active");
      navigation.classList.toggle("active");
  }

  function closeNav() {
      burgerIcon.classList.remove("active");
      navigation.classList.remove("active");
  }


  document.addEventListener("click", function(event) {
      const isClickInsideNav = navigation.contains(event.target);
      const isClickOnBurger = burgerIcon.contains(event.target);

      if (!isClickInsideNav && !isClickOnBurger) {
          burgerIcon.classList.remove("active");
          navigation.classList.remove("active");
      }
  });
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
