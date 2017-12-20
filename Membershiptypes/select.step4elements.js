var Common = require('./common.js');
var creditcardGenerator = require("creditcard-generator");

exports.Step4 = {

    setCreditCard: function () {
       // var CCNum = creditcardGenerator.GenCC("visa");
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardNumber')).sendKeys("4012888888881881");
    },

    SetCCExpiryMonth: function () {
        var allOptions = Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardNumber')).click();
    },

    SetExpiryYear: function () {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.expiryYear')).click();
    },

    SetCVV: function () {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardCcv')).sendKeys(Common.getRandomNum(100,999));
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
        gobox.click();
    },

    Subscribe: function () {
        var subscribebox = Common.getFirstElement(by.css("label[for='subscribe']"));
        subscribebox.click();
    },

    consentAgreementbutton: function () {
        Common.getFirstElement(by.id('consentAggremetBtn')).click();
    },


    populatedata: function () {
        this.setCreditCard();
        this.SetCVV();
        Common.scrolldown();
        this.clickReferralCode();
        this.setReferralCode("TestAla");
        this.AcceptReferralCode();
        this.getOptions();
        this.Subscribe();
    },

    populatedataWithoutRP: function () {
        this.setCreditCard();
        this.SetCVV();
        Common.scrolldown();
        this.getOptions();
        this.Subscribe();
    },

    acceptconsent: function () {
        this.MSAconsent();
        this.TIconsent();
        this.consentAgreementbutton();
    },

    acceptconsentwithoutTI: function () {
        this.MSAconsent();
        this.consentAgreementbutton();
    },

    acceptconsentwithTC: function () {
        this.MSAconsent();
        this.TIconsent();
        this.TCconsent();
        this.consentAgreementbutton();
    }

}    
