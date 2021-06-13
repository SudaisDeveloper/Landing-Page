const hamb = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-links");

hamb.addEventListener("click", function() {
	navLinks.classList.toggle("open");
})