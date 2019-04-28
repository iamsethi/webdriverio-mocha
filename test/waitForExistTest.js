beforeEach(function() {
  browser.url("/Ajax-Loader/index.html");
})

describe('Validate whether the click me button is visible', function() {
  it('Validate whether the click me button code is visible within the DOM', function(done) {
      this.timeout(20000);
      var clickMeButton = "//p[text()='CLICK ME!']";
      $(clickMeButton).waitForExist(8000);
  });

  it('Validate whether the click me button appears once the Ajax loader fully loads', function(done) {
      this.timeout(20000);
      var clickMeButton = "//p[text()='CLICK ME!']";
      $(clickMeButton).waitForDisplayed( 8000);
  });

});
