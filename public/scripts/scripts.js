$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 651) {
      $("nav").removeClass("pin-bottom");
      
    } else {
      $("nav").addClass("pin-bottom");
    }
  });
});

// Countdown Timer

function countDown() {
  let now = new Date();
  let eventDate = new Date(2018, 9, 13);

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  // Time until the event in ms
  let remTime = eventTime - currentTime;

  // converts ms to seconds
  // math.floor rounds number down to nearest whole integer
  let s = Math.floor(remTime / 1000);

  let m = Math.floor(s / 60);

  let h = Math.floor(m / 60);

  let d = Math.floor(h / 24);

  //remaining hours, minutes and seconds
  h %= 24;
  m %= 60;
  s %= 60;


  if (h < 10) {
    h = "0" + h;
  } else {
    h = h;
  }

  if (m < 10) {
    m = "0" + m;
  } else {
    m = m;
  }

  if (s < 10) {
    s = "0" + s;
  }   else {
    s = s;
  } 


  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;

  setTimeout(countDown, 1000);

}

countDown();

// // Countdown Timer Scroll
// let ypos;
// let image;

// function parallax() {
//     ypos = window.pageYOffset;
//     image = document.getElementById('image');
//     image.style
// }
// window.addEventListener('scroll', parallax);




