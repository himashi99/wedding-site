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

// FAQ Show Answers

// grabs all divs with class name "arrow" and assigns it to variable arrowAction
// let arrowAction = document.getElementsByClassName("arrow");
// let answersLoop = document.getElementsByClassName("question-answer")

// // loops over each div with class name "arrow"
// for(var i = 0; i < arrowAction.length; i++) {
//   for(var j=0; j < answersLoop.length; j++) {
//     arrowAction[i].onclick = function() {
//       if(answersLoop[j].classList.contains("questions-answer-hide")) {
//         answersLoop[j].classList.add("question-answer-show");
//         answersLoop[j].this.classList.remove("question-answer-hide");
//       } else {
//         answersLoop[j].classList.add("question-answer-hide");
//         answersLoop[j].classList.remove("question-answer-show");
//       }
//     }
//   }
// }

///////////////////////////////////// Bridal Party Section //////////////////////////////////

let groomsmenButton = document.getElementById("groomsmen-button");
let bridesmaidsButton = document.getElementById("bridesmaids-button");
let groomsmenBox = document.getElementById("groomsmen-box");
let bridesmaidsBox = document.getElementById("bridesmaids-box");

    groomsmenButton.addEventListener("click", function() {
        groomsmenBox.classList.remove("bridal-party-hide");
        // groomsmenBox.classList.add("bridal-party-show");
        bridesmaidsBox.classList.add("bridal-party-hide");
        // bridesmaidsBox.classList.remove("bridal-party-show");

        groomsmenButton.classList.add("button-color-dark");
        groomsmenButton.classList.remove("button-color-light");
        bridesmaidsButton.classList.add("button-color-light");
        bridesmaidsButton.classList.remove("button-color-dark");

        var el = document.getElementById("groomsmen-box");
        if (el.classList.contains('is-paused')){
          el.classList.remove('is-paused');
          el.classList.add('fade-in');
        }
    })

    bridesmaidsButton.addEventListener("click", function() {
        bridesmaidsBox.classList.remove("bridal-party-hide");
        // bridesmaidsBox.classList.add("bridal-party-show");
        groomsmenBox.classList.add("bridal-party-hide");
        // groomsmenBox.classList.remove("bridal-party-show");

        bridesmaidsButton.classList.add("button-color-dark");
        bridesmaidsButton.classList.remove("button-color-light");
        groomsmenButton.classList.remove("button-color-dark");
        groomsmenButton.classList.add("button-color-light");

        var el = document.getElementById("bridesmaids-box");
        if (el.classList.contains('is-paused')){
          el.classList.remove('is-paused');
        }
    })



    



///////////////////////////////////////////////////////////////////

let arrowButton = document.getElementsByClassName("arrow");
let answers = document.getElementsByClassName("question-answer");

for(let i = 0; i < arrowButton.length; i ++) {
    arrowButton[i].addEventListener("click", function() {
        arrowButton[i].id = "arrowID_" + i;
        answers[i].id = "answersID_" + i;

        answers[i].setAttribute('id','answersID_'+i);
        console.log('answersID_'+i);
  
        showHide();
    })
  

function showHide() {
    let answersElement = document.getElementById('answersID_' +i)
        // console.log(answers[i].id)

        if(answersElement.classList.contains("question-answer-hide")) {
          // console.log("whooho")
          answersElement.classList.add("question-answer-show");
          answersElement.classList.remove("question-answer-hide");
        } else {
          answersElement.classList.add("question-answer-hide");
          answersElement.classList.remove("question-answer-show");    
        }
}
}


var submitButton = document.getElementById("groomsmen-box");






















///////////////////////////////////// PRASANTH
// let answers = document.getElementsByClassName("question-answer")
// let buttons = document.getElementsByClassName("arrow");

// for(let i = 0; i < answers.length; i++) {
//   // create ids
//   let answerId = 'answer-' + i;
//   let buttonId = 'answer-btn' + i;
//   // set id
//   answers[i].setAttribute('id', answerId);
//   // for each answer attach a click listener
//   buttons[i].addEventListener('click', function() {
//     const ele = document.getElementById(answerId);
//     showHide(ele);
//   });
// }

// function showHide(ele) {
//   if(ele.classList.contains("question-answer-hide")) {
//     ele.classList.add("question-answer-show");
//     ele.classList.remove("question-answer-hide");
//   } else {
//     ele.classList.add("question-answer-hide");
//     ele.classList.remove("question-answer-show");
//   }
// }
//////////////////////////////////////////////////


// let arrowAction = document.getElementsByClassName("arrow");
// let answersLoop = document.getElementsByClassName("question-answer")

// for(var i = 0; i < arrowAction.length; i++) {
  
//   arrowAction[i].onclick = function() {
//     console.log("Hi");
//     var elements = document.getElementById("test");

//     if (elements.classList.contains("question-answer-hide")) {

//       console.log("whooho")
//       elements.classList.add("question-answer-show");
//       elements.classList.remove("question-answer-hide");

//     } else {
//       elements.classList.add("question-answer-hide");
//       elements.classList.remove("question-answer-show");
//     }
//   }
// }


// document.getElementById("arrow-down").onclick = function() {
//   var elements = document.getElementById("test");

//     if (elements.classList.contains("question-answer-hide")) {

//       console.log("whooho")
//       elements.classList.add("question-answer-show");
//       elements.classList.remove("question-answer-hide");

//     } else {
//       elements.classList.add("question-answer-hide");
//       elements.classList.remove("question-answer-show");
//     }
// }

////////////////////////////////NAVIGATION///////////////


// let coupleButton = document.getElementById("couple-button");
// let element = document.getElementById("scroll-to-bride-groom")

// coupleButton.addEventListener('click', () => window.scrollTo({
//   // top: 800,
//   behavior: 'smooth',
//   top: element.offsetTop
// }));


// let coupleButton = document.getElementById("couple-button");
// let element = document.getElementById("scroll-to-bride-groom")

// coupleButton.addEventListener('click', () => window.scrollTo({
//   // top: 800,
//   behavior: 'smooth',
//   top: element.offsetTop
// }));

 $('#home-button').click(function(){
    $('body, html').animate({scrollTop: 0}, 700);
  });

$("#couple-button").click(function() {
      var position = $("#scroll-to-bride-groom").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });

$("#story-button").click(function() {
      var position = $("#scroll-to-story").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });

$("#events-button").click(function() {
      var position = $("#scroll-to-events").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });

$("#people-button").click(function() {
      var position = $("#scroll-to-bridal-party").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });

$("#faq-button").click(function() {
      var position = $("#scroll-to-faq").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });

$("#rsvp-button").click(function() {
      var position = $("#scroll-to-rsvp").offset().top; //calculates how far the top of the Carousel is from the top of the page
      $('body, html').animate({ scrollTop: position }, 700); });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });













