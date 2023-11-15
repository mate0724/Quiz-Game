const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz-box");
const option_list = document.querySelector(".option-list");
const timCount = quiz_box.querySelector(".timer .timer-sec");
const next_btn = quiz_box.querySelector(".next-button");
const result_box = document.querySelector(".result-box");
const restartquiz = document.querySelector(".buttons .restart");
const welcome = document.querySelector(".welcome");
const clearbtn = document.querySelector(".clear-btn");
const hintButton = document.getElementById("hintButton");


start_btn.addEventListener('click', () => {
    quiz_box.style.opacity = '1';
    quiz_box.style.pointerEvents = 'auto';
    showQuestions(0);
    QuestionCounter(1);
    StartTimer(15);
    welcome.style.display = 'none';
});

let questionCount = 0;
let qnum = 1;
let counter;
let timeValue = 15;
let Score = 0;
let max_question = 10;

next_btn.onclick = () => {
    if(questionCount < max_question - 1) {
        questionCount++;
        qnum++;
        showQuestions(questionCount);
        QuestionCounter(qnum);
        clearInterval(counter);
        StartTimer(timeValue);
        next_btn.style.display = "none";
        hintButton.style.display = "block";
    }
    else{
        ShowResultBox();
    }
};




function showQuestions(index) {
    const question_text = document.querySelector(".question-text");
    const pictures = document.querySelector(".question-image");
    let question_tag = '<span>'+ questions[index].question +'</span>';
    // let question_tag = '<span>' + questions[index].question + '</span>' + '<img src="' + questions[index].image + '" alt="Question Image">';
    let pic_tag = '<img src="' + questions[index].image + '" alt="Question Image">';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    question_text.innerHTML = question_tag;
    pictures.innerHTML = pic_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    let UserAns = answer.textContent;
    let CorrectAnswer = questions[questionCount].answer;
    let allOptions = option_list.children.length;
    if(UserAns == CorrectAnswer){
        Score += 1;
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }
    else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is werong then select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == CorrectAnswer){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }

    next_btn.style.display = "block";
    hintButton.style.display = "none";

    
}


function QuestionCounter(index){
    const ques_counter = quiz_box.querySelector(".total-question");
    let QuestionCountTag = '<span><p>' + index + '</p>of<p>' + max_question + '</p>Questions</span>';
    ques_counter.innerHTML = QuestionCountTag;
}

function StartTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timCount.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            timCount.textContent = "00";

            let CorrectAnswer = questions[questionCount].answer;
            let allOptions = option_list.children.length;
       
            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == CorrectAnswer){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }

            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
        
            next_btn.style.display = "block";
            hintButton.style.display = "none";
       
        }
    }
}

function ShowResultBox(){
    quiz_box.style.opacity = '0';
    quiz_box.style.pointerEvents = 'none';
    result_box.style.opacity = '1';
    result_box.style.pointerEvents = 'auto';
    const scoreText = result_box.querySelector(".score_text");
    let scoretag = '<span>Your Score: <p>'+ Score + '</p>/<p>'+ max_question + '</p></span>';
    if(Score <= 1){
        const audio = new Audio('audio/fail.mp3');
        audio.play();
    }
    if(Score > 1 && Score < 6){
        const audio = new Audio('audio/low_point.mp3');
        audio.play();
    }
    if(Score > 5 && Score < 10){
        const audio = new Audio('audio/success.mp3');
        audio.play();
    }
    if(Score == 10){
        const audio = new Audio('audio/clapping.mp3');
        audio.play();
        // const fullScreenElement = document.createElement('div');
        // fullScreenElement.className = 'full-screen-element';
        // const gifImage = document.createElement('img');
        // gifImage.src = 'confettu.gif';
        // fullScreenElement.appendChild(gifImage);
        // document.body.appendChild(fullScreenElement);
    }
    scoreText.innerHTML = scoretag;
    welcome.style.display = 'none';
}


restartquiz.onclick = () => {
    window.location.reload();
}



////////////////////////////////////////////////////////////////

const form = document.getElementById('score-form');
const scoreboardDiv = document.getElementById('scoreboard');
let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = document.getElementById('player-name').value;
    const playerScore = Score;

    scoreboard.push({ name: playerName, score: playerScore });
    localStorage.setItem('scoreboard', JSON.stringify(scoreboard));

    // Frissítsd megjelenítést
    updateScoreboard();
});

function updateScoreboard() {
    // Rendezd a scoreboardot pontszám alapján csökkenő sorrendben
    scoreboard.sort((a, b) => b.score - a.score);

    // Frissítsd a megjelenítést
    //scoreboardDiv.innerHTML = '<h2>Scoreboard</h2>';
    scoreboard.forEach((player, index) => {
        const listItem = document.createElement('div');
        listItem.textContent = `${index + 1}. ${player.name}: ${player.score}`;
        scoreboardDiv.appendChild(listItem);
    });
}

clearbtn.addEventListener('click', function() {
    localStorage.removeItem('scoreboard');
    scoreboardDiv.innerHTML = '';
    scoreboard = [];
});

//localStorage.removeItem('scoreboard');

function provideHint() {
    const question = questions[questionCount];
    const options = document.querySelectorAll(".option");
    let wrongOptionsCount = 0;

    options.forEach(option => {
        if (option.textContent !== question.answer && wrongOptionsCount < 2) {
            // Rossz válaszokat elrejtjük
            option.style.display = "none";
            wrongOptionsCount++;
        }
    });

    // Hint gomb letiltása, miután használták
    hintButton.disabled = true;
    hintButton.style.pointerEvents = "none";
}


hintButton.addEventListener("click", provideHint);