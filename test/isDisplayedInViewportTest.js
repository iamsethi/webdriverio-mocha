beforeEach(function() {
  browser.maximizeWindow();
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements are visible', function() {
  it('Button display is set to non display therefore should return false', function(done) {
  	var isVisible = $('#not-displayed').isDisplayedInViewport();
  	console.log(isVisible);
  	expect(isVisible).to.equal(false);
  });

  it('Button display is set to visibility hidden therefore should return false', function(done) {
  	var isVisible = $('#visibility-hidden').isDisplayedInViewport();
  	console.log(isVisible);
  	expect(isVisible).to.equal(false);
  });

  it('Button display is set to zero opacity therefore should return false', function(done) {
  	var isVisible = $('#zero-opacity').isDisplayedInViewport();
  	console.log(isVisible);
  	expect(isVisible).to.equal(false);
  });

  it('Header text is visible therefore should return true', function(done) {
  	var isVisible = $('h1').isDisplayedInViewport();
  	console.log(isVisible);
  	expect(isVisible).to.equal(true);
  });
});
