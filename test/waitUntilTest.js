beforeEach(function() {
	browser.maximizeWindow();
	browser.url("/Accordion/index.html");
})

describe('Validate the loading functionality works correctly', function() {

	it('Verify relevant text LOADING COMPLETE appears after a period of time',function() {
			browser.waitUntil(() => {
				return $('#hidden-text').getText() === 'LOADING COMPLETE.'
			}, 15000, 'expected text to be different after 15s');
	});
});
