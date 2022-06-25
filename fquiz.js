function FQuiz(parametr){  //Function bir class-dir
    this.parametr = parametr;
    this.quizIndex = 0;
    this.scoreIndex = 0;
}
// Javascript prototype
FQuiz.prototype.giveQuiz = function(){
    return this.parametr[this.quizIndex];
}


