var nav = document.getElementById('nav');
var navIcon = document.getElementById('nav-icon');
var navOverlay = document.getElementById("nav-overlay");
var mySidenav = document.getElementById("mySidenav");
var sidenavLinks = mySidenav.children;

//milliseconds
var navOverlayDuration = 300;

function animateNav() {
	navIcon.classList.toggle("open");
	navOverlay.classList.toggle("nav-overlay-expanded");

	if(mySidenav.classList[1] == null) {
		setTimeout(function () {
			mySidenav.classList.add("sidenav-opened");
			for(var i = 0; i < sidenavLinks.length; i++) {
				sidenavLinks[i].style.right = "0%";
			}
		}, navOverlayDuration/2);
	}

	if(mySidenav.classList[1] == "sidenav-opened") {
		setTimeout(function () {
			mySidenav.classList.remove("sidenav-opened");
			for(var i = 0; i < sidenavLinks.length; i++) {
				sidenavLinks[i].style.right = "-100%";
			}
		}, navOverlayDuration/2);
	}
}

function animate() {
	nav.addEventListener('click', animateNav);
}

window.nload = animate();
