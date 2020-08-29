// Getting all the id's ready to use
startPage = document.getElementById("startPage")
questionBlock = document.getElementById("questionBlock")
startButton = document.getElementById("startButton")
answerOne = document.getElementById("answerOne")
answerTwo = document.getElementById("answerTwo")
answerThree = document.getElementById("answerThree")
answerFour = document.getElementById("answerFour")
question = document.getElementById("question")

// let questions = [];
let numofArray = 3;
let x = Math.floor(Math.random() * numofArray);

startButton.addEventListener("click", startQuiz);

// Whenever the user clicks an answer, they the answer will checked and the screen will change according to whether it is right or wrong
answerOne.addEventListener("click", function(){
    checkAnswer(answerOne);
})
answerTwo.addEventListener("click", function(){
    checkAnswer(answerTwo);
})
answerThree.addEventListener("click", function(){
    checkAnswer(answerThree);
})
answerFour.addEventListener("click", function(){
    checkAnswer(answerFour);
})


//Starts the quiz and loads the question and answer choices into the boxes
function startQuiz(){
    console.log("yup im starting");
    startPage.classList.add("hide");
    questionBlock.classList.remove("hide");
    // let x = Math.floor(Math.random() * 3);
    // console.log(x);
    question.innerHTML = questions[x].question;
    answerOne.innerHTML = questions[x].answers[0].text;
    answerTwo.innerHTML = questions[x].answers[1].text;
    answerThree.innerHTML = questions[x].answers[2].text;
    answerFour.innerHTML = questions[x].answers[3].text;
}


// Picks the next question to use
function nextQuestion(){
    if(numofArray > 0){
        console.log(numofArray);
        numofArray -= 1;
        x = Math.floor(Math.random() * (3));
        question.innerHTML = questions[x].question;
        answerOne.innerHTML = questions[x].answers[0].text;
        answerTwo.innerHTML = questions[x].answers[1].text;
        answerThree.innerHTML = questions[x].answers[2].text;
        answerFour.innerHTML = questions[x].answers[3].text;
    }
    else{
        alert("FINISHED!!!!");
    }
}

// Checks if the answers are correct
function checkAnswer(button){
    // console.log(button.innerHTML);
    if (button == answerOne){
        if(questions[x].answers[0].correct == true){
            document.getElementById("fullPage").classList.add("bodyCorrect");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyCorrect");
            }, 400);
            nextQuestion();
        }
        else if(questions[x].answers[0].correct == false){
            document.getElementById("fullPage").classList.add("bodyWrong");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyWrong");
            }, 400);
        }
    }
    else if (button == answerTwo){
        if(questions[x].answers[1].correct == true){
            document.getElementById("fullPage").classList.add("bodyCorrect");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyCorrect");
            }, 400);
            nextQuestion();
        }
        else if(questions[x].answers[1].correct == false){
            document.getElementById("fullPage").classList.add("bodyWrong");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyWrong");
            }, 400);
        }

    }
    else if (button == answerThree){
        if(questions[x].answers[2].correct == true){
            document.getElementById("fullPage").classList.add("bodyCorrect");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyCorrect");
            }, 400);
            nextQuestion();
        }
        else if(questions[x].answers[2].correct == false){
            document.getElementById("fullPage").classList.add("bodyWrong");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyWrong");
            }, 400);
        }

    }
    else if (button == answerFour){
        if(questions[x].answers[3].correct == true){
            document.getElementById("fullPage").classList.add("bodyCorrect");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyCorrect");
            }, 400);
            nextQuestion();
        }
        else if(questions[x].answers[3].correct == false){
            document.getElementById("fullPage").classList.add("bodyWrong");
            setTimeout(() => {
                document.getElementById("fullPage").classList.remove("bodyWrong");
            }, 400);
        }

    }
}

const questions = [
    {
        question: "What is 2 * 5?",
        answers: [
            {text: "25", correct: false},
            {text: "7", correct: false},
            {text: "10", correct: true},
            {text: "12", correct: false}
        ]
    },
    {
        question: "What is 4 + 3?",
        answers: [
            {text: "12", correct: false},
            {text: "43", correct: false},
            {text: "56", correct: false},
            {text: "7", correct: true}
        ]
    },
    {
        question: "What is 10 * 0?",
        answers: [
            {text: "0", correct: true},
            {text: "10", correct: false},
            {text: "110", correct: false},
            {text: "100", correct: false}
        ]
    }
]