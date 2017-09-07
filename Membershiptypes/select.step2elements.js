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
        Common.getFirstElement(by.model('signup.contact.displayDob')).click();
        Common.getFirstElement(by.model('signup.contact.displayDob')).sendKeys(dobirth);
    },

    setMembershipStartDate : function() {
        var todaydate = new Date();
        var dd = todaydate.getDate();
        var mm = todaydate.getMonth() + 1;
        if(dd<10){
            dd= '0' +dd
        }
        
        if (mm < 10) 
        { 
            mm = '0' + mm; 
        }
        var y = todaydate.getFullYear();
        
        var mstartdate = mm + '/'+ dd + '/'+ y;
        Common.getFirstElement(by.model('signup.contract.displayMembershipStartDate')).click();
        Common.getFirstElement(by.model('signup.contract.displayMembershipStartDate')).sendKeys(mstartdate);
    },

    setSatellitephone : function(sphone) {
        Common.getFirstElement(by.model('signup.satellitePhone.number')).sendKeys(sphone);
    },

    setFemalegender : function() {
        Common.getFirstElement(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.FEMALE}"]')).click();
    },

    setMalegender : function() {
        Common.getFirstElement(by.css('[ng-class="{active: signup.contact.gender == CONSTANTS.GENDER.MALE}"]')).click();
    },

    setResidenceAddress : function() {
        Common.getFirstElement(by.model('addressObject.selectedAddress')).click();
        
    },
    
    submit : function() {
        Common.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
    }

};