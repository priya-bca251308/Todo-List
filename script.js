const questions = [
  { q: "What is 2+2?", options: ["3", "4", "5", "6"], answer: "4" },
  { q: "Capital of France?", options: ["Berlin", "Paris", "Rome", "London"], answer: "Paris" },
  { q: "Result of 3*3?", options: ["6", "9", "12", "3"], answer: "9" }
];

// Fisher-Yates Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const quiz = {
  currentIndex: 0,
  score: 0,
  timer: 10,
  interval: null,
  questions: [],

  start() {
    this.score = 0;
    this.currentIndex = 0;
    this.questions = [...questions];
    shuffle(this.questions);
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('result').textContent = '';
    document.getElementById('highscore').textContent = '';
    this.showQuestion();
  },

  showQuestion() {
    if (this.currentIndex >= this.questions.length) return this.endQuiz();

    const current = this.questions[this.currentIndex];
    document.getElementById('question').textContent = current.q;

    const choices = document.getElementById('choices');
    choices.innerHTML = "";
    current.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.className = "btn";
      btn.onclick = () => this.checkAnswer(option, btn);
      choices.appendChild(btn);
    });

    this.timer = 10;
    document.getElementById('timer').textContent = `Time: ${this.timer}`;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.countdown(), 1000);
  },

  countdown() {
    this.timer--;
    document.getElementById('timer').textContent = `Time: ${this.timer}`;
    if (this.timer <= 0) {
      clearInterval(this.interval);
      this.nextQuestion();
    }
  },

  checkAnswer(selected, btn) {
    const correct = this.questions[this.currentIndex].answer;
    const allBtns = document.querySelectorAll('#choices .btn');
    
    // Disable all buttons to prevent multiple clicks
    allBtns.forEach(button => button.disabled = true);
    
    if (selected === correct) {
      this.score++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
      // Highlight the correct answer
      allBtns.forEach(button => {
        if (button.textContent === correct) {
          button.classList.add('correct');
        }
      });
    }
    
    clearInterval(this.interval);
    setTimeout(() => this.nextQuestion(), 1500);
  },

  nextQuestion() {
    this.currentIndex++;
    this.showQuestion();
  },

  endQuiz() {
    clearInterval(this.interval);
    document.getElementById('question').textContent = "Quiz Over!";
    document.getElementById('choices').innerHTML = "";
    document.getElementById('timer').textContent = "";
    document.getElementById('result').textContent = `Your Score: ${this.score}/${this.questions.length}`;
    this.saveHighScore();
    document.getElementById('start-btn').style.display = 'inline-block';
  },

  saveHighScore() {
    const prev = localStorage.getItem('highscore') || 0;
    if (this.score > prev) {
      localStorage.setItem('highscore', this.score);
    }
    const highScore = localStorage.getItem('highscore');
    document.getElementById('highscore').textContent = `High Score: ${highScore}/${questions.length}`;
  }
};

// Load high score on page load
window.addEventListener('load', () => {
  const highScore = localStorage.getItem('highscore');
  if (highScore) {
    document.getElementById('highscore').textContent = `High Score: ${highScore}/${questions.length}`;
  }
});

document.getElementById('start-btn').addEventListener('click', () => quiz.start());