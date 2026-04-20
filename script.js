document.addEventListener("DOMContentLoaded", function () {

  /* ================= SLIDER ================= */
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  if (slides.length > 0) {

    function changeSlide() {
      slides[current].classList.remove("active");

      current = (current + 1) % slides.length;

      slides[current].classList.add("active");
    }

    setInterval(changeSlide, 3500); // un poco más suave
  }


  /* ================= POPUP ================= */
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-popup");

  if (popup) {

    // Mostrar popup
    setTimeout(() => {
      popup.classList.add("active");
    }, 1200);

    // Cerrar con botón
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }

    // Cerrar haciendo clic afuera
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("active");
      }
    });

    // Cerrar con tecla ESC 🔥 (pro)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        popup.classList.remove("active");
      }
    });
  }


  /* ================= SCROLL SUAVE ================= */
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function(e){
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });

});
