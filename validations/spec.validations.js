var assert_step1_error_messages = require('../validations/Step1/assert_step1_error_messages.js');
var assert_step2_error_messages = require('../validations/Step2/assert_step2_error_messages.js');

browser.driver.manage().window().maximize();

browser.baseUrl = "http://gridstaging.globalrescue.com";

//assert_step1_error_messages.test();
assert_step2_error_messages.test();