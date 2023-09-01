const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const dateTo = document.querySelector('.dateTo')

const countdown = () => {
    const now = new Date();
    const nextYear = new Date().getFullYear() + 1;
    const dateForNextYear = new Date(`Jan 1, ${nextYear} 00:00:00`);

    dateTo.textContent = nextYear;
    
    const interval = dateForNextYear - now;
    
    const secondTimer = 1000;
    const minuteTimer = secondTimer * 60
    const hourTimer = minuteTimer * 60;
    const dayTimer = hourTimer * 24;
    
    day.textContent = Math.floor(interval / dayTimer);
    hour.textContent = Math.floor((interval % dayTimer) / hourTimer);
    minute.textContent = Math.floor((interval % hourTimer) / minuteTimer);
    second.textContent = Math.floor((interval % minuteTimer) / secondTimer);
}

setInterval(countdown, 1000);