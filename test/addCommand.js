var request = require('sync-request');

browser.addCommand("submitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments) {
	if(firstName) {
		browser.setValue("[name='first_name']", firstName);
	}
	if(lastName) {
		browser.setValue("[name='last_name']", lastName);
	}
	if(emailAddress) {
		browser.setValue("[name='email']", emailAddress);
	}
	if(comments) {
		browser.setValue("[name='message']", comments);
	}
	browser.click("[type='submit']");	
})

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
	var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');

	var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

	beforeEach(function() {
		console.log('Inside the describe block!');
	})

contactusDetails.forEach(function (contactDetail) {
  it('Should be able to submit a successful submission via contact us form', function(done) {
  	browser.submitDataViaContactUsForm('joe', 'Blogs', contactDetail.email, contactDetail.body);

  	var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.true;

  	var successfulSubmission = browser.getText('#contact_reply h1');
  	expect(successfulSubmission).to.equal('Thank You for your Message!');
  		})
    });

});