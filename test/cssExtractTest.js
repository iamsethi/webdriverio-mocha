describe('Test the webdriveruniversity homepage', function() {
	it('Output the height of the homepage carousel', function() {
		browser.url('./');
		browser.pause(2000);
    const height = $('#udemy-promo-thumbnail').getCSSProperty('height')
		console.log(height);
	});
});
