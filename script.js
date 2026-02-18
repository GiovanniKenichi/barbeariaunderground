// remove preload (para não "piscar" as animações)
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

// animação leve ao rolar
const els = document.querySelectorAll(".reveal");

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

els.forEach((el) => io.observe(el));
