exports.loadSignupPage = function () {
    browser.get('ss/#!/signup/?signupas=member&source=grcom');
};

exports.getFirstElement = function (selector) {
    var firstElement = element.all(selector).filter(function (elm) {
        return elm.isDisplayed().then(function (isDisplayed) {
            return isDisplayed;
        });
    }).first();

    return firstElement;
}

exports.getRandomNum = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

exports.getaddress = function (text, index) {
    browser.actions().mouseMove(element(by.model("addressObject.selectedAddress")).sendKeys(text)).perform().then(function () {
        browser.sleep(5000);
        // press the down arrow for the autocomplete item we want to choose
        for (i = 0; i < index; i++) {

            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        }
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    });
    browser.sleep(3000);
}


exports.getalloption = function (allOptions) {
    allOptions.count().then(function (numberOfItems) {
        return Math.floor(Math.random() * numberOfItems);
    }).then(function (randomNumber) {
        allOptions.get(randomNumber).click();
    });
}

exports.scrolldown = function () {
    browser.executeScript('window.scrollTo(508,686);');

}

exports.submit = function () {
    this.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
}

exports.browserwait = function () {
    browser.driver.sleep(20000);
}
