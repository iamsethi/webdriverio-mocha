beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.maximizeWindow();
})

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item orange is disabled therefore should return false', function(done) {
    var isEnabled = $("option[value='orange']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });

  it('Dropdown item grape is enabled therefore should return true', function(done) {
    var isEnabled = $("option[value='grape']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Option2 is enabled therefore should return true', function(done) {
    var isEnabled = $("input[value='option-2']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Radio button pumpkin is enabled therefore should be true', function(done) {
    var isEnabled = $("input[value='pumpkin']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(true);
  });

  it('Radio button cabbage is disabled therefore should be false', function(done) {
    var isEnabled = $("input[value='cabbage']").isEnabled();
    console.log(isEnabled);
    expect(isEnabled).to.equal(false);
  });
});
