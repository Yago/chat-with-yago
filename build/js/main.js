(function($){
  $(document).ready(function(){
    $(':radio').iCheck({
      radioClass: 'iradio_flat-green'
    });

    $('input').click(function(){
      alert('touduc');
      $(':radio').each(function(){
        if($(this).is(':checked')){
          alert('touduc');
        }
      });
    });
  });

  function check(val) {
    alert(val);
  }
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