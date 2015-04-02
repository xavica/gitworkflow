function Customer(firstName,lastName,address,hobbies)
{
	this.firstName =firstName
	this.lastName = lastName;
	this.address = address;
	this.hobbies = hobbies;

}
function Hobby(hobbyName)
{
	this.hobbyName = hobbyName;
}

function Address(street,city)
{
	this.street = street;
	this.city = city;
}

function CustomerViewModel()
{

	this.customers = [ new Customer("john","scott",new Address("street1","hyd"),[new Hobby("chess"),new Hobby("cricket"),new Hobby("football")]),
					   new Customer("john","scott",new Address("street2","hyd"),[new Hobby("chess1"),new Hobby("cricket1")]) ]
}
var k = new CustomerViewModel();
ko.applyBindings(k);