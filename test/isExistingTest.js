beforeEach(function() {
  browser.maximizeWindow();
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    var isEnabled = $('#not-displayed').isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    var isEnabled = $('#visibility-hidden').isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    var isEnabled = $('#zero-opacity').isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    var isEnabled = $('h1').isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    var isEnabled = $('#no-such-element').isExisting();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
