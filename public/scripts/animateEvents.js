//variables
var events = document.getElementsByClassName("event-poster");
var timelineEvents = document.getElementsByClassName("event__content");
var activePoster = document.getElementsByClassName("show-poster")[0];

//video overlay
var overlay = document.getElementById("event-overlay");
var videoCtn = document.getElementById("video-ctn");
var videos = document.getElementsByClassName("event-video");
var closeBtn = document.getElementsByClassName("close")[0];

function closeVideo(e) {
	
	//hide overlay and video-ctn
	overlay.classList.remove("show");
	videoCtn.classList.remove("show");

	for(var i = 0; i < videos.length ; i++) {

		if(videos[i].classList.contains("show")) {
			videos[i].children[0].children[0].pause();
		}

		videos[i].classList.remove("show");

	}

	//remove onclick listener because gets added again
	closeBtn.removeEventListener('click', closeVideo);
}

function animateVideo(e) {
	
	//display overlay and then video-ctn
	overlay.classList.add("show");
	videoCtn.classList.add("show");
	document.getElementById(e.path[2].dataset.video).classList.add("show");
	
	closeBtn.addEventListener('click', closeVideo);
}

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

	activePoster = document.getElementById(e.path[1].dataset.eventbg);
	activePoster.classList.add("show-poster");

	//add event listener to the new poster
	activePoster.addEventListener('click', animateVideo);

}

function animate() {

	//for first time
	activePoster.addEventListener('click', animateVideo);

	//add event listeners on timeline events 
	for(var i = 0; i < timelineEvents.length ; i++) {
		timelineEvents[i].addEventListener('click', function(e) {
			activePoster.removeEventListener('click', animateVideo);
			animateEvents(e);
		}, false);
	}

}

window.onload = animate();
