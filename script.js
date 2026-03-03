document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  if (slides.length === 0) return;

  function changeSlide() {
    slides[current].classList.remove("active");

    current++;
    if (current >= slides.length) {
      current = 0;
    }

    slides[current].classList.add("active");
  }

  setInterval(changeSlide, 4000);

});
