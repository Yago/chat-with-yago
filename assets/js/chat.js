(function($){
  $('#fchat').ready(function(){
    var data="Hi there ! My name is Yann and I'm glad to meet you. What's your name ?";
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