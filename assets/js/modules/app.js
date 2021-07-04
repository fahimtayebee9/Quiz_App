import Question from './Question.js';
import Quiz from './Quiz.js';

// import getJson from './function.js';

const App = (() => {

    // GETTING REQUIRED ELEMENTS
    const quizDiv       = document.querySelector('.quiz');
    const question      = document.querySelector('#question');
    const codeText      = document.querySelector('.code-text');
    const answers       = document.querySelector('.answers');
    const btnReset      = document.querySelector('.btn-reset');
    const btnNext       = document.querySelector('.btn-reset');
    const timer         = document.querySelector('.timer');
    const time          = document.querySelector('.time');
    const hr            = document.querySelector('#hr');
    const min           = document.querySelector('#min');
    const sc            = document.querySelector('#sc');
    const timeProgress  = document.querySelector('.time-progress');
    const innerProgress = document.querySelector('#t-progress');

    // SET QUIZ QUESTIONS
    let q = null;
    let questionsArray = new Array();

    $.getJSON('assets/js/modules/Questions.json', function (data) {
        $.each(data, function (key, model) {
            if (key == "code") {
                q = new Question(model.id, model.question, model.code, model.answers, model.correct, model.checked);
            }
            else{
                q = new Question(model.id, model.question, null, model.answers, model.correct, model.checked);
            }
            questionsArray.push(Object.values(q));
        });
    });
    const quiz = new Quiz(questionsArray);
    
    const renderQuestion = () => {
        const curQuestion = quiz.getCurrentQuestion();
        console.log(curQuestion);
    }

    renderQuestion();

    console.log(quiz.questions);

    const renderAll = () => {
        if(quiz.hasEnded()){

        }
        else{
            // Render Question

            // Render Answer Choice

            // Render Time

            // Render Time Progress

        }
    }
})();





