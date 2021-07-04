import Question from './Question.js';

export default function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentIndex];
}

Quiz.prototype.addQuestion = function(question){
    this.questions= [...this.questions, question];
}

Quiz.prototype.nextIndex = function(){
    return this.currentIndex++;
}

Quiz.prototype.hasEnded = function(){
    return this.questions.length === this.currentIndex;
}

Quiz.prototype.increaseScore = function(guess){
    const currentQuestion = this.getCurrentQuestion();
    if(currentQuestion.isCorrect(guess)){
        this.score++;
    }
    this.nextIndex();
}