let stars1 = document.getElementById('stars1');
let moon = document.getElementById('moon');
let mount1 = document.getElementById('mount1');
let mount2 = document.getElementById('mount2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Website = document.querySelector('.Website');
let mout3 = document.getElementById('mout3'); 

let ticking = false;

function updateParallax() {
    let value = window.scrollY;
    stars1.style.transform = `translateX(${value * 0.25}px)`; 
    moon.style.transform = `translateY(${value * 3}px)`;
    mount1.style.transform = `translateY(${value * 0.8}px)`;
    mount2.style.transform = `translateY(${value * 0.7}px)`;
    river.style.transform = `translateY(${value * 0.6}px)`;
    boat.style.transform = `translateY(${value * 0.6}px) translateX(${value * 4}px)`;
    mout3.style.transform = `translateY(${value * 0.3}px)`;

    let moveDown = value * 1.5; 
    let newSize = 30 + (value * 0.5);
    
    Website.style.transform = `translateX(-50%) translateY(${moveDown}px)`;
    Website.style.fontSize = newSize + 'px';

    
    if (value >= 127) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    } else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }

    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});


updateParallax();


function toggleMenu() {
    const menu = document.querySelector('.navigation');
    const toggle = document.querySelector('.toggle');

    menu.classList.toggle('active');
    toggle.classList.toggle('active')
}



