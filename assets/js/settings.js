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