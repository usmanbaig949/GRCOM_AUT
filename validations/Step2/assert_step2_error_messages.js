var Common = require('../../Membershiptypes/common.js');

var Step1 = require('../../Membershiptypes/select.step1elements.js').Step1;

var Step2 = require('../../Membershiptypes/select.step2elements.js').Step2;

var Step3 = require('../../Membershiptypes/select.step3elements.js').Step3;

var Step4 = require('../../Membershiptypes/select.step4elements.js').Step4;

exports.test = function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

    describe('Assertion of all error messages on Step 2', function () {

        it('Testcase 1: should select membership plan', function () {
            Common.loadSignupPage();
            expect(browser.getTitle()).toEqual('Sign Up | Step 1');
            Step1.selectMembership("TR-I-A1-45-X"); 
        });

        it('Testcase 2: should pick unique email address', function () {
            Step1.setEmail("test.tr");
            Common.submit();
        });

        it('Testcase 3: should populate member information', function () {
            expect(browser.getTitle()).toEqual('Sign Up | Step 2');
            Common.submit();
        });

        it ('Testcase 4: should check First Name is mandatory', function () {
            var Fname = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[1]/div/div/span'));
            expect(Fname.getText()).toEqual('First Name is mandatory. Please enter a value.');
        });

        it ('Testcase 5: should check Last Name is mandatory', function () {
            var Lname = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[2]/div/div/span'));
            expect(Lname.getText()).toEqual('Last Name is mandatory. Please enter a value.');
        });

        it ('Testcase 6: should check Phone Number is mandatory', function () {
            var pnumber = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[3]/div/div[2]/span'));
            expect(pnumber.getText()).toEqual('Phone Number is mandatory. Please enter a value.');
        });

        it ('Testcase 7: should check DOB is mandatory', function () {
            var dbirth = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[5]/div/div[2]/span'));
            expect(dbirth.getText()).toEqual('Date of Birth is mandatory. Please enter a value.');
        });

        it ('Testcase 8: should check Membership start date is mandatory', function () {
            var msdate = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[6]/div/div[2]/span'));
            expect(msdate.getText()).toEqual('Membership Start Date is mandatory. Please enter a value.');
        });

        it ('Testcase 9: should check Gender is mandatory', function () {
            var gen = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[9]/div/div[2]/span'));
            expect(gen.getText()).toEqual('Gender is mandatory. Please select a value.');
        });

        it ('Testcase 10: should check Address is mandatory', function () {
            var add = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/ng-form/address/ng-form/div/div[1]/div/div/div'));
            expect(add.getText()).toEqual('Address is mandatory. Please enter a value');
        });

        it ('Testcase 11: should check First name/ Last name starts with English alphabets', function () {
            Step2.setdigitinFirstName();
            Step2.setdigitInLastName();
            var fcharacter = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[1]/div/div/span'));
            var Lcharacter = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[2]/div/div/span'));
            expect(fcharacter.getText()).toEqual('Must contain English alphabets. Periods and hyphens are allowed. Must be between 2 - 45 characters. First character should be an English alphabet.');
            expect(Lcharacter.getText()).toEqual('Must contain English alphabets. Periods and hyphens are allowed. Must be between 2 - 45 characters. First character should be an English alphabet.');
        });

        it ('Testcase 12: Should check phone number mininum and maximum limit ', function () {
            Common.getFirstElement(by.model('signup.tempPrimaryPhone')).sendKeys("12");
            var minmax = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[3]/div/div[2]/span'));
            expect(minmax.getText()).toEqual('Phone number should be between 5 - 16 digits.');
        });

        it ('Testcase 12: Should check phone number not valid ', function () {
            Common.getFirstElement(by.model('signup.tempPrimaryPhone')).clear();
            Common.getFirstElement(by.model('signup.tempPrimaryPhone')).sendKeys("34543");
            var invalid = Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[2]/div/div[3]/div/div[2]/span'));
            expect(invalid.getText()).toEqual('Phone Number is not valid');
        });

    });
}