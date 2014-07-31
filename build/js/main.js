(function($){
  $(document).ready(function(){
    $(':radio').iCheck({
      radioClass: 'iradio_flat-green'
    });

    $(':radio').on('ifChecked', function(event){
      var themeClass = $(this).val();
      $('body').removeClass();
      $('body').addClass(themeClass);
    });
  });
}(jQuery));
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
