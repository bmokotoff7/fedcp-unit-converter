// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

// on double click, clear number input

const numberInputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const lengthConversionEl = document.getElementById("length-conversion")
const volumeConversionEl = document.getElementById("volume-conversion")
const massConversionEl = document.getElementById("mass-conversion")

numberInputEl.addEventListener("dblclick", function() {
    numberInputEl.textContent = ""
})

