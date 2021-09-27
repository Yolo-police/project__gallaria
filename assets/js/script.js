"use strict"


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Android/i)
	},
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera()
		);
	}

};

if (isMobile.any()) {
	document.body.classList.add('_touch')
}
else {
	document.body.classList.add('_pc')
}


let lines = document.querySelector(".video__lines");
let spans = document.querySelectorAll(".video__lines span");

lines.addEventListener("click", () => {
	if (document.querySelector('.video__volume__scroll').style.visibility == "visible") {
		document.querySelector('.video__volume__scroll').style.visibility = "hidden";
	}
	else {
		document.querySelector('.video__volume__scroll').style.visibility = "visible";
	}
});


document.querySelector('.video__volume-range').addEventListener('change', () => {
	let line = Math.floor(document.querySelector('.video__volume-range').value / 25);
	for (let i = 0; i < line; i++) {
		spans[i].style.backgroundColor = '#fff';
	}
	for (let i = 3; i >= line; i--) {
		spans[i].style.backgroundColor = '#b9d2e1';
	}

})
document.querySelector('.gallery__button-vertical-view').addEventListener('click', () => {
	document.querySelector('.gallery__items').classList.add('vertical-view');
	document.querySelector('.gallery__items').classList.remove('square__view');
})
document.querySelector('.gallery__button-square-view').addEventListener('click', () => {
	document.querySelector('.gallery__items').classList.add('square__view');
	document.querySelector('.gallery__items').classList.remove('vertical-view');
})