// Avoid `console` errors in browsers that lack a console.
(function() {
  var method
  var noop = function() {}
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn"
  ]
  var length = methods.length
  var console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()
if (typeof jQuery === "undefined") {
  console.warn("jQuery hasn't loaded")
} else {
  console.log("jQuery " + jQuery.fn.jquery + " has loaded")
}
// Place any jQuery/helper plugins in here.
$(document).ready(function(){
  $('.homeblock-about__slider_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $( ".gallery br" ).each(function( index ) {
    $(this).remove();
  });
  $('article .gallery').slick({
    arrows: true,
    dots: false
  });

  $("a[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 3500);
      return false;
    }
  }
  });

  $('.single-consult--buttons').on('click', '.single-consult--video', function(){
    setTimeout(() => {
      $("#html5box-html5-lightbox").contents().find("#html5-watermark").attr("style","display:none;")
    }, 3000);
  })



});
