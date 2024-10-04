const dayElement=document.querySelector(".day");
const hourElement =document.querySelector(".hour");
const minuteElement =document.querySelector(".minute");
const secondElement =document.querySelector(".second");
const heading=document.querySelector(".heading");
const counterTimer=document.querySelector(".counterTimer")

const leftSecond = 1000;
const leftMinute = 60 * leftSecond;
const leftHour = 60 * leftMinute;
const leftDay = 24 * leftHour;

let date=new Date();
let dd= String(date.getDate()).padStart(2,"0");
let mm =String(date.getMonth()+1).padStart(2,"0");
let yyyy= date.getFullYear();

const newDay=prompt("Enter Day").padStart(2,"0");
const newMonth=prompt("Enter Month").padStart(2,"0");

let now=(`${mm}/${dd}/${yyyy}`);
let targetDate=(`${newMonth}/${newDay}/${yyyy}`);

if(now>targetDate){
    targetDate=(`${newMonth}/${newDay}/${yyyy+1}`);
}

const time =setInterval(() => {
    const timer = () => {
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();
        const difference =  timer-today;

        dayLeft = (Math.floor(difference / leftDay));
        hourLeft = (Math.floor((difference % leftDay) / leftHour));
        minuteLeft = (Math.floor((difference % leftHour) / leftMinute));
        secondLeft = (Math.floor((difference % leftMinute) / leftSecond)); 

        secondElement.innerText=secondLeft;
        minuteElement.innerText=minuteLeft;
        hourElement.innerText=hourLeft;
        dayElement.innerText=dayLeft;

        if (difference<0) {
            counterTimer.style.display="none";
            heading.innerText=" Time's Up";
            clearInterval(timer);
        }
      
      }; 

      timer();

}, 0);

