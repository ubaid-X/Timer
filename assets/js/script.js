let countDownElement = document.querySelector('.startCount');
let startBtn = document.querySelector('.startBtn');
let stopBtn = document.querySelector('.stopBtn');
let resetBtn = document.querySelector('.resetBtn');
let getBtn = document.querySelector('.getBtn');
let clearBtn = document.querySelector('.clearBtn');
let resetDiv = document.querySelector('.resetValue');
let startCount = 0;
let intervalID;

// function to format time
let formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
} 

// function to start the Timer
let startTimer = () => {
    countDownElement.innerText = formatTime(startCount++);
    intervalID = setInterval(() => {
        countDownElement.innerText = formatTime(startCount++);

    }, 1000);
};

// function to stop the Timer
let stopTimer = () => {
    clearInterval(intervalID);
};

// function for reset timer
let resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = formatTime(startCount);
    clearInterval(intervalID);
};

// function for to show specific time like stop time
let getTime = () => {
    let para = document.createElement('p');
    para.innerText = `The stop time is ${formatTime(startCount - 1)}`;
    resetDiv.append(para);
}

// function to remove the timer history content
let clearTimer = () => {
    resetDiv.innerText = "";
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
getBtn.addEventListener('click', getTime);
clearBtn.addEventListener('click', clearTimer);
