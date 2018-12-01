$(function(){
  var galleryItems = $(".work_img").find("img");
  galleryItems.hover(
    function(){
      $(this).stop().css("opacity","0.5");
    },function(){
      $(this).stop().css("opacity","1");
  });
  galleryItems.click(function(){
    var source = $(this).attr('src');
    var newImage = $('<img>').attr('src', source).css('width','100%');
    $('.work').stop().css('display','none');
    $('.second_chart_text').stop().css('display','none');
    $('.lightbox').empty().append(newImage).fadeIn();
    $('.lightbox').css('width','90%').css('margin','auto');
  });
  $('.lightbox').click(function(){
    $(this).stop().fadeOut();
    $('.work').stop().css('display','block');
    $('.second_chart_text').stop().css('display','block');
  });
});
