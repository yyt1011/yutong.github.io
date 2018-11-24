$(function(){
  $(".work_img").find("img").hover(
    function(){
      $(this).stop().css("opacity","0.5");
    },function(){
      $(this).stop().css("opacity","1");
  });


});
