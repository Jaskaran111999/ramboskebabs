var nav = document.getElementById('nav');
var navIcon = document.getElementById('nav-icon');
var navOverlay = document.getElementById("nav-overlay");
var mySidenav = document.getElementById("mySidenav");

function animateNav() {
	navIcon.classList.toggle("open");
	navOverlay.classList.toggle("nav-overlay-expanded");
	//mySidenav.classList.toggle("sidenav-opened");
}

function animate() {
	nav.addEventListener('click', animateNav);
}

window.onload = animate();
