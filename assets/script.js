//timeleft is score and timer for countdown function
var timeleft = 99;
var timer;

//gets elements for containers
const main = document.getElementById("container-main");
const c1 = document.getElementById("container-1");
const c2 = document.getElementById("container-two");
const c3 = document.getElementById("container-3");
const c4 = document.getElementById("container-4");
const c5 = document.getElementById("container-5");
const results = document.getElementById("container-results");
const hs = document.getElementById("container-hs");
//gets elements for buttons
const startBtn = document.getElementById("btn-start");
const correctBtn1 = document.getElementById("btn-correct-1");
const correctBtn2 = document.getElementById("btn-correct-2");
const correctBtn3 = document.getElementById("btn-correct-3");
const correctBtn4 = document.getElementById("btn-correct-4");
const correctBtn5 = document.getElementById("btn-correct-5");
const submitBtn = document.getElementById("btn-submit");
const backBtn = document.getElementById("btn-back");
const clearBtn = document.getElementById("btn-clear");
const hsBtn = document.getElementById("view-hs");
const wrongBtn = document.querySelectorAll(".btn-wrong");
const correct = document.querySelectorAll(".correct");
const wrong = document.querySelectorAll(".wrong");
    
//event listners for buttons
startBtn.addEventListener("click", start);
startBtn.addEventListener("click", countdown);
correctBtn1.addEventListener("click", correct1);
correctBtn2.addEventListener("click", correct2);
correctBtn3.addEventListener("click", correct3);
correctBtn4.addEventListener("click", correct4);
correctBtn5.addEventListener("click", correct5);
submitBtn.addEventListener("click", submit);
backBtn.addEventListener("click", back);
clearBtn.addEventListener("click", clear);
hsBtn.addEventListener("click", view);

for (i of wrongBtn) {
    i.addEventListener('click', wrongAnwser);
  }

  //displays wrong is anwser is wrong and reduces time
function wrongAnwser() {
    wrong.forEach((e) => {
        e.style.display = "flex";
    })
    correct.forEach((e) => {
        e.style.display = "none";
    })
    timeleft = timeleft - 10;
}
//countdown for timer
function countdown() {
    timer = setInterval(function(){
        timeleft--;
        document.getElementById("countdown").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(timer);
    },1000);
}
//starts the quiz
function start() {
    main.style.display = "none";
    c1.style.display = "flex";
}
//when question is correct skips to next question and displays correct
function correct1() {
    c1.style.display = "none";
    c2.style.display = "flex";
    correct.forEach((e) => {
        e.style.display = "flex";
    })
    wrong.forEach((e) => {
        e.style.display = "none";
    })
}
//when question is correct skips to next question and displays correct
function correct2() {
    c2.style.display = "none";
    c3.style.display = "flex";
    correct.forEach((e) => {
        e.style.display = "flex";
    })
    wrong.forEach((e) => {
        e.style.display = "none";
    })
}
//when question is correct skips to next question and displays correct
function correct3() {
    c3.style.display = "none";
    c4.style.display = "flex";
    correct.forEach((e) => {
        e.style.display = "flex";
    })
    wrong.forEach((e) => {
        e.style.display = "none";
    })
}
//when question is correct skips to next question and displays correct
function correct4() {
    c4.style.display = "none";
    c5.style.display = "flex";
    correct.forEach((e) => {
        e.style.display = "flex";
    })
    wrong.forEach((e) => {
        e.style.display = "none";
    })
}
//when question is correct skips to results
function correct5() {
    c5.style.display = "none";
    results.style.display = "flex";
    correct.forEach((e) => {
        e.style.display = "flex";
    })
    wrong.forEach((e) => {
        e.style.display = "none";
    })
    document.getElementById("finalScore").textContent = timeleft;
    clearInterval(timer);
}
//when username is submited skips to leaderboards
function submit() {
    results.style.display = "none";
    hs.style.display = "flex";
}
//back button goes back to start and resets timer
function back() {
    hs.style.display = "none";
    main.style.display = "flex";
    document.getElementById("countdown").textContent = 99;
    timeleft = 99;
    wrong.forEach((e) => {
        e.style.display = "none";
    })
    correct.forEach((e) => {
        e.style.display = "none";
    })
}
//clears the leaderboards
function clear() {

}
//goes to leaderboards
function view() {
    main.style.display = "none";
    results.style.display = "none";
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    hs.style.display = "flex";
    timeleft = 99;
    document.getElementById("countdown").textContent = 99;
}

//ends game if time reaches 0
if (timeleft == 0) {
    main.style.display = "none";
    results.style.display = "flex";
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    hs.style.display = "none";
}

submitForm = (e) => {
    e.preventDefault();
};