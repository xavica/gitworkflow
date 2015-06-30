"use strict";
function HotelBillingSystemViewModel() {

    var that = this;
    that.categories = ['Select.....', 'Bachelor Pad', 'Double Bed Room', 'Triple Bed Room', 'Suite', 'Villa'];
    that.categorySelected = ko.observable('');
    that.entryDate = ko.observable('');
    that.exitDate = ko.observable('');
    that.selectionArray = { 'Bachelor Pad': '245', 'Double Bed Room': '560', 'Triple Bed Room': '800', 'Suite': '1300', 'Villa': '3000' };
    that.entryDetails = ko.observable('');
    that.totDetails = ko.observable('');
    that.billform = ko.observable('');
    that.daysStay = ko.observable();
    that.alert = function () {
        alert("You are Successfully Registred");
    }
    that.ackBoarding = function () {

        if (that.categorySelected() === 'Select.....' || that.entryDate() === 'dd/mm/yyyy') {
            alert("please Fill the below categories");
        }
        else {

        }
        that.entryDetails("You are Selecting '" + that.categorySelected() + "' So You Have to pay '$"
            + that.selectionArray[that.categorySelected()] + "' If you agree to pay then Continue Transaction");
    };
    that.totalDetails = function () {
        that.totDetails("Thanks For Your Hotel Room Registration.Your Details are \n you are Selecting '"
            + that.categorySelected() + "' Date Of Registration is: '" + that.entryDate() + "' So You paid '$"
            + that.selectionArray[that.categorySelected()] + "' take a print of your Details .... Thank You!!");
    };
    that.billDetails = function () {
        var date1 = that.entryDate().split('-');
        var date2 = that.exitDate().split('-');

        // Now we convert the array to a Date object, which has several helpful methods
        date1 = new Date(date1[0], date1[1], date1[2]);
        date2 = new Date(date2[0], date2[1], date2[2]);

        // We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
        var date1_unixtime = parseInt(date1.getTime() / 1000);
        var date2_unixtime = parseInt(date2.getTime() / 1000);

        // This is the calculated difference in seconds
        var timeDifference = date2_unixtime - date1_unixtime;

        // in Hours
        var timeDifferenceInHours = timeDifference / 60 / 60;

        // and finaly, in days :)
        var times = timeDifferenceInHours / 24;
        that.daysStay(times);
        console.log(that.daysStay());
        that.billform("you stayed " + that.daysStay() + "days your payment is : $" + (that.daysStay() * that.selectionArray[that.categorySelected()]) +
            " Coz you selected '" + that.categorySelected() + "' type Seeterms And conditions Once.");
    };
};
ko.applyBindings(new HotelBillingSystemViewModel());