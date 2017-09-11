var Common = require('./common.js');

exports.Step3 = {

    setTravelInsuranceNo: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 2}"]')).click();
    },

    setTravelInsuranceYes: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.travelInsurance.travelInsuranceSelected == 1}"]')).click();
    },

    /*setMedicalDevice: function (quantity) {
        Common.getFirstElement(by.xpath('//*[@id="travel-insurance-skip"]/div[1]/div/div/div[2]/div/div[2]/div/div/div/div/span[4]/button')).click();
    },*/

    getDepartDate: function () {
        Common.getFirstElement(by.model('signup.travelInsurance.displayDepartDate')).getAttribute('value');
    },

    setReturnDate: function () {
        var someDate = new Date();
        var numberOfDaysToAdd = 15;
        var rdate = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        //Formatting to mm/dd/yyyy :
        var dd = someDate.getDate();
        var mm = someDate.getMonth() + 1;
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        var y = someDate.getFullYear();

        var rdate = mm + '/' + dd + '/' + y;

        Common.getFirstElement(by.model('signup.travelInsurance.displayReturnDate')).click();
        Common.getFirstElement(by.model('signup.travelInsurance.displayReturnDate')).sendKeys(rdate);
    },

    setInterruptPolicy: function () {
        var interruptpolicybox =  Common.getFirstElement(by.css("[for='interruptPolicy']"));
        interruptpolicybox.click();
    },

    setTripCostforPrimaryMember: function (tripcost) {
        Common.getFirstElement(by.xpath('//*[@id="memberTripCost"]')).click();
        Common.getFirstElement(by.xpath('//*[@id="memberTripCost"]')).sendKeys(tripcost);
    },

    getQuote: function () {
        Common.getFirstElement(by.xpath('//*[@id="enrollment-section"]/div/div')).click();
    },

    purchaseTI: function () {
        this.setTravelInsuranceYes();
        this.setReturnDate();
        this.setInterruptPolicy();
        Common.scrolldown();
        this.setTripCostforPrimaryMember("1000");
        this.getQuote();
    },
}