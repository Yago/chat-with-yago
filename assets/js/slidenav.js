(function($) {
  $(window).load(function() {
    var chatSlidebars = new $.slidebars();
    //chatSlidebars.toggle('right');
    $('#open-right').on('click', function(event) {
      event.preventDefault();
      chatSlidebars.toggle('right');
    });

    $('#close-right').on('click', function(event) {
      event.preventDefault();
      chatSlidebars.toggle('right');
    });

  });
}) (jQuery);
