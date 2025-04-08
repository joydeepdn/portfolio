const links = document.getElementById('links');
const openBtn = document.getElementById('hamburger');

function openNav() {

  if (screen.width <= 600) {
    links.style.width = "300px";
  }
  else if (screen.width > 600) {
    links.style.width = '500px';
  }
}
if(links.style.width > '0px'){
  const eBody = document.body;
  eBody.style.opa
}

function closeNav() {
  document.getElementById('links').style.width = "0";
}

  openBtn.addEventListener('click', function(event){
    openNav();
    event.stopPropagation();
  })

document.addEventListener('click', function (event) {
  if (!links.contains(event.target) && links.style.width !== '0' ) {
    closeNav();
  }
});

window.addEventListener('resize', () => {
  const links = document.getElementById('links');
  if (window.innerWidth > 600) {
    links.style.width = "";
  }
});
