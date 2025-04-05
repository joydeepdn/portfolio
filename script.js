
function openNav(){
document.getElementById('links').style.width = "230px";
}
function closeNav(){
document.getElementById('links').style.width = "0";
}
window.addEventListener('resize', () => {
  const links = document.getElementById('links');
  if (window.innerWidth > 600) { 
    links.style.width = "";
  }
});


emailjs.init("FbaRVh8RN_B7fUT-u"); 

const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_zaou1qi';
   const templateID = 'template_g321nvg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Thank You for your message!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});
