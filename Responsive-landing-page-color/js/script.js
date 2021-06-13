const hamburger = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-list");

hamburger.addEventListener("click", function() {
	navLinks.classList.toggle("open");
})