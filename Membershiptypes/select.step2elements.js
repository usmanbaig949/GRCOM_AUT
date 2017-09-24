var Common = require('./common.js');

exports.Step2 = {

    setFirstName: function () {
        Common.getFirstElement(by.model('signup.contact.firstName')).sendKeys("Test");
    },

    setLastName: function () {
        Common.getFirstElement(by.model('signup.contact.lastName')).sendKeys("Automation");
    },

    setPhonenumber: function () {
        Common.getFirstElement(by.model('signup.tempPrimaryPhone')).sendKeys("6174594200");
    },

    setDOB: function () {
        Common.getFirstElement(by.model('signup.contact.displayDob')).click();
        Common.getFirstElement(by.model('signup.contact.displayDob')).sendKeys("11/11/1987");
    },

    setMembershipStartDate: function () {
        var todaydate = new Date();
        var dd = todaydate.getDate();
        var mm = todaydate.getMonth() + 1;
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        var y = todaydate.getFullYear();

        var mstartdate = mm + '/' + dd + '/' + y;
        Common.getFirstElement(by.model('signup.contract.displayMembershipStartDate')).click();
        Common.getFirstElement(by.model('signup.contract.displayMembershipStartDate')).sendKeys(mstartdate);
    },

    setSatellitephone: function (sphone) {
        Common.getFirstElement(by.model('signup.satellitePhone.number')).sendKeys("342343242");
    },

    setFemalegender: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.FEMALE}"]')).click();
    },

    setMalegender: function () {
        Common.getFirstElement(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.MALE}"]')).click();
    },

    setResidenceAddress: function () {
        Common.getFirstElement(by.model('addressObject.selectedAddress')).click();

    },

    populatedata: function () {
        this.setFirstName();
        this.setLastName();
        this.setPhonenumber();
        this.setDOB();
        this.setMembershipStartDate();
        this.setSatellitephone();
        this.setFemalegender();
        this.setResidenceAddress(Common.getaddress("117 Milk St", 2));
    
    }
};