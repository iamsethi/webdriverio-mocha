describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
			browser.url('/');
		var title = browser.getTitle();
		expect(title).to.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);

		$('#contact-us').click();
		browser.switchWindow('WebDriver | Contact Us');

		var title2 = browser.getTitle();
		expect(title2).to.equal('WebDriver | Contact Us');

		var url = browser.getUrl();
		expect(url).to.include('Contact-Us', 'URL Mismatch');
		browser.closeWindow();
	});
});
