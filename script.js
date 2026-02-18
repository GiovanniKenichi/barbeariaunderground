// Remove preload para liberar transições depois que a página carrega
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

// Reveal on scroll (animação leve ao rolar)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
