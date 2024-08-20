let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;
let timerInterval;
let laps = document.querySelector('.laps ul');

function start() {
    if (!timer) {
        timer = true;
        myFun();
    }
}

function pause() {
    timer = false;
    clearTimeout(timerInterval);
}

function reset() {
    timer = false;
    clearTimeout(timerInterval);
    milli = 0;
    sec = 0;
    min = 0;
    hr = 0;
    updateDisplay();
    laps.innerHTML = '';
}

function restart() {
    reset();
    start();
}

function lap() {
    if (timer) {
        let formattedTime = formatTime(hr, min, sec, milli);
        let li = document.createElement("li");
        li.innerHTML = `Lap: ${formattedTime}`;
        laps.appendChild(li);
    }
}

function resetLap() {
    if (timer) {
        laps.innerHTML = '';
    }
}


function formatTime(hr, min, sec, milli) {
    let getSec = sec < 10 ? "0" + sec : sec;
    let getMin = min < 10 ? "0" + min : min;
    let getHr = hr < 10 ? "0" + hr : hr;
    let getMilli = milli < 10 ? "0" + milli : milli;

    return `${getHr}:${getMin}:${getSec}:${getMilli}`;
}

function updateDisplay() {
    let getSec = sec < 10 ? "0" + sec : sec;
    let getMin = min < 10 ? "0" + min : min;
    let getHr = hr < 10 ? "0" + hr : hr;

    document.getElementById("milli").innerHTML = milli < 10 ? "0" + milli : milli;
    document.getElementById("sec").innerHTML = getSec;
    document.getElementById("min").innerHTML = getMin;
    document.getElementById("hr").innerHTML = getHr;
}

function myFun() {
    if (timer) {
        milli++;
        if (milli === 100) {
            milli = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        updateDisplay();
        timerInterval = setTimeout(myFun, 10);
    }
}

    