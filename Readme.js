ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install webdriverio@latest
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install @wdio/cli --save-dev

ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$ ./node_modules/.bin/wdio config

=========================
WDIO Configuration Helper
=========================

? Where should your tests be launched  local - https://www.npmjs.com/package/@wd
io/local-runner
? Shall I install the runner plugin for you? Yes
? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Shall I install the framework adapter for you? Yes
? Do you want to run WebdriverIO commands synchronous or asynchronous? sync
? Where are your test specs located? ./test/specs/**/*.js
? Which reporter do you want to use? (Press <space> to select, <a> to toggle all
, <i> to invert selection)
? Do you want to add a service to your test setup? (Press <space> to select, <a>
 to toggle all, <i> to invert selection)
? Level of logging verbosity info
? What is the base url? http://localhost


ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install webdriverio@latest --save-dev
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install @wdio/selenium-standalone-service --save-dev
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install chai@latest --save-dev
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install mocha@latest --save-dev
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install @wdio/dot-reporter --save-dev
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install --save-dev sync-request
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install @wdio/allure-reporter --save-dev
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install -g allure-commandline --save-dev 
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install loglevel-plugin-prefix

######## Run the code #############
npm test will run the test

######## Pause, Debug Mode & Selectors #############
browser.pause(7000);
browser.debug()
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$ DEBUG=true npm test -- --spec=test/ajaxClickTest.js

Install Ranorex selocity chrome plugin
1.it can search for css in DOM
2.it can generate css very easily

######## Targeting & Skipping Specific Tests #############
it.skip   //skip
it.only  //specific

######## CSS Extraction #############
const height = $('#udemy-promo-thumbnail').getCSSProperty('height')
console.log(height);

######## Mocha Hooks #############
beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe(.....)

######## setValue i.e send Keys like Selenium #############
$("[name='first_name']").setValue(firstName);

############# Handling Browser Window Tabs #############
browser.switchWindow('WebDriver | Contact Us');  // URL or Title of webpage in argument

############# Version 5 changes#############
$('#contact-us').click();  // instead of browser.click()
browser.closeWindow(); //instead of close()

expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
expect(url).to.include('Contact-Us', 'URL Mismatch');

############# waitForDisplayed#############
$('#hidden-text').waitForDisplayed(2000);

############# waitUntil#############
browser.waitUntil(() => {
				return $('#hidden-text').getText() === 'LOADING COMPLETE.'
			}, 15000, 'expected text to be different after 15s');

#############isSelected isFocused#############
$("option[value='maven']").isSelected();
$('#checkboxes label:nth-of-type(1) [type]').isFocused();

############# isExisting isEnabled isDisplayedInViewport##########
$('#not-displayed').isExisting();
$("option[value='orange']").isEnabled();
$('#not-displayed').isDisplayedInViewport();

#############waitForDisplayed waitForExist##########
$('#hidden-text').waitForDisplayed(2000);
$(selector).waitForExist(5000)

#############getText, isVisible, isExisting#############
$(selector).getText()
$(selector).isDisplayed()
$(selector).isExisting()

#############Custom Commands#############
browser.addCommand("submitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments) {
.....
})
//use it in your tests
browser.submitDataViaContactUsForm('joe', 'Blogs', contactDetail.email, contactDetail.body);
