var assert_step1_error_messages = require('../validations/Step1/assert_step1_error_messages.js');
var assert_step2_error_messages = require('../validations/Step2/assert_step2_error_messages.js');
var M_TI_withRpcode = require('../validations/Step4/M_TI_withRpcode.js');
var M_TI_withoutRpcode = require ('../validations/Step4/M_TI_withoutRpcode.js');
var M_withoutGoGreen = require ('../validations/Step4/M_withoutGoGreen.js');
var M_withGoGreen = require ('../validations/Step4/M_withGoGreen.js')

browser.driver.manage().window().maximize();

browser.baseUrl = "http://gridstaging.globalrescue.com";

//assert_step1_error_messages.test();
//assert_step2_error_messages.test();
M_TI_withRpcode.test();
M_TI_withoutRpcode.test();
M_withoutGoGreen.test();
M_withGoGreen.test();