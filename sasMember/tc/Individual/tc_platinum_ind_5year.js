var Common = require('../../../Membershiptypes/common.js');

var Step1 = require('../../../Membershiptypes/select.step1elements.js').Step1;

var Step2 = require('../../../Membershiptypes/select.step2elements.js').Step2;

var Step3 = require('../../../Membershiptypes/select.step3elements.js').Step3;

var Step4 = require('../../../Membershiptypes/select.step4elements.js').Step4;

exports.test = function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

    describe('Sign up as Member having TotalCare membership as platinum, individual and 5 years', function () {

        it('Testcase 1: should select totalcare plan', function () {
            Common.loadSignupPage();
            expect(browser.getTitle()).toEqual('Sign Up | Step 1');
            Step1.selectMembership("TC-I-A5-P-X");
        });

        it('Testcase 2: should pick unique email address', function () {
            Step1.setEmail();
            Common.submit();
        });

        it('Testcase 3: should populate member information', function () {
            expect(browser.getTitle()).toEqual('Sign Up | Step 2');
            Step2.populatedata();
            Common.submit();
        });

        it('Testcase 4: should successfully get quote price ', function() {
            expect(browser.getTitle()).toEqual('Sign Up | Step 3');
            Step3.purchaseTI();
            Common.submit();
        });

        it('Testcase 5: should checkout successfully', function() {
            expect(browser.getTitle()).toEqual('Sign Up | Step 4');
            Step4.populatedata();
            Common.submit();
        });

        it('Testcase 6: should buy membership successfully', function() { 
            Step4.acceptconsentwithTC();
            Common.browserwait();

        });
    });
}