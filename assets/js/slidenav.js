(function($) {
  $(window).load(function() {
    var chatSlidebars = new $.slidebars();
    chatSlidebars.toggle('left');
    $('#open-left').on('click', function(event) {
      event.preventDefault();
      chatSlidebars.toggle('left');
    });

  });
}) (jQuery);
