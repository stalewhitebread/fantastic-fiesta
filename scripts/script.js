$(function(){
  
  $('#console-box').append('console is ready...');
  /*function that reads selected info to dummy console log*/
  $('li').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
  
});