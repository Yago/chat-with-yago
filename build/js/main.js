(function($){
  $('#fchat').ready(function(){
    var data="Lorem ipsum dolor sit amet";
    var index=0;

    var cursor="<span id='cursor'>|</span>";
    $('#message').append(cursor);

    var T=setInterval(function test(){
      if(index>=data.length-1){
        clearInterval(T);
        $('#cursor').hide();
        $('head').append('<style>#fchat {display:block !important;}</style>');
        $('#fchat-message').focus();
      }
      _span = '<span>'+data[index]+'</span>';
      $('#cursor').before(_span);
      index++;
    },50);
  });
}(jQuery));
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
    //chatSlidebars.toggle('right');
    $('#open-right').on('click', function(event) {
      event.preventDefault();
      chatSlidebars.toggle('right');
    });

  });
}) (jQuery);
