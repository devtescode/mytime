var display = document.getElementById('clock');
var audio = new Audio ('all.mp3')
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
function updateTime(){
    var date = new Date();

    var hour = formatTime(date.getHours());
    var mintues = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
     display = result.innerHTML
    result.innerText=`${hour} : ${mintues} : ${seconds}`;
} 
function formatTime(time){
    if (time< 10){
        return '0' + time;
    }
    return time;
}
function setAlarmTime(value){
    alarmTime = value;
    console.log(alarmTime)
}

setInterval(updateTime, 1000);