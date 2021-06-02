var body = document.getElementById("body");
var whiteClock = document.getElementsByClassName("whiteClock");


function formatTime() {
    var now = new Date();
    var time = new Array();

    time['hours'] = now.getHours();
    time['minutes'] = now.getMinutes();
    time['seconds'] = now.getSeconds();
    time['day'] = now.getDay();
    time['date'] = now.getDate();
    time['months'] = now.getMonth() + 1;
    time['year'] = now.getFullYear();

    if (time['minutes'] < 10) {
        time['minutes'] = '0' + time['minutes']
    }

    if (time['seconds'] < 10) {
        time['seconds'] = '0' + time['seconds']
    }
    if (time['day'] == 0) {
        time['day'] = 'Sunday'
    }
    if (time['day'] == 1) {
        time['day'] = 'Monday'
    }
    if (time['day'] == 2) {
        time['day'] = 'Tuesday'
    }
    if (time['day'] == 3) {
        time['day'] = 'Wednesday'
    }
    if (time['day'] == 4) {
        time['day'] = 'Thursday'
    }
    if (time['day'] == 5) {
        time['day'] = 'Friday'
    }
    if (time['day'] == 6) {
        time['day'] = 'Saturday'
    }
    if (time['months'] == 1) {
        time['months'] = 'January'
    }
    if (time['months'] == 2) {
        time['months'] = 'February'
    }
    if (time['months'] == 3) {
        time['months'] = 'March'
    }
    if (time['months'] == 4) {
        time['months'] = 'April'
    }
    if (time['months'] == 5) {
        time['months'] = 'May'
    }
    if (time['months'] == 6) {
        time['months'] = 'June'
    }
    if (time['months'] == 7) {
        time['months'] = 'July'
    }
    if (time['months'] == 8) {
        time['months'] = 'August'
    }
    if (time['months'] == 9) {
        time['months'] = 'September'
    }
    if (time['months'] == 10) {
        time['months'] = 'October'
    }
    if (time['months'] == 11) {
        time['months'] = 'November'
    }
    if (time['months'] == 12) {
        time['months'] = 'December'
    }

    return time;


}

function updateClock() {
    document.getElementById('clock').innerHTML = formatTime()['hours'] + ' : ' + formatTime()['minutes'];
}

function updateSeconds() {
    document.getElementById('secs').innerHTML = formatTime()['seconds'];
}

function updateDate() {
    document.getElementById('date').innerHTML = formatTime()['date'] + '  ' + formatTime()['months'] + '  ' + formatTime()['year'] + ' , ' + formatTime()['day'];
}


function turnDark() {
    var btn = document.getElementById("bar");

    btn.classList.toggle("darkClock");

    body.classList.toggle("darkBody")
}

document.getElementById("bar").onclick = turnDark;

setInterval(updateClock, 1000);
setInterval(updateSeconds, 1000);
setInterval(updateDate, 1000);