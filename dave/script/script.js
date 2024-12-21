const nav = document.querySelector('.nav-toggle');

nav.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});