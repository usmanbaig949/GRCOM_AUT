// Create Report
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var reporter = new HtmlScreenshotReporter({
    dest: 'D:/projects/qa/automation/report', // a location to store screen shots.
    cleanDestination: true,
    inlineImages: false,  
    preserveDirectory: true,  
    showSummary: true,
    showConfiguration: true,
    reportTitle: 'Automated Test Report for SS -- Test run on: ' + timeStamp,
    filename: 'Report.html'

});

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: 'C:/Users/akarim/workspace/protractor_AnjularJS/node_modules/selenium/selenium-server-standalone-3.4.0.jar',
    specs: ['sasMember/spec.sasMember.js'],

    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
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