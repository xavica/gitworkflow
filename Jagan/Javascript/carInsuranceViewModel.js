function CarInsuranceViewModel(){

	var that=this;
	that.zipCode=ko.observable();
	that.age=['select','18','19','20','21','22','23','24','25','26','27','28','....','65'];
	that.ageSelected=ko.observable('');
	that.currentSelection=['select','21st century','AAA Insurance','All state','commers Insurance co','formers',
	'Esurance','Geico','The Hartford','liberty Mutual','Metlife','National General (GMAC)','.....'];
	that.currentlyInsured=ko.observable("");
	that.homeOwner=ko.observable();
	that.maritalStatus=ko.observable();
	that.ackIns=ko.observable('');
	that.carInsuranceData=ko.observable();
	 that.viewData= function(){
     	that.ackIns(" Hi,Thank You..!.. your Data Is Here");
     	that.carInsuranceData("ZipCode Is " + that.zipCode() + ",Your Age :" + that.ageSelected() + 
     		", You Are Currently Insured For:" + that.currentlyInsured() +  
     		             ",You are :" + that.maritalStatus());

								 
     }

};
ko.applyBindings(new CarInsuranceViewModel());