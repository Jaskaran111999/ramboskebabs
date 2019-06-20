//variables
var events = document.getElementsByClassName("event-poster");
var timelineEvents = document.getElementsByClassName("event__content");

function animateEvents(e) {

	//reset timeline event selection
	for(var i = 0; i < timelineEvents.length ; i++) {
		timelineEvents[i].classList.remove("timelineEvent-is-selected");
	};

	//reset event posters selection
	for(var i = 0; i < events.length ; i++) {
		events[i].classList.remove("show-poster");
	};

	//add class selected timelineEvent and event-poster
	e.path[1].classList.add("timelineEvent-is-selected");		//event content gets the class
	document.getElementById(e.path[1].dataset.eventbg).classList.add("show-poster");

}

function animate() {

	//add event listeners on timeline events 
	for(var i = 0; i < timelineEvents.length ; i++) {
		timelineEvents[i].addEventListener('click', function(e) {
			animateEvents(e);
		}, false);
	}

}

window.onload = animate();
