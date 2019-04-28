beforeEach(function() {
	browser.url("https://www.w3schools.com/html/html5_video.asp");
})

browser.addCommand('isVideoPaused', () => {
	var isPaused = browser.execute(() => {
		console.log('Outputted inside the console window');

		var video = document.querySelector('#video1');
		return video.paused;
	})
	return isPaused.value;
});

describe('Video test',() => {
	it('Alter the width of the video', () => {
		var videoWidth = browser.execute(() => {
			var video = document.querySelector('#video1');
			return video.style.width = "300px";
		});
	});
});
