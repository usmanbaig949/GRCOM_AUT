exports.loadSignupPage = function() {
    browser.get('ss/#!/signup/?signupas=member&source=grcom');
};

exports.getFirstElement = function(selector) {
    var firstElement = element.all(selector).filter(function(elm) {
        return elm.isDisplayed().then(function (isDisplayed) {
            return isDisplayed;
        });
    }).first();

    return firstElement;
}

exports.getRandomNum = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
}