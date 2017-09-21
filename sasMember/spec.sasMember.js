var tr_ind_1year_45_m = require('../sasMember/tr/tr_ind_1year_45_m.js');
var tr_ind_1year_45_s = require('../sasMember/tr/tr_ind_1year_45_s.js');

var tc_silver_ind_1year = require('../sasMember/tc/tc_silver_ind_1year.js');

browser.driver.manage().window().maximize();

browser.baseUrl = "http://gridstaging.globalrescue.com";

//tr_ind_1year_45_m.test();
//tr_ind_1year_45_s.test();

tc_silver_ind_1year.test();