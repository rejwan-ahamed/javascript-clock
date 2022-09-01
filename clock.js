function time() {
    let clock = new Date()

    let hours = clock.getHours()
    let minutes = clock.getMinutes()
    let seconds = clock.getSeconds()
    let session;

    if (hours < 12) {
        session = "AM"
    }
    if (hours > 12) {
        session = "PM"
        hours = hours - 12
    }
    
     if (hours == 12) {
        session = "PM"
    }
    
    if (hours == 0) {
        hours = 12
    }
    if (seconds <10) {
        seconds = "0"+seconds;
    }
    if (seconds == 00) {
        seconds = 60;
    }
    console.log(session)

    let mainTime = hours + ':' + minutes + ':' + seconds + ' ' + session;

    document.getElementById('clock').innerText = mainTime;
}


setInterval(time, 1000)
