export default class Question{
    constructor(id, question, code , answers, correct){
        this.id = id;
        this.question = question;
        this.code = code;
        this.answers = answers;
        this.correct = correct;
        this.checked = false;
    }
}

Question.prototype.isCorrect = function(choice){
    return this.correct === choice;
}

Question.prototype.isChecked = function(){
    return this.checked === true;
}
