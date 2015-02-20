$(document).ready(function(){

  $('.examples').each(function(){ 
      var trLength = $(this).find('tr').length;
      $(this).before('<div class=exampleCounts>Total Count:' + trLength + '</div'); 
  });

});