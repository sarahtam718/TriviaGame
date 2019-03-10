$(document).ready(function() {
  //   console.log("ready");

  // counters for timer, correct, incorrect, unanswered
  var timer = 120;
  var correctCounter = 0;
  var incorrectCounter = 0;
  var unansweredCounter = 0;

  // correct answers Array
  // var answersArray = [
  //   "San Francisco",
  //   "Joe",
  //   "Pilsen",
  //   "All of Them",
  //   "Teacher"
  // ];

  // var userChoicesArray = [];

  // start page with start button and title
  var titleDiv = $("<h1> Semi-Trivial Trivia Game! <h1>");
  $("#bigContainer").prepend(titleDiv);

  // hidden quiz & done button
  $("#submit").css("display", "none");
  $("#target").css("display", "none");

  // on click of start button, set off function to append timer (setInterval) to the page and also show questions
  $("#start").on("click", function() {
    // console.log("Start button clicked!!");

    //   button should go away because the game has begun!
    $("#start").css("display", "none");

    // quiz & done button appear
    $("#target").css("display", "block");
    $("#submit").css("display", "block");
    // run last page & if else
    $("#submit").on("click", function() {
      checktoWin1();
      checktoWin2();
      checktoWin3();
      checktoWin4();
      checktoWin5();
      lastPage();
    });

    //   a function to make the timer go
    var intervalTimer = setInterval(function() {
      // decrease timer counter by 1
      timer--;
      // real time count down display
      $("#timer").html("<h2> Time Remaining: </h2>" + timer);
      if (timer === 0) {
        // stops time when count down is complete?
        clearInterval(intervalTimer);
        // alert("Time's Up!");
        checktoWin1();
        checktoWin2();
        checktoWin3();
        checktoWin4();
        checktoWin5();
        lastPage();
      }
      // decreases & displays updated counter every second
    }, 1000);

    function lastPage() {
      // done button & timer disappear
      $("#submit").css("display", "none");
      $("#timer").css("display", "none");
      timer = 0;
      // quiz disappears, but have to check user's answers before we clear everything
      $("#target").empty();
      // container to display updated counters...
      // i needed that empty extra div because the last counter would not show up
      var allCountersDiv = $(
        "<div> Correct: </div>" +
          correctCounter +
          "<div> Incorrect: </div>" +
          incorrectCounter +
          "<div> Unanswered: </div>" +
          unansweredCounter +
          "<div></div>"
      );
      // console.log("divs up" + incorrectCounter / 5);
      // show updated counters:
      $("#bigContainer").append(allCountersDiv);
    }

    function checktoWin1() {
      // input:checked to choose boxes that user chose
      // i really did try to make this more DRY...
      // QUESTION 1
      if (!$("input[name='q1']:checked").val()) {
        unansweredCounter++;
      } else if ($("input[name='q1']:checked").val() === "San Francisco") {
        correctCounter++;
      } else {
        incorrectCounter++;
      }
    }

    function checktoWin2() {
      // QUESTION 2
      if (!$("input[name='q2']:checked").val()) {
        unansweredCounter++;
      } else if ($("input[name='q2']:checked").val() === "Joe") {
        correctCounter++;
      } else {
        incorrectCounter++;
      }
    }

    function checktoWin3() {
      // QUESTION 3
      if (!$("input[name='q3']:checked").val()) {
        unansweredCounter++;
      } else if ($("input[name='q3']:checked").val() === "Pilsen") {
        correctCounter++;
      } else {
        incorrectCounter++;
      }
    }

    function checktoWin4() {
      // QUESTION 4
      if (!$("input[name='q4']:checked").val()) {
        unansweredCounter++;
      } else if ($("input[name='q4']:checked").val() === "All of Them") {
        correctCounter++;
      } else {
        incorrectCounter++;
      }
    }

    function checktoWin5() {
      // QUESTION 5
      if (!$("input[name='q5']:checked").val()) {
        unansweredCounter++;
        console.log(unansweredCounter);
      } else if ($("input[name='q5']:checked").val() === "Teacher") {
        correctCounter++;
        console.log(correctCounter);
      } else {
        incorrectCounter++;
        console.log(incorrectCounter);
      }
    }
  });
});

// this is what i started out with, but decided to go simpler...(I kinda want to know how to complete it tho!)
// even with help, I couldn't get my second for loop to work (is it == instead of ===?? ...)
// var card = $("#target");
// questions object contains question, choices
// var questionsObject = [
//   {
//     question: "What is Sarah's hometown?",
//     choices: ["Portland", "San Francisco", "Chicago"],
//     correct: "San Francisco"
//   },
//   {
//     question: "What is Sarah's husband's name?",
//     choices: ["John", "Carlos", "Joe"],
//     correct: "Joe"
//   },
//   {
//     question: "What neighborhood does Sarah live in?",
//     choices: ["Pilsen", "Lakeview", "West Loop"],
//     correct: "Pilsen"
//   },
//   {
//     question: "What was Sarah's previous job?",
//     choices: ["Teacher", "Uber HR", "Marketing"],
//     correct: "Teacher"
//   }
// ];

// console.log(questionsObject[0].choices);

// userChoice array to put user's answers into
// var userChoices = [];
// for loop of answer choice array
// if (userChoice === answerChoice)
// for (var i = 0; i < questionsArray.length; i++) {
//   console.log(questionsArray[i]);
// }

// format question & answer options
// display every part of the array
// for (var i = 0; i < questionsObject.length; i++) {
//   console.log(questionsObject[i]);
// }
// for (var j = 0; j < questionsObject[i].choices.length; j++)
//   console.log(questionsObject[i].choices);
//     // start with div to contain each question
// var container = $("<div>");
// //   // each question will be inside it's own h1 element
// var quest = $("<h1>");
//   quest.text(questionsObject[i].question);
//   // console.log(questionsObject[i].question);

//   // each choice will be a radio button
//   // only choose one answer per question (built into jQuery)
//   // question- + i shows index
//   var options = $(
//     '<input type="radio" name="question-"' +
//       i +
//       '"value"' +
//       questionsObject[i].choices[j] +
//       "''>" +
//       questionsObject[i].choices[j]
//   );
//   // options.text(questionsObject[i].choices);

//   card.append(
//     "<input type='radio' name='question-" +
//       i +
//       "' value='" +
//       questions[i].answers[j] +
//       "''>" +
//       questions[i].answers[j]
//   );

// attach both the questions and options respective to each question into its own div
// container.append(quest);
// append the container to the page
// $("#bigContainer").append(container);

//   if (userChoices === questionsObject.correct) {
//     correctCounter++;
//     console.log("This is the number correct: " + correctCounter);
//   } else if (userChoices != questionsObject[i].correct) {
//     incorrectCounter++;
//     console.log("This is the number incorrect: " + incorrectCounter);
//   } else {
//     unansweredCounter++;
//     console.log("This is the number unanswered: " + unansweredCounter);
//   }

// and then i tried to use 2 for loops in a different way, but couldn't get the incorrect to work...
// i put the user's input into an array and looped through it to check (trying to be as dry as possible??)
//  userChoicesArray.push($("input[name='q1']:checked").val());
//  userChoicesArray.push($("input[name='q2']:checked").val());
//  userChoicesArray.push($("input[name='q3']:checked").val());
//  userChoicesArray.push($("input[name='q4']:checked").val());
//  userChoicesArray.push($("input[name='q5']:checked").val());
//  // console.log(userChoicesArray);
//  // for loops to compare with right answers
//  for (var i = 0; i < userChoicesArray.length; i++) {
//    // console.log(userChoicesArray[i]);
//    for (var j = 0; j < answersArray.length; j++) {
//      // console.log(answersArray[j]);
//      // unanswered...? not working...
//      // if (userChoicesArray[i] === "undefined") {
//      //   // unansweredCounter++;
//      //   console.log("unanswered" + unansweredCounter);
//      // if correct, user's correct counter goes up by 1...
//      if (userChoicesArray[i] == answersArray[j]) {
//        correctCounter++;
//        console.log("This is the number correct: " + correctCounter);
//        // why is user's incorrect counter increasing by the length of the array instead of just 1??
//      } else if (userChoicesArray[i] != answersArray[j]) {
//        incorrectCounter = userChoicesArray.length - correctCounter;
//        console.log("incorrect" + incorrectCounter);
//      }
//    }
//  }
