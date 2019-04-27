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
ketan@ketan-Inspiron-3521:~/git/webdriverio-mocha$  npm install loglevel-plugin-prefix
