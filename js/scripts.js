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

  var seaman_enter_tween = TweenLite.to("#seaman img", 2, {'left':"0px"});
  var seaman_enter_scene = new ScrollMagic.Scene({
  triggerElement: '#seaman img',
  triggerHook: 'onEnter',
  duration: "100%",
  offset: 250
  })
  .setTween(seaman_enter_tween)
  .addTo(controller);

  // var seaman_exit_tween = TweenLite.to("#seaman img", 2, {'left':"1000px"});
  // var seaman_exit_scene = new ScrollMagic.Scene({
  // triggerElement: '#seaman img',
  // triggerHook: 'onLeave',
  // offset: 250
  // })
  // .setTween(seaman_exit_tween)
  // .addTo(controller);

  var seaman_up_tween = TweenLite.to("#bounceup img", 1, {'margin-top':"-150px", 'margin-bottom':"-50px"});
  var seaman_up_scene = new ScrollMagic.Scene({
  triggerElement: '#bounceup img',
  duration: "100%"
  })
  .setTween(seaman_up_tween)
  .addTo(controller);

  var gif_up_tween = TweenLite.to("#parallax_gif", 1, {'top':"0px"});
  var gif_up_scene = new ScrollMagic.Scene({
  triggerElement: '#gif_container',
  triggerHook: 'onEnter',
  duration: "100%"
  })
  .setTween(gif_up_tween)
  .addTo(controller);

  var gif_up_tween_out = TweenLite.to("#parallax_gif", 1, {'top':"-50px"});
  var gif_up_scene_out = new ScrollMagic.Scene({
  triggerElement: '#gif_container',
  duration: "100%",

  })
  .setTween(gif_up_tween_out)
  .addTo(controller);
});
