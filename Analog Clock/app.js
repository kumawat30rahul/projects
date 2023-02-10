let seconds = document.getElementById('secondsPointer') //=========>>>>> accesing the seconds pointer
let minutes = document.getElementById('minutePointer') //==========>>>>> accessing the minute pointer
let hours = document.getElementById('hoursPointer') //=============>>>>> accessing the hours pointer


// ========== functionality to move the pointers of the clock==========>>>>>
setInterval(() => {
    let date = new Date() //===========>>>>getting the date and accessing the time later
    let sec = date.getSeconds(); //====>>>>getting the seconds of local time
    let min = date.getMinutes(); //====>>>>getting the minutes of local time
    let hour = date.getHours(); //====>>>>getting the hours of local time

    let hr = 30*hour + min/2 //=======>>>> hour formula 
    let m = 6*min //==================>>>> minutes formula 
    let s = 6*sec //==================>>>> seconds formula 
    hours.style.transform = "rotate(" + hr +"deg)"; //==========>>>>applying roatation to the hour pointer
    minutes.style.transform = "rotate(" + m +"deg)"; //==========>>>>applying roatation to the minute pointer
    seconds.style.transform = "rotate(" + s+"deg)"; //==========>>>>applying roatation to the seconds pointer

},1000) //============================>>>> setting the miliseconds  of the setInterval as 1 sec which is equal to 1000 milliseconds



