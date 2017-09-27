var tc_silver_ind_1year = require('../sasMember/tc/tc_silver_ind_1year.js');

browser.driver.manage().window().maximize();

browser.baseUrl = "http://gridstaging.globalrescue.com";

//----------------------------------------- TotalCare Memberships for Individual --------------------------------------
tc_silver_ind_1year.test();