//--------------------Tabs-----------------------
var tabs = document.querySelectorAll(".tabs ul li");
var tab_wraps = document.querySelectorAll(".tab_wrap");

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

	})
})
//-------------------Clock-----------------------
function realtimeClock(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
	
    var amPm = (hours >= 12 ) ? "pm" : "am";
   

     hours = updateTime(hours);
   	 minutes = updateTime(minutes);
	 

   document.getElementById("clock").innerHTML = 
   hours + " : " + minutes + " " + amPm;
   var t = setTimeout(realtimeClock, 500);
   if(hours < 12){
	var greeting = "Gud morning";
}
if(hours >= 12 && hours <= 18){
	var greeting = "Gud afternoon";
}
if(hours >= 18 && hours <= 24){
	var greeting = "Gud evening";
}
document.getElementById("greeting").innerHTML = greeting;

}
function updateTime(k){
	if(k < 10){
		return "0" + k
	} else{
		return k;
	}
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
document.getElementById('alarmButton').style.display = 'none';
};

function stopAlarm() {
alarmSound.pause();
alarmSound.currentTime = 0;
document.getElementById('alarmOptions').style.display = 'none';
document.getElementById('alarmButton').style.display = '';
cancelAlarm(document.getElementById('alarmButton'));
};  











