exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: 'C:/Users/akarim/workspace/protractor_AnjularJS/node_modules/selenium/selenium-server-standalone-3.4.0.jar',
    specs: ['sasMember/spec.sasMember.js'],

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