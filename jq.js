$(function() {

  $('.modal_open').click(function() {
    $('body').append('<div class="modal_bg"></div>');
    $('.modal_bg').fadeIn();

    var modal = '#' + $(this).attr('data-target');

    function modalResize() {
      var w = $(window).width();
      var h = $(window).height();

      var x = (w - $(modal).outerWidth(true)) / 2;
      var y = (h - $(modal).outerHeight(true)) / 2;

      $(modal).css({'left': x + 'px', 'top': y + 'px'});
    }

    modalResize();

    $(modal).fadeIn();

    $('.modal_bg, .modal_close').off().click(function() {
      $('.modal_content').fadeOut();
      $('.modal_bg').fadeOut('slow', function() {
        $('.modal_bg').remove();
      });
    });

    $(window).on('resize', function() {
      modalResize();
    });
  });

}); 