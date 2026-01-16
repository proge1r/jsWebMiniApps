const quizForm = document.getElementById('quizForm');
const resultDisplay = document.getElementById('resultDisplay');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedOptions = quizForm.querySelectorAll('input[type="radio"]:checked');

    let score = 0;
    selectedOptions.forEach(option => {
        if (option.value === 'correct') {
            score++;
        }
    });

    const totalQuestions = quizForm.querySelectorAll('.question').length;
    resultDisplay.innerHTML = `Your score: ${score} out of ${totalQuestions}`;
    
    resultDisplay.style.color = score === totalQuestions ? "green" : "orange";
});