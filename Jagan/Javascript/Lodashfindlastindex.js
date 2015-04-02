$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
    var a=[1,2,3,4,5,3,4,5,6,6,7,5,8,3,5,7,9];
    document.writeln(" Given Array is::" +a+"<br/>");
    console.log("The array is",a);
    var n=window.prompt("Enter value in array to search Index:");
      var i=parseInt(n);
         var Index=_.findLastIndex(a,function(i){
         if(i==n)
         return i;
         });
    document.writeln("The Element Index Starts from last at :" +Index+"<br/>");
    console.log("Index value::",Index);     
		var users = [
      { 'Devteam': 'SIVA','age':24 },
      {'Devteam':'JAGAN','age':21 },
      {'Devteam':'GAYATRI','age': 26 },
      { 'Designers':'Kiran','age':28 },
      { 'Designers':'DhanaLakshmi','age': 40 },
      {'ba':'SaiKrishna', 'age':21},
      {'ba':'AnuRadha','age':22}
      ];

    var x=_.findLastIndex(users, 'Devteam');
   var y=_.findLastIndex(users,'Designers');
   var z=_.findLastIndex(users,'ba');
    alert("Now ready is activated and Displayed");
   //  alert("Xavica developers Team Index is(As per the findlastIndex):" +x);
  //alert("Xavica Designers Team Index is(As per the findlastIndex):" +y);
  // alert("Xavica BA Team Index is(As per the findlastIndex):" +z);
  console.log("team \n",users);
   console.log(users.Devteam);
   console.log("Dev's Index from findLAstIndex",x);
   console.log("designers Index from findLastIndex",y);
   console.log("Ba's Index from findLastIndex",z);
    document.writeln("Xavica developers Team Index starts first from last at::" +x+"<br />");
  document.writeln("Xavica Designers Team Index starts first from last at::" +y+"<br />");
  document.writeln("Xavica Business Analyst Team Index starts first from last at::" +z);
	}
