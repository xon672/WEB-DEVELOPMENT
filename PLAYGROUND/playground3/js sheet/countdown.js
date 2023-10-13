var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var setDate = document.querySelector(".set-date");
var timeContainer = document.querySelectorAll("h3");
var deadlineContainer = document.querySelector(".deadline-container")



let currentDate = new Date().getDate();
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const expirePeriod = new Date(currentYear,currentMonth,currentDate  +7,5,30);
const expireDate = expirePeriod.getDate();
const expireDay = weekDays[expirePeriod.getDay()];
const expireMonth = months[expirePeriod.getMonth()];
const expireYear = expirePeriod.getFullYear();
const expireHour = expirePeriod.getHours();
const expireMins = expirePeriod.getMinutes()

setDate.innerHTML = `Giveaway Ends on ${expireDay} ${expireMonth} ${expireDate}th @ ${expireHour}:${expireMins}pm`


var futureTime = expirePeriod.getTime()


function startCountDown(){
    var currentTime = new Date().getTime()
    var remainingTime =  futureTime - currentTime
    // calculate in ms
    oneDay = 24 * 60 *60 *1000;
    oneHour = 60 * 60 * 1000;
    oneMIn = 60 * 1000;
    oneSec = 1000;

    const days = Math.floor(remainingTime / oneDay);
    const hours = Math.floor((remainingTime % oneDay) / oneHour);
    const mins = Math.floor((remainingTime % oneHour) / oneMIn);
    const sec = Math.floor((remainingTime % oneMIn) / oneSec);
    
    let values = [days, hours, mins, sec];

    function format(values){
        if(values < 10){
            return `0${values}`
        }
        return values
    };
    timeContainer.forEach(function(time,index){
        time.innerHTML = format(values[index])
    });

    if(remainingTime < 0){
        clearInterval(timeout)
        deadlineContainer.innerHTML = `<h4>sorry this deal already expired`
    }
};

var timeout = setInterval(startCountDown,1000)
startCountDown()




