let seconds = document.getElementById('secondsPointer')
let minutes = document.getElementById('minutePointer')
let hours = document.getElementById('hoursPointer')



setInterval(() => {
    let date = new Date()
    let sec = date.getSeconds();
    console.log(sec);
    let min = date.getMinutes();
    let hour = date.getHours();

    let hr = 30*hour + min/2
    let m = 6*min
    let s = 6*sec
    hours.style.transform = "rotate(" + hr +"deg)";
    minutes.style.transform = "rotate(" + m +"deg)";
    seconds.style.transform = "rotate(" + s+"deg)";

},1000)



