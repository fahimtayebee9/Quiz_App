import Question from './Question.js';

let q = null;
let questionsArray = [];

// JSON IMPORT
export default function getJson(){
    
    $.getJSON('assets/js/modules/Questions.json', function (data) {
        $.each(data, function (key, model) {
            if (model.key == "code") {
                q = new Question(model.id, model.question, model.code, model.answers, model.correct, model.checked);
            }
            else{
                q = new Question(model.id, model.question, model.answers, model.correct, model.checked);
            }
            questionsArray.push(q);
        })
    });
    
    return questionsArray;
}