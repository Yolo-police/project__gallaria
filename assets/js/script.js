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
