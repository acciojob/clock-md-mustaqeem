//your JS code here. If required.

const timer = document.getElementById("timer");

function updateTimer() {

	const now = new Date();

	timer.innerText = now.toLocaleString();
}

updateTimer();

setInterval(updateTimer, 1000);