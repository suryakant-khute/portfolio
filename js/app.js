
// slider 
$(document).ready(function () {

  $('.slider').slick({
    arrows:false,
    dots:true,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  });
});

// navbar 
const first = document.querySelector('.nav-list');

const second = document.querySelector('#btn1');

second.addEventListener('click', function(){
  first.classList.add('open')
});

const third = document.querySelector('#btn2');
third.addEventListener('click',function(){
  first.classList.remove('open');
});



