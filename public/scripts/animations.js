//variables for hamburger menu animation
var nav = document.getElementById('nav-ctn');
var navIcon = document.getElementById('nav-icon');
var navOverlay = document.getElementById("nav-overlay");
var mySidenav = document.getElementById("mySidenav");
var sidenavLinks = mySidenav.children;
var socialLinksCtn = document.getElementsByClassName("social-links")[0];
var copyrightCtn = document.getElementById("copyright");

//variables for menu items animation
var menuCategories = document.getElementsByClassName('menu-category');
var menuItemsCtn = document.getElementsByClassName('menu-items');
var menuItems = document.getElementsByClassName('menu-item');

//menu images
var itemImgCtn = document.getElementsByClassName('item-img-ctn')[0];
var itemImg = document.getElementById('item-img');

var down_start = {};

function detectMove(callback) {
  event.preventDefault();
  if(event.clientX == down_start.x && event.clientY == down_start.y) {
    callback(event);
  }
}

function lock(e) {
  e.preventDefault();
  down_start = {
    x: e.clientX, 
    y: e.clientY
  };
}

function animateMenuItems(e) {

  //Reset all menu items from selected category
  for(i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('item-is-selected');
  }

  e.target.classList.add('item-is-selected');
  
  //get the menu item src and srcset
  var webpSizes = event.target.getAttribute("data-webpSizes");
  var webpImgPath = event.target.getAttribute("data-imgpath-webp");
  var webpSet = event.target.getAttribute("data-srcSetPath-webp");

  var pngSizes = event.target.getAttribute("data-pngSizes");
  var pngImgPath = event.target.getAttribute("data-imgpath-png");
  var pngSet = event.target.getAttribute("data-srcSetPath-png");

  var imgAlt = event.target.getAttribute("data-imgAlt");

  var webpSource = itemImgCtn.children[0];
  var pngSource = itemImgCtn.children[1];

  //change sizes src and srcset of sources
  webpSource.sizes = webpSizes;
  webpSource.srcset = webpSet;
  pngSource.sizes = pngSizes;
  pngSource.srcset = pngSet;
  itemImg.alt = imgAlt;
}

function animateMenuCategories(e) {
  //Reset menu categories
  for(var i = 0; i < menuCategories.length; i++) {
    menuCategories[i].classList.remove('category-is-selected');
  }
  
  //Reset menu items container
  for(var i = 0; i < menuItemsCtn.length; i++) {
    menuItemsCtn[i].classList.remove('show-items');
  }
  
  //Reset all individual menu items and remove previous event listeners
  for(var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('item-is-selected');
  }

  e.target.classList.toggle('category-is-selected');
  e.target.parentNode.querySelector('ul').classList.add('show-items');
  e.target.parentNode.querySelector('ul').querySelector('li').classList.add('item-is-selected');

}

function animateNav() {

  navIcon.classList.toggle("open");
  navOverlay.classList.toggle("nav-overlay-expanded");
  socialLinksCtn.classList.toggle("mobile-social-links");
  copyright.classList.toggle("copyright-mobile");
  

  if(mySidenav.classList[1] == null) {
    mySidenav.classList.add("sidenav-opened");

    for(var i = 0; i < sidenavLinks.length; i++) {
      sidenavLinks[i].style.right = "0%";
    }
    return;
  }

  if(mySidenav.classList[1] == "sidenav-opened") {
    mySidenav.classList.remove("sidenav-opened");
    for(var i = 0; i < sidenavLinks.length; i++) {
      sidenavLinks[i].style.right = "-100%";
    }
  }

}

function animate() {

  //Animate Hamburger Menu
  navIcon.addEventListener('touchstart', lock, false);
  navIcon.addEventListener('mousedown', lock, false);
  navIcon.addEventListener('touchend', detectMove.bind(null, animateNav), false);
  navIcon.addEventListener('mouseup', detectMove.bind(null, animateNav), false);

  //Animate the menu on the menu page
  for(var i = 0; i < menuCategories.length; i++) {
    menuCategories[i].addEventListener('touchstart', lock, false);
    menuCategories[i].addEventListener('mousedown', lock, false);
    menuCategories[i].addEventListener('touchend', detectMove.bind(null, animateMenuCategories), false);
    menuCategories[i].addEventListener('mouseup', detectMove.bind(null, animateMenuCategories), false);
  }

  //Add onclick event listeners on menu items of selected category
  for(i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('touchstart', lock, false);
    menuItems[i].addEventListener('mousedown', lock, false);
    menuItems[i].addEventListener('touchend', detectMove.bind(null, animateMenuItems), false);
    menuItems[i].addEventListener('mouseup', detectMove.bind(null, animateMenuItems), false);
  }
}

window.onload = animate();
