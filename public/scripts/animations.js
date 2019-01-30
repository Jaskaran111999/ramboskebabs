//variables for hamburger menu animation
var nav = document.getElementById('nav');
var navIcon = document.getElementById('nav-icon');
var navOverlay = document.getElementById("nav-overlay");
var mySidenav = document.getElementById("mySidenav");
var sidenavLinks = mySidenav.children;

//variables for menu items animation
var menuCategories = document.getElementsByClassName('menu-category');
var menuItemsCtn = document.getElementsByClassName('menu-items');

//milliseconds
var navOverlayDuration = 300;

function animateMenuCategories() {
	//Reset menu categories
	for(var i = 0; i < menuCategories.length; i++) {
		menuCategories[i].classList.remove('is-selected');
	}
	
	//Reset menu items container
	for(var i = 0; i < menuItemsCtn.length; i++) {
		menuItemsCtn[i].classList.remove('show-items');
	}

	event.target.classList.toggle('is-selected');
	event.target.parentNode.querySelector('ul').classList.add('show-items');
}

function animateNav() {
	navIcon.classList.toggle("open");
	navOverlay.classList.toggle("nav-overlay-expanded");

	if(mySidenav.classList[1] == null) {
		mySidenav.classList.add("sidenav-opened");

		for(var i = 0; i < sidenavLinks.length; i++) {
			sidenavLinks[i].style.right = "0%";
			//wait(100);
		}
		return;
	}

	if(mySidenav.classList[1] == "sidenav-opened") {
		//setTimeout(function () {
			mySidenav.classList.remove("sidenav-opened");
			for(var i = 0; i < sidenavLinks.length; i++) {
				sidenavLinks[i].style.right = "-100%";
			}
		//}, navOverlayDuration/2);
	}
}

function animate() {
	nav.addEventListener('click', animateNav);

	for(var i = 0; i < menuCategories.length; i++) {
		menuCategories[i].addEventListener('click', animateMenuCategories);
	}
}

window.onload = animate();
