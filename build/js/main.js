// (function(){
//   var fchatChecker = setInterval(function(){
//     var $fchat = $('#fchat');
//     console.log('up');
//     if($fchat.length > 0){
//       setTimeout(function(){
//         $fchat.wrap('<div class="sb-site></div>"')
//       }, 500);
//       clearInterval(fchatChecker);
//     }
//   }, 100);
// }, ());

(function($) {
  $(window).load(function() {
    var chatSlidebars = new $.slidebars();
    $('#open-left').on('click', function(event) {
      event.preventDefault();
      chatSlidebars.toggle('left');
    });

  });
}) (jQuery);
