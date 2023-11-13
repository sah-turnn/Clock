let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');;
let seconds = document.getElementById('seconds');

let months = document.getElementById('months');
let days = document.getElementById('day');
let year = document.getElementById('hour');

function setDate() {
    const now = new Date();
    const mm = now.getMonth();
    const dd = now.getDate();
    const yyyy = now.getFullYear();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();
    const monthName = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    // Adjust hours for display (12-hour format)
    const displayHours = (hrs > 12) ? hrs - 12 : hrs;
    
    // Pad seconds and minutes with leading zeros if needed
    const paddedSecs = String(secs);
    const paddedMins = String(mins);

    // Update HTML elements
    hours.innerHTML = displayHours;
    seconds.innerHTML = paddedSecs;
    minutes.innerHTML = paddedMins;
    months.innerHTML = monthName[mm];
    days.innerHTML = dd;
    year.innerHTML = yyyy;
}

setInterval(setDate, 1000);
setDate(); // Call setDate once to display the initial
