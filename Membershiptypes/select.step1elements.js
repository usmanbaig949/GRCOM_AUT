var Common = require('./common.js');

exports.Step1 = {

    setEmail: function (emailPrefix) {
        Common.getFirstElement(by.model('signup.contact.email')).sendKeys(emailPrefix + Common.getRandomNum(1, 100000) + "@automation.com");
    },

    selectMembership: function (membership) {
        //membership = "TR-I-A1-45-M";
        var memDetail = membership.split("-");

        var membership = memDetail[0];
        var type = memDetail[1];       
        var term = memDetail[2];
        var tripOrPlan = memDetail[3]; //trip in case of travel, plan in case of totalcare
        var security = memDetail[4];

        switch (membership.toLowerCase()) {
            case "tr": {
                this.selectTravelMembership();

                switch (type.toLowerCase()) {
                    case "i": {
                        this.selectTravelIndividualType();
                    }
                        break;
                    case "f": {
                        this.selectTravelFamilyType();
                    }
                        break;
                    case "s": {
                        this.selectTravelStudentType();
                    }
                        break;
                    case "a": {
                    }
                        break;
                }

                switch (term.toLowerCase()) {
                    case "a1": {
                        this.selectTravel1YearTerm();
                    }
                        break;
                    case "a2": {
                        this.selectTravel2YearTerm();
                    }
                        break;
                    case "a3": {
                        this.selectTravel3YearTerm();
                    }
                        break;
                    case "a4": {
                        this.selectTravel4YearTerm();
                    }
                        break;
                    case "a5": {
                        this.selectTravel5YearTerm();
                    }
                        break;
                    case "s7": {
                        this.selectTravel7DaysTerm();
                    }
                        break;
                    case "s14": {
                        this.selectTravel14DaysTerm();
                    }
                        break;
                    case "s30": {
                        this.selectTravel30DaysTerm();
                    }
                        break;
                }

                switch (tripOrPlan.toLowerCase()) {
                    case "45": {
                        this.selectTravel45DaysTrip();
                    }
                        break;
                    case "90": {
                        this.selectTravel90DaysTrip();
                    }
                        break;
                    case "180": {
                        this.selectTravel180DaysTrip();
                    }
                        break;
                    case "365": {
                        this.selectTravel365DaysTrip();
                    }
                        break;
                }

                if (security.toLowerCase() == 's') {
                    this.selectTravelSecurity();
                }
            }
                break;
            case "tc": {
                this.selectTotalCareMembership();
                switch (tripOrPlan.toLowerCase()) {
                    case "u": {
                        this.selectUnlimitedPlan();
                    }
                        break;
                    case "p": {
                        this.selectPlatinumPlan();
                    }
                        break;
                    case "g": {
                        this.selectGoldPlan();
                    }
                        break;
                    case "s": {
                        this.selectSilverPlan();
                    }
                        break;
                }

                switch (type.toLowerCase()) {
                    case "i": {
                        this.selectTCIndividualType();
                    }
                        break;
                    case "f": {
                        this.selectTCFamilyType();
                    }
                        break;
                }

                switch (term.toLowerCase()) {
                    case "a1": {
                        this.selectTC1YearTerm();
                    }
                        break;
                    case "a2": {
                        this.selectTC2YearTerm();
                    }
                        break;
                    case "a3": {
                        this.selectTC3YearTerm();
                    }
                        break;
                    case "a4": {
                        this.selectTC4YearTerm();
                    }
                        break;
                    case "a5": {
                        this.selectTC5YearTerm();
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

    selectpaymonthly: function () {
        var paymonthlybox = Common.getFirstElement(by.css("label[for='pay-monthly']"));
        paymonthlybox.click();
    },

    unselectautorenew: function () {
        var autorenewbox = Common.getFirstElement(by.css("label[for='auto-renew-travel']"));
        autorenewbox.click();
    },

};






