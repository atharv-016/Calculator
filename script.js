// CALCULATOR PROGRAM

document.addEventListener("DOMContentLoaded", function () {
    window.appendToDisplay = function(value) {
        document.getElementById("display").value += value;
    }
    window.clearDisplay = function() {
        document.getElementById("display").value = "";
    }
    window.deleteLastDigit = function() {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }
    window.calculateResult = function() {
        try {
            document.getElementById("display").value = eval(document.getElementById("display").value);
        } catch {
            document.getElementById("display").value = "Error";
        }
    }
    window.setMode = function(mode) {
        document.querySelectorAll(".mode").forEach(el => el.style.display = "none");
        document.getElementById(mode).style.display = "block";
    }
    window.convertTemperature = function() {
        let temp = parseFloat(document.getElementById("tempInput").value);
        let celsius = (temp - 32) * 5/9;
        alert(`Celsius: ${celsius.toFixed(2)}°C`);
    }
    window.calculateDateDifference = function() {
        let date1 = new Date(document.getElementById("date1").value);
        let date2 = new Date(document.getElementById("date2").value);
        let diffMilliseconds = Math.abs(date2 - date1);
        let years = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 30));
        let days = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
        let weeks = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 7));
        let hours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
        let minutes = Math.floor(diffMilliseconds / (1000 * 60));
        let seconds = Math.floor(diffMilliseconds / 1000);
        
        document.getElementById("displayDate").value = 
            `Years: ${years}, Months: ${months}, Days: ${days}, Weeks: ${weeks}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
    }
    window.toggleMoreOptions = function() {
        let panel = document.getElementById("more-options");
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    }
});