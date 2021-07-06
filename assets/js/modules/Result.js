export default function Result(){
    this.correctChild   =   '<i class="fas fa-check-circle"></i>';
    this.wrongChild     =   '<i class="fas fa-times-circle"></i>';
    this.defaultChild   =   '<i class="far fa-circle"></i>';
    this.previousResult = [];
}

Result.prototype.store = function(result){
    this.previousResult = [...this.previousResult, result];
}