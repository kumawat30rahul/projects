let billAmount = document.getElementById('billTotalInput')
let tipPercent = document.getElementById('tipInput')
let peopleNo = document.getElementById('numberOfPeople')
let plus = document.getElementsByClassName('splitButton')
let minus = document.getElementById('splitButton')

let totalBill = document.getElementById('perPersonTotal')

let peoples = Number(peopleNo.innerText)

function calculatBill(){
    const bill = Number(billAmount.value)

    const tip = Number(tipPercent.value) / 100

    const tipTotal = bill * tip
    const total = bill + tipTotal

    const perPersonTotal = total / peoples

    totalBill.innerText = `$${perPersonTotal.toFixed(2)}`

  

}
function increase(){
    
        peoples += 1
        peopleNo.innerText = peoples

        calculatBill()
    
}
function decrease(){
    
    if(peoples <= 0){
        return
    }
    peoples -= 1
    peopleNo.innerText = peoples

    calculatBill()

}
