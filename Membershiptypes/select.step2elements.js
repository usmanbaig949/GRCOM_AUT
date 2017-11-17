var Common = require('./common.js');
var faker = require('faker');

exports.Step2 = {

    setFirstName: function () {
        var randomfirstname = faker.name.firstName();
        Common.getFirstElement(by.model('signup.contact.firstName')).clear();
        Common.getFirstElement(by.model('signup.contact.firstName')).sendKeys(randomfirstname);
    },

    setdigitinFirstName: function () {
        Common.getFirstElement(by.model('signup.contact.firstName')).sendKeys("1");
    },

    setLastName: function () {
        var randomlastname = faker.name.lastName();
        Common.getFirstElement(by.model('signup.contact.lastName')).clear();
        Common.getFirstElement(by.model('signup.contact.lastName')).sendKeys(randomlastname);
    },
    
    setdigitInLastName: function () {
        Common.getFirstElement(by.model('signup.contact.lastName')).sendKeys("!@#$%");
    },

    setPhonenumber: function () {
        //var pnum = faker.phone.phoneNumberFormat();
        Common.getFirstElement(by.model('signup.tempPrimaryPhone')).clear();
        Common.getFirstElement(by.model('signup.tempPrimaryPhone')).sendKeys("6174594200");
    },

    // setrandomDOB: function () {
    //     var DOB = faker.date.past();
    //     var dobd = DOB.getDate();
    //     var dobm = DOB.getMonth();
    //     if (dobd < 10) {
    //         dobd = '0' + dobd;
    //     }

    //     if (dobm < 10) {
    //         dobm = '0' + dobm;
    //     }
    //     var doby = DOB.getFullYear();

    //     var Dobirth = dobm + '/' + dobd + '/' + doby;
    //     Common.getFirstElement(by.model('signup.contact.displayDob')).click();
    //     Common.getFirstElement(by.model('signup.contact.displayDob')).sendKeys(Dobirth);
    // },

    setDateOfbirth: function () {
    Common.getFirstElement(by.model('signup.contact.displayDob')).click();
    Common.getFirstElement(by.model('signup.contact.displayDob')).sendKeys("10/10/1978");
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

    setZipcode: function () {
        var randomZipcode = faker.address.zipCode();
        Common.getFirstElement(by.model('addressObject.zipCode')).clear();
        Common.getFirstElement(by.model('addressObject.zipCode')).sendKeys(randomZipcode);
    },

    addFamilyMemberlink: function () {
        Common.getFirstElement(by.css('[ng-click="showNewFamilyMemberForm()"]')).click();
    },

    FamilyFname: function () {
        var FFname = faker.name.firstName();
        Common.getFirstElement(by.model('familyMember.firstName')).clear();
        Common.getFirstElement(by.model('familyMember.firstName')).sendKeys(FFname);
    },

    FamilyLname: function () {
        var FLname = faker.name.lastName();
        Common.getFirstElement(by.model('familyMember.lastName')).clear();
        Common.getFirstElement(by.model('familyMember.lastName')).sendKeys(FLname);
    },

    FamilyDOB: function () {
        Common.getFirstElement(by.model('familyMember.displayDob')).clear();
        Common.getFirstElement(by.model('familyMember.displayDob')).sendKeys("10/10/1999");
    },

    setFamilyMaleGender: function () {
        Common.getFirstElement(by.css('[ng-class="{active: familyMember.gender == CONSTANTS.GENDER.MALE}"]')).click();

    },

    setFamilyFemaleGender: function () {
        Common.getFirstElement(by.css('[ng-class="{active: familyMember.gender == CONSTANTS.GENDER.FEMALE}"]')).click();

    },

    savefamilymember: function () {
        Common.getFirstElement(by.css('[ng-click="addFamilyMember(familyMember)"]')).click();

    },

    populatedata: function () {
        this.setFirstName();
        this.setLastName();
        this.setPhonenumber();
        this.setDateOfbirth();
        this.setMembershipStartDate();
        this.setSatellitephone();
        this.setFemalegender();
        Common.getaddress("117 Milk", 2);
        Common.scrolldown();
        //this.setZipcode();
    
    },

    populatefamilymemberdata: function () {
        this.addFamilyMemberlink();
        this.FamilyFname();
        this.FamilyLname();
        this.FamilyDOB();
        this.setFamilyMaleGender();
        this.savefamilymember();
    }
};