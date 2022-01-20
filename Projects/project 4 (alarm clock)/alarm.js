console.log('time');

let time = document.getElementById('currentTime');
time.innerHTML = new Date();
let tune = new Audio('best alarm.mp3');

setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
    const alarm = document.getElementById('inputDate');
    let alarmDate = new Date(alarm.value);

    if (time.innerHTML == alarmDate) {
        tune.play();
    }
}


let submitalarm = document.getElementById('alarmbtn');
submitalarm.addEventListener('click', setAlarm);

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('inputDate');
    let alarmDate = new Date(alarm.value);
    console.log(alarmDate);


}