const questions = [ 
    {
        "id" : 1,
        "question": "Inside which HTML element do we put the JavaScript?",
        "code" : null,
        "answers": {
            "a": "script",
            "b": "scripting",
            "c": "js",
            "d": "javaScript"
        },
        "correct": "a",
        "checked" : false
    },
    {
        "id" : 2,
        "question": "In a switch....case....default construct where do we put the expression we are going to evaluate?",
        "code" : null,
        "answers": {
            "a": "case",
            "b": "default",
            "c": "switch"
        },
        "correct": "c",
        "checked" : false
    },
    {
        "id" : 3,
        "question": "The default statement is mandatory when coding the switch....case....default construct?",
        "code" : null,
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "b",
        "checked" : false
    },
    {
        "id" : 4,
        "question": "What is alerted from the following code?",
        "code": "var aBoolean = 'true';\nalert((aBoolean == 'false' ? 'A' : 'B'));",
        "answers": {
            "a": "The code throws an error",
            "b": "A",
            "c": "B",
            "d": "null",
            "e": "undefined"
        },
        "correct": "c",
        "checked" : false
    },
    {
        "id" : 5,
        "question": "Which construct do we use with errors?",
        "code" : null,
        "answers": {
            "a": "do....while",
            "b": "if....else",
            "c": "try....catch....finally",
            "d": "switch....case....default"
        },
        "correct": "c",
        "checked" : false
    },
    {
        "id" : 6,
        "question": "Will a finally statement always run?",
        "code" : null,
        "answers": {
            "a": "yes",
            "b": "no"
        },
        "correct": "a",
        "checked" : false
    },
    {
        "id" : 7,
        "question": "How many global error constructors are there in JavaScript?",
        "code" : null,
        "answers": {
            "a": "3",
            "b": "4",
            "c": "5",
            "d": "6",
            "e": "7"
        },
        "correct": "c",
        "checked" : false
    },
    {
        "id" : 8,
        "question": "Which statement do we use to invoke an error?",
        "code" : null,
        "answers": {
            "a": "abend",
            "b": "call",
            "c": "dump",
            "d": "throw",
            "e": "submit"
        },
        "correct": "d",
        "checked" : false
    },
    {
        "id" : 9,
        "question": "The Number object is static just like the Math object and so we can't create objects of this type?",
        "code" : null,
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "checked" : false
    },
    {
        "id" : 10,
        "question": "When creating a Number object, what do passed values that can't be converted return?",
        "code" : null,
        "answers": {
            "a": "isNaN",
            "b": "NaN",
            "c": "null",
            "d": "undefined"
        },
        "correct": "b",
        "checked" : false
    }
];

export default questions;