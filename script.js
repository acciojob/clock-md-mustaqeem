
const timer = document.getElementById("timer");

function updateTimer() {

	const now = new Date();

	timer.innerText = now.toString();
}

updateTimer();

setInterval(updateTimer, 1000);