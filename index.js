const links = document.getElementById('links')
const openButton = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close-button')

function myFunction(){
  links.style.display = 'block';
  closeBtn.style.display = 'block';
  openButton.style.display = 'none'
}
function closeButton(){
  links.style.display = 'none';
  openButton.style.display = 'block';
  closeBtn.style.display = 'none';
}