"use strict";
function VehicleRegistrationViewModel() {

    var that = this;
    that.vehicleType = ['Select.....', 'Twowheelers', 'Threewheelers', 'Fourwheelers', 'MorethanFourwheelers'];
    that.vehicleTypeSelected = ko.observable('');
    that.region = ['Select.....', 'Westeren', 'Southern', 'Eastern', 'Northen', 'UnionTerritory'];
    that.regionSelected = ko.observable('');
    that.transfer = ['Select.....', 'to A Different State', 'to a state in different region', 'within the State(local)'];
    that.transferSelected = ko.observable('');
    that.manufactureYear = ko.observable('');
    that.statesTransfer = ['Select...', 'Andhra Pradesh', 'Jammu & Kashmir', 'Himachal Pradesh', 'Uttar Pradesh', 'Haryana',
        'Punjab', 'Uttaranchal', 'Kerala', 'Karnataka', 'Tamil Nadu', 'Assam', 'Manipur', 'Meghalaya', 'Sikkim', 'Orissa',
        'West', 'Bengal', 'Mizoram ', 'Tripura', 'Goa', 'Gujarat', 'Rajasthan', 'Maharshtra', 'Madhya Pradesh', 'Chattisgarh',
        'Andaman & Nicobar', 'Chandigarh', 'Delhi / New Delhi', 'Lakshadweep', 'Pondicherry', ' Dadar & Nagar Haveli', 'Daman & Diu']
    that.transferFrom = ko.observable('');
    that.transferTo = ko.observable('');
    that.registerFee = '';
    that.transferFee = '';
    that.details = ko.observable('');
    that.transDetails = ko.observable('');
    that.selectedArray = { 'Twowheelers': 200, 'Threewheelers': 300, 'Fourwheelers': 400, 'MorethanFourwheelers': 1000 };
    that.selectedRegion = { 'Westeren': 25, 'Southern': 45, 'Eastern': 0, 'Northen': 25, 'UnionTerritory': 10 }
    that.transferType = { 'to A Different State': 40, 'to a state in different region': 30 }
    console.log(that.selectedArray['Twowheelers']);
    that.govtVehicle = ko.observable('');
    that.fancyNumber = ko.observable();
    that.north = ['Jammu & Kashmir', 'Himachal Pradesh', 'Uttar Pradesh', 'Haryana', 'Punjab', 'Uttaranchal'];
    that.newRegisterDetails = function () {
        console.log(that.vehicleTypeSelected());
        if (that.vehicleTypeSelected() === 'Select.....' || that.regionSelected() === 'Select.....') {
            alert("select atleast any categories of below two");
        }
        else if (that.regionSelected() === 'Westeren') {
            console.log(that.selectedArray[that.vehicleTypeSelected()]);
            that.registerFee = that.selectedArray[that.vehicleTypeSelected()] - (that.selectedArray[that.vehicleTypeSelected()] * that.selectedRegion[that.regionSelected()] / 100);
        }
        else {
            console.log(that.selectedRegion[that.regionSelected()]);
            that.registerFee = that.selectedArray[that.vehicleTypeSelected()] + (that.selectedArray[that.vehicleTypeSelected()] * that.selectedRegion[that.regionSelected()] / 100);
        }
        //if (that.vehicleTypeSelected() === '3wheelers' && that.regionSelected() === 'Westeren')
        //    that.registerFee = 300 - (300 * 25 / 100);
        //if (that.vehicleTypeSelected() === '4wheelers' && that.regionSelected() === 'Westeren')
        //    that.registerFee = 300 - (400 * 25 / 100);
        //if (that.vehicleTypeSelected() === '4+wheelers' && that.regionSelected() === 'Westeren')
        //    that.registerFee = 300 - (1000 * 25 / 100);
        that.details("Your vehicle is " + that.vehicleTypeSelected() + " type, your region is " + that.regionSelected() + " and your registration fee is:: " + that.registerFee);
    };
    //that.govtVehicleType = function () {
    //    console.log(that.govtVehicle());
    //    if (that.govtVehicle() === 'Yes') {
    //        that.govtDetails("Your Vehicle is Govt vehicle,  So No charges Will Apply.. Thank you");
    //    }
    //    else
    //        that.govtDetails("Your Vehicle is Not A Govt. vehicle,  So Continue With Below to Know Your registration charges... Thank you");
    //};
    that.transferRegisterDetails = function () {

        _.forEach(that.north, function (region) {
            console.log(region);
            if (that.transferFrom() === region) {
                that.transferSelected() = 'within the State(local)';
                console.log(that.transferSelected());
            }
            //else {
            //    that.transferSelected() = 'to A Different State';
            //}
        });
        console.log(that.govtVehicle());
        if (that.manufactureYear().length === 0) {
            alert("please fill Year Of manufacture");
        }
        else {
            if (that.govtVehicle() === 'Yes') {
                that.transferFee = "free B'coz This is A Govt. vehicle";
            } else {
                if (that.vehicleTypeSelected() === 'Select.....' || that.transferSelected() === 'Select.....') {
                    alert("select atleast any categories of below two");
                    that.tranferFee = '@  #  $  % You are Not Entering Any Details'
                }
                else if (that.transferSelected() === 'within the State(local)') {
                    console.log(that.vehicleTypeSelected());
                    console.log(that.transferSelected());
                    console.log(that.selectedArray[that.vehicleTypeSelected()]);
                    that.transferFee = ((that.selectedArray[that.vehicleTypeSelected()] / 2));
                    if (that.manufactureYear() < 2000 && that.fancyNumber() === 'Yes') {
                        that.transferFee = that.transferFee * 10 * 3;
                    }
                    else if (that.manufactureYear() < 2000) {
                        that.transferFee = that.transferFee * 3;
                    }
                    else if (that.fancyNumber() === 'Yes') {
                        that.transferFee = that.transferFee * 10;
                    }
                    else {
                        that.transferFee = that.transferFee;
                    }
                }
                else if (that.transferSelected() === 'to A Different State' || that.transferSelected() === 'to a state in different region') {
                    that.transferFee = (that.selectedArray[that.vehicleTypeSelected()]) - ((that.selectedArray[that.vehicleTypeSelected()]) * that.transferType[that.transferSelected()] / 100);
                    if (that.manufactureYear() < 2000 && that.fancyNumber() === 'Yes') {
                        that.transferFee = that.transferFee * 3 * 10;
                    }
                    else if (that.manufactureYear() < 2000) {
                        that.transferFee = that.transferFee * 3;
                    }
                    else if (that.fancyNumber() === 'Yes') {
                        that.transferFee = that.transferFee * 10;
                    }
                    else {
                        that.transferFee = that.transferFee;
                    }
                }
                else {
                    alert("please fill out all categories");
                }
            }
        }
        that.transDetails("Your vehicle is " + that.vehicleTypeSelected() + " type, your type of Registration is  " + that.transferSelected() + " and your Transfer registration fee is:: " + that.transferFee);
    };
    $('#TranClick,#newClick').hide();

    $('#New').click(function () {
        $(' #TranClick ').hide();
        $('#newClick').show();
        $('#newselect').show();
        $('.butt').hide();
        $('.but').show();
    });

    $('#Transfer').click(function () {
        $('#newClick').show();
        $('#TranClick').show();
        $('#newselect').hide();
        $('.but').hide();
        $('.butt').show();
        //$('#TranClick').removeAttr('disabled');
    });
};
ko.applyBindings(new VehicleRegistrationViewModel());