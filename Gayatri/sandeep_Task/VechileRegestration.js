function VehicleRegistrationViewModel() {

    var that = this;
    that.vehicleType = ['Select.....', 'Twowheelers', 'Threewheelers', 'Fourwheelers', 'FourMorewheelers'];
    that.vehicleTypeSelected = ko.observable('');
    that.region = ['Select.....', 'Westeren', 'Southern', 'Eastern', 'Northen', 'UnionTerritory'];
    that.regionSelected = ko.observable('');
    that.transfer = ['Select.....', 'to A Different State', 'to a state in different region', 'from South to north', 'from north to south'];
    that.transferSelected = ko.observable('');
    that.manufactureDate = ko.observable('');
    that.registerFee = ko.observable();
    that.transferFee = ko.observable();
    that.govtFee = ko.observable();
    that.govtDetails = ko.observable('');
    that.details = ko.observable('');
    that.transDetails = ko.observable('');
    that.selectedArray = { 'Twowheelers': 200, 'Threewheelers': 300, 'Fourwheelers': 400, 'FourMorewheelers': 1000 };
    that.selectedRegion = { 'Westeren': 25, 'Southern': 45, 'Eastern': 0, 'Northen': 25, 'UnionTerritory': 10 }
    that.transferType = { 'to A Different State': 40, 'to a state in different region': 30, 'from South to north': 100, 'from north to south': 100 }
    that.govtVehicle = ko.observable('');
    that.fancyNumber = ko.observable();

    // ---------------------new registration-----------------------
    that.newRegisterDetails = function () {
        console.log(that.vehicleTypeSelected());
        if (that.vehicleTypeSelected() === 'Select.....' || that.regionSelected() === 'Select.....') {
            alert("select atleast any categories of below two");
        }
        else if ((that.vehicleTypeSelected() === 'Twowheelers' || 'Threewheelers' || 'Fourwheelers' || 'FourMorewheelers') && that.regionSelected() === 'Westeren') {
            console.log(that.selectedArray[that.vehicleTypeSelected()]);
            that.registerFee = that.selectedArray[that.vehicleTypeSelected()] - (that.selectedArray[that.vehicleTypeSelected()] * that.selectedRegion[that.regionSelected()] / 100);
        }
        else if ((that.vehicleTypeSelected() === 'Twowheelers' || 'Threewheelers' || 'Fourwheelers' || 'FourMorewheelers') && (that.regionSelected() === 'Southern' || 'Eastern' || 'Northen' || 'UnionTerritory')) {
            console.log(that.selectedRegion[that.regionSelected()]);
            that.registerFee = that.selectedArray[that.vehicleTypeSelected()] + (that.selectedArray[that.vehicleTypeSelected()] * that.selectedRegion[that.regionSelected()] / 100);
        }
           that.registerFee = 300 - (1000 * 25 / 100);
        that.details("Your vehicle is " + that.vehicleTypeSelected() + " type, your region is " + that.regionSelected() + " and your registration fee is:: " + that.registerFee);
    };
//-------------------------------------------------------------------------------------------------------
    
    that.transferRegisterDetails = function () {

        else if (that.transferSelected() === 'from South to north' || 'from north to south') {
            if ((that.vehicleTypeSelected() === 'Twowheelers' || 'Threewheelers' || 'Fourwheelers' || 'FourMorewheelers')) {

                console.log(that.selectedArray[that.vehicleTypeSelected()]);
                that.transferFee = (that.selectedArray[that.vehicleTypeSelected()] / 2) * 2;
            }

                //if ((that.vehicleTypeSelected() === 'Twowheelers' || 'Threewheelers' || 'Fourwheelers' || 'FourMorewheelers')) {
                //   console.log(that.selectedArray[that.vehicleTypeSelected()]);

            else {
                that.transferFee = (that.selectedArray[that.vehicleTypeSelected()] / 2) - ((that.selectedArray[that.vehicleTypeSelected()] / 2) * that.transferType[that.transferSelected()] / 100);
            }
        }
        else {

        }
        that.transDetails("Your vehicle is " + that.vehicleTypeSelected() + " type, your type of Registration is  " + that.transferSelected() + " and your Transfer registration fee is:: " + that.transferFee);
    };
};
ko.applyBindings(new VehicleRegistrationViewModel());



that.govtVehicleType = function () {
        console.log(that.govtVehicle());
        if (that.govtVehicle() === 'Yes') {
            that.govtDetails("Your Vehicle is Govt vehicle,  So No charges Will Apply.. Thank you");
        }
        else {
            that.govtDetails("Your Vehicle is Not A Govt. vehicle,  So Continue With Below to Know Your registration charges... Thank you");
        }
    };

    if (that.vehicleTypeSelected() === 'Select.....' || that.transferSelected() === 'Select.....') {
            alert("select atleast any categories of below two");
        }