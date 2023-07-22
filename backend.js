// Coding for navigation bar while scrolling{

// Takes the current scrolling position and stores it in a variable
var prevScrollPos = Window.pageYOffset;
const defaultScrollPos = 10;

// Function to compair the scrolling positions
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > defaultScrollPos) {
    document.querySelector(".nav-bar").classList.add("contaner2-dimmer");
    document.querySelector(".nav-bar").classList.add("visible");
  }
  if (prevScrollPos <= defaultScrollPos) {
    document.querySelector(".nav-bar").classList.remove("contaner2-dimmer");
    document.querySelector(".nav-bar").classList.remove("visible");
  }

  prevScrollPos = currentScrollPos;
};

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coding for countdown
// Set the date to countdown to (year, month , day, hour, minute, second)
var countdownDate = new Date("2023-12-08T11:29:59");

// Update the countdown every second
var countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining between now and the countdown date
  var timeRemaining = countdownDate - now;

  // Check if the countdown date has passed
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown-grid").innerHTML = "Countdown expired";
    return;
  }

  // Calculate the days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the grid
  // Display days in column 1
  document.getElementById("countdown-days").innerHTML = days + "<br> Days ";

  // Display days in column 1
  document.getElementById("countdown-hours").innerHTML = hours + "<br> Hours ";

  // Display days in column 1
  document.getElementById("countdown-minutes").innerHTML =
    minutes + "<br> Minutes ";

  // Display days in column 1
  document.getElementById("countdown-seconds").innerHTML =
    seconds + "<br> Seconds ";
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Button click
function goToAnotherPage() {
  window.location.href = "http://mentztobe.glide.page";
}
