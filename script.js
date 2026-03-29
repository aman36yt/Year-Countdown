const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const mins = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const year = document.querySelector(".year");

const newYearDate = new Date("Jan 1, 2027 00:00:00").getTime();//TIme at jan 1

function updateCount(){
    //current time from system..
    const now = new Date().getTime();//curr time
    const gap = newYearDate - now;
    const second = 1000;
    const minutes =second*60;
    const hours = minutes*60;
    const days = hours*24;

    const d = Math.floor(gap/days);
    const h = Math.floor((gap%days)/ hours);
    const m = Math.floor((gap%hours)/minutes);
    const s = Math.floor((gap%minutes)/second);
    
    day.innerText = d;
    hour.innerText = h;
    mins.innerText = m;
    sec.innerText = s;
    setTimeout(updateCount,1000);
}
updateCount()