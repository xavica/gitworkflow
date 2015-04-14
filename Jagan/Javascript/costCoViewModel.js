function costCoViewModel(){
   var that=this;
   that.emailBox=ko.observable();
   that.passwordBox=ko.observable('');
   that.confirmBox=ko.observable();
   that.costcoMemberShipNumber=ko.observable();
   that.ackCostCo=ko.observable();
   that.memberData=ko.observable();
   that.x=ko.computed(function(){
   	return that.passwordBox().length;
   })	
    that.stars=ko.computed(function()
   	{   
   		var s='';
   	   	for(var i=1;i<=that.x();i++)
   	   	{
   	       s=s+'*';
   	      }
   	    return s;
   });
    
   that.viewmemberData=function(){
   	 if(that.passwordBox() === that.confirmBox()){
            that.ackCostCo("Hi Thank You For Giving Your information to CostCo ..Your Data Is Below");
            that.memberData("Your Email:" + that.emailBox() + " ,your password is:" + that.stars() +
            	", Your costCo Member Ship Number is:" + that.costcoMemberShipNumber());
        }

    else{
    	alert("your passwords Doesn't match\n **** Please Enter again Correctly****");
        }
    }

   };
ko.applyBindings(new costCoViewModel());
