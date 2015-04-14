function ViewModel(){
    var that=this;
    that.principalAmount=ko.observable(0);
    that.rateOfInterest=ko.observable(0);
    that.fromDate=ko.observable('');
    that.toDate=ko.observable('');
    that.calculate = function (){
        this.totalAmount(that.principalAmount());
    }
}



var obj={
    principalAmount:ko.observable(0),
    rateOfInterest:ko.observable(0),
    fromDate:ko.observable(''),
    toDate:ko.observable(''),
    calculate:function (){
        this.totalAmount(that.principalAmount());
    }
};

ko.applyBindings(new ViewModel());