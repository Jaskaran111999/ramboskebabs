var itemContainers = document.getElementsByClassName('items-container');
var tablinks = document.getElementsByClassName("tab-links");

var initialX;
var blurEffect = 0;

var activeTabIndex, 
startX, 
startY, 
distX, 
distY, 
threshold = 50, 
dir = {
	left: 0, 
	right: 1, 
	none: 2
}, 
swipedir = dir.none;

//Find out which tab number is active
function getActiveTabIndex() {
	for(i = 0; i < itemContainers.length; i++) {
		
		//Select the container which is currently displayed
		if(itemContainers[i].style.display == "block") {
			return i;
		}
	}	
}

//Display the corresponding tab of the tab link and set current tab link active
function onClickHandler(evt, tabName) {

	//Remove 'touchstart' event listener from current element
	activeTabIndex = getActiveTabIndex();
	itemContainers[activeTabIndex].removeEventListener('touchstart', handleSwipeStart);

	for(var i = 0; i < itemContainers.length; i++) {
		itemContainers[i].style.display = "none";
	}

	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

	//Add 'touchstart' event listener on the new element displayed
	document.getElementById(tabName).addEventListener('touchstart', handleSwipeStart);
}


function handleLeftSwipe(elm, elmNumber) {

	//Hide current item container and display next sibling
	elm.style.display = "none";
	elm.nextElementSibling.style.display = "block";
	
	//Change 'touchstart' event listener
	elm.removeEventListener('touchstart', handleSwipeStart);
	elm.nextElementSibling.addEventListener('touchstart', handleSwipeStart);

	//Set current tab-link as non-active and the next sibling  as active
	tablinks[elmNumber].className = tablinks[elmNumber].className.replace(" active", "");
	tablinks[elmNumber + 1].className += " active";
}

function handleRightSwipe(elm, elmNumber) {

	//Hide current item container and display previous sibling
	elm.style.display = "none";
	elm.previousElementSibling.style.display = "block";
	
	//Change 'touchstart' event listener
	elm.removeEventListener('touchstart', handleSwipeStart);
	elm.previousElementSibling.addEventListener('touchstart', handleSwipeStart);

	//Set current tab-link as non-active and the next sibling as active
	tablinks[elmNumber].className = tablinks[elmNumber].className.replace(" active", "");
	tablinks[elmNumber - 1].className += " active";
}

function tabAnimation(dx, activeTabIndex) {

	//Change opacity with touchMove
	tablinks[activeTabIndex].style.opacity = 1 - Math.abs(dx)*0.003;

	//Change size with touchMove
	//tablinks[activeTabIndex].style.height = tablinks[activeTabIndex].style.height - Math.abs(dx)*0.003;
	//tablinks[activeTabIndex].style.width = tablinks[activeTabIndex].style.width - Math.abs(dx)*0.003;
	
}

function containerAnimation(dx, activeTabIndex) {

	//Move container left or right
	itemContainers[activeTabIndex].style.marginLeft = 0.7*dx + "px";

	//Change opacity of container with touchMove
	itemContainers[activeTabIndex].style.opacity = 1 - Math.abs(dx)*0.001;	

	//Add blur effect
//	if (Math.abs(dx) > 10) {
//		blurEffect += 0.05;
//		itemContainers[activeTabIndex].style.filter = "blur(" + blurEffect + "px)";
//	}

}

function handleTouchMove() {

	dx = event.changedTouches[0].clientX - initialX;
	activeTabIndex = getActiveTabIndex();

	//Animations with touchMove
	tabAnimation(dx, activeTabIndex);
	containerAnimation(dx, activeTabIndex);

	document.body.addEventListener('touchend', handleTouchEnd);
}

function handleTouchEnd() {

	//Remove 'touchmove' event listener
	document.body.removeEventListener('touchmove', handleTouchMove);

	//Get active tab index
	activeTabIndex = getActiveTabIndex();
	
	//Set position back to normal
	itemContainers[activeTabIndex].style.marginLeft = "0px";
	
	//Set opacity back to normal of the previous active tablink and container
	tablinks[activeTabIndex].style.opacity = "1";
	itemContainers[activeTabIndex].style.opacity = "1";

	//Remove blur effect from container
	itemContainers[activeTabIndex].style.filter = "none";

	var touchObj = event.changedTouches[0];
	distX = touchObj.clientX - startX;
	distY = touchObj.clientY - startY;

	if(Math.abs(distX) >= threshold) {

	//console.log(distX);
		if(distX > 50 && (activeTabIndex > 0)) {
			swipedir = dir.right;
			handleRightSwipe(itemContainers[activeTabIndex], activeTabIndex);

		} else if(distX < -50 && (activeTabIndex < 8)) {
			swipedir = dir.left;
			handleLeftSwipe(itemContainers[activeTabIndex], activeTabIndex);

		}
	} else swipedir = dir.none;

	document.body.removeEventListener('touchend', handleTouchEnd);
}

function handleSwipeStart() {

	var touchObj = event.targetTouches[0];
	distX = 0;
	distY = 0;
	startX = touchObj.clientX;
	startY = touchObj.clientY;

	initialX = startX;

	document.body.addEventListener('touchmove', handleTouchMove);

}

function handleSwipe() {

	itemContainers[0].style.display = "block";
	tablinks[0].className += " active";

	//Update activeTabIndex
	activeTabIndex = getActiveTabIndex();

	itemContainers[activeTabIndex].addEventListener('touchstart', handleSwipeStart);
}

window.onload = handleSwipe;
