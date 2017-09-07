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
            Step1.submit();   
            //browser.waitForAngularEnabled(true);

            Step2.setFirstName("Test");
            Step2.setLastName("Automation");
            Step2.setPhonenumber("6174594200");
            Step2.setDOB("11/11/1987");
            Step2.setMembershipStartDate();
            Step2.setSatellitephone("342343242");
            Step2.setFemalegender();
            Step2.setResidenceAddress(Common.getaddress("117 Milk St", 2));
            Step2.submit();   

            Step3.setTravelInsuranceYes();
            //Step3.setMedicalDevice("1");
            //var ddate = Step3.getDepartDate();
            //console.log(ddate);
            Step3.setReturnDate();
            browser.executeScript('window.scrollTo(508,686);');
            Step3.setTripCostforPrimaryMember("1000");
            Step3.getQuote();
            Step3.submit();   

            Step4.setCreditCard("41111111111111111");
            Step4.SetCVV("3432");
            browser.executeScript('window.scrollTo(508,686);').then(function () {
            Step4.clickReferralCode();
        }) 
            Step4.setReferralCode("TestAla");
            Step4.AcceptReferralCode();
            Step4.setSubscribe();
            Step4.getOptions();
            Step4.submit();
        
           });
    });
}