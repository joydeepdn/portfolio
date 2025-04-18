const links = document.getElementById('links');
const openBtn = document.getElementById('hamburger');
const main = document.getElementById('main-div');
const closeBtn = document.getElementById('close-button')
const toggleBtn = document.getElementById('toggle-button');
const sun = document.getElementById('sun')
const moon = document.getElementById('moon');
const body = document.body;
const myNav = document.getElementById('mynav');



function openNav() {
  openBtn.style.display = 'none'
  closeBtn.style.display = 'block'
  main.style.opacity = 0.5;

  if (screen.width <= 600) {
    links.style.width = "250px";
  }
  else if (screen.availWidth > 600) {
    links.style.width = '500px'
  }
  if(body.classList.contains('dark-mode')){
    main.style.opacity = 0.7;
  }
}

function closeNav() {
  openBtn.style.display = 'block'
  closeBtn.style.display = 'none'
  document.getElementById('links').style.width = "0";
  main.style.opacity = 1;
}

openBtn.addEventListener('click', function (event) {
  openNav();
  event.stopPropagation();
})

document.addEventListener('click', function (event) {
  if (links.style.width == 0) {
    return;
  }
  else {
    if (!myNav.contains(event.target) && !links.contains(event.target) && links.style.width !== '0' && screen.width < 1023) {
      closeNav();
    }
  }
});

window.addEventListener('resize', () => {

  main.style.opacity = '1';

  if (window.innerWidth > 1023) {
    links.style.width = "";
    openBtn.style.display = 'none';
    closeBtn.style.display = 'none';
  }
  else if (screen.width <= 1024) {
    openBtn.style.display = 'block';
  }

  if (closeBtn.style.display == 'block') {
    openBtn.style.display = 'none';
  }
  if (window.innerWidth > 600 && links.style.width > '0px') {
    links.style.width = '500px'
  }
});

toggleBtn.addEventListener('click', () =>{

  body.classList.toggle('dark-mode')

  if(body.classList.contains('dark-mode')){
    sun.style.display = 'none';
    moon.style.display = 'block'
    localStorage.setItem('dark-Mode', 'enabled');
  }
  else if(!body.classList.contains('dark-mode')){
     sun.style.display = 'block';
    moon.style.display = 'none'
    localStorage.setItem('dark-mode', 'disabled')
  }
})
