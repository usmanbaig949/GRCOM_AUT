var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter=new HtmlScreenshotReporter({
    dest: 'D:/projects/qa/automation/screenshots', // a location to store screen shots.
    filename: 'Report.html'

});

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: 'C:/Users/akarim/workspace/protractor_AnjularJS/node_modules/selenium/selenium-server-standalone-3.4.0.jar',
    specs: ['sasMember/spec.sasMember.js'],
    
    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },

    useAllAngular2AppRoots: true,
    allScriptsTimeout: 100000,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
            '--start-maximized'
            ]
        }
    }

    /*multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]*/
};