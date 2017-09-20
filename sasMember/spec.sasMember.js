var tr_ind_1year_45_m = require('../sasMember/tr/tr_ind_1year_45_m.js');
var tr_ind_1year_45_s = require('../sasMember/tr/tr_ind_1year_45_s.js');

browser.driver.manage().window().maximize();

browser.baseUrl = "http://gridstaging.globalrescue.com";

tr_ind_1year_45_m.test();
tr_ind_1year_45_s.test();