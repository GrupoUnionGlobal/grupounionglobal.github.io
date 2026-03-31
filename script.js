document.addEventListener("DOMContentLoaded", function () {

  // ================= SLIDER =================
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  if (slides.length > 0) {
    function changeSlide() {
      slides[current].classList.remove("active");

      current = (current + 1) % slides.length;

      slides[current].classList.add("active");
    }

    setInterval(changeSlide, 3000); // más fluido (3s)
  }

  // ================= POPUP =================
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-popup");

  if (popup) {

    // Mostrar popup después de 1 segundo
    setTimeout(() => {
      popup.classList.add("active");
    }, 1000);

    // Cerrar con botón
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }

    // Cerrar al hacer clic afuera
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("active");
      }
    });
  }

});
