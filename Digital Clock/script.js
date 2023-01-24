let hours = document.getElementById('pHrs')
let minutes = document.getElementById('pMin')
let seconds = document.getElementById('pSec')
let body = document.getElementById('Bdy')

function digitalClock(){
    let date_time = new Date()
    let hr = date_time.getHours()
    let min = date_time.getMinutes()
    let sec = date_time.getSeconds() 

    if(hr > 12 ){
        hr = hr%12;
        body.classList.add("body_pm")
        body.classList.remove("body_am")
    }else{
        body.classList.add("body_am")
        body.classList.remove("body_pm")
    }
    hours.innerText = `${hr}`
    minutes.innerText = `${min}`
    seconds.innerText = `${sec}`
}

setInterval(digitalClock,1000);


