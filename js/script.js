const links = document.getElementById('links');
const navLinks = document.getElementById('nav-links')
const openBtn = document.getElementById('hamburger');
const main = document.getElementById('main-div');
const closeBtn = document.getElementById('close-button')
const toggleBtn = document.getElementById('toggle-button');
const sun = document.getElementById('sun')
const moon = document.getElementById('moon');
const body = document.body;
const myNav = document.getElementById('mynav');
const theme = localStorage.getItem('theme')


function openNav() {
  if (window.innerWidth <= 600) {
    links.classList.add('open')
    openBtn.classList.add('hidden')
    closeBtn.classList.add('visible')
  }
}

function closeNav() {
  links.classList.remove('open');
  openBtn.classList.remove('hidden');
  closeBtn.classList.remove('visible');
}
document.addEventListener('click', function (event) {
  if (!myNav.contains(event.target) && !links.contains(event.target)) {
      closeNav();
    }
});

toggleBtn.addEventListener('click', () => {

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    sun.style.display = 'none';
    moon.style.display = 'block'
    localStorage.setItem('theme', 'dark-theme')
  }
  else if (!body.classList.contains('dark-mode')) {
    sun.style.display = 'block';
    moon.style.display = 'none'
    localStorage.setItem('theme', 'light-theme')
  }
})

window.addEventListener('DOMContentLoaded', () => {
  if (theme === 'dark-theme') {
    body.classList.add('dark-mode')
    sun.style.display = 'none';
    moon.style.display = 'block'
  }
  else {
    localStorage.setItem('theme', 'light-theme')
    body.classList.remove('dark-mode')
    sun.style.display = 'block';
    moon.style.display = 'none'
  }
})
