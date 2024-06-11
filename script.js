const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "-", "+", "=", ",", ":", ";", "<", ">", ".", "?", "/"];


const generatedPasswd = document.getElementById("passwd-output")
const rangeEl = document.getElementById("range")
const sliderNumberEl = document.getElementById("slider-number")

function updateSlider() {
    sliderNumberEl.textContent = rangeEl.value
}

function generatePasswd() {

    let password = ""
    const length = rangeEl.value

    while (length > password.length) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    // @ts-ignore
    generatedPasswd.value = password
}

function copyPassword(){
    // @ts-ignore
    generatedPasswd.select()
    navigator.clipboard.writeText(generatedPasswd.value);
    
}