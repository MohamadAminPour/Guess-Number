'use strict'

let againBtn = document.querySelector('.againBtn')
let number = document.querySelector('.number')
let input = document.querySelector('.input')
let check = document.querySelector('.check')
let statusNum = document.querySelector('.status')
let Limit = document.querySelector('.Limit')
let scoreNum = document.querySelector('.score')

let randomNum = Math.floor(Math.random() * 21)

function checked() {
    if (input.value === '') {
        statusNum.innerHTML = '📛 No Number!'
    }
    if (Number(Limit.innerHTML) <= 0) {
        statusNum.innerHTML = '💥 You loz!'
        number.innerHTML = `The number was ${randomNum}`
    }
    else {
        if (Number(input.value) === randomNum) {
            number.innerHTML = input.value
            statusNum.innerHTML = '✔️ Correct Number'
            number.style.color = 'var(--green)'
            scoreNum.innerHTML++
        }
        else if (Number(input.value) > randomNum) {
            statusNum.innerHTML = '📈 Too high!'
            Limit.innerHTML--
        }
        else if (Number(input.value) < randomNum) {
            statusNum.innerHTML = '📈 Too Low!'
            Limit.innerHTML--
        }
    }
}

againBtn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * 21)
    Limit.innerHTML = '20'
    statusNum.innerHTML = 'Status!'
    input.value=''
    number.innerHTML='?'
    number.style.color = 'white'
    input.focus()
})
window.addEventListener('load', () => {
    input.focus()
})

check.addEventListener('click', checked)





