beforeEach(function() {
  browser.url("/Accordion/index.html");
})

describe('Validate text is present', function() {
  it('Verify text exists within the loading div container', function () {
    var text = $('#hidden-text').waitForDisplayed(10000);
    console.log(text);
    });
});
