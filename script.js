import { CountUp } from './counterJs/dist/countUp.min.js';

// DOM
let body = document.querySelector('body')
let hamburgerIcon = document.querySelector('.mobile-menu-div')
let mobileMenuItems = document.querySelector('.mobile-menu-items')
let num1 = document.getElementById('number-1')
let num2 = document.getElementById('number-2')
let num3 = document.getElementById('number-3')

// Mobile menu
hamburgerIcon.addEventListener('click', () => {
    body.classList.toggle('stop-scroll')
    mobileMenuItems.classList.toggle('open')
   
    for (let i = 0; i < 3; i++) {
        hamburgerIcon.children[i].classList.toggle('open')
    }
})

mobileMenuItems.addEventListener('click', () => {
    body.classList.toggle('stop-scroll')
    mobileMenuItems.classList.toggle('open')

    for (let i = 0; i < 3; i++) {
        hamburgerIcon.children[i].classList.toggle('open')
    }
})

// Counter
function counter(num) {
    if(num == num1) {
        const countUp4 = new CountUp(num, 2500, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    } else if(num == num2) {
        const countUp4 = new CountUp(num, 5000, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    } else if(num == num3) {
        const countUp4 = new CountUp(num, 170, { enableScrollSpy: true, useGrouping: false });
        countUp4.handleScroll();
    }
}
window.onload = counter(num1)
window.onload = counter(num2)
window.onload = counter(num3)