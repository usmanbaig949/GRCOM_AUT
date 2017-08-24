var Common = require('../../Membershiptypes/common.js');

var Step1 = require('../../Membershiptypes/select.step1elements.js').Step1;

var Step2 = require('../../Membershiptypes/select.step2elements.js').Step2;

exports.test = function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;

    describe('Sign up as Member having Travel membership as individual, 1 year, 45 days and medical only', function () {

        it('should select travel plan successfully', function () {
            Common.loadSignupPage();
            Step1.selectTravelMembership();
            Step1.selectTravelIndividualType();
            Step1.selectTravel1YearTerm();
            Step1.selectTravel45DaysTrip();
            
            Step1.setEmail("test.tr");
            Step1.submit();   
            browser.waitForAngularEnabled(true);
            Step2.setFirstName("Test");
            Step2.setLastName("Automation");
            Step2.setPhonenumber("6174594200");
            Step2.setDOB("11/11/1987");
            Step2.setMembershipStartDate("11/17/2017");
            Step2.setSatellitephone("342343242");
            Step2.setFemalegender();
            Step2.setResidenceAddress(Common.getaddress("117 Milk St", 2));
            Step2.submit();   
            browser.waitForAngularEnabled(true);
           });
    });
}