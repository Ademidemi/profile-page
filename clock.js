function updateUTCTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    const dateElement = document.getElementById(' weekday');
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdays[now.getUTCDay()];

    console.log(weekday)
   

    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    const timeString = `${weekday }, ${hours}:${minutes}:${seconds} UTC`;
    clockElement.textContent = timeString;

    const dateString = `${weekday }`;
    dateElement.textContent = dateString;
}

// Initial call to display the time immediately
updateUTCTime();
    
// Update the time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);