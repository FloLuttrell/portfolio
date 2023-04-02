'use strict';

let btn = document.querySelector('#btn');

function display() {
    console.log('It was clicked!');
}

btn.addEventListener('click', display);


let month = document.querySelector('#month');
function monthChange() {
    const element = document.getElementById("month-list");
    element.classList.add("visible");
    console.log('click')
}
month.addEventListener('click', monthChange);

let activeMonth = document.querySelectorAll('.month-list > div');
for (const month of activeMonth) {
    month.addEventListener('click', monthListChange);
}
function monthListChange(event) {
    let element = document.querySelector('month')
    let colorMonth = document.querySelectorAll('.months');
    for (let i = 0; i < colorMonth.length; i++) {
        colorMonth[i].style.backgroundColor = "#d99ba5";
    }
    month.textContent = event.target.textContent;
    event.target.style.backgroundColor = '#9b7ebd';

}

let day = document.querySelector('#day');
let activeDay = document.querySelectorAll('.container > div');
for (const day of activeDay) {
    day.addEventListener('click', dayChange);
}
function dayChange(event) {
    let colorDays = document.querySelectorAll('.day');
    for (let i = 0; i < colorDays.length; i++) {
        colorDays[i].style.backgroundColor = "#d99ba5";
    }
    day.textContent = event.target.textContent;
    event.target.style.backgroundColor = '#9b7ebd';
}

