
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            if (entry.target.id == 'right-section') {
                entry.target.classList.add('animate__bounceInDown')
                observer.unobserve(entry.target)
            }
            else if (entry.target.id == 'about-me-para') {
                if (screen.width > 1023) {
                    entry.target.classList.add('animate__flipInX', 'animate__delay-1.5s');
                }
                else if (screen.width < 1023) {
                    entry.target.classList.add('animate__fadeIn', 'animate__delay-1.7s')
                }
            }
            else if (entry.target.id == 'technologies-list') {
                entry.target.classList.add('animate__fadeIn', 'animate__delay-1.7s')
            }
            else if (entry.target.id == 'contact-form' || entry.target.id == 'contact-links-section') {
                entry.target.classList.add('animate__fadeIn');
            }
            else if (entry.target.id == 'contact-para') {
                entry.target.classList.add('animate__flipInX');
            }
        }
        else {
            entry.target.classList.remove(
                'animate__animated',
                'animate__flipInX',
                'animate__fadeIn',
                'animate__fadeInDownBig',
                'animate__bounceInDown'
            );
        }
    })
}, {
    threshold: 0.7
})
const elements = document.querySelectorAll(
    '#about-me-para,#technologies-list, #right-section, #contact-form, #contact-links-section, #contact-para'
);
elements.forEach(elements => observer.observe(elements));


