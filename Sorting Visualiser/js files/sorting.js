// creating the array--> bars , which basically represents the heigth of the bars

let bars = []
for(let i = 0; i<100 ; i++){
    let randomNumber = Math.round(Math.random()*500)
    bars.push(randomNumber);
}

console.log("bars>>>", bars);
// creating 100 divs to add them inside the bardiv in html and adding functionality to the new array button

let newArrayButton = document.getElementById('newArrayBtn')

newArrayButton.addEventListener("click",() => {
    console.log("sdfjbskdjfksndf");
    let barsDiv = document.getElementById('barsWrapper')
    for(let i = 0;i<100; i++){
        let newBarDiv = document.createElement("div")
        newBarDiv.classList.add('bars_styling')
        newBarDiv.id = `barsStyling${bars[i]}`
        let newHeight = bars[i]
        console.log("newHeight----",newHeight);
        newBarDiv.style.setProperty("height",newHeight +'px')
        barsDiv.appendChild(newBarDiv)
    }
})




