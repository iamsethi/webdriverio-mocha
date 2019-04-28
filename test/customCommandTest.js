var request = require('sync-request');

browser.addCommand("submitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments) {
	if(firstName) {
		$("[name='first_name']").setValue(firstName);
	}
	if(lastName) {
		$("[name='last_name']").setValue(lastName);
	}
	if(emailAddress) {
		$("[name='email']").setValue(emailAddress);
	}
	if(comments) {
		$("[name='message']").setValue(comments);
	}
	$("[type='submit']").click();
})

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
	var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

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
