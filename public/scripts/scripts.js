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
