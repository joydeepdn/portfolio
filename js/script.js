const links = document.getElementById('links');
const openBtn = document.getElementById('hamburger');
const main = document.getElementById('main-div');

function openNav() {

  if (screen.width <= 600) {
    links.style.width = "300px";
  }
  else if(screen.width > 600){
    links.style.width = '500px'
  }
  if(openNav){
    main.style.opacity = 0.5;
  }
}
if(links.style.width > '0px'){
  const eBody = document.body;
  eBody.style.opa
}

function closeNav() {
  document.getElementById('links').style.width = "0";
  main.style.opacity = 1;
} 

  openBtn.addEventListener('click', function(event){
    openNav();
    event.stopPropagation();
  })

document.addEventListener('click', function (event) {
  if(links.style.width == 0){
    return;
  }
  else{
  if (!links.contains(event.target) && links.style.width !== '0' && screen.width < 1023 ) {
    closeNav();
  }
}
});

window.addEventListener('resize', () => {
  const links = document.getElementById('links');
  if (window.innerWidth > 600) {
    links.style.width = "";
  }
});
