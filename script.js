let numberOfPeople = document.getElementById('numberOfPeople')
let billTotal = document.getElementById('billTotalInput')
let tip = document.getElementById('tipInput')
let total = document.getElementById('perPersonTotal')
const calculateBill = () => {
    // console.log(billTotal.value + 2)
    // console.log(billTotal.innerText + '2') 
    let final = ((Number(billTotal.value) + (Number(billTotal.value) * Number(tip.value)/100)))/numberOfPeople.innerText
    // console.log(final)
    total.innerText = `$${final.toFixed(2)}`
}
const increasePeople = () => {
    numberOfPeople.innerText++
    calculateBill()
}
const decreasePeople = () => {
    if(numberOfPeople.innerText > 1){
        numberOfPeople.innerText--
        calculateBill()

    }
    
}