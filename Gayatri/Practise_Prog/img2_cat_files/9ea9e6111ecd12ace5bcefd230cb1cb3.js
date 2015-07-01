
//Job Opening widget
$(function() {
    $(".job-opening-tab").on('click',showOpeningJobs);
    $(".hiring-now-event").on('click',showJobDetails);
    $(".overlay .close").on('click', function() {
        $(this).parents(".overlay").hide();
    });
});
$(".tabs a,.hiring-now-event").live("click",function(e){
    e.preventDefault();
})
    //Job Opening widget
function showOpeningJobs()
{        
    requestedJobTabID    =   $(this).attr('id');                        //get requested tab id
    requestedHiddenJobListID   =   ".job-opening #"+requestedJobTabID;  //get requested content hidden div id
    $(".job-opening-tab").removeClass('active');                          //hiding current job opening
    $(".job-opening-list-div").hide();
    $(this).addClass('active');                                         //ading active class to requested id
    $(requestedHiddenJobListID).show();                                 //showing requested job opening list
    $('.scroll-pane').jScrollPane();    
}

function showJobDetails()
{
    
    jobID  =   $(this).find(".job-id").val();
    $(this).parents(".hiring-list").find(".overlay-content").remove();  //removing previous request content 
    $(this).parents(".hiring-list").find(".error").hide().html("");
    $(this).parents(".hiring-list").find(".overlay").show();            //show overlay of detail section
    $(this).parents(".hiring-list").find(".ajax-loading").show();       //show ajax loading

    contentSpanObj  =    $(this).parents(".hiring-list").find('.overlay-content-structure');
    getAndShowJobDetails(   contentSpanObj  ,   jobID   );

}

function getAndShowJobDetails(  contentSpanObj  ,   jobID   )
{
    $.getJSON( "/jobs-widget-AJAX", { strEventID: 1, strJobID: jobID  } )
        .done(function (data){
              if(data == null  ||  data.status  == "0" )
              {
                  //data not found
                  contentSpanObj.parent().find(".ajax-loading").hide();
                  contentSpanObj.parent().find(".error").append("Job details not found").show();
                  
              }else
              {
                contentObj    =  contentSpanObj.clone();
                contentObj.find("p:nth-child(1)").append(data.companyName);       //adding company name
                contentObj.find("p:nth-child(2)").append(data.jobprofileName);    //adding job profile name
                contentObj.find("p:nth-child(3)").append(data.salary);         //adding salary
                contentObj.find("p:nth-child(4)").append(data.cityName);          //adding location
                contentObj.find("p:nth-child(5)").prepend(data.description);       //adding description
                contentObj.find("#more").attr("href",data.descLink);       //adding full description link
                contentObj.removeClass("overlay-content-structure hidden").addClass("overlay-content");
                contentSpanObj.parent().find(".ajax-loading").hide();
                contentSpanObj.parent().append(contentObj);
              }
        })
        .fail(function( error ){
                //ajax request failed
            contentSpanObj.parent().find(".ajax-loading").hide();
            contentSpanObj.parent().find(".error").append("Unable to fetch data, Please try after some time").show();
        });

}

;
var isMeetMyFilterEnabled   =   0;

var meetMyFriendCollegeID   =   0;
var meetMyFriendDegreeID    =   0;
var meetMyFriendBranchID    =   0;
var meetMyFriendPassingYear =   0;

var meetMyFriendXHR = null;

$(function() {
		  $("#homepage-video-title").click(function(){
								$("#rahul-video").slideUp( );
								$("#homepage-video").slideDown( );
							});
							$("#rahul-video-title").click(function(){
								$("#rahul-video").slideDown();
								$("#homepage-video").slideUp( );
							});
    
    $(".students-list #friendDegreeFilter").on('change', showBranchList);
    $(".students-list #friendBranchFilter,.students-list #friendDegreeFilter,.students-list #passingYearFilter").on('change',getMeetMyFriendWidgetData );
    $(".overlay .close").on('click', function() {
        $(this).parents(".overlay").hide();
    });
    $(".company-list-message").live("click",getCadidateIDArray);
        $("#friendCollege").autocomplete(
        {
            search: function () {},
            source: function (request, response)
            {
                $.getJSON("misc-widget-AJAX", {strEventID: 4,strCollegeKeyword: request.term})
                    .done(function(data) {
                        if (data == null || data[0].status == 0)
                        {
                            //some error have occured
                        } else
                        {
                            response(data[1]);
                        }
                    })
                    .fail(function(error) {
                        //ajax request failed
                    });
                },
            minLength: 2,
            select: function (event, ui)
            {
                var collegeID = ui.item ? ui.item.id : 0;
                if (collegeID > 0)
                {
                    setFriendCollegeID( collegeID );
                    
                    if(isMeetMyFilterEnabled == 0)
                    {
                        isMeetMyFilterEnabled = 1;
                        enableMeetMyFriendFilters();
                    }
                    getMeetMyFriendWidgetData();
                }
            }
        });
        $(".company-list-message").mouseover(function(){
           $(".company-list-message .right-tip").addClass("right-tip-hover");
});
        $(".company-list-message").mouseout(function(){
           $(".company-list-message .right-tip").removeClass("right-tip-hover");
        });
});


function showDegreeList()
{
    var sel =  $('.students-list #friendDegreeFilter');
    $.getJSON("misc-widget-AJAX", {strEventID: 1})
        .done(function(data) {
            if (data == null || data[0].status == 0)
            {
                //some error have occured
            } else
            {
                $(sel).find('.degreeElements').remove();
                $(data[1]).each(function() {
                    sel.append($("<option>").addClass('degreeElements').attr('value',this.degreeID).text(this.degreeName));
                });
                $(sel).next(".newListSelected").remove();
                $(sel).sSelect();
            }
        })
        .fail(function(error) {
            //ajax request failed
        });
}
function showBranchList()
{
        var degFilterSel    =  $('.students-list #friendDegreeFilter');
        var branchFiltersel =  $('.students-list #friendBranchFilter');

        var degreeID     =  $(degFilterSel).val();   
        degreeID         =  parseInt(degreeID);  
        
        if( typeof(degreeID) != "undefined" && degreeID  > 0   )
        {
            $.getJSON("misc-widget-AJAX", {'strEventID': 2,'strDegreeID' : degreeID})
            .done(function(data) {
                if (data == null || data[0].status == 0)
                {
                    //some error have occured
                } else
                {
                    $(branchFiltersel).find('.branchElements').remove();
                    $(data[1]).each(function() {
                        branchFiltersel.append($("<option>").addClass('branchElements').attr('value',this.subjectID).text(this.subjectName));
                    });
                    $(branchFiltersel).next(".newListSelected").remove();
                    $(branchFiltersel).sSelect();
                }
            })
            .fail(function(error) {
                //ajax request failed
            });
        }
}

function showPassingYearList()
{
    var sel =  $('.students-list #passingYearFilter');
    $.getJSON("misc-widget-AJAX", {strEventID: 3})
        .done(function(data) {
            if (data == null || data[0].status == 0)
            {
                //some error have occured
            } else
            {
                $(sel).find('.passingYearElements').remove();
                passingStartYear    =   data[1].startYear;
                passingEndYear      =   data[1].endYear;
                
                for ( var year = passingStartYear; year > passingEndYear; year-- ) {
                    sel.append($("<option>").addClass('passingYearElements').attr('value',year).text(year));
                }
                $(sel).next(".newListSelected").remove();
                $(sel).sSelect();
            }
        })
        .fail(function(error) {
            //ajax request failed
        });
}
function setFriendCollegeID(pCollegeID)
{
    $('#friendCollegeID').val(  pCollegeID  );
}
function getFriendCollegeID()
{
    return $('#friendCollegeID').val( );
}

function enableMeetMyFriendFilters()
{
    $('.students-list select').removeAttr('disabled');
    $('.students-list .initialMessage').hide(); 
    
    //showDegreeList();
    //showPassingYearList();
}
function getMeetMyFriendWidgetData()
{
   meetMyFriendDegreeID   = $('.students-list #friendDegreeFilter').val();
   meetMyFriendBranchID   = $('.students-list #friendBranchFilter').val();
   meetMyFriendPassingYear =  $('.students-list #passingYearFilter').val();
   meetMyFriendCollegeID    =   $('.students-list #friendCollegeID').val();
   
   loadingDiv  =   $('.students-list #messageOverlay');
   $(loadingDiv).show();
   similarCompanyDiv  =   $('.students-list .similar-company-overlay');
   $(similarCompanyDiv).hide();
   $(loadingDiv).find('.error').hide();
   $(loadingDiv).find('.ajax-loading').show();
      if(meetMyFriendXHR && meetMyFriendXHR.readyState != 4){
            meetMyFriendXHR.abort();
        }
        meetMyFriendXHR =  $.getJSON("misc-widget-AJAX", {strEventID: 5 , strCollegeID: meetMyFriendCollegeID , strDegreeID: meetMyFriendDegreeID, strBranchID: meetMyFriendBranchID, strPassingYear: meetMyFriendPassingYear })
                .done(function(data) {

                    $(loadingDiv).find('.ajax-loading').hide();

                    meetMyFriendsContent = $(".meet-my-friends-content");
                    meetMyFriendsContent.empty();
            
                    if (data == null || data[0].status == 0)
                    {
                        $(loadingDiv).find('.error').text('No friend found').show();
                        //some error have occured
                    } else
                    {
                        $(loadingDiv).hide();


                        $(data[1]).each(function(index) {
                            contentObj    =  $(".meet-my-friends-content-structure").clone(false);
                            contentObj.find("span:nth-child(1)").append(this.NAME);
                            contentObj.find("span:nth-child(2)").attr('title',this.collegeTitle).append(this.collegeName);
                            contentObj.find("span:nth-child(3)").append(this.degreeNameBranchName);
                            contentObj.find("input[id='candidateID']").val(this.candidateID);
                            rowClass    =  (index%2) ? "odd" : "even"; 
                            contentObj.removeClass("meet-my-friends-content-structure hidden").addClass(rowClass);
                            meetMyFriendsContent.append(contentObj);
                        });
                        $('.scroll-pane').jScrollPane();
                    }
                })
                .fail(function(error) {
                    //ajax request failed
                });
}
function getCadidateIDArray()
{
    candidateList   = new Array();
    candidateArrayObj   =   $('.students-list input[type=hidden][name=candidateIDList]');
    $(candidateArrayObj).each(function(index) {
        candidateList[index]    =   $(this).val();
    });

    similarCompanyDiv  =   $('.students-list .similar-company-overlay');
    $(similarCompanyDiv).find('.logos').hide();
    $(similarCompanyDiv).show();
    $(similarCompanyDiv).find('.logos-loading').show();
    $.getJSON("misc-widget-AJAX", {strEventID: 7,strCandidateIDArray: candidateList})
        .done(function(data) {
            if (data == null || data[0].status == 0)
            {
                //some error have occured
            } else
            {
                $(similarCompanyDiv).find('.logos-loading').hide();
                similarCompanyContent = $(".students-list .logos");
                similarCompanyContent.empty();

                $(data[1]).each(function(index) {
                    
                    newRowClass =   "";
                    
                    if(index % 3 == 0)
                    {
                        newRowClass   =   "newCompanyRow";
                    }
                    contentObj    =  $(".students-list .client-logo-structure").clone(false);
                    if(this.company_logo == 0)
                    {
                        contentObj.html(this.companyName).css('padding',"37px 0px").addClass(newRowClass);
                    }
                    else
                    {
                        contentObj.find("img:nth-child(1)").attr('src',this.company_logo).attr('alt',this.companyName).addClass(newRowClass);;
                    }
                    contentObj.removeClass("client-logo-structure hidden");
                    similarCompanyContent.append(contentObj);
                });
                $(similarCompanyDiv).find('.logos').show( "slide", { direction: "left" }, 700 );
            }
        })
        .fail(function(error) {
            //ajax request failed
        });
};
var testCenterLocationType =   0;
var testCenterLocationID   =   0;
var testCenterErrorMsg    = "";
//test center widget 
$(function() {
    $("#requestNewCenter").on('click', function() {
        $(this).parents('.test-centers-list').find('.request-form-overlay').show();
        $(this).parents('.test-centers-list').find('.error').removeClass('error');
    });

    $(".overlay .close").on('click', function() {
        $(this).parents(".overlay").hide();
		$("#test-center-loading-div").hide();
    });
    $("#testCenterLocationFilter").on("change",function(){
        if( testCenterLocationID > 0 ||  testCenterLocationType > 0)
            {
        updateTestCenterList(   testCenterLocationType    ,   testCenterLocationID   );
            }
    });
    $("#newTestCenterRequestSubmit").on('click', submitNewCenterForm);
    
    $("#requesterTestDate").datepicker({ dateFormat: "d-MM-yy", minDate: 1 });
 
    $( ".header .locationList .links ul li a" ).click( function(e){
        
        locType         = $(this).data("loc_type");
        locID           = $(this).data("loc_id");
        selectedLocName = $(this).text();        
        
        updateTestCenterList( locType ,  locID  , selectedLocName);
    } );
   
    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        return $("<li>")
        .append($("<a>").text(item.label)
        .append($("<a class='customclass'>").text(item.by)))
        .appendTo(ul);
    };
$.widget("custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function (ul, items) {
        var that = this,currentCategory = "";
    
        $.each(items, function (index, item) {
            if (item.category == 1 && currentCategory != item.category) {
                ul.append("<li class='ui-autocomplete-category'> Cities </li>");
                currentCategory = item.category;
            }else if(item.category == 2 && currentCategory != item.category)
            {
                ul.append("<li class='ui-autocomplete-category'> States</li>");
                currentCategory = item.category;
            }
            that._renderItemData(ul, item);                
});
    }
});


    $("#testCenterLocationFilter,#campusLocationFilter").catcomplete({
        delay: 0,
        source: function (request, response) {
                $.ajax({
                        url: "misc-widget-AJAX",
                        dataType: "json",
                        data: {strEventID: 8,strLocationKeyword: request.term},
                        cache:false
                    })
                    .done(function(data) {
                        if (data == null || data[0].status == 0)
                        {
                            //some error have occured
                        } else
                        {
                            response(data[1]);
                        }
                    })
                    .fail(function(error) {
                        //ajax request failed
                    });

        }
    });
    
     $( "#testCenterLocationFilter" ).catcomplete({
            delay: 0,
            select: function(event,ui) {
                locationType    =  ui.item.category;
                locationid      =  ui.item.id;
                locationName    =  ui.item.value;
                updateTestCenterList(   locationType , locationid , locationName );
                //$('#searchval').val(ui.item.id);
            }
        
        });

   /*     $("#testCenterLocationFilter").autocomplete(
        {
            search: function () {},
            source: function (request, response)
            {
                
                $.ajax({
                        url: "misc-widget-AJAX",
                        dataType: "json",
                        data: {strEventID: 8,strLocationKeyword: request.term},
                        cache:false
                    })
                    .done(function(data) {
                        if (data == null || data[0].status == 0)
                        {
                            //some error have occured
                        } else
                        {
                            $( "#testCenterLocationFilter" ).catcomplete({
                                delay: 0,
                                source: data[1]
                            });
                            //response(data[1]);
                        }
                    })
                    .fail(function(error) {
                        //ajax request failed
                    });
                },
            minLength: 2,
            select: function (event, ui)
            {
                alert(cityID);
                var cityID = ui.item ? ui.item.id : 0;
                if (cityID > 0)
                {
                    testCenterLocationType =   1;
                    testCenterLocationID   =   cityID;
                    updateTestCenterList(   testCenterLocationType    ,   testCenterLocationID   );
                }
            }
        });
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
		_renderMenu: function( ul, items ) {
			var that = this,
				currentCategory = "";
			$.each( items, function( index, item ) {
				if ( item.category != currentCategory ) {
					ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
					currentCategory = item.category;
				}
				that._renderItemData( ul, item );
			});
		}
	});
        */
       });

function submitNewCenterForm()
{
    var data = {};
    var dataDefault = {};
    data.strName = $('#requesterName').val();
    data.strPhone = $('#requesterMobileNo').val();
    data.strEmailID = $('#requesterEmailId').val();
    data.strDate = $('#requesterTestDate').val();
	data.strCity = $('#selCenterCity option:selected').text();
	data.strGroupOfCandidates = $("input[type='radio'][name='groupRepresent']:checked").val();
    data.strComments = $('#requesterComment').val();

    dataDefault.strName = $('#requesterDefaultName').val();
    dataDefault.strPhone = $('#requesterDefaultMobileNo').val();
    dataDefault.strEmailID = $('#requesterDefaultEmailId').val();
    dataDefault.strDate = $('#requesterDefaultTestDate').val();
    dataDefault.strComments = $('#defaultComment').val();

    if(data.strComments == dataDefault.strComments)
    {
        data.strComments = "";
    }
    
    $(this).parents('.test-centers-list').find('.error').removeClass('error');

    isValidData = validateNewTestCenterFormData(data, dataDefault);
    
    
    
    if (isValidData == true)
    {
        data.strDate    =   getChangedFormatDate(   data.strDate    ); 
        savePostData(data);
    }
    else
    {
        alert(testCenterErrorMsg);
}
}
//valdidate all form fields and return error if any
function validateNewTestCenterFormData(pDataArray, pDefaultDataArray)
{
    var validationResult = true;
    testCenterErrorMsg  = "";
    if (isEmpty(pDataArray.strName, pDefaultDataArray.strName) == true)
    {
        testCenterErrorMsg  +=   " Please enter name";
        $('.test-centers-list #requesterName').parent().addClass("error");
        validationResult = false;
    }

    if (isEmpty(pDataArray.strPhone, pDefaultDataArray.strPhone) == true)
    {
        testCenterErrorMsg  +=   "\n Please enter mobile no ";
        $('.test-centers-list #requesterMobileNo').parent().addClass("error");
        validationResult = false;
    }
    else if (isValidMobileNo(pDataArray.strPhone) == false)
    {
        testCenterErrorMsg  +=   "\n Please enter correct mobile no.";
        $('.test-centers-list #requesterMobileNo').parent().addClass("error");
        validationResult = false;
    }

    if (isEmpty(pDataArray.strEmailID, pDefaultDataArray.strEmailID) == true)
    {
        testCenterErrorMsg  +=   "\n Please enter email id";
        $('.test-centers-list #requesterEmailId').parent().addClass("error");
        validationResult = false;
    }
    else if (isValidEmailID(pDataArray.strEmailID) == false)
    {
        testCenterErrorMsg  +=   "\n Please enter valid email id";
        $('.test-centers-list #requesterEmailId').parent().addClass("error");
        validationResult = false;
    }

    if (isEmpty(pDataArray.strDate, pDefaultDataArray.strDate) == true)
    {
        testCenterErrorMsg  +=   "\n Please select requested test date";
        $('.test-centers-list #requesterTestDate').parent().addClass("error");
        validationResult = false;

    }
    return validationResult;

}
//check if field is empty or not having default value
function isEmpty(pData, pDefaultValue)
{
    trimData = $.trim(pData);

    if (trimData == "" || trimData == pDefaultValue)
    {
        return true;
    }

    return false;
}
//valdidate mobile number
function isValidMobileNo(pMobileNumber)
{
    var mobileReg = /^[1-9][0-9]{9}$/;
    //checking mobile number with regular expression
    return mobileReg.test(pMobileNumber);
}

//valdidate email id
function isValidEmailID(pEmailId)
{
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    return emailReg.test(pEmailId);

}

function savePostData(pData)
{
    ajaxOverlayObj   =   $('.test-centers-list .ajax-overlay');
    formOverlayObj   =   $('.test-centers-list .request-form-overlay');
    
    $(formOverlayObj).hide();
    $(ajaxOverlayObj).find('.ajax-loading').show();
    $(ajaxOverlayObj).find('p').hide();
    $(ajaxOverlayObj).show();

//    console.log(pData);
    $.ajax({
        type: "POST",
        url: "schedule-test-widgets-AJAX?strEventID=2",
        dataType: "json",
        data: pData
        
    })
            .done(function(response) {
        if(response.status == 1)
        {
            $(ajaxOverlayObj).find('.ajax-loading').hide();
            $(ajaxOverlayObj).find('.msg').append("Request saved successfully").show();
            $(ajaxOverlayObj).find('.close').show();
        }
        else if(response.status == 0 && response.errorMsg != "")
        {
            $(ajaxOverlayObj).hide();
            $(formOverlayObj).show();
            alert(response.errorMsg);
        }else
        {
            $(ajaxOverlayObj).find('.ajax-loading').hide();
            $(ajaxOverlayObj).find('.error').append("Unable to save your request. Please try after some time").show();
            $(ajaxOverlayObj).find('.close').show();
        }
    })
            .fail(function(response) {
        alert("Unable to save your request. Please try after some time.");
    });
}
function updateTestCenterList(  pLocationType , pLocationID ,pLocationName)
{

    
    noEventDivObj    =   $(".test-centers-list .no-event-div");
    testCenterContent = $(".test-center-details");
    $(noEventDivObj).hide();
    $("#test-center-loading-div").show();
    $(testCenterContent).empty();
    $('.test-centers-list .scroll-pane').jScrollPane();
    
        //update Location 
    $('#testCenterLocationFilter').val( pLocationName );
    
    $.getJSON( "schedule-test-widgets-AJAX", { strEventID: 1, strLocationType: pLocationType, strLocationID: pLocationID  } )
        .done(function (data){
                
              if(data == null  ||  data[0].status  == "0" )
              {
                    $(noEventDivObj).show();
                    $("#test-center-loading-div").hide();
                  
              }else
              {
                   $("#test-center-loading-div").hide();
                    $(noEventDivObj).hide();

                  var contentObjList ;

                    $(data[1]).each(function() {
                      testCenterDetails =   this.centre+', '+this.cityName;
                      contentObj    =  $(".test-center-details-structure").clone(false);
                      testCenterLink    =   $('#test-center-page-link').val()+this.id;
                      contentObj.find("a").attr("href",testCenterLink);
                      contentObj.find("p").append(testCenterDetails);
                      contentObj.removeClass("test-center-details-structure hidden");
                      testCenterContent.append(contentObj);
                    });
					if(data[1] != null  )
					{
					  testCenterDetails =   '';
                      contentObj    =  $(".test-center-details-structure").clone(false);
                      contentObj.find("a").text("See More");
					  contentObj.find("a").attr("href","/test-center-list?strRegionID="+data[1][0].regionID);
                      contentObj.find("p").append(testCenterDetails);
					  contentObj.addClass("seemore");
                      contentObj.removeClass("test-center-details-structure hidden");
                      testCenterContent.append(contentObj);
                    }
					else
					{
					  testCenterDetails =   '';
                      contentObj    =  $(".test-center-details-structure").clone(false);
                      contentObj.find("a").text("View All");
					  contentObj.find("a").attr("href","/test-center-list?strRegionID=0");
                      contentObj.find("p").append(testCenterDetails);
					  contentObj.addClass("seemore");
                      contentObj.removeClass("test-center-details-structure hidden");
                      testCenterContent.append(contentObj);
					}
					$('.scroll-pane').jScrollPane();
              }
        })
        .fail(function( error ){
        });
  
}

 function getChangedFormatDate(pDate)
    {
        date = new Date(pDate);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        formatedDate    =   year+"-"+month+"-"+day;
        return formatedDate;
    };
var campusEventLocationType =   0;
var campusEventLocationID =   0;


$(function() {
    $("#campusLocationFilter").on('change', function(){
        campusEventCityID   =   $('#campusLocationFilter').val();
		
        campusEventLocationType	=	parseInt(campusEventLocationType);
		campusEventLocationID	=	parseInt(campusEventLocationID);
		if( campusEventLocationType > 0 && campusEventLocationID > 0)
		{
			updateCampusEventList(  campusEventLocationType ,campusEventLocationID   );
		}
    });
    
    $( ".header .locationList .links ul li a" ).click( function(e){
        
        locType         = $(this).data("loc_type");
        locID           = $(this).data("loc_id");
        selectedLocName = $(this).text();   
         
        updateCampusEventList(  locType ,  locID  ,  selectedLocName  );
    } );

        if(!detectDevice && $(window).width()>=1200){
            //tool tip
            $('.events-list .events-links a,.events-list .events-links a .tipbox').click(function(e){
                    e.preventDefault();
                    return false;
            });
            $('.events-list .events-links a').mouseenter(function(){
                    $(this).find('.tipbox').show();
            });
            $('.events-list .events-links a').mouseleave(function(){
                    $(this).find('.tipbox').hide();
            });
        }
        $( "#campusLocationFilter" ).catcomplete({
            delay: 0,
            select: function(event,ui) {
                locationType    =  ui.item.category;
                locationid      =  ui.item.id;
                locationName    =  ui.item.value;
                updateCampusEventList(   locationType , locationid , locationName );
                //$('#searchval').val(ui.item.id);
            }

});
});
 
function updateCampusEventList(     pLocationType ,   pLocationID  ,pLocationName  )
{
    
    ajaxOverlayObj   =   $('.events-list .ajax-overlay');
    noEventFound     =   $('.events-list .no-event-div');
    campusEventContent  =    $(".campus-event-widget-content");

    $(campusEventContent).empty();
    $(ajaxOverlayObj).show();
    $(noEventFound).hide();
    $('.events-list .scroll-pane').jScrollPane();
           //update Location 
        $('#campusLocationFilter').val(   pLocationName   );
        $.ajax({
            url: "misc-widget-AJAX"
           ,data :  {strEventID: 6 , strLocationType: pLocationType, strLocationID :pLocationID }
           ,dataType: "json"
           ,cache: false
       })  
        .done(function(data) {
    
            if (data == null || data[0].status == 0)
            {
                $(ajaxOverlayObj).hide();
                $(noEventFound).show();

                //some error have occured
            } else
            {
                $(ajaxOverlayObj).hide();
                $(noEventFound).hide();

                $(data[1]).each(function(index) {
                    contentObj    =  $(".campus-event-widget-content-structure").clone(false);
                    contentObj.find("span:nth-child(1)").attr('title',this.CampusTitle).append(this.CampusName);
                    contentObj.find("span:nth-child(2)").append(this.EventDate);
                    contentObj.find("span:nth-child(3)").append(this.CityName+", "+this.StateName);
                    contentObj.find("span:nth-child(4)").append(this.COUNT);
 rowClass   =   (index%2) ? "odd" : "even";
                    contentObj.removeClass("campus-event-widget-content-structure hidden").addClass(rowClass);
                    campusEventContent.append(contentObj);
                });
                $('.events-list .scroll-pane').jScrollPane();
                //$('#campusLocationFilter').val('');
            }
        })
        .fail(function(error) {
            //ajax request failed
        });
}
 ;
$(function($){

$('select').sSelect();

    $('.clients').jquery_slider({
        mode: 'scroll',
        slidesClass : 'panel',
        pagination: false,
        controls: true,
        controlsClass : 'jquery-slider-buttons',
        prevClass : 'jquery-slider-prev',
        nextClass : 'jquery-slider-next',
        hideArrowsOnEnd: false,
        circularMotion: true,
        animationSpeed: 500,
        auto: true
});
});;

//testimonial widget js

$(function() {
    
    $(".testimonials-list .tab").on('click',function(){
		$('.select_testimonial option[value='+$(this).attr('id')+']').attr("selected", true);
		showTestimonialContent($(this), $(this).attr('id'));
	});
	$(".select_testimonial").on('change',function(){
		testimonialTabID = $(".select_testimonial option:selected").val();
		showTestimonialContent($(this), testimonialTabID);
	});
});

jQuery(function($){
        $('.testimonials').jquery_slider({
                mode: 'scroll',
                slidesClass : 'panel',
                pagination: false,
                controls: true,
                controlsClass : 'jquery-slider-buttons2',
                prevClass : 'jquery-slider-prev2',
                nextClass : 'jquery-slider-next2',
                hideArrowsOnEnd: false,
                circularMotion: true,
                animationSpeed: 500
        });
		 $(window).bind('resize', function() {
		 	showTestimonialContent($(".select_testimonial"), $(".select_testimonial option:selected").val());
		});
});

    //Show Testimonail content for selected category
function showTestimonialContent(obj, testimonialTabID)
{
        //get requested tab content class
    testimonialContentDiv   =   ".testimonials-list .list-content ."+testimonialTabID;  //get requested content hidden div id
        //removing active class tab
    $(".testimonials-list .tab").removeClass('active');                          //hiding current job opening
        //adding active class to current tab
    $("#"+testimonialTabID).addClass('active');
        //cloning content div
    $(".testimonials-list .list-content .jquery-slider-outer").remove();

    testimonialContent  =   $(testimonialContentDiv).clone(false);
        //removing hidden class from clone and add testimonial class
    $(testimonialContent).removeClass("hidden").addClass("testimonials");
        
        //removing other slide show
        //adding new slide show content
    $('.testimonials-list .list-content').prepend(testimonialContent);
        //applying slide show  on current content
    $(".testimonials").jquery_slider({
            mode: 'scroll',
            slidesClass : 'panel',
            pagination: false,
            controls: true,
            controlsClass : 'jquery-slider-buttons2',
            prevClass : 'jquery-slider-prev2',
            nextClass : 'jquery-slider-next2',
            hideArrowsOnEnd: false,
            circularMotion: true,
            animationSpeed: 500
    });
   
}


;
