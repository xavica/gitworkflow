function LicViewModel()
{
	var that = this;
	that.typeOfPlan = ['Select ','New Endoment Plan','New Jeevan Anand','Jeevan Rakshak', 'Bima Bachat'];
	that.name = ko.observable("");
	that.age = ko.observable(0);
	that.selectedmaritalStatus = ko.observable('');
	that.selectedTypeOfPlan = ko.observable('');
	that.selectedData = ko.observable('');
	that.viewData=function(){
			
				that.selectedData("Hi Congratulations :" +that.name()+ 
								", Your Selection and is:" +that.selectedTypeOfPlan()+
								", Your Age is:" +that.age()+", And You are: " +that.selectedmaritalStatus()
								  );
			
			
	};
}
ko.applyBindings(new LicViewModel());