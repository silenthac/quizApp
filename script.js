const questions = [
    {
        question: "Which data structure uses Last In First Out (LIFO) order?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Array", correct: false },
            { text: "Linked List", correct: false }
        ]
    },
    {
        question: "What does the acronym 'HTTP' stand for?",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "HighText Transfer Protocol", correct: false },
            { text: "HyperTransfer Text Protocol", correct: false },
            { text: "HyperText Transmission Protocol", correct: false }
        ]
    },
    {
        question: "Which algorithm is commonly used for sorting data?",
        answers: [
            { text: "Binary Search", correct: false },
            { text: "Quick Sort", correct: true },
            { text: "Depth First Search", correct: false },
            { text: "Hashing", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of non-volatile memory?",
        answers: [
            { text: "RAM", correct: false },
            { text: "Cache", correct: false },
            { text: "ROM", correct: true },
            { text: "Registers", correct: false }
        ]
    },
    {
        question: "What is the time complexity of accessing an element in an array?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(log n)", correct: false },
            { text: "O(1)", correct: true },
            { text: "O(n^2)", correct: false }
        ]
    }
];


console.log("Hii")


const questionElement = document.getElementsByClassName('question')[0];
const answerOption = document.getElementsByClassName('options')[0];
const nextButton = document.getElementsByClassName('nxt')[0];



let currentQuestionIndex = 0;
let score = 0;


function startQuiz()
{
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = 'Next',
    showQuestion();

}

function showQuestion()
{
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber =  currentQuestionIndex+1;
    questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer=>{
        btn = document.createElement('button');
        btn.innerHTML =  answer.text;
        btn.classList.add('btn')
        answerOption.appendChild(btn);
        if(answer.correct)
        {
            btn.dataset.correct =  answer.correct;
        }
        btn.addEventListener('click',selectAnswer);

    })

   


}


function resetState()
{
    nextButton.style.display = 'none';
    while(answerOption.firstChild)
    {
        answerOption.removeChild(answerOption.firstChild)
    }



}

function showScore()
{
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = 'Play again';
    nextButton.style.display = "block"
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

function selectAnswer(e)
{
    console.log(e)
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct=="true"

    if(isCorrect)
    {
        selectedBtn.classList.add('correct')
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerOption.children).forEach(button=>{
        if(button.dataset.correct=="true")
        {
            button.classList.add("correct")
        }
        button.disabled= true
    })

    nextButton.style.display = "block"
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz()
    }
})


startQuiz();
