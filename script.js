$('.dnSlide-main').each(function(index,el){
  var setting={
    'response':true,
    afterClickBtnFn:function(i){
      console.log(i;)
    }
  };
  switch(index){
    case 0:
          setting.verticalAlign='top';
          setting.switching = 'custom';
          setting.precentWidth='25%';
          var api=$(el).dnSlide(setting).data('dnSlide');
          $('.hide').on('click', function(){
            api.hide(fuction(){
              alert('hide');
            }
          });
        });
        break;
      case 1:
        setting.autoPlay = true;
        $(el).dnSlide(setting);
        break;
      case 2:
        setting.verticalAlign = 'bottom';
        $(el).dnSlide(setting);
        break;
      default:
        $(el).dnSlide(setting);
        break;
  }
});
