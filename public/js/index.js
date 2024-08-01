// active menu
window.onload = function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const homeLink = document.getElementById('home-link');
    homeLink.classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
};

// navbar scroll
let lastScrollTop = 0;
const aside = document.querySelector('.aside');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        aside.style.transform = 'translate(-50%, -100%)';
    } else {
        aside.style.transform = 'translateX(-50%)';
    }
    lastScrollTop = scrollTop;
});