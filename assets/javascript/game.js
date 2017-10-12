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
    },
    {
    	question: "Who trained Batmen to Fight?",
        answers: {
            a: "Ra's al ghul",
            b: 'Alfred Pennyworth',
            c: 'James Gordon'
        },
        correctAnswer: 'a'
    }

];
var quizHolder = document.getElementById('quiz');
var answerResults = document.getElementById('results');

console.log(quizHolder);
function generateQuiz(questions, quizHolder, answerResults) {

	function showResults(questions, quizHolder, answerResults) {
        var answerContainers = quizHolder.querySelectorAll('.answers');


        var userAnswer = '';
        var numCorrect = 0;


        for (var i = 0; i < questions.length; i++) {


            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            console.log(userAnswer);

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        answerResults.innerHTML = numCorrect + ' out of ' + questions.length;
    }
	
    function showQuestions(questions, quizHolder) {

        var makeQuestions = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push('<label>' +'<input type="radio" name="question' + i + '" value="' + letter + '">' +letter + ': ' +questions[i].answers[letter] +'</label>');
            }
            makeQuestions.push('<div class="question">' + questions[i].question + '</div>' +'<div class="answers">' + answers.join('') + '</div>');
        }
        quizHolder.innerHTML = makeQuestions.join('');

    }

    

    showQuestions(questions, quizHolder);


    $(document).ready(function() {
        $("#submitButton").on("click", function() {
            showResults(questions, quizHolder, answerResults);
        });
    });
}
generateQuiz(myQuestions, quizHolder, answerResults);