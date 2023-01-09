//  fetching minutes and seconds

let minutes = 00;
let seconds = 00;
let mins = document.querySelector('#min');
let sec = document.querySelector('#sec');

// fetching all three buttons for event listeners

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

// to store time
let interval;

// This is the timer functions which starts when user clicks on start
const startTimer = () => {
    seconds++;
    if (seconds < 9)
    {
        sec.innerHTML = "0" + seconds;    
    }
    if (seconds > 9)
    {
        sec.innerHTML = seconds;    
    }
    if (seconds > 60)
    {
        minutes++;
        mins.innerHTML = "0" + minutes; 
        seconds = 0;
        sec.innerHTML = "0" + 0;
    }
    if (minutes > 9)
    {
        mins.innerHTML = minutes;    
    }

}

// adding event listeners to 3 buttons
start.addEventListener('click', () => {
    interval = setInterval(startTimer);
})

stop.addEventListener('click', () => {
    clearInterval(interval);
})

reset.addEventListener('click', () => {
    clearInterval(interval);
    mins.innerHTML = "00";
    sec.innerHTML = "00";
})