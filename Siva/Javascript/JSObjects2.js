var	data="";
	var dataBuisiness=[{name:"SaiKrishna", age:22,qualification:"B.Tech"},

						{name:"Anuradha", age:23,qualification:"MBA"}];

	var dataDeveloper=[{name:"Gayatri", age:31, qualification:"MTech"},

						{name:"Jagan", age:21, qualification:"BTech"},

						{name:"Siva", age:24, qualification:"MTech"}];

	var dataDesigner=[{name:"Dhana", age:31, qualification:"BCom"},

						{name:"Kiran", age:31, qualification:"MBA"}];
		
	for( var db1 in dataBuisiness)
		data = "<ul>"+dataBuisiness[0].name+" age " +
				 dataBuisiness[0].age+ " and his Qualification is "+
				  dataBuisiness[0].qualification+"</ul><br/><ul>" +
				   dataBuisiness[1].name+" age " + dataBuisiness[1].age +
				    "and her qualification is " + dataBuisiness[1].qualification +"</ul>";
	document.getElementById("ba1").innerHTML=data;
	data="";

	for( db1 in dataDeveloper)
	
		data = "<ul>"+dataDeveloper[0].name+" age " + dataDeveloper[0].age+
				 " and his Qualification is "+dataDeveloper[0].qualification+
				 "</ul><br/><ul>" + dataDeveloper[1].name+" age " + dataDeveloper[1].age +
				 "and her qualification is " 
				 + dataDeveloper[1].qualification +"</ul><br/><ul>"+dataDeveloper[2].name+
				 " age " + dataDeveloper[2].age+ " and his Qualification is "+dataDeveloper[2].qualification+"</ul> ";
	document.getElementById("dev1").innerHTML=data;
	data="";

	for(db1 in dataDesigner)
	
		data = "<ul>"+dataDesigner[0].name+" age " + dataDesigner[0].age+
				" and his Qualification is "+dataDesigner[0].qualification+
				"</ul><br/><ul>" + dataDesigner[1].name+" age " + dataDesigner[1].age +
				"and her qualification is" + dataDesigner[1].qualification +"</ul>";
	document.getElementById("des1").innerHTML=data;
	data="";