var request = require('sync-request');
var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");
beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {


  it('Should be able to submit a successful submission via contact us form', function(done) {
  	ContactUs_Page.submitAllInformationViaContactUsForm('joe', 'Blogs', 'joe_blogs123@outlook.com', 'How are you?');

  	var successfulContactConfirmation = $('#contact_reply h1').isExisting();
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.true;

  	var successfulSubmission = $('#contact_reply h1').getText();
  	expect(successfulSubmission).to.equal('Thank You for your Message!');
  		})


});
