
window.onload = () => {
    const righSection = document.getElementById('right-section');
    const leftSection = document.getElementById('left-section');
    const aboutMe = document.getElementById('about-me');

    if(leftSection && screen.width > 600){
    leftSection.classList.add('animate__animated', 'animate__bounceInDown');
    }
    else if(screen.width < 600){
    righSection.classList.add('animate__animated', 'animate__bounceInDown')
    }
};

