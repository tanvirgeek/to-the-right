var RightNav = (function ($) {

  var exports = {};

  exports.recomputeNav = function() {
    if ($('body').is('.has-logo.has-title')) {
      var offset = $('#pop-title').offset();
    }
    else if ($('body').is('.has-links, .has-sharing')) {
      var offset = $('#meta').offset();
    }
    else {
      var offset = $('#main-region').offset();
    }
    if (offset) {
      $('#slide-nav').css({top: offset.top});
    }
  };
  exports.recomputeNav();
  return exports;
}(jQuery));


$(document).on('pop-initialized', function(){
  $('#pop-logo').imagesLoaded(function(){
    RightNav.recomputeNav();
  });
  $('#slide-nav a').live('click', function(e){
    e.stopImmediatePropagation();
    e.preventDefault();
    $.scrollTo($(e.currentTarget).attr('href'), {
      duration: 500,
      axis: 'y'
    });
  });
  RightNav.recomputeNav();
});


$(document).on('pop-updated', function(){
  $('#pop-logo').imagesLoaded(function(){
    RightNav.recomputeNav();
  });
  RightNav.recomputeNav();
});