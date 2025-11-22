let header = document.getElementById('header')

window.addEventListener('scroll', () => {
  if(window.scrollY > 200){
    header.style.background = '#191919'
   } else {
    header.style.background = 'transparent'
   }
})

/* ==========================
   MENU HAMBÚRGUER
========================== */
const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
});

/* Fecha menu ao clicar em link */
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

/* ==========================
   TEMA CLARO / ESCURO
========================== */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");

    if (root.classList.contains("light")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
