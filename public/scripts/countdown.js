var countdown = document.getElementsByClassName("countdown");

function calculateTime() {

	// Set Launch Date (ms)
	var launchDate = new Date('October 27, 2018 12:00:00').getTime();

	// Get todays date and time (ms)
	var now = new Date().getTime();

	// Distance from now and the launch date (ms)
	var distance = launchDate - now;

	// Time calculation
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var secs = Math.floor((distance % (1000 * 60)) / 1000)
	
	days = days.toLocaleString(undefined, {minimumIntegerDigits: 2});
	hours =hours.toLocaleString(undefined, {minimumIntegerDigits: 2});
	mins = mins.toLocaleString(undefined, {minimumIntegerDigits: 2});
	secs = secs.toLocaleString(undefined, {minimumIntegerDigits: 2});
	
	// Display result
	countdown[0].innerHTML = `
	<div>${days}<span>Days</span></div>
	<div>${hours}<span>Hours</span></div>
	<div>${mins}<span>Mins</span></div>
	<div>${secs}<span>Secs</span></div>
	`;

	// If launch date is reached
	if (distance <= 0) {
	// Stop countdown
	clearInterval(x);
	// Style and output text
	countdown[0].style.color = '#17a2b8';
	countdown[0].innerHTML = 'HURRY! BEFORE 6PM';
	}

}

calculateTime();

// Update every minute 
var x = setInterval( function() {
	calculateTime();	
}, 1000);
