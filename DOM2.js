// step one : get the elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
// step 2: create quiz data
const quiz = [
  {
    question: "what is the capital of USA?",
    options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
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
let index = 0;
let score = 0;
// step 3: create functions increasing score
function incrementScore() {
  score += 1;
}
//create load question function

function loadQuestion() {
  const q = quiz[index];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  //create buttons for options
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = () => selectOptions(i);
    optionsEl.appendChild(btn);
  });
}

//create select option function
function selectOptions(selectedIndex) {
  const correct = quiz[index].answer;

  [...optionsEl.children].forEach((btn, optionIndex) => {
    btn.disabled = true;
    if (optionIndex === correct) btn.style.background = "green";
    if (optionIndex === selectedIndex && optionIndex !== correct)
      btn.style.background = "red";
  });
  if (selectedIndex === correct) incrementScore();
  //step 4: show next button
  nextBtn.style.display = "block";

  nextBtn.onclick = () => {
    index++;
    //step 5: check if more questions
    if (index < quiz.length) {
      nextBtn.style.display = "none";
      loadQuestion();
    } else {
      showScore();
    }
  };
}
//create show score function last page
function showScore() {
  questionEl.textContent = "your score : " + score;
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
}
//initial call
loadQuestion();
j;
