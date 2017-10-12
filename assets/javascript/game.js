var myQuestions = [{
        question: "What is Batman's real name?",
        answers: {
            a: 'Cyrus Gold',
            b: 'Damian Wayne',
            c: 'Bruce Wayne'
        },
        correctAnswer: 'c'
    },
    {
        question: "What Year was the first Batman comic released?",
        answers: {
            a: '1946',
            b: '1939',
            c: '1931'
        },
        correctAnswer: 'b'
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submitButton');
console.log(quizContainer);
function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push('<label>' +'<input type="radio" name="question' + i + '" value="' + letter + '">' +letter + ': ' +questions[i].answers[letter] +'</label>');
            }
            output.push('<div class="question">' + questions[i].question + '</div>' +'<div class="answers">' + answers.join('') + '</div>');
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');


        var userAnswer = '';
        var numCorrect = 0;


        for (var i = 0; i < questions.length; i++) {


            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;


            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);


    $(document).ready(function() {
        $("#submitButton").on("click", function() {
            showResults(questions, quizContainer, resultsContainer);
        });
    });
}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);