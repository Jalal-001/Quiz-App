function UI(){
    this.btn_start=document.querySelector(".btn_start"),
    this.btn_next=document.querySelector(".btn_next"),
    this.quiz_box=document.querySelector(".quiz_box"),
    this.correctIcon = '<div class="icon "><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon "><i class="fas fa-times"></i></div>',
    this.option_list=document.querySelector(".option_list"),
    this.score_box=document.querySelector(".score_box"),
    this.score_text=document.querySelector(".score_box .score_text"),
    this.btn_replay=document.querySelector(".btn_replay"),
    this.btn_quit=document.querySelector(".btn_quit")
    this.time_text=document.querySelector(".time_text"),
    this.time_second=document.querySelector(".time_second"),
    this.time_line=document.querySelector(".time_line")

}

 UI.prototype.showQuiz=function (index){
    let question = `<span>${index.quizText}</span>`;
    let options = '';
    for(let opt in index.answerOption){
        options += `<div class="option">
                    <span><b>${opt}</b>: ${index.answerOption[opt]}</span>
                    </div>`;
    }
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML= options;
    const option=this.option_list.querySelectorAll(".option");

    for(let opti of option){
        opti.setAttribute("onclick", "optionSelected(this)");
    }
}

UI.prototype.showQuizIndex = function(qIndex,qTotal){
    let tag = `<span class="badge bg-warning"> ${qIndex} / ${qTotal} </span>`;
     document.querySelector(".quiz_box .question_index").innerHTML = tag;
 }

 UI.prototype.showScore=function(sTotal,sIndex){
    tag=`Doğru cavabların sayı ${sTotal} sualdan ${sIndex} təşkil edir.`;
    this.score_text.innerHTML=tag;
 }