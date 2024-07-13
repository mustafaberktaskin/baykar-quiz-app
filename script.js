const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceButtons = Array.from(document.getElementsByClassName('choice'));
const timerElement = document.getElementById('timer');
const resultContainer = document.getElementById('result-container');
const resultsTableBody = document.querySelector('#results-table tbody');

let questions = [];
let currentQuestionIndex = 0;
let currentTimer = 30;
let intervalId;
let answers = [];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        questions = data.slice(0, 10).map((item, index) => {
            const choices = generateChoices(item.body);
            return {
                question: item.title,
                choices: choices,
                correctAnswer: choices[0] 
            };
        });
        startQuiz();
    });

function generateChoices(text) {
    const choices = text.split('\n').slice(0, 4).map(choice => choice.trim());
    return choices.map((choice, index) => `${String.fromCharCode(65 + index)}. ${choice}`);
}

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
}

function showQuestion(question) {
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${question.question}`;
    questionElement.style.fontSize = adjustFontSize(question.question);
    choiceButtons.forEach((button, index) => {
        button.innerText = question.choices[index] || '';
        button.classList.remove('enabled');
        button.classList.remove('selected');
        button.disabled = true;
        button.onclick = () => selectAnswer(button);
    });
    setTimeout(() => {
        choiceButtons.forEach(button => {
            button.classList.add('enabled');
            button.disabled = false;
        });
    }, 10000); 
}

function adjustFontSize(text) {
    const wordCount = text.split(' ').length;
    if (wordCount > 20) return '1.2em';
    if (wordCount > 10) return '1.4em';
    return '1.5em';
}

function startTimer() {
    currentTimer = 30;
    timerElement.innerText = currentTimer;
    intervalId = setInterval(() => {
        currentTimer--;
        timerElement.innerText = currentTimer;
        if (currentTimer <= 0) {
            clearInterval(intervalId);
            recordAnswer(null);
            nextQuestion();
        }
    }, 1000);
}

function selectAnswer(button) {
    if (!button.classList.contains('enabled')) return;
    clearInterval(intervalId);
    button.classList.add('selected');
    recordAnswer(button.innerText);
    setTimeout(nextQuestion, 1000); 
}

function recordAnswer(answer) {
    answers.push({
        question: questions[currentQuestionIndex].question,
        answer: answer
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
    } else {
        showQuestion(questions[currentQuestionIndex]);
        startTimer();
    }
}

function endQuiz() {
    questionContainer.style.display = 'none';
    timerElement.style.display = 'none'; 
    resultContainer.style.display = 'block';
    answers.forEach((answer, index) => {
        const row = document.createElement('tr');
        const questionCell = document.createElement('td');
        const answerCell = document.createElement('td');
        questionCell.innerText = `${index + 1}. ${answer.question}`;
        answerCell.innerText = answer.answer || 'No answer';
        row.appendChild(questionCell);
        row.appendChild(answerCell);
        resultsTableBody.appendChild(row);
    });

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });
}
