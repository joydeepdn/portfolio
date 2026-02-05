
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            if (entry.target.id == 'right-section') {
                entry.target.classList.add('animate__bounceInDown')
                observer.unobserve(entry.target)
            }
            else if (entry.target.id == 'about-me-para') {
                entry.target.classList.add('animate__fadeIn', 'animate__delay-1.8s');
            }
        }
        else {
            entry.target.classList.remove(
                'animate__fadeIn',
                'animate__bounceInDown',
            );
        }
    })
}, {
    threshold: 0.7
})
const elements = document.querySelectorAll(
    '#about-me-para, #right-section, #services-lists'
);
elements.forEach(elements => observer.observe(elements));

var typo = new Typed('.auto-type', {

    strings: ['Frontend Developer', 'Backend Developer', 'Subject Matter Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

