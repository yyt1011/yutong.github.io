$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
      'image/1.jpg',
      'image/2.jpg',
      'image/3.jpg',
      'image/4c.jpg',
      'image/5.jpg',
      'image/6.jpg',
      'image/7.jpg',
      'image/8.jpg',
      'image/9.jpg',
      'image/11.jpg',
      'image/12.jpg',
  ];
  var i = 0;
  setInterval(function(){
    i = (i +1) % images.length;
    galleryImage.fadeOut(function(){
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    })
    console.log(galleryImage.attr("src"));
  }, 2000);
});
