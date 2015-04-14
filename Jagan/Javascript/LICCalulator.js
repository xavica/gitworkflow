function LicCalculatorViewModel(){
 var that=this;
  that.name=ko.observable();
  that.plan=['Select ','Jeevan Sahgun 234','New Endoment Plan 456','New Jeevan Anand 867',
                    'Jeevan Rakshak 998', 'Bima Bachat 564'];
    that.selectedPlan=ko.observable();
	that.age=ko.observable();
	that.sumAssured=ko.observable();
	that.maritalStatus=ko.observable();
	that.selectedData=ko.observable();
     that.viewData= function(){
     	that.selectedData("Hi Congratulations Mr./Mrs." + that.name() +  
								", Your Selected Plan is:" +that.selectedPlan()+
								", Your Age is:" +that.age()+", Your SumAssured value is:"
								 + that.sumAssured() +" , And You are: " +that.maritalStatus()
								  );
     }
};
ko.applyBindings(new LicCalculatorViewModel());