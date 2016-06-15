$( document ).ready(function() {
	// some scroll behaviour for header

    $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var count = ((height - scrollTop) / height)
    if (count < -0.25) {
      $('.content')
        .addClass('flow')
        .css({
          'top': (300 + height) + "px"
        });
    }

    if (count > -0.1) {
      $('.content').removeClass('flow')
    }

    $('.jumbo_one').css({
        'opacity': count
    });
  });


  //parallax setup 
  var controller = new ScrollMagic.Controller();

  // Seaman image
  
  var seaman_tween = TweenLite.to("#seaman", 0.5, {'margin-left':"-100px"});
  var seaman_scene = new ScrollMagic.Scene({
  triggerElement: '#paratwo',
  })
  .setTween(seaman_tween)
  .addTo(controller);
});
