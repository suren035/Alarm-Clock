
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() =>{
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        
        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
})







//-------------------Clock-----------------------
          function realtimeClock(){
                 var rtClock = new Date();
                 var hours = rtClock.getHours();
                 var minutes = rtClock.getMinutes();
            
                 var amPm = (hours < 12 ) ? "am" : "pm";
                 hours = (hours > 12 ) ? hours - 12 : hours;
      
              //  hours = ("0" + hours).slice(-2);
                minutes = ("0" + minutes).slice(-2);
          
                document.getElementById("clock").innerHTML = 
                hours + " : " + minutes + " " + amPm;
                var t = setTimeout(realtimeClock, 500);
        }

//--------------AlarmSound----------------
var alarmSound = new Audio();
alarmSound.src = 'media/Alarm05.wav';
alarmSound.loop = true;
var alarmTimer;

function setAlarm(button) {
    var ms = document.getElementById('alarmTime').valueAsNumber;
    if(isNaN(ms)) {
        alert('Invalid Date');
        return;
    }

    var alarm = new Date(ms);
    var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
    
    var differenceInMs = alarmTime.getTime() - (new Date()).getTime();

    if(differenceInMs < 0) {
        alert('Specified time is already passed');
        return;
    }

    alarmTimer = setTimeout(initAlarm, differenceInMs);
    button.innerText = 'Cancel';
    button.setAttribute('onclick', 'cancelAlarm(this);');
};

function cancelAlarm(button) {
    clearTimeout(alarmTimer);
    button.innerText = 'Set Alarm';
    button.setAttribute('onclick', 'setAlarm(this);')
};

function initAlarm() {
    alarmSound.play();
    document.getElementById('alarmOptions').style.display = '';
};

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('alarmOptions').style.display = 'none';
    cancelAlarm(document.getElementById('alarmButton'));
};  
