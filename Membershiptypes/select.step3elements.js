var Common = require('./common.js');

exports.Step3 = {

    setTravelInsuranceNo: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 2}"]')).click();
    },

    setTravelInsuranceYes: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 1}"]')).click();
    },

    /*setMedicalDevice: function (quantity) {
        Common.getFirstElement(by.xpath('//*[@id="quantity"]')).click();
        Common.getFirstElement(by.xpath('//*[@id="quantity"]')).sendkeys(quantity);
    },*/

    getDepartDate: function () {
        Common.getFirstElement(by.model('signup.travelInsurance.displayDepartDate')).getAttribute('value');
    },

    setReturnDate: function () {
        var someDate = new Date();
        var numberOfDaysToAdd = 15;
        var rdate= someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
        //Formatting to mm/dd/yyyy :
        var dd = someDate.getDate();
        var mm = someDate.getMonth() + 1;
        if(dd < 10) {
            dd= '0' +dd
        }
        
        if (mm < 10) 
        { 
            mm = '0' + mm; 
        }
        var y = someDate.getFullYear();
        
        var rdate = mm + '/'+ dd + '/'+ y;

        Common.getFirstElement(by.model('signup.travelInsurance.displayReturnDate')).click();
        Common.getFirstElement(by.model('signup.travelInsurance.displayReturnDate')).sendKeys(rdate);
    },

    setInterruptPolicy: function () {
        Common.getFirstElement(by.model('signup.travelInsurance.isInterruptPolicyAllowed')).click();
    },

    setTripCostforPrimaryMember: function (tripcost) {
        Common.getFirstElement(by.xpath('//*[@id="memberTripCost"]')).click();
        Common.getFirstElement(by.xpath('//*[@id="memberTripCost"]')).sendKeys(tripcost);
    }, 

    getQuote: function() {
        Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div')).click();
    },

    submit: function () {
        Common.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
    },

  /*  visibility : function (){
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be visible on the dom.
    browser.wait(EC.visibilityOf($('memberTripCost')), 10000);
    }*/

}