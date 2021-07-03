export default class Question{
    constructor(id, question, code , answers, correct, checked ){
        this.id = id;
        this.question = question;
        this.code = code;
        this.answers = answers;
        this.correct = correct;
        this.checked = checked;
    }
}

Question.prototype.isCorrect = function(choice){
    return this.answers === choice;
}
