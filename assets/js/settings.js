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