function clock() {
  // Function to display the current time in 12-hour format with AM/PM
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";

  if (hrs == 0) hrs = 12;
  if (hrs > 12) {
    hrs -= 12;
    period = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs; // Add leading zero if hours is less than 10
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;
  let time = `${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
}
clock(); // Call the clock function to start the clock
