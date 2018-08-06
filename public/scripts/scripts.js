$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 651) {
      $("nav").removeClass("pin-bottom");
      
    } else {
      $("nav").addClass("pin-bottom");
    }
  });
});