
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
            else if (entry.target.id == 'about-me') {
                entry.target.classList.add('animate__bounceIn','animate__delay-1.5s');
            }
            else if (entry.target.id == 'technologies-list') {
                entry.target.classList.add('animate__fadeIn','animate__delay-1.7s')
            }
        }
        else {
            entry.target.classList.remove('animate__animated', 'animate__bounceIn','animate__fadeIn','animate__bounceInDown');
        }
    })
}, {
    threshold: 0.7
})
const elements = document.querySelectorAll('#about-me, #technologies-list, #right-section');
elements.forEach(elements => observer.observe(elements));


