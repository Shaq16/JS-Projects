const questions= [
    {
        question:"What is the capital of Canada?",
        answer:[
            {text:"Tokyo",correct:false},
            {text:"New Delhi",correct:false},
            {text:"Ontario",correct:false},
            {text:"Ottawa",correct:true}
        ]

    },
    {
        question:"What gas do plants absorb from the atmosphere?",
        answer:[
            {text:"Oxygen",correct:false},
            {text:"Nitrogen",correct:false},
            {text:"Carbon Dioxide",correct:true},
            {text:"Helium",correct:false}
        ]
    },
    {
        question:" Who was the first President of the United States?",
        answer:[
            {text:"Abarham Lincoln",correct:false},
            {text:"Donald Trump",correct:false},
            {text:"John F kennedy",correct:false},
            {text:"George Washington",correct:false}

        ]
    },
    {
        question:" Which continent has the most countries?",
        answer:[
            {text:"Antartica",correct:false},
            {text:"Asia",correct:false},
            {text:"Africa",correct:true},
            {text:"North America",correct:false}

        ]
    }

]

const question = document.querySelector("#question");
const answer = document.querySelector(".answer"); 
const nextButton = document.querySelector("#next"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question; 

    const buttons = answer.querySelectorAll("button"); 
    currentQuestion.answer.forEach(function(ans, index) {
        buttons[index].innerHTML = ans.text;
    });

}

startQuiz();