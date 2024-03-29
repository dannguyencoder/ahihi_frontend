/* ==== nav mobile */
const hamburger = document.querySelector('#hamburger');
const navMobile = document.querySelector('#nav-mobile');
console.log(navMobile);
const nav = navMobile.querySelector('nav');
hamburger.addEventListener('click', function() {
    nav.classList.add('slideInLeft');
    nav.classList.remove('slideOutLeft');

    navMobile.classList.remove('hidden');
});

const overlay = navMobile.querySelector('.overlay');
overlay.addEventListener('click', function () {
    nav.classList.remove('slideInLeft');
    nav.classList.add('slideOutLeft');

    setTimeout(function () {
        navMobile.classList.add('hidden');
    }, 1000);
});



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        dist: 0,
        padding: 100,
        fullWidth: true,
    });
});

