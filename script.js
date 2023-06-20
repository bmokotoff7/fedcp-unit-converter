/* Used for conversion and app functionality */
const numberInputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const lengthConversionEl = document.getElementById("length-conversion")
const volumeConversionEl = document.getElementById("volume-conversion")
const massConversionEl = document.getElementById("mass-conversion")

/* Used for styling (light and dark modes) */
const themeBtn = document.getElementById("theme-btn")
const conversionCards = document.querySelectorAll(".conversion-card")
const conversionHeadingEl = document.querySelectorAll(".conversion-heading")
const conversionDataEl = document.querySelectorAll(".conversion-data")
let currentTheme = "light"
const themeFromLocalStorage = localStorage.getItem("currentTheme")

if (themeFromLocalStorage) {
    currentTheme = themeFromLocalStorage
    setThemeOnStartup()
}

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

themeBtn.addEventListener("click", function() {
    if (currentTheme === "light") {
        setDarkMode()
    }
    else if (currentTheme === "dark") {
        setLightMode()
    }
})

/* Sets the page theme on startup */
function setThemeOnStartup() {
    if (currentTheme === "light") {
        setLightMode()
    }
    else if (currentTheme === "dark") {
        setDarkMode()
    }
}

/* Set light mode. Theme will persist upon refreshing/relaunching page. */
function setLightMode() {
    currentTheme = "light"
    localStorage.setItem("currentTheme", "light")
    document.body.style.background = "#F4F4F4"
    conversionCards.forEach(card => {
        card.style.background = "white";
    })
    conversionHeadingEl.forEach(heading => {
        heading.style.color = "#5A537B";
    })
    conversionDataEl.forEach(data => {
        data.style.color = "#353535"; 
    })
    themeBtn.style.color = "#3D3D3D"
    themeBtn.style.background = "white"
    themeBtn.textContent = "Switch to Dark Mode"
}

/* Set dark mode. Theme will persist upon refreshing/relaunching page. */
function setDarkMode() {
    currentTheme = "dark"
    localStorage.setItem("currentTheme", "dark")
    document.body.style.background = "#1F2937";
    conversionCards.forEach(card => {
        card.style.background = "#273549";
    })
    conversionHeadingEl.forEach(heading => {
        heading.style.color = "#CCC1FF";
    })
    conversionDataEl.forEach(data => {
        data.style.color = "white"; 
    })
    themeBtn.style.color = "white"
    themeBtn.style.background = "#273549"
    themeBtn.textContent = "Switch to Light Mode"
}