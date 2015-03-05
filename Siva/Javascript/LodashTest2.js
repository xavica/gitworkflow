 
	alert("alert srting is called ");

	var x= _.compact([0, 1,'Hai',2, '.hello' ,false, 3, '.Namastey', 4, '.Sabsedaar', 5,'.Aadabarsey']);
		document.writeln("false values removed and the array is :" +x);

	var y=_.chunk(['a', 'b', 'c', 'd'], 3);
		document.writeln("array values are:" +y);

	var z=_.difference(['Siva', 'Jagan','Gayatri'],['Gayatri','Siva','Ravi']);
		document.writeln("<br/>Called difference function :" +z);

	var a=_.drop(['Siva', 'Jagan', 'Gayatri'],3);
		document.writeln("<br/>Called drop function :" +a);

var b=_.drop(['Siva', 'Jagan', 'Gayatri'],2);
		document.writeln("<br/>Called drop function :" +b);
var c=_.drop(['Siva', 'Jagan', 'Gayatri']);
		document.writeln("<br/>Called drop function :" +c);
