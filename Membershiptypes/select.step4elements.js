var Common = require('./common.js');

exports.Step4 = {

    setCreditCard: function (CCNum) {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardNumber')).sendKeys(CCNum);
    },

    SetCCExpiryMonth: function (EMonth) {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardNumber')).sendKeys(EMonth);
    },

    SetExpiryYear: function (EYear) {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.expiryYear')).sendKeys(EYear);
    },

    SetCVV: function (cvv) {
        Common.getFirstElement(by.model('signup.contact.creditCardProfile.creditCardCcv')).sendKeys(cvv);
    },

    clickReferralCode: function () {
       Common.getFirstElement(By.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[5]/div[1]/div[1]/div/div/a')).click();  
       //browser.actions().moveToElement(Common.getFirstElement(By.xpath('//*[@id="enrollment-section"]/div/div/div[1]/div[1]/div/div[5]/div[1]/div[1]/div/div/a'))).click().perform();
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
        Common.getFirstElement(by.model('signup.contact.howDidYouHearAboutUs'));
    },

    setSubscribe: function () {
        Common.getFirstElement(by.model('signup.contact.emailSubscribe'));
    },

    submit : function() {
        Common.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
    }

}    
