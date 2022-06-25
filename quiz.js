function Quiz(quizText,answerOption,correctOption){
    this.quizText = quizText;
    this.answerOption = answerOption;
    this.correctOption = correctOption;
    // console.log(this);
}
Quiz.prototype.cevabiKontrolEt = function(insert){
return insert === this.correctOption;
}

let questions=[
new Quiz ("Hansi c# framework-udur?",{a:"asp.net",b:"laravel",c:"django"},"a"),
new Quiz("Hansi python framework-udur?",{a:"asp.net",b:"laravel",c:"django"},"c"),
new Quiz("Hansi php framework-udur?",{a:"asp.net",b:"laravel",c:"django"},"b"),
new Quiz("Hansi java framework-udur?",{a:"asp.net",b:"spring",c:"django"},"b")
];