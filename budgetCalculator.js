const button = document.getElementById('calculateBudget')
const space = document.getElementById('budgetResults')




button.addEventListener('click', function(){

let inputOne = prompt("Please enter your total monthly income (without commas)")
let inputTwo = prompt("Please enter your estimated monthly expenses")
let inputThree = prompt("Please enter the number of months to project the budget for.")






let calcOne = inputOne - inputTwo
let calcTwo = calcOne * inputThree


if(calcOne < 0){
    alert("You are spending more than you are earning")
}

if(calcOne < 0){
    newParagraphSix = document.createElement('p')
    newParagraphSix.textContent = "Warning: Spending Exceeds Income!"
    space.appendChild(newParagraphSix)
}

newParagraphOne = document.createElement('p')
newParagraphOne.textContent = "Monthly Income: " + inputOne

newParagraphTwo = document.createElement('p')
newParagraphTwo.textContent = "Monthly Expenses: " + inputTwo

newParagraphThree = document.createElement('p')
newParagraphThree.textContent = "Monthly Savings: " + calcOne.toFixed(2)

newParagraphFour = document.createElement('p')
newParagraphFour.textContent = "Total Projected Savings: " + calcTwo.toFixed(2)







space.appendChild(newParagraphOne)
space.appendChild(newParagraphTwo)
space.appendChild(newParagraphThree)
space.appendChild(newParagraphFour)


for(let i = 0; i < inputThree; i++){
    newParagraphFive = document.createElement('p')
    let calcThree = calcOne + calcOne * i
    newParagraphFive.textContent = 'Month ' + (i + 1) + ": " + calcThree.toFixed(2)
    space.appendChild(newParagraphFive)
}


try{
    if(isNaN(inputOne) || isNaN(inputTwo) || isNaN(inputThree)){
        throw new Error("Can not have nonnumbers in your program.")
    }
} catch(error){
    alert("Error you may not have nonnumbers in your program: " + error.message)
}




    

    

    




})
