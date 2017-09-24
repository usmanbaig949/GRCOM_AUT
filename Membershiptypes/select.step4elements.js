var Common = require('./common.js');

exports.Step4 = {

    setCreditCard: function (CCNum) {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardNumber')).sendKeys(CCNum);
    },

    SetCCExpiryMonth: function () {
        var allOptions = Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardNumber')).click();
    },

    SetExpiryYear: function () {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.expiryYear')).click();
    },

    SetCVV: function (cvv) {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardCcv')).sendKeys(cvv);
    },

    clickReferralCode: function () {
        Common.getFirstElement(By.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[5]/div[1]/div[1]/div/div/a')).click();
    },

    setReferralCode: function (rcode) {
        Common.getFirstElement(by.model('referralCode')).sendKeys(rcode);
    },

    AcceptReferralCode: function () {
        Common.getFirstElement(by.id('yesButton')).click();
    },

    cancelReferalCode: function () {
        Common.getFirstElement(by.id('noButton')).click();
    },

    sethearaboutus: function () {
        Common.getFirstElement(by.model('signup.contact.howDidYouHearAboutUs')).click();
    },

    checkSubscribe: function () {
        var checksubbox = Common.getFirstElement(by.css("[for='subscribe']"));
        checksubbox.click();
    },

    getOptions: function () {
        var expiryYear = element(by.model('signup.contact.creditCardProfile.expiryYear')).all(by.tagName('option'));
        var expiryMonth = element(by.model('signup.contact.creditCardProfile.expiryMonth')).all(by.tagName('option'));
        var allOptions = element(by.model('signup.contact.howDidYouHearAboutUs')).all(by.tagName('option'));
        Common.getalloption(expiryYear);
        Common.getalloption(expiryMonth);
        Common.getalloption(allOptions);
    },

    MSAconsent: function () {
        var msabox = Common.getFirstElement(by.css("label[for='msaCheckBox']"));
        msabox.click();
    },

    TIconsent: function () {
        var tibox = Common.getFirstElement(by.css("label[for='travelInsuranceCheckBox']"));
        tibox.click();
    },

    TCconsent: function () {
        var tcbox = Common.getFirstElement(by.css("label[for='totalCareCheckBox']"));
        tcbox.click();
    },

    GoGreen: function () {
        var gobox = Common.getFirstElement(by.css("label[for='go-green']"));
        gbox.click();
    },

    Subscribe: function () {
        var subscribebox = Common.getFirstElement(by.css("label[for='subscribe']"));
        subscribebox.click();
    },

    consentAgreementbutton: function () {
        Common.getFirstElement(by.id('consentAggremetBtn')).click();
    },


    populatedata: function () {
        this.setCreditCard("4012888888881881");
        this.SetCVV("3432");
        Common.scrolldown();
        this.clickReferralCode();
        this.setReferralCode("TestAla");
        this.AcceptReferralCode();
        this.getOptions();
        this.Subscribe();
    },

    acceptconsent: function () {
        this.MSAconsent();
        this.TIconsent();
        this.consentAgreementbutton();
    }

}    
