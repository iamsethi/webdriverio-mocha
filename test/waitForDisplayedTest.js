beforeEach(function() {
  browser.maximizeWindow();
  browser.url("/Accordion/index.html");
})

describe('Validate text is present', function() {
  it('Verify text exists within the loading div container', function () {
    $('#hidden-text').waitForDisplayed(2000);
    });
});
