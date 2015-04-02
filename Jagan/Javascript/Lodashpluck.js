$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		var users = [
      { 'Devteam': 'SIVA','age':24 },
      {'Devteam':'JAGAN','age':21 },
      {'Devteam':'GAYATRI','age': 26 },
      { 'Designers':'Kiran','age':28 },
      { 'Designers':'DhanaLakshmi','age': 40 },
      {'ba':'SaiKrishna', 'age':21},
      {'ba':'AnuRadha','age':22}
      ];

    var x=_.pluck(users, 'Devteam');
    var y=_.pluck(users,'Designers');
    var z=_.pluck(users,'ba');
     alert("Now ready is activated and Displayed");
     alert("Xavica developers Team is:" +x);
     alert("Xavica Designers Team is:" +y);
     alert("Xavica BA Team is:" +z);
     document.writeln("Xavica developers Team is:" +x+"<br />");
     document.writeln("Xavica Designers Team is:" +y+"<br />");
     document.writeln("Xavica Business Analyst Team is:" +z);
	}
