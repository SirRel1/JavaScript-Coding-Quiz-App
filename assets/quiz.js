//Naming variables to call inside of functions
var timeEl = document.querySelector("#countdown");
var buttonEl = document.querySelector(".btn")
var questionEl = document.querySelector("#questChange")
var questCount = document.querySelector("#count")
var choiceOne = document.querySelector("#choice1")
var choiceTwo = document.querySelector("#choice2")
var choiceThree = document.querySelector("#choice3")
var choiceFour = document.querySelector("#choice4")
var checkedAns = document.querySelector('.btn-1')
var radioButtons = document.getElementsByName('radAns')
var trueColor = document.querySelector('body')
var pointsEl = document.querySelector("#points")
var main = document.querySelector('#show')
var startQuiz = document.querySelector('#startQ')
var hideIntro = document.querySelector('h4')
var list = document.querySelector('#listing')
var showScore = document.querySelector('.score')
var refreshPage = document.querySelector('.refresh')
var hideTime = document.querySelector('.appear')
var first = document.querySelector('#uno')
var second = document.querySelector('#dos')
var third = document.querySelector('#tres')
var reveal = document.querySelector('#revelation')
var clear = document.querySelector('.clear')

const maxScore = 4;
var nm;

//Array of all possible answers for each question as the count changes
randChoice = [
    "Alert()",
    "Prompt()",
    "Confirm()",
    "Msg()",
    "Function",
    "Method",
    "Link",
    "None",
    ".Java",
    ".xml",
    ".javascript",
    ".js",
    "<Js>",
    "<JavaScript>",
    "<Script>",
    "<Scripting>"

];
//Array of 5 questions to cycle thru as the 'next' button is clicked
randQuestion = [
   
         "Which symbols are used for comments in JavaScript?"
,
    
         "Which Of the dialog boxes display a message and a data entry field?"    
,
    
         "A Function Associated With An object is Called______?"
,
    
         "JavaScript File Has An Extension of__________?"
,
    
        "Inside which HTML element do we put the JavaScript?"
,
        ];

// Variables for the index and count
let i = 0
let count = 1;
let x = 1;

//Adding an event listener to '>>' button in order to progress; function within the listener
//checks what count is on and changes questions/answers on card
buttonEl.addEventListener('click', function next () {
    document.getElementById("body").setAttribute("class", "")
    if (i <= 4) {
        i++
        count++
    checkedAns.disabled = false   
    questionEl.textContent = randQuestion[i]
    questCount.textContent = count

    if (radioButtons[x].checked = true) {
        radioButtons[x].checked = false
    }
    
    if (count === 2) {
        choiceOne.textContent = randChoice[0]
        choiceTwo.textContent = randChoice[1]
        choiceThree.textContent = randChoice[2]
        choiceFour.textContent = randChoice[3]
    }else if (count === 3) {
        choiceOne.textContent = randChoice[4]
        choiceTwo.textContent = randChoice[5]
        choiceThree.textContent = randChoice[6]
        choiceFour.textContent = randChoice[7]
    }else if (count === 4) {
        choiceOne.textContent = randChoice[8]
        choiceTwo.textContent = randChoice[9]
        choiceThree.textContent = randChoice[10]
        choiceFour.textContent = randChoice[11]
    }else if (count === 5) {
        choiceOne.textContent = randChoice[12]
        choiceTwo.textContent = randChoice[13]
        choiceThree.textContent = randChoice[14]
        choiceFour.textContent = randChoice[15]
    }else if (count === 6) {
        choiceOne.textContent = ''
        choiceTwo.textContent = ''
        choiceThree.textContent = ''
        choiceFour.textContent = ''
        
        nm = prompt('Enter Initials: ' )
        showScore.textContent = nm + " Scores : " + points + "%" + " " + "w/ " + secondsLeft + "s " + "left!";
        placement();
        hide();
    }
    }  
});
// Event listener on 'submit' button runs 'check' function in order to find radio button
//selection and compare it to the logic of the 'if' condition to see if right/wrong answer

var points = 0;

checkedAns.addEventListener('click', function check () {
    if (count === 1 && radioButtons[0].checked === true) {
        pointsEl.textContent =  points += 20
        
        document.getElementById("body").setAttribute("class", "bg-right")

        checkedAns.disabled = true
    }else if (count === 2 && radioButtons[1].checked === true) {
        pointsEl.textContent = points += 20
        document.getElementById("body").setAttribute("class", "bg-right")
        checkedAns.disabled = true
    }else if (count === 3 && radioButtons[1].checked === true) {
        pointsEl.textContent = points += 20
        document.getElementById("body").setAttribute("class", "bg-right")
        checkedAns.disabled = true
    }else if (count === 4 && radioButtons[3].checked === true) {
        pointsEl.textContent = points += 20
        document.getElementById("body").setAttribute("class", "bg-right")
        checkedAns.disabled = true
    }else if (count === 5 && radioButtons[2].checked === true) {
        pointsEl.textContent = points += 20
        document.getElementById("body").setAttribute("class", "bg-right")
        checkedAns.disabled = true
    }else if (count === 1 && radioButtons[0].checked === false) {
        pointsEl.textContent = points -= 10
        document.getElementById("body").setAttribute("class", "bg-wrong")
        checkedAns.disabled = true
    }else if (count === 2 && radioButtons[1].checked === false) {
        pointsEl.textContent = points -= 10
        document.getElementById("body").setAttribute("class", "bg-wrong")
        checkedAns.disabled = true
    }else if (count === 3 && radioButtons[1].checked === false) {
        pointsEl.textContent = points -= 10
        document.getElementById("body").setAttribute("class", "bg-wrong")
        checkedAns.disabled = true
    }else if (count === 4 && radioButtons[3].checked === false) {
        pointsEl.textContent = points -= 10 
        document.getElementById("body").setAttribute("class", "bg-wrong")
        checkedAns.disabled = true
    }else if (count === 5 && radioButtons[2].checked === false) {
        pointsEl.textContent = points -= 10
        document.getElementById("body").setAttribute("class", "bg-wrong")
        checkedAns.disabled = true
    }else if (count === 6) {
        display = none
        
        
        setTime(disabled)
        
        
        
    }
    //Stores point on each iteration/click and set it in local storage for 'Results page'
    
    localStorage.setItem('Time left', secondsLeft )
    localStorage.setItem('Score', points)    
    
});



var secondsLeft = 60;

//Function to countdown once 'Start Quiz' is pressed
function setTime() {
  
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    
    if (secondsLeft === 0 ) {
      // Stops action of set interval
      clearInterval(timerInterval);
      alert("Time!")
    }

  }, 1000);
  
}
//Storing time remaining
localStorage.getItem("Seconds Left: ", secondsLeft)
//Event listener added to the 'Start Quiz' button
startQuiz.addEventListener('click', function () {
    
    main.setAttribute('class', 'mainCard')
    hideIntro.setAttribute("class", "intro")
    setTime();
    startQuiz.style.display = 'none'


});
//Function to hide elements once user has finshed quiz; displays score and time at end
function hide () {
    main.setAttribute('class', 'hide')
    hideTime.setAttribute('class', 'hide')
    reveal.setAttribute('class', 'introSee' )


};
//places parsed scores and time into local storage
var highScores = JSON.parse(localStorage.getItem("highScores"));
var nexthighScores = JSON.parse(localStorage.getItem("Score"));
// Function to place scores into app based on ranking, has some bugs...
function placement () {
    
var score = points 

//Pushes scores onto the results screen at the end
first.textContent = JSON.stringify(highScores) + "points " + secondsLeft + "s " + "remaining";
second.textContent = JSON.stringify(nexthighScores) + "points " + secondsLeft + "s " + "remaining";   
third.textContent =  score + "points " + secondsLeft + "s " + "remaining"; 
   
};
//Button to clear page and local storage
clear.addEventListener('click', () => {
    localStorage.clear()
    reveal.setAttribute('class', 'hide' )

}
    );


//refreshes page to the beginning
refreshPage.addEventListener('click', () => document.location.reload());






  