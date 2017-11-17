var Common = require('../../Membershiptypes/common.js');

var Step1 = require('../../Membershiptypes/select.step1elements.js').Step1;

var Step2 = require('../../Membershiptypes/select.step2elements.js').Step2;

var Step3 = require('../../Membershiptypes/select.step3elements.js').Step3;

var Step4 = require('../../Membershiptypes/select.step4elements.js').Step4;

exports.test = function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

    describe('Assertion of all error messages in Step 1', function () {

        it('Testcase 1: should assert Step 1 page title ', function () {
            Common.loadSignupPage();
            expect(browser.getTitle()).toEqual('Sign Up | Step 1');
        });

        it('Testcase 2: should select mmembership plan', function () {
            
            Step1.selectMembership("TR-I-A1-45-X"); 
            Common.submit();
        });

        it('Testcase 3: should check email address is mandatory', function () {   
            var email =  Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[2]/div/div/div[3]/div/div[1]/div[5]/div/div/div'));       
            expect(email.getText()).toEqual('Email is mandatory. Please enter a value.');
        });

        it('Testcase 4: should assert email already exist in system',function () {
            Step1.setAlreadyinEmail();
            Common.submit();
            var unique = Common.getFirstElement(by.xpath('/html/body/div[1]/div/div/form/div[1]/div[1]/div'));
            expect(unique.getText()).toEqual('Please login and click "Purchase New Membership" button from self care portal.');
            Step1.CloseUniqueEmailPopup();
        });

        it('Testcase 5: should pick unique email address', function () {
            Step1.setEmail();
            Common.submit();
        });

    });
}