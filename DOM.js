const quizQuestions = document.getElementById("quizQuestions");
const quizOptions = document.getElementById("quizOptions");
const nextQuestion = document.getElementById("nextQuestion");
const quizScore = document.getElementById("quizScore");
const quizContainer = document.getElementById("quiz-container");

let currentIndex = 0;
let score = 0;

const questions = [
  {
    question: "what is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3,
  },
];

function loadQuestion() {
  nextQuestion.classList.add("hidden");
  quizOptions.innerHTML = "";
  const currentQuestion = questions[currentIndex];
  quizQuestions.innerText = currentQuestion.question;
  quizOptions.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-button");
    button.addEventListener("click", () => selectOption(index));
    quizOptions.appendChild(button);
  });
}

function selectOption(selectedIndex, selectionButton) {
  const currentQuestion = questions[currentIndex];
}

loadQuestion();
