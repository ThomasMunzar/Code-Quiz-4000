// GLOBAL VARIABLES 
var score = 0;
var timeLeft = 200;
var question = ["what is the capital of california?", "what is the capital of colorado?"];
var answerChoices = [["Managua", "Santiago", "Sacramento",], ["Denver", "Managua", "Oakland"]];// made of arrays
var correctAnswer = ["Sacramento", "Denver"]; // made of strings ( an array of arrays)
var currentQuestion = 0;

// HTML SELECTORS using query slector ie..
var questionEl = document.querySelector("#question")



// FUNCTIONS THAT WE NEED

function startGame() {
    // function that will start game/ triggered when they press START button (need event listener)
    // starts the timer: 
        // Set Interval 
        // if timer hits 0 execute endGame function
    //hide the start button
    // reveal the question and options

}

function nextQuestion(event){
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
    //

}

function endGame() {
    // when timer hits ZERO or user answer all te questions then game ends
    // display : "congrats you scored ___"
    // Prompts user to enter initials to go with their score
    //high the questions
    //stop timer if they beat the timer
    
}

function saveInitials(){
    // triggered when user submits initials
    // SAVE  SCORE AND INITIALS TO LOCAL STORAGE-- 
        // want to keep data we have and add new score
        // 1. Read (fetch) existing scores
        // 2. add new score at end of array
        // 3. now overwrite the scores with the new array


    // takes user to HighScore page (separate html file ie. highScore.html)

}

// event listenter to trigger start function