
// window.onload = () => {

//     const righSection = document.getElementById('right-section');
//     const leftSection = document.getElementById('left-section');

//     if (leftSection && screen.width > 600) {
//         leftSection.classList.add('animate__animated', 'animate__bounceInDown');
//     }
//     else if (screen.width < 600) {
//         righSection.classList.add('animate__animated', 'animate__bounceInDown')
//     }
// };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            if(entry.target.id == 'right-section'){
                entry.target.classList.add('animate__bounceInDown')
                observer.unobserve(entry.target)
            }
            else if (entry.target.id == 'about-me-para') {
                entry.target.classList.add('animate__bounceIn','animate__delay-1.5s');
            }
            else if (entry.target.id == 'technologies-list') {
                entry.target.classList.add('animate__fadeIn','animate__delay-1.7s')
            }
            else if(entry.target.id == 'contact-form' || entry.target.id == 'contact-links-section'){
                entry.target.classList.add('animate__fadeIn');
            }
            else if(entry.target.id == 'contact-para' || entry.classList.id == 'contact-links-1'){
                entry.target.classList.add('animate__bounceIn');
            }
        }
        else {
            entry.target.classList.remove('animate__animated', 'animate__bounceIn','animate__fadeIn','animate__bounceInDown');
        }
    })
}, {
    threshold: 0.7
})
const elements = document.querySelectorAll('#about-me-para, #technologies-list, #right-section, #contact-form, #contact-links-section, #contact-para, #contact-links-1');
elements.forEach(elements => observer.observe(elements));


