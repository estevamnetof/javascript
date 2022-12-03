const buttonStart = document.querySelector('#button-start');
const buttonStop = document.querySelector('#button-stop');
const buttonReset = document.querySelector('#button-reset');

let sec = 0;
let min = 0;
let hr = 0;

let interval;

buttonStart.addEventListener('click', iniciarTempo);
buttonStop.addEventListener('click', pausarTempo);
buttonReset.addEventListener('click', resetarTempo);

function twoDigits(digit) {
    if(digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}

function iniciarTempo() {
    watch();
    interval = setInterval(watch, 10);
    document.body.style.background = '#0AC700';
}

function pausarTempo() {
    clearInterval(interval)
    document.body.style.background = '#FA0702';
}

function resetarTempo() {
    clearInterval(interval);
    sec = 0
    min = 0
    document.querySelector('.watch').innerText = '00:00:00';
    document.body.style.background = '#ffa600'
}

function watch() {
    sec++
    if(sec == 60) {
        min++
        sec = 0
        if(min == 60) {
            min = 0;
            hr++
        }
    }
    document.querySelector('.watch').innerText = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec);
}