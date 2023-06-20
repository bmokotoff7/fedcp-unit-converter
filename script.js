// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const numberInputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const lengthConversionEl = document.getElementById("length-conversion")
const volumeConversionEl = document.getElementById("volume-conversion")
const massConversionEl = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", function() {
    convert(numberInputEl.textContent)
})

/* Calculates all conversions with the given [inputValue] and updates the conversion cards */
function convert(inputValue) {
    if (Number(inputValue) != NaN) {
        let data = Number(inputValue)
        if (data === 1) {
            lengthConversionEl.textContent = `${data} meter = ${convertMetersToFeet(data)} feet | ${data} foot = ${convertFeetToMeters(data)} meters`
            volumeConversionEl.textContent = `${data} liter = ${convertLitersToGallons(data)} gallons | ${data} gallon = ${convertGallonsToLiters(data)} liters`
            massConversionEl.textContent = `${data} kilo = ${convertKilosToPounds(data)} pounds | ${data} pound = ${convertPoundsToKilos(data)} kilos`
        }
        else {
            lengthConversionEl.textContent = `${data} meters = ${convertMetersToFeet(data)} feet | ${data} feet = ${convertFeetToMeters(data)} meters`
            volumeConversionEl.textContent = `${data} liters = ${convertLitersToGallons(data)} gallons | ${data} gallons = ${convertGallonsToLiters(data)} liters`
            massConversionEl.textContent = `${data} kilos = ${convertKilosToPounds(data)} pounds | ${data} pounds = ${convertPoundsToKilos(data)} kilos`
        }
    }
}

/* Converts [data] meters to meters */
function convertMetersToFeet(data) {
    let conversion = (data * 3.281).toFixed(3)
    return conversion
}

/* Converts [data] feet to meters */
function convertFeetToMeters(data) {
    let conversion = (data / 3.281).toFixed(3)
    return conversion
}

/* Converts [data] liters to gallons */
function convertLitersToGallons(data) {
    let conversion = (data * 0.264).toFixed(3)
    return conversion
}

/* Converts [data] gallons to liters */
function convertGallonsToLiters(data) {
    let conversion = (data / 0.264).toFixed(3)
    return conversion
}

/* Converts [data] kilograms to pounds */
function convertKilosToPounds(data) {
    let conversion = (data * 2.204).toFixed(3)
    return conversion
}

/* Converts [data] pounds to kilograms */
function convertPoundsToKilos(data) {
    let conversion = (data / 2.204).toFixed(3)
    return conversion
}

/* Double click to clear number input */
numberInputEl.addEventListener("dblclick", function() {
    numberInputEl.textContent = ""
})

/* Set light mode. Theme will persist upon refreshing/relaunching page. */
function setLightMode()

/* Set dark mode. Theme will persist upon refreshing/relaunching page. */