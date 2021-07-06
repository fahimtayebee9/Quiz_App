export default function Element(){
    this.quizDiv           = document.querySelector('.quiz');
    this.question          = document.querySelector('#question');
    this.questionProgress  = document.querySelector('.question-progress-ul');
    this.codeDiv           = document.querySelector('.code');
    this.codeText          = document.querySelector('.code-text');
    this.answers           = document.querySelector('.answers');
    this.btnReset          = document.querySelector('.btn-reset');
    this.btnNext           = document.querySelector('.btn-next');
    this.timer             = document.querySelector('.timer');
    this.timeText          = document.querySelector('#time-text');
    this.timeProgress      = document.querySelector('.time-progress');
    this.innerProgress     = document.querySelector('#t-progress');
}