// GLOBAL VARIABLES 

var score = 0; //Use time left as score
var timeLeft = 90;

var currentQuestion = 0;
var startButton= document.getElementById("start-btn")
var timer = document.getElementById("timer")
var questionTitle = document.getElementById("question")
var answerElement = document.getElementById("answer-options")
var correctPrompt = document.getElementById("correct")
var incorrectPrompt = document.getElementById("incorrect")
var flash 

// HTML SELECTORS using query slector ie..
//var questionEl = document.querySelector("#question")

var quizQuestions=[
    {question: "What is my cats favorite food?",
     answerChoices: ["Tuna","Anchovies","Salmon","Bacon"],
     correctAnswer: "Salmon"
},
{
    question: "What is my cats favorite activity?",
    answerChoices: ["Sun Bathing","Catching Flies","Running!","Sleeping"],
    correctAnswer: "Sun Bathing"
},
{
    question: "Where is my cat from?",
    answerChoices: ["Jupiter","Catifornia","Petco","East Oakland"],
    correctAnswer: "East Oakland",
},
{
    question: "What color are my cats eyes?",
    answerChoices: ["Red","Yellow","Green","Brown"],
    correctAnswer: "Green",
},
{
    question: "How many naps does my cat take a day?",
    answerChoices: ["1","5","25","100"],
    correctAnswer: "100",
},
{
    question: "What were my cats first words?",
    answerChoices: ["Meow","Ekekek","Hello!","Moo"],
    correctAnswer: "Meow",
}
];


var timerInterval
// FUNCTIONS THAT WE NEED
function startTimer(){
timerInterval= setInterval(function(){
    timeLeft --
    timer.textContent = timeLeft
    if (timeLeft<=0){
        clearInterval(timerInterval)
        //endGame()
    }
},1000)
}
function startGame() {
    startTimer()
    nextQuestion()
    // function that will start game/ triggered when they press START button (need event listener)
    // starts the timer: 
        // Set Interval 
        // if timer hits 0 execute endGame function
    //hide the start button
    // reveal the question and options

}

function nextQuestion(event){
    var mainQuestion= quizQuestions[currentQuestion]
    questionTitle.textContent=mainQuestion.question
    var answerOptions = mainQuestion.answerChoices
    console.log("Hello", answerOptions)
    for (var i=0; i<answerOptions.length;i++){
        var answerLi=document.createElement("li")
        answerLi.textContent=answerOptions[i]
        answerElement.appendChild(answerLi)
    }
    // user clicking on one of the 4 answers is an event (use event listener?)
    // triggered when user selects any answer
    // firgure out what answer the user chose
    // figure out if answer is right or wrong
    // if its wrong, reduce time, show message "Wrong!"
    //  
    // if right, show message "correct!"
    //SCORE MUST BE BASED ON TIME

    //Increment the current question by 1
    //Change the question
    // Change the choices
    //check answer function 

}
answerElement.addEventListener("click",function(event){
event.preventDefault()
var element = event.target 
if (element.matches("li")) {
    checkAnswer(element.textContent)
}
})
function checkAnswer(element){
var correct=quizQuestions[currentQuestion].correctAnswer
if (element===correct) {
    score++, 
    clearTimeout(flash)
    correctPrompt.textContent="Correct!"
    correctPrompt.classList.remove("hide")
    flash= setTimeout(function(){
        correctPrompt.classList.add("hide")
    },1000)
} else{
    score --
    timeLeft -= 10
    clearTimeout(flash)
    incorrectPrompt.textContent="Wrong!"
    incorrectPrompt.classList.remove("hide")
    flash= setTimeout(function(){
        incorrectPrompt.classList.add("hide")
    },1000)
}
answerElement.textContent = ""
currentQuestion++ 

if (quizQuestions.length>currentQuestion){
    nextQuestion()
    

}else{
    setTimeout(function(){
        endGame()
    },500)
   
}
}


function endGame() { console.log("endGame")
    // when timer hits ZERO or user answer all te questions then game ends
    // display : "congrats you scored ___"
    // Prompts user to enter initials to go with their score
    //high the questions
    //stop timer if they beat the timer
    
}

function saveInitials(){

    var initials = initialsInput.value.trim()//html element
    var storageScores= JSON.parse(localStorage.getItem("storageScores"))|| []
    var userScore= {initials:initials, score:score}
    storageScores.push(userScore) 
    localStorage.setItem("storageScores",JSON.stringify(storageScores))
    // triggered when user submits initials
    // SAVE  SCORE AND INITIALS TO LOCAL STORAGE-- 
        // want to keep data we have and add new score
        // 1. Read (fetch) existing scores
        // 2. add new score at end of array
        // 3. now overwrite the scores with the new array


    // takes user to HighScore page (separate html file ie. highScore.html)

}

// event listenter to trigger start function
startButton.addEventListener("click", startGame())