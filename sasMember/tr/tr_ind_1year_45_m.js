var Common = require('../../Membershiptypes/common.js');

var Step1 = require('../../Membershiptypes/select.step1elements.js').Step1;

var Step2 = require('../../Membershiptypes/select.step2elements.js').Step2;

var Step3 = require('../../Membershiptypes/select.step3elements.js').Step3;

var Step4 = require('../../Membershiptypes/select.step4elements.js').Step4;

exports.test = function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

    describe('Sign up as Member having Travel membership as individual, 1 year, 45 days and medical only', function () {

        it('should select travel plan successfully', function () {
            Common.loadSignupPage();

            Step1.selectMembership("TR-I-A1-45-X");
            Step1.setEmail("test.tr");
            Common.submit();

            Step2.populatedata();
            Common.submit();

            Step3.purchaseTI();
            Common.submit();

            Step4.populatedata();
            Common.submit();
            Step4.acceptconsent();
            
            Common.browserwait();

        });
    });
}