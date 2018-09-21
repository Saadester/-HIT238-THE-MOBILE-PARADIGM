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

     // Create an array for list items to be stored for local storage
     let itemsArray;
     if (localStorage.getItem('items') === null) {
       itemsArray = [];
     } else {
       itemsArray = JSON.parse(localStorage.getItem('items'));
     }
     // Create an array for checked list items to be stored for local storage
     let checkedArray;
     if (localStorage.getItem('checked') === null) {
       checkedArray = [];
     } else {
       checkedArray = JSON.parse(localStorage.getItem('checked'));
     }

     // Creates error message for when the input is empty
     const errorMessage = document.createElement('p');
     mainForm.appendChild(errorMessage);

     // Function to set list items to local storage
     const setLocalStorage = (key, array) => {
       return localStorage.setItem(key, JSON.stringify(array));
     }
