//OOP Object
//ES5 ES6 ES7

// Parametr burada daxil edilir
const quiz=new FQuiz(questions);
const ui=new UI();

ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.showQuiz(quiz.giveQuiz()); 
    ui.showQuizIndex(quiz.quizIndex + 1 , questions.length);
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click",function(){
        clearInterval(counter);
        startTimer(10);
        clearInterval(counterLine);
        startTimerLine();


        if(quiz.parametr.length != quiz.quizIndex + 1){
            quiz.quizIndex += 1;                
            ui.showQuiz(quiz.giveQuiz());
            ui.showQuizIndex(quiz.quizIndex + 1 , questions.length);
            ui.btn_next.classList.remove("show"); 
        }else{
            ui.showScore(questions.length,quiz.scoreIndex);
            ui.score_box.classList.add("active");
            ui.quiz_box.classList.remove("active");
            alert("İmtahan bitti!");
        }   
})

// select option
function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);

    let answ = option.querySelector("span b").textContent;
    let answText=quiz.giveQuiz(); //GiveQuiz metodu questionsn 1-ci indeksini,yeni quizText-i getirir.
    // console.log(answ);
    // console.log(answText);

    if(answText.cevabiKontrolEt(answ)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
        quiz.scoreIndex++;
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }
    for(let i=0; i <ui.option_list.children.length; i++){
       ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");
} 

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
})
ui.btn_replay.addEventListener("click",function(){
    quiz.quizIndex = 0;
    quiz.scoreIndex = 0;
    clearInterval(counterLine);
    clearInterval(counter);
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})

// timer
let counter;
function startTimer(time){
counter=setInterval(timer,1000);
function timer(){
    ui.time_second.textContent=time;
    time--;
    if(time < 0){
        clearInterval(counter);
        ui.time_text.textContent = "Vaxt bitti!";
    }
}
}

let counterLine;
function startTimerLine(){
    let line_width = 0;
    counterLine = setInterval(timer,20);
    function timer(){
        line_width += 1;
        ui.time_line.style.width = line_width + "px";
        if(line_width > 547){
            clearInterval(counterLine);
        }
    }
}