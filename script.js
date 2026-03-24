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

// ================= POPUP =================

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-popup");

// Mostrar popup después de 1 segundo
setTimeout(() => {
  popup.classList.add("active");
}, 1000);

// Cerrar con botón
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Cerrar al hacer clic afuera
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});
