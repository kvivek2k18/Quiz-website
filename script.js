const quizDB=[
    {
        question:"Q1:What is the full  form of HTML?",
        a:"hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makepup Language",
        d:"HyperText Markup Languge",
        ans:"ans4"
    },
    {
        question:"Q2:What is the full forms of css?",
        a:"cascading style sheets",
        b:"cascading style sheep",
        c:"cartoon style sheet",
        d:"cascading super sheets",
        ans:"ans1"
    },
    {
        question:"Q3: What is the full forms of the HTTP?",
        a:"Hypertext Transfer product",
        b:"Hypertext Test protocol",
        c:"Hey Trasfer protocol",
        d:"Hypertext Transfer protocol",
        ans:"ans4"
    },
    {
        question:"Q4:What is the full form of the JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const Submit=document.querySelector('#Submit');
const answers=document.querySelectorAll('.answer');
const ShowScore=document.querySelector('#ShowScore');
let questionCount=0;
let Score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();
const getcheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};
const deSeletAll= () => {
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
Submit.addEventListener('click', () => {
    const checkedAnswer=getcheckAnswer();
    console.log(checkedAnswer);
if(checkedAnswer===quizDB[questionCount].ans){
    Score++;
};
questionCount++;
deSeletAll();
if(questionCount<quizDB.length){
    loadQuestion();
}
else{
    ShowScore.innerHTML= `
    <h3>Your Scored ${Score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
`;
    ShowScore.classList.remove('ScoreArea');
}
})