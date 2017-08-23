var Common = require('./common.js');

exports.Step2 = {

    setFirstName : function(fname) {
        Common.getFirstElement(by.model('signup.contact.firstName')).sendKeys(fname);
    },

    setLastName : function(lname) {
        Common.getFirstElement(by.model('signup.contact.lastName')).sendKeys(lname);
    },

    setPhonenumber : function(pnumber) {
        Common.getFirstElement(by.model('signup.tempPrimaryPhone')).sendKeys(pnumber);
    },

    setDOB : function(dobirth) {
        Common.getFirstElement(by.model('signup.contact.displayDob')).sendKeys(dobirth);
    },

    setMembershipStartDate : function(mstartdate) {
        Common.getFirstElement(by.model('signup.contract.displayMembershipStartDate')).sendKeys(mstartdate);
    },

    setSatellitephone : function(sphone) {
        Common.getFirstElement(by.model('signup.satellitePhone.number')).sendKeys(sphone);
    },

    setFemalegender : function(fgender) {
        Common.element(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.FEMALE}"]')).click();
    },

    setMalegender : function(mgender) {
        Common.element(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.MALE}"]')).click();
    },

    setResidenceAddress : function(raddress) {
        Common.element(by.model('addressObject.selectedAddress'));
    },

    submit : function() {
        Common.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
    }

};