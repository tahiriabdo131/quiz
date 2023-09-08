var questionCount = 8; // Total number of questions
var answeredQuestions = 0; // Counter for answered questions

function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
    }
    
    // Disable all buttons to prevent further clicks
    var buttons = button.parentNode.parentNode.querySelectorAll(".choice");
    buttons.forEach(function (btn) {
        btn.disabled = true;
    });

    // Increment the answered questions count
    answeredQuestions++;

    // Check if all questions have been answered
    if (answeredQuestions === questionCount) {
        showResult();
    }
}

function showResult() {
    var correctAnswers = document.querySelectorAll(".correct").length;
    var resultText = `You answered ${correctAnswers} out of ${questionCount} questions correctly!`;

    // Display the result pop-up
    var resultPopup = document.getElementById("result-popup");
    var resultTextElement = document.getElementById("result-text");
    resultTextElement.textContent = resultText;
    resultPopup.style.display = "block";
}

function closeResult() {
    var resultPopup = document.getElementById("result-popup");
    resultPopup.style.display = "none";
}
