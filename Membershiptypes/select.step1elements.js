var Common = require('./common.js');

exports.Step1 = {

    setEmail: function (emailPrefix) {
        Common.getFirstElement(by.model('signup.contact.email')).sendKeys(emailPrefix + Common.getRandomNum(1, 1000) + "@automation.com");
    },

    selectMembership: function (membership) {
        membership = "TR-I-A1-45-M";
        var memDetail = membership.split("-");

        var membership = memDetail[0];
        var type = memDetail[1];
        var term = memDetail[2];
        var tripOrPlan = memDetail[3]; //trip in case of travel, plan in case of totalcare
        var security = memDetail[4];

        switch (membership.toLowerCase()) {
            case "tr": {
                selectTravelMembership();

                switch (type.toLowerCase()) {
                    case "i": {
                        selectTravelIndividualType();
                    }
                    break;
                    case "f": {
                        selectTravelFamilyType();
                    }
                    break;
                    case "s": {
                        selectTravelStudentType();
                    }
                    break;
                    case "a": {
                    }
                    break;
                }

                switch (term.toLowerCase()) {
                    case "a1": {
                        selectTravel1YearTerm();
                    }
                    break;
                    case "a2": {
                        selectTravel2YearTerm();
                    }
                    break;
                    case "a3": {
                        selectTravel3YearTerm();
                    }
                    break;
                    case "a4": {
                        selectTravel4YearTerm();
                    }
                    break;
                    case "a5": {
                        selectTravel5YearTerm();
                    }
                    break;
                    case "s7": {
                        selectTravel7DaysTerm();
                    }
                    break;
                    case "s14": {
                        selectTravel14DaysTerm();
                    }
                    break;
                    case "s30": {
                        selectTravel30DaysTerm();
                    }
                    break;
                }

                switch (tripOrPlan.toLowerCase()) {
                    case "45": {
                        selectTravel45DaysTrip();
                    }
                    break;
                    case "90": {
                        selectTravel90DaysTrip();
                    }
                    break;
                    case "180": {
                        selectTravel180DaysTrip();
                    }
                    break;
                    case "365": {
                        selectTravel4YearTerm();
                    }
                    break;
                }

                if (security.toLowerCase() == 'm') {
                    selectTravelSecurity();
                }
            }
            break;
            case "tc": {
                selectTotalCareMembership();
                switch (tripOrPlan.toLowerCase()) {
                    case "u": {
                        selectUnlimitedPlan();
                    }
                    break;
                    case "p": {
                        selectPlatinumPlan();
                    }
                    break;
                    case "g": {
                        selectGoldPlan();
                    }
                    break;
                    case "s": {
                        selectSilverPlan();
                    }
                    break;
                }

                switch (type.toLowerCase()) {
                    case "i": {
                        selectTCIndividualType();
                    }
                    break;
                    case "f": {
                        selectTCFamilyType();
                    }
                    break;
                }

                switch (term.toLowerCase()) {
                    case "a1": {
                        selectTC1YearTerm();
                    }
                    break;
                    case "a2": {
                        selectTC2YearTerm();
                    }
                    break;
                    case "a3": {
                        selectTC3YearTerm();
                    }
                    break;
                    case "a4": {
                        selectTC4YearTerm();
                    }
                    break;
                    case "a5": {
                        selectTC5YearTerm();
                    }
                    break;
                }
            }
            break;
        }


    },

    selectTravelMembership: function () {
        element(by.css('[ng-click*="tours.planSelected(CONSTANTS.MEMBERSHIP_OPTIONS.MEMBERSHIP.TRAVEL)"]')).click();
    },

    selectTotalCareMembership: function () {
        element(by.css('[ng-click*="tours.planSelected(CONSTANTS.MEMBERSHIP_OPTIONS.MEMBERSHIP.TOTAL_CARE)"]')).click();
    },

    /***********************************************************************
     * Total Care Options
     **********************************************************************/

    selectUnlimitedPlan: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tc.planSelected(CONSTANTS.MEMBERSHIP_OPTIONS.PLAN.UNLIMITED)"]')).click();
    },

    selectPlatinumPlan: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tc.planSelected(CONSTANTS.MEMBERSHIP_OPTIONS.PLAN.PLATINIUM)"]')).click();
    },

    selectGoldPlan: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tc.planSelected(CONSTANTS.MEMBERSHIP_OPTIONS.PLAN.GOLD)"]')).click();
    },

    selectSilverPlan: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tc.planSelected(CONSTANTS.MEMBERSHIP_OPTIONS.PLAN.SILVER)"]')).click();
    },

    selectTCIndividualType: function () {
        Common.getFirstElement(by.xpath('//*[@id="tour2step2"]/div[2]/div/label')).click();
    },

    selectTCFamilyType: function () {
        Common.getFirstElement(by.xpath('//*[@id="tour2step2btn"]/div/label')).click();
    },

    selectTC1YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown2($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tc.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_1)"]')).click();
    },

    selectTC2YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown2($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tc.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_2)"]')).click();
    },

    selectTC3YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown2($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tc.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_3)"]')).click();
    },

    selectTC4YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown2($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tc.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_4)"]')).click();
    },

    selectTC5YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown2($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tc.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_5)"]')).click();
    },

    /***********************************************************************
     * Travel Options
     **********************************************************************/

    selectTravelIndividualType: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.typeSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TYPE.INDIVIDUAL)"]')).click();
    },

    selectTravelFamilyType: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.typeSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TYPE.FAMILY)"]')).click();
    },

    selectTravelStudentType: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.typeSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TYPE.STUDENT)"]')).click();
    },

    selectTravel1YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_1)"]')).click();
    },

    selectTravel2YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_2)"]')).click();
    },

    selectTravel3YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_3)"]')).click();
    },

    selectTravel4YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_4)"]')).click();
    },

    selectTravel5YearTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="toggleDropdown($event)"]')).click();
        browser.driver.sleep(1000);
        Common.getFirstElement(by.css('a[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.YEAR_5)"]')).click();
    },

    selectTravel7DaysTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.DAY_7)"]')).click();
    },

    selectTravel14DaysTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.DAY_14)"]')).click();
    },

    selectTravel30DaysTerm: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.termSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TERM.DAY_30)"]')).click();
    },

    selectTravel45DaysTrip: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.tripSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TRIPS.DAY_45)"]')).click();
    },

    selectTravel90DaysTrip: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.tripSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TRIPS.DAY_90)"]')).click();
    },

    selectTravel180DaysTrip: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.tripSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TRIPS.DAY_180)"]')).click();
    },

    selectTravel365DaysTrip: function () {
        Common.getFirstElement(by.css('label[ng-click*="tours.tr.tripSelected(CONSTANTS.MEMBERSHIP_OPTIONS.TRIPS.DAY_365)"]')).click();
    },

    selectTravelSecurity: function () {
        Common.getFirstElement(by.css('button[ng-click*="changeCoverage()"]')).click();
    },

    submit: function () {
        Common.getFirstElement(by.css('button[ng-click*="submit()"]')).click();
    }
};






