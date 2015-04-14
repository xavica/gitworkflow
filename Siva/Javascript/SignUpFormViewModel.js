function SignUpViewModel()
{
	var that = this;
	that.name = ko.observable('');
	that.age = ko.observable();
	that.gender = ko.observable('');
	that.mailId = ko.observable('');
	that.nativity = ko.observable('');
	that.yourData = ko.observable('');
	that.submit = function(){

		that.yourData('Hi congratulations '+that.name()+
						'Your Details are 1.Age: '+that.age()+
						' 2.gender: ' +that.gender()+
						' 3.MailID: ' +that.mailId()+
						' 4.address: ' +that.nativity());

	}
}
ko.applyBindings(new SignUpViewModel());
