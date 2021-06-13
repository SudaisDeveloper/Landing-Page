const hamburger = document.querySelector(".hamb");
const nav = document.querySelector(".nav_box");

hamburger.addEventListener("click", function() {
  nav.classList.toggle("check");
})