import Question from './Question.js';
import Element from './modules.js';

export default function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
    this.currentQuestion = null;
    this.time = 60;
    this.timeleft = 60;
    this.checkedQuestions = [];
}

Quiz.prototype.getRandomQuestion = function(){
    const curQuestion       = this.questions[ Math.floor(Math.random() * this.questions.length) ];
    this.filter();
    if(!this.checkedQuestions.includes(curQuestion)){
        this.currentQuestion    = curQuestion;
        // this.currentIndex   = (curQuestion != null) ? this.questions.indexOf(curQuestion) : 0;
        return curQuestion ;
    }
    
}

Quiz.prototype.getCurrentQuestion = function(){
    // const tempQues = this.questions[this.currentIndex];
    return this.currentQuestion;
}

Quiz.prototype.getChoices = function(){
    return this.currentQuestion.answers;
}

Quiz.prototype.nextIndex = function(){
    return this.currentIndex++;
}

Quiz.prototype.hasEnded = function(){
    return this.questions.length === this.currentIndex;
}

Quiz.prototype.hasEndedRandom = function(){
    let checkedCount = 0;
    this.questions.forEach(function(temp){
        if(temp.checked){
            checkedCount++;
        }
    });
    return checkedCount == this.questions.length;
    // return this.questions.length === this.checked.length;
}

Quiz.prototype.checkAnswer = function(guess) {
    this.currentQuestion.checked = true;
    
    const result = this.currentQuestion.isCorrect(guess);
    if(result){
        this.score++;
    }
    // this.nextIndex();
    return result;
}

Quiz.prototype.reset = function(){
    this.score = 0;
    this.currentIndex = 0;
    this.currentQuestion = null;
    this.time = 60;
    this.timeleft = 60;
    this.questions.forEach(function(temp){
        temp.checked = false;
    });
}

Quiz.prototype.filter = function(){
    let filtered = this.questions.filter(function (e) {
        return e.checked === false;
    });
    return filtered;
}
