var Common = require('./common.js');

exports.Step3 = {

    setTravelInsuranceNo: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 2}"]')).click();
    },

    setTravelInsuranceYes: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 1}"]')).click();
    },

  /*  setMedicalDevice: function (quantity) {
        //Common.getFirstElement(by.model('signup.order.additions[0].quantity')).click();
        Common.getFirstElement(by.model('signup.order.additions[0].quantity')).sendkeys(quantity);
    },*/

  /*  getDepartDate: function (ddate) {
        Common.getFirstElement(by.model('signup.travelInsurance.displayDepartDate')).getText();
    },

    setReturnDate: function (rdate) {
        Common.getFirstElement(by.model('signup.travelInsurance.displayReturnDate')).click();
        Common.getFirstElement(by.model('signup.travelInsurance.displayReturnDate')).sendKeys(rdate);
    },

    setInterruptPolicy: function () {
        Common.getFirstElement(by.model('signup.travelInsurance.isInterruptPolicyAllowed')).click();
    },

    setTripCostforPrimaryMember: function (tripcost) {

        // Number of elements.
        var index = element.all(Common.getFirstElement(by.id('memberTripCost'))).count();
        console.log(index);
        // Get by index (starting at 0).
        element.all(Common.getFirstElement(by.id('memberTripCost'))).get(index);

        // First and last.
      //  element.all(Common.getFirstElement(by.id('memberTripCost'))).first().sendkeys(tripcost);
       // element.all(Common.getFirstElement(by.id('memberTripCost'))).last();
    }, */

    submit: function () {
        Common.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
    },

  /*  visibility : function (){
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be visible on the dom.
    browser.wait(EC.visibilityOf($('memberTripCost')), 10000);
    }*/

}