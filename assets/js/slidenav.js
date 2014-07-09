(function($) {
  $(window).load(function() {
    var chatSlidebars = new $.slidebars();
    $('#open-left').on('click', function(event) {
      event.preventDefault();
      chatSlidebars.toggle('left');
    });

  });
}) (jQuery);
