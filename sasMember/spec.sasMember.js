var sasMember = require('../sasMember/tr/tr_ind_1year_45_m.js');

browser.driver.manage().window().maximize();

browser.baseUrl = "http://gridstaging.globalrescue.com";

sasMember.test();