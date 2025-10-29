AOS.init();

const dateEvent = new Date("Sep 28, 2026 19:00:00");
const timeStampEvent = dateEvent.getTime();

const timer = setInterval(() => {
	const now = new Date();
	const timeStampNow = now.getTime();

	const distance4Event = timeStampEvent - timeStampNow;

	const daysInMs = 1000 * 60 * 60 * 24;
	const hoursInMs = 1000 * 60 * 60;
	const minsInMs = 1000 * 60;

	const days = Math.floor(distance4Event / daysInMs);
	const hours = Math.floor((distance4Event % daysInMs) / hoursInMs);
	const mins = Math.floor((distance4Event % hoursInMs) / minsInMs);
	const seconds = Math.floor((distance4Event % minsInMs) / 1000);

	document.getElementById(
		"contador"
	).innerHTML = `${days}d ${hours}h ${mins}m ${seconds}s`;

	if (distance4Event < 0) {
		clearInterval(timer);
		document.getElementById("contador").innerHTML = `Evento expirado`;
	}
}, 1000);
