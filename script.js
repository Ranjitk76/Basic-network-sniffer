function showWarning() {
    alert("⚠️ PHISHING AWARENESS WARNING\n\nThis is a training example.\n\nNever click suspicious links or provide passwords, OTPs, or financial information without verifying the request.");
}

function checkQuiz() {
    const questions = document.querySelectorAll(".quiz-question");
    let score = 0;
    let answered = 0;

    questions.forEach(function(question) {
        const selected = question.querySelector('input[type="radio"]:checked');

        if (selected) {
            answered++;

            if (selected.value === question.dataset.answer) {
                score++;
            }
        }
    });

    const result = document.getElementById("quizResult");

    if (!result) {
        alert("Quiz result element not found.");
        return;
    }

    if (answered < questions.length) {
        result.innerHTML = "<strong>Please answer all questions.</strong><p>You answered " + answered + " out of " + questions.length + " questions.</p>";
        return;
    }

    let message;

    if (score === 5) {
        message = "Excellent! You have a strong understanding of phishing awareness.";
    } else if (score >= 3) {
        message = "Good job! Review the warning signs section once more.";
    } else {
        message = "Keep learning! Review the training sections and try again.";
    }

    result.innerHTML = "<strong>Your Score: " + score + "/" + questions.length + "</strong><p>" + message + "</p>";
}
