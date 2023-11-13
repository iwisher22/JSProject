const randomValue = function () {
	const hex = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	return color;
};
let intervalId;

const startChange = function () {
	if (!intervalId) {
		intervalId = setInterval(bgColor, 1000);
	}

	function bgColor() {
		document.body.style.backgroundColor = randomValue();
	}
};

const stopChange = function () {
	clearInterval(intervalId);
	intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChange);
document.querySelector("#stop").addEventListener("click", stopChange);
