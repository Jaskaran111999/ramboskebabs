var navIcon = document.getElementById('nav-icon');
var mySidenav = document.getElementById("mySidenav");

function animateNav() {
	navIcon.classList.toggle("open");	
	mySidenav.classList.toggle("sidenav-opened");
}

function animate() {
	nav.addEventListener('click', animateNav);
}

window.onload = animate();
