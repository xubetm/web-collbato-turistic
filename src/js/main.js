console.log("Benvinguts a Collbató");

/* --- MENÚ HAMBURGUESA --- */
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu-nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
