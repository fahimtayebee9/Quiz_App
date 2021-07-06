import Question from './Question.js';
import Quiz from './Quiz.js';
import questions from './Questions.js';
import Element from './modules.js';
import Result from './Result.js';

export default function App () {

    // GETTING REQUIRED ELEMENTS
    const element   = new Element();
    const resultObj = new Result();
    let questionsShowed = [];
    let showedCount = 0;

    // SET QUIZ QUESTIONS
    let questionsArray = [];
    questions.forEach(function(data){
        const q = new Question(data.id, data.question, data.code, data.answers, data.correct);
        questionsArray.push(q);
    });
    const quiz =  new Quiz(questionsArray);
    element.innerProgress.style.width = "100%";

    // ELEMENT DATA
    const setValue = (elem, value) => {
        elem.innerHTML = value;
    }

    // RENDER RESULT DIALOG
    const renderResultDialog = () => {
        Swal.fire({
            title: 'Congratulations',
            text: "Quiz Has Ended. Your Score is " + quiz.score,
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Retake Quiz'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
                return true;
            }
            else{
                return false;
            }
        });
    }

    // RENDER RESULT ON QUESTION PROGRESS BAR
    const renderResult = (result, i) => {
        resultObj.store(result);
        console.log(resultObj.previousResult);
        if(result){
            document.getElementById('cr_' + showedCount).classList.add('success');
        }
        else{
            document.getElementById('cr_' + showedCount).classList.add('danger');
        }
    }  

    // RENDER QUESTION PROGRESS
    const renderQuestionProgress = () => {
        let markUp = '';
        let serial = 0;
        if(questionsShowed.length > 0){
            for(let i = 0 ; i < questionsShowed.length ; i++){
                if(resultObj.previousResult[i] === true){
                    markUp += `
                        <li>
                            <a href="" class="q-no q-border success" id="cr_${serial}">
                                ${resultObj.correctChild}
                            </a>
                        </li>
                    `;
                }
                else if(resultObj.previousResult[i] === false){
                    markUp += `
                        <li>
                            <a href="" class="q-no q-border danger" id="cr_${serial}">
                                ${resultObj.wrongChild}
                            </a>
                        </li>
                    `;
                }
                serial++;
            }

            const remain = quiz.questions.length - questionsShowed.length;
            if(remain == 10){
                resetAll();
                renderResultDialog();
            }
            else{
                for(let i = -1 ; i < remain ; i++){
                    markUp += `
                        <li>
                            <a href="" class="q-no q-border" id="cr_${serial}">
                                ${resultObj.defaultChild}
                            </a>
                        </li>
                    `;
                    serial++;
                }
            }
        }
        else{
            quiz.questions.forEach( () => {
                markUp += `
                        <li>
                            <a href="" class="q-no q-border" id="cr_${serial}">
                                ${resultObj.defaultChild}
                            </a>
                        </li>
                    `;
                serial++;
            });
        }
        
        setValue(element.questionProgress, markUp);
    }

    // RENDER QUESTION
    const renderQuestion = () => {
        const curQuestion = quiz.getRandomQuestion();
        if(curQuestion && !questionsShowed.includes(curQuestion)){
            setValue(element.question, curQuestion.question);
            questionsShowed.push(curQuestion);
            if(curQuestion.code != null){
                element.codeDiv.style.display = "block";
                setValue(element.codeText, curQuestion.code);
            }
            else{
                element.codeDiv.style.display = "none";
            }
        }
        else{
            renderQuestion();
        }
    }

    // RENDER Choices
    const renderChoices = () => {
        let markUp = '';
        $.each(quiz.getChoices(), function(k, v) {
            markUp += `
                <div class="col-md-6">
                    <label for="choice">
                        <input type="radio" class="option-input radio" name="choice" id="${quiz.getCurrentQuestion().correct}" data-order="${k}"/>
                        ${v}
                    </label>
                </div>
            `;
        });
        
        setValue(element.answers, markUp);
    };

    // RESET
    const resetAll = () => {
        quiz.reset();
    }

    // DISABLE ALL
    const disableAll = () => {
        if(quiz.timeleft == 0){
            element.quizDiv.classList.add('disabled')
            element.question.classList.add('disabled');
            element.questionProgress.classList.add('disabled');
            element.codeDiv.classList.add('disabled');
            element.codeText.classList.add('disabled');
            element.answers.classList.add('disabled');
            element.btnReset.classList.add('disabled');
            element.btnNext.classList.add('disabled');
            element.timer.classList.add('disabled');
            element.timeText.classList.add('disabled');
            element.timeProgress.classList.add('disabled');
            element.innerProgress.classList.add('disabled');
        }
    }

    // QUIZ BUTTON LISTENERS
    const btnListeners = () => {
        element.btnNext.addEventListener('click',function(){
            const guessElement = document.querySelector('input[name="choice"]:checked');
            if(guessElement){
                const answer = guessElement.getAttribute('data-order');
                const result = quiz.checkAnswer(answer);
                showedCount++;
                renderResult(result);
                renderAll();
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Opss',
                    text: "Please Answer the question",
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        });

        element.btnReset.addEventListener('click',function(){
            // RESULT DIALOG
            renderResultDialog();

            setTimeout(function(){
                // RESET QUIZ
                resetAll();
    
                // RENDER AGAIN
                renderAll();

                //RENDER TIME
                renderTime();
                renderTime(quiz.timeleft,quiz.time)
            },5000);
        });
    }

    // TIME PROGRESS WIDTH RENDER
    const renderProgress = (width) => {
        element.innerProgress.style.width = width + '%';
    }

    // TIME RENDER
    const renderTime = (timeleft, timetotal) => {
        var progressBarWidth = timeleft * 100  / timetotal;
        if(progressBarWidth > 0 && timeleft > 0 && timetotal != 0){
            renderProgress(progressBarWidth);
            setTimeout(function() {
                // quiz.timeleft -= 1;
                renderTime(timeleft - 1, timetotal);
            }, 1000);
        }
        else{
            // disableAll();
            renderResultDialog();
        }
        var date = new Date(null);
        date.setSeconds(timeleft);
        var newtimeleft = date.toISOString().substr(11, 8);
    
        element.timeText.innerHTML = newtimeleft;
        
    }

    const stopTimer = () => {
        renderTime(0,0);
    }

    // RENDER ALL
    const renderAll = () => {
        if(quiz.hasEndedRandom()){
            stopTimer();
            renderResultDialog();
        }
        else{
            // Render Question
            renderQuestion();

            // Render Question Progress
            renderQuestionProgress();

            // Render Answer Choice
            renderChoices();
            // renderTime(quiz.timeleft,quiz.time)

        }
    };

    return {
        resetAll        : resetAll(),
        renderAll       : renderAll(),
        btnListeners    : btnListeners(),
        renderTime      : renderTime(quiz.timeleft,quiz.time)
    };
};
