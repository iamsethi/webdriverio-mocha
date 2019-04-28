describe('Test Checkboxes Buttons Page', function() {
	browser.maximizeWindow();
	browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

	it('Should be able to focus on checkbox button elements', function(done) {

		$('#checkboxes label:nth-of-type(1) [type]').click();
		var checkboxButtonOne = $('#checkboxes label:nth-of-type(1) [type]').isFocused();
		console.log('Checkbox button one has a value of: ' + checkboxButtonOne);
		expect(checkboxButtonOne, 'The checkbox (One) should have focus!').to.be.true;

		var checkboxButtonTwo =$('#checkboxes label:nth-child(5) [type]').isFocused();
		console.log('Checkbox button two has a value of: ' + checkboxButtonTwo);
		expect(checkboxButtonTwo, 'The checkbox (Two) should have focus!').to.be.false;
	});
});
