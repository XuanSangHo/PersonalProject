const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQueston();
})

function startGame() {
  console.log("start");
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() -.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQueston();
}

function setNextQueston() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(queston) {
    questionElement.innerText = queston.question;
    queston.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'what is 2 + 2?',
        answers: [
            { text: '4', correct: true},
            { text: '2', correct: false}
        ]
    },
    {
        question: 'what is 5 * 2?',
        answers: [
            { text: '4', correct: false},
            { text: '2', correct: false},
            { text: '8', correct: false},
            { text: '10', correct: true}
        ]
    },
    {
        question: 'what is 6 - 2?',
        answers: [
            { text: '4', correct: true},
            { text: '5', correct: false},
            { text: '7', correct: false},
            { text: '3', correct: false}
        ]
    },
    {
        question: 'what is 9 * 6?',
        answers: [
            { text: '6', correct: false},
            { text: '54', correct: true},
            { text: '45', correct: false},
            { text: '28', correct: false}
        ]
    },
    {
        question: 'what is 99*99999?',
        answers: [
            { text: '66666', correct: false},
            { text: '99999', correct: false},
            { text: '????', correct: true},
            { text: '7777', correct: false}
        ]
    },
]