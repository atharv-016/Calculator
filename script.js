// JavaScript (index.js)

// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last entered digit
function deleteLastDigit() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the entered expression
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Function to toggle the more options panel
function toggleMoreOptions() {
    let moreOptions = document.getElementById("more-options");
    moreOptions.style.display = (moreOptions.style.display === "none" || moreOptions.style.display === "") ? "block" : "none";
}

// Function to set different calculator modes
function setMode(mode) {
    document.querySelectorAll(".mode").forEach(el => el.style.display = "none");
    document.getElementById(mode).style.display = "block";
}

// Function to calculate power
function calculatePower() {
    let display = document.getElementById("display");
    display.value = Math.pow(parseFloat(display.value), 2);
}

// Function to calculate cube root
function calculateCubeRoot() {
    let display = document.getElementById("display");
    display.value = Math.cbrt(parseFloat(display.value));
}

// Function to calculate factorial
function calculateFactorial() {
    let display = document.getElementById("display");
    let num = parseInt(display.value);
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    display.value = fact;
}

// Function to calculate trigonometric values
function calculateSin() {
    let display = document.getElementById("display");
    display.value = Math.sin(parseFloat(display.value) * (Math.PI / 180));
}

function calculateCos() {
    let display = document.getElementById("display");
    display.value = Math.cos(parseFloat(display.value) * (Math.PI / 180));
}

function calculateTan() {
    let display = document.getElementById("display");
    display.value = Math.tan(parseFloat(display.value) * (Math.PI / 180));
}

// Function to convert temperature (Celsius to Fahrenheit and vice versa)
function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let convertedTemp = (tempInput * 9/5) + 32;
    alert("Converted Temperature: " + convertedTemp + " °F");
}

// Function to calculate the difference between two dates
function calculateDateDifference() {
    let date1 = new Date(document.getElementById("date1").value);
    let date2 = new Date(document.getElementById("date2").value);
    let difference = Math.abs(date2 - date1);
    let days = difference / (1000 * 60 * 60 * 24);
    document.getElementById("displayDate").value = days + " days";

let music = document.getElementById("background-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

