const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice"));
const scoreText=document.getElementById("score");
let currentQuestion={};
let accept=false;
let score=0;
let questioncounter=0;
let avq=[];
let questions=[
    {
        question:"What is the full form of HTML?",
        choice1:"<Hypertext Markup Language>",
        choice2:"<Hypertext Makeup Language>",
        choice3:"<Hypotext Markup Language>",
        choice4:"<Hypertext Markup Level>",
        answer:1
    },
    {
        question:"ASCII value of '0' is?",
        choice1:"<32>",
        choice2:"<48>",
        choice3:"<12>",
        choice4:"<26>",
        answer:2
    },
    {
        question:"Python can be",
        choice1:"<Compiled>",
        choice2:"<Translated>",
        choice3:"<Interpreted>",
        choice4:"<Done nothing>",
        answer:3
    },
    {
        question:"Output of: (a++ + ++a) is(a=5)?",
        choice1:"<14>",
        choice2:"<13>",
        choice3:"<11>",
        choice4:"<12>",
        answer:4
    },
    {
        question:"Minecraft is made using which language?",
        choice1:"<C++>",
        choice2:"<Java>",
        choice3:"<Javascript>",
        choice4:"<Python>",
        answer:2
    },
];

const CORRECT_ANS=10;
const MAX_QUESTION=questions.length;

startGame=()=>{
    questioncounter=0;
    score=0;
    avq=[...questions];
    getNewQuestion();
};

getNewQuestion=()=>{
    questioncounter++;
    const questionIndex=Math.floor(Math.random()*avq.length);
    currentQuestion=avq[questionIndex];
    question.innerText=currentQuestion.question;

    choices.forEach(choice=>{
        const number=choice.dataset["number"];
        choice.innerText=currentQuestion["choice"+number];
    });

    avq.splice(questionIndex,1);
    accept=true;
};
choices.forEach(choice=>{
    choice.addEventListener("click",e=>{
        if(!accept) return;

        accept=true;
        const seletChoice=e.target;
        const selectedAnswer=seletChoice.dataset["number"];

        const answercheck=selectedAnswer==currentQuestion.answer?"correct":"incorrect";

        if(answercheck=="correct"){
            incrementScore(CORRECT_ANS)
        }
        seletChoice.parentElement.classList.add(answercheck);
        setTimeout(()=>{
            seletChoice.parentElement.classList.remove(answercheck);
            getNewQuestion();
        },1000);        
    });
});
incrementScore=num=>{
    score+=num;
    scoreText.innerText=score;

};

startGame();