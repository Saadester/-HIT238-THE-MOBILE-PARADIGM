document.addEventListener('DOMContentLoaded', () => {
  const mainForm = document.querySelector('#main-form');
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button');
  const ul = document.querySelector('.main ul');
  const input = form.querySelector('input');
  const clearButton = mainForm.querySelector('#clear-button');

  // Function to display time on screen
   const displayClock = () => {
     const timeDate = new Date();
     const clock = document.querySelector("#clock");
     const date = document.querySelector('#date');

     let hours = timeDate.getHours() % 12;
     let minutes = timeDate.getMinutes();
     let dayOrNight = '';

     if (hours.toString().length < 2) {
       hours = '0' + hours;
     }

     if (minutes.toString().length < 2) {
       minutes = '0' + minutes;
     }

     if (timeDate.getHours() <= 12) {
       dayOrNight = 'AM';
     } else {
       dayOrNight = 'PM';
     }

     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const today = days[timeDate.getDay()];

     const clockOutput = hours + ' : ' + minutes + ' ' + dayOrNight;
     const dateOutput = 'Add task for ' + today;

     clock.textContent = clockOutput;
     date.textContent = dateOutput;
   }

   window.onload = clockFunction = () => {
     displayClock();
     setInterval(displayClock, 1000)
   }
