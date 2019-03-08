$(document).ready(function() {
  //   console.log("ready");
});

// questions object contains question, choices
var questionsObject = [
  {
    question: "What is Sarah's hometown?",
    choices: ["Portland", "San Francisco", "Chicago"],
    correct: "San Francisco"
  },
  {
    question: "What is Sarah's husband's name?",
    choices: ["John", "Carlos", "Joe"],
    correct: "Joe"
  },
  {
    question: "What neighborhood does Sarah live in?",
    choices: ["Pilsen", "Lakeview", "West Loop"],
    correct: "Pilsen"
  },
  {
    question: "What was Sarah's previous job?",
    choices: ["Teacher", "Uber HR", "Marketing"],
    correct: "Teacher"
  }
];

// console.log(questionsObject);

// answer choice array
var answerArray = [];

// userChoice array
var userChoices = [];

// counters for timer, correct, incorrect, unanswered
var timer = 120;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;

// for loop of answer choice array
// if (userChoice === answerChoice)
// for (var i = 0; i < questionsArray.length; i++) {
//   console.log(questionsArray[i]);
// }

// start page with start button and title
// hidden done button
$("#submit").css("display", "none");
// run results page function

// on click of start button, set off function to append questions & timer (setInterval) to the page
$("#start").on("click", function() {
  // console.log("Start button clicked!!");

  //   button should go away because the game has begun!
  $("#start").css("display", "none");

  // format question & answer options
  // display every part of the array
  for (var i = 0; i < questionsObject.length; i++) {
    // start with div to contain each question
    var container = $("<div>");
    // each question will be inside it's own h1 element
    var quest = $("<h1>");
    quest.text(questionsObject[i].question);
    // console.log(questionsObject[i].question);

    // each choice will be inside a p element
    var options = $("<p>");
    options.text(questionsObject[i].choices);

    // only choose one answer per question (built into jQuery)
    // var radioBtn = $('<input type="radio" name="rbtnCount" />');
    // radioBtn.appendTo("#bigContainer");

    // attach both the questions and options respective to each question into its own div
    container.append(quest, options);
    // append the container to the page
    $("#bigContainer").append(container);
  }

  // attach both question & choices to container div

  // done button appears
  $("#submit").css("display", "block");
  $("#submit").on("click", function() {
    console.log("done!!!");
    // run results page function
  });

  //   a function to make the timer go
  var intervalTimer = setInterval(function() {
    // decrease timer counter by 1
    timer--;
    // real time count down display
    $("#timer").html("<h2> Time Remaining: </h2>" + timer);
    if (timer === 0) {
      // stops time when count down is complete
      clearInterval(intervalTimer);
      alert("Time's Up!");
    }
    // decreases & displays updated counter every second
  }, 1000);

  // need .empty() to clear page when timer/user completes

  //   end page displays counters
  //   if (userChoices[i] === questionsObject.correct) {
  //     correctCounter++;
  //     console.log("This is the number correct: " + correctCounter);
  //   } else if (userChoices != questionsObject.correct) {
  //     incorrectCounter++;
  //     console.log("This is the number incorrect: " + incorrectCounter);
  //   } else {
  //     unansweredCounter++;
  //     console.log("This is the number unanswered: " + unansweredCounter);
  //   }
});
